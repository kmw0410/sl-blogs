# **SEELEN UI: Rêbazên sazkirinê û kanalên nûvekirina**

## **Vebijarkên sazkirinê**

### **Microsoft Store (MSIX)**

Guhertoya herî dawî ji Microsoft Store dakêşin. Ev ewle herî ewledar e
 û vebijarka bikarhêner-heval, bi nûvekirinên otomatîk.

*   Pros:
    *   Nûvekirinên otomatîkî.
    *   Ji hêla Microsoft ve hatî pejirandin û pejirandin.
    *   Ewlehî û pêbaweriya bilind.
    *   Guhertoya Lightweighter ji sazker .exe ji ber ku vê guhertoyê nabe
         sembolên debug hene.
*   Cons:
    *   Nûvekirin dibe ku 1-3 rojên karsaziyê were pejirandin.
    *   Zehmet e ku mijaran mijaran bikin û rapor bikin.

***

### **Winget (MSIX)**

Guhertoya herî dawî bi karanîna fermana jêrîn saz bikin:

```pwsh
winget install --id Seelen.SeelenUI
```

Eynî prose û hem jî microsoft-ê bi plusek sazkirinê ya bilez bi riya
 xeta fermandariyê.

***

### \*\*. Exe Installer \*\*

Ji rûpela serbestberdanê sazker sazker.exe dakêşin û wê bisekinin.

*   Pros:
    *   Sazkirina zûtir bi nûvekirinên bilez.
    *   Ji ber ku ew peyda dibin ji bo serbestberdanên nû agahdariyan digirin.
*   Cons:
    *   Ne bi dîjîtal têne îmzekirin, ku dibe ku hişyariya antivirus bizivirin.
    *   Ji sazkerê MSIX kêmtir sivik ji ber ku ev guhertoya debug tê de ye
         sembol.

## **Kanalên nûvekirin**

> Indenpendent of Kanala Nûvekirinê Hemî guhertoyên nûvekirinên otomatîk vedibêje,
>  Di heman demê de eger bikaranîna kanalek nûvekirina unstable jî dê nûvekirinên nûvekirinê bistîne
>  kanalên nûvekirina domdar, mînak: Nûvekirin ji şevê nûvekirinan dîsa bistînin
>  her weha ji beta û berdan

### **Berdan (domdar)**

Kanala herî ewledar û pêşniyazkirî ji bo hemî bikarhêneran.

*   Taybetmendî:
    *   Bi ceribandinên krîtîk re ceribandin.
    *   Ji bo hilberîn û karanîna rojane îdeal e.
    *   Li ser Microsoft Store, Winget, .msix, û .exe heye.

### **Beta**

Armanc li bikarhênerên ku dixwazin taybetmendiyên nû biceribînin berî ku ew bi fermî azad bibin.
 Vê kanalê di nav de betar û berendamên serbestberdanê pêk tê.

*   Taybetmendî:
    *   Taybetmendiyên nû di bin ceribandinê de hene.
    *   Dibe ku bertekên piçûk hebe.
    *   Ji nûvekirina bêhempa bêtir ji nûvekirina domdar.
    *   Tenê wekî .exe li ser rûpelê serbestberdanê peyda dibe.

### **Şevî**

Ji bo bikarhênerên pêşkeftî û pêşdebirên ku dixwazin bigihîjin guhertinên herî dawî û
 taybetmendiyên ezmûnî.

*   Taybetmendî:
    *   Guhertinên herî dawî, lê ne bi tevahî ceribandin.
    *   Dibe ku bugs an taybetmendiyên nediyar hebe.
    *   Rojane an bi her guhertina kodê girîng hatî nûve kirin.
    *   Tenê wekî .exe li ser rûpelê serbestberdanê peyda dibe.

Zêdetir li ser bixwînin [SEELEN UI NIGHLY](./nightly.md)

## **Nûvekirinên li ser Setup.exe vs MSIX nûvekirin**

Li ser nûvekirinên MSIX ji hêla Microsoft Store ve têne rêvebirin, lê li ser setup.exe ew in
 ne, ji ber vê yekê nûvekerek bi serîlêdanê ve tête kirin Ev ê nîşanî we bide
 Dema ku nûvekirinek heye agahdar kirin.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ger hûn li ser agahdariyê bikirtînin ew ê dest bi dakêşandinê bike û saz bike
 Nûvekirin, piştî ku ew ê serlêdan bixweber ji nû ve bike.
