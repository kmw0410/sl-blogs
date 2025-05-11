# **SLU -bibliotek: Typer og grænseflader**

De `types` Modul for SLU -biblioteket giver en samling af væsentlig type
Definitioner og grænseflader, der tjener som grundlaget for widgetudvikling.
Dette modul er designet til:

- Tilbyde standardiserede type definitioner, der bruges i hele Seelen UI
  -økosystemet
- Giv grænseflader til konsistent widget -implementering
- Aktivér type sikkerhed på tværs af widgetudvikling
- Server som fælles kontrakter mellem kerneapplikationen og widgets

## **Brug**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Nøglefunktioner:**

- **Definitioner af kernetype**: Grundlæggende typer brugt af Seelen UI
  -applikationen
- **Widget -kontrakter**: Grænseflader, som widgets skal implementere for
  kompatibilitet
- **Delte modeller**: Fælles datastrukturer, der bruges på tværs af platformen
- **Type værktøjer**: Hjælperstyper til widgetudvikling

Disse typer forbruges både internt af applikationen og udsættes for Eksterne
widgetudviklere for at sikre type konsistens på tværs af økosystemet.
