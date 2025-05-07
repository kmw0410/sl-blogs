# **Biblioteka SLU: typy i interfejsy**

. `types` Moduł biblioteki SLU zapewnia kolekcję niezbędnego typu 
Definicje i interfejsy, które służą jako podstawa rozwoju widżetu. 
Ten moduł jest zaprojektowany do:

* Oferuj znormalizowane definicje typów używane w ekosystemie UIelen UI
* Zapewnij interfejsy do spójnej implementacji widżetu
* Włącz bezpieczeństwo typu w ramach rozwoju widżetu
* Służyć jako wspólne umowy między podstawową aplikacją a widżetami

## **Stosowanie**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Kluczowe funkcje:**

* **Definicje typów podstawowych**: Podstawowe typy używane przez aplikację Seelen UI
* **Umowy widżetu**: Interfejsy, które widżety muszą zaimplementować, aby uzyskać kompatybilność
* **Udostępnione modele**: Wspólne struktury danych używane na platformie
* **Narzędzia typu**: Typy pomocników do rozwoju widżetów

Te typy są konsumowane zarówno wewnętrznie przez zastosowanie, jak i narażone na 
zewnętrzni deweloperzy widżetów, aby zapewnić spójność typu w całym ekosystemie.
