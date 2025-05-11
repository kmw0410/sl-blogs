import type {
  DocNode,
  InterfacePropertyDef,
  TsTypeDef,
} from "jsr:@deno/doc@0.172.0";

function processTypeDefinition(
  def: TsTypeDef,
  opt?: { isUnionMember?: boolean },
): string[] {
  const { isUnionMember } = opt || {};

  if (def.kind === "union") {
    const types = def.union.map((type) => {
      return processTypeDefinition(type, { isUnionMember: true }).join("\n");
    });
    return [types.length > 5 ? types.join("\n\n|  ") : types.join(" | ")];
  }

  if (def.kind === "intersection") {
    const types = def.intersection.map((type) => {
      return processTypeDefinition(type, { isUnionMember: true }).join("\n");
    });
    return [types.length > 5 ? types.join("\n\n&  ") : types.join(" & ")];
  }

  if (def.kind === "typeLiteral") {
    if (isUnionMember) {
      const entries = def.typeLiteral.properties.map((prop) => {
        const value = prop.tsType
          ? processTypeDefinition(prop.tsType, { isUnionMember: true }).join("")
          : "unknown";
        return `${prop.name}: ${value}`;
      });
      return ["{", ...entries.map((entry) => `  ${entry}`), "}"];
    }

    const md = [];
    md.push("## **Properties**:");
    def.typeLiteral.properties.forEach((_prop) => {
      const prop = _prop as InterfacePropertyDef;
      const readonly = prop.readonly ? "readonly " : "";
      const optional = prop.optional ? "?" : "";
      const value = prop.tsType
        ? processTypeDefinition(prop.tsType).join("")
        : "unknown";
      md.push(`### ${readonly}${prop.name}${optional}: ${value}`);

      if (prop.jsDoc) {
        md.push(prop.jsDoc.doc);
      }
    });
    return md;
  }

  if (def.kind === "literal") {
    switch (def.literal.kind) {
      case "string":
      case "bigInt":
        return [`\`"${def.literal.string}"\``];
      case "number":
        return [`\`${def.literal.number}\``];
      case "boolean":
        return [`\`${def.literal.boolean}\``];
      default:
        console.warn("Unmapped literal kind:", def.literal);
    }
    return [];
  }

  if (def.kind === "keyword") {
    return [`\`${def.keyword}\``];
  }

  if (def.kind === "array") {
    return [`\`Array\`<${processTypeDefinition(def.array).join("")}>`];
  }

  if (def.kind === "typeRef") {
    const ref = def.typeRef;
    if (ref.typeName === "JsonValue") {
      return ["`any`"];
    }

    if (ref.typeName === "Array") {
      const params = ref.typeParams
        ?.map((param) => {
          return processTypeDefinition(param).join("");
        })
        .join(", ") || "unknown";
      return [`\`Array\`<${params}>`];
    }

    return [`[\`${ref.typeName}\`](./${ref.typeName})`];
  }

  if (def.kind === "tuple") {
    const params = def.tuple
      .map((param) => {
        return processTypeDefinition(param).join("");
      })
      .join(", ");
    return [`[${params}]`];
  }

  if (def.kind === "parenthesized") {
    return [`(${processTypeDefinition(def.parenthesized).join("")})`];
  }

  if (def.kind === "mapped") {
    const key = def.mappedType.typeParam;
    const keyConstraint = key.constraint
      ? processTypeDefinition(key.constraint).join("")
      : "any";

    const value = def.mappedType.tsType
      ? processTypeDefinition(def.mappedType.tsType, { isUnionMember: true })
        .join("")
      : "unknown";

    const optional = def.mappedType.optional ? "?" : "";
    const readonly = def.mappedType.readonly ? "readonly " : "";

    return [
      `{ ${readonly}[${key.name}: ${keyConstraint}]${optional}: ${value} }`,
    ];
  }

  return [];
}

function processRootNode(folderName: string, nodes: DocNode[]) {
  for (const node of nodes) {
    const md: string[] = [];
    md.push(`# **${node.name}**`);
    // md.push(`**kind**: \`${node.kind}\``);

    const nodeDoc = node.jsDoc?.doc;
    if (nodeDoc) {
      md.push(nodeDoc);
      md.push("");
    }

    if (node.kind !== "typeAlias") {
      continue;
    }

    const typeDef = node.typeAliasDef.tsType;
    const processed = processTypeDefinition(typeDef);
    md.push(...processed);

    Deno.writeTextFileSync(
      `./gen/${folderName}/en/${node.name}.md`,
      md.join("\n"),
    );
  }
}

{
  Deno.removeSync("./gen/types", { recursive: true });
  Deno.removeSync("./gen/lib", { recursive: true });

  Deno.mkdirSync("./gen/types/en", { recursive: true });
  Deno.mkdirSync("./gen/lib/en", { recursive: true });

  const [resTypes, resLib] = await Promise.all([
    fetch(
      "https://raw.githubusercontent.com/Seelen-Inc/slu-lib/refs/heads/master/gen/doc-types.json",
      { cache: "no-cache" },
    ),
    fetch(
      "https://raw.githubusercontent.com/Seelen-Inc/slu-lib/refs/heads/master/gen/doc-lib.json",
      { cache: "no-cache" },
    ),
  ]);

  const docTypes = await resTypes.json();
  processRootNode("types", docTypes.nodes);

  const docLib = await resLib.json();
  processRootNode("lib", docLib.nodes);
}

await new Deno.Command("deno", {
  args: ["fmt"],
}).output();
