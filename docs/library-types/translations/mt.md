# **Librerija SLU: Tipi u Interfaces**

Il `types` Modulu tal-librerija SLU jipprovdi ġabra ta 'tip essenzjali 
Definizzjonijiet u interfaces li jservu bħala l-pedament għall-iżvilupp tal-widget. 
Dan il-modulu huwa ddisinjat biex:

* Offerta definizzjonijiet tat-tip standardizzati użati fl-ekosistema ta 'Seelen UI
* Ipprovdi interfaces għal implimentazzjoni konsistenti tal-widget
* Ippermetti s-sigurtà tat-tip fl-iżvilupp tal-widget
* Iservu bħala kuntratti maqsuma bejn l-applikazzjoni ewlenija u l-widgets

## **Użu**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Karatteristiċi ewlenin:**

* **Definizzjonijiet tat-tip tal-qalba**: Tipi fundamentali użati mill-applikazzjoni Seelen UI
* **Kuntratti tal-widget**: Interfaces li l-widgets għandhom jimplimentaw għall-kompatibilità
* **Mudelli maqsuma**: Strutturi ta 'dejta komuni użati madwar il-pjattaforma
* **Utilitajiet tat-tip**: Tipi ta 'għajnuna għall-iżvilupp tal-widget

Dawn it-tipi huma kkunsmati kemm internament mill-applikazzjoni kif ukoll esposti għal 
Żviluppaturi esterni tal-widget biex jiżguraw konsistenza tat-tip fl-ekosistema.
