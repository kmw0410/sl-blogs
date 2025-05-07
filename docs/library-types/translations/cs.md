# **SLU knihovna: Typy a rozhraní**

The `types` Modul knihovny SLU poskytuje sbírku základního typu 
Definice a rozhraní, která slouží jako základ pro vývoj widgetů. 
Tento modul je navržen na:

* Nabízejte standardizované definice typu používané v ekosystému Seelen UI
* Poskytněte rozhraní pro konzistentní implementaci widgetu
* Povolte typ bezpečnosti napříč vývojem widgetů
* Sloužit jako sdílené smlouvy mezi základní aplikací a widgety

## **Používání**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Klíčové funkce:**

* **Definice typu jádra**: Základní typy používané aplikací Seelen UI
* **Smlouvy o widgetech**: Rozhraní, která musí widgety implementovat pro kompatibilitu
* **Sdílené modely**: Běžné datové struktury používané na celé platformě
* **Typ obslužných programů**: Typy pomocníků pro vývoj widgetů

Tyto typy jsou spotřebovány jak vnitřně aplikací, tak pro vystavení pro 
Externí vývojáři widgetů, aby zajistili konzistenci typu napříč ekosystémem.
