# **Librerija SLU: Referenza tal-API**

Il-modulu API jipprovdi implimentazzjonijiet konkreti u klassijiet ta 'utilità li 
Astratt l-API tal-Applikazzjoni mhux maħduma, li sservi bħala faċċata favur l-iżviluppatur għal 
Integrazzjoni tal-widget.

## **Skop**

* Timplimenta interfaces minn `/types` bi klassijiet lesti għall-użu
* Astratti ta 'kumplessitajiet ta' API ta 'livell baxx
* Jipprovdi metodi ta 'utilità għal operazzjonijiet komuni
* Iservi bħala s-saff ta 'interazzjoni primarja bejn widgets u l-SLU 
  applikazzjoni

## **Użu**

Tista 'tuża l-librerija kif meħtieġ. Hawn eżempju bażiku:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Noti Importanti:**

1. Din il-librerija API taħdem biss meta taħdem fi ħdan eżekuzzjoni ta 'widget ta' Seelen UI 
   ambjent
2. Jippruvaw jużawha f'Node.js jew f'kuntesti standard tal-browser se jitfa ' 
   żbalji
3. Il-widgets li jużaw din l-API jeħtieġ li jaġġornawha sabiex jaħdmu sewwa magħhom 
   L-aħħar verżjoni ta 'Seelen UI
