# **Seelen UI: Uppsetningaraðferðir og uppfæra rásir**

## **Uppsetningarvalkostir**

### **Microsoft Store (MSIX)**

Sæktu nýjustu útgáfuna frá Microsoft versluninni. Þetta er öruggast
 og notendavænn valkostur, með sjálfvirkum uppfærslum.

*   Kostir:
    *   Sjálfvirkar uppfærslur.
    *   Staðfest og samþykkt af Microsoft.
    *   Mikið öryggi og áreiðanleika.
    *   Ljósútgáfa en .exe uppsetningaraðili vegna þess að þessi útgáfa gerir það ekki
         Inniheldur kembiforrit.
*   Gallar:
    *   Uppfærslur geta tekið 1-3 virka daga að verða samþykktar.
    *   Erfiðara að kemba og tilkynna mál.

***

### **Winget (Msix)**

Settu upp nýjustu útgáfuna með eftirfarandi skipun:

```pwsh
winget install --id Seelen.SeelenUI
```

Sömu kostir og gallar Microsoft verslun með plúsinn af skjótum uppsetningu með
 skipanalína.

***

### \*\*. Exe Installer \*\*

Sæktu Setup.exe uppsetningaraðila af útgáfusíðunni og keyrðu það.

*   Kostir:
    *   Hraðari uppsetning með tafarlausum uppfærslum.
    *   Fær tilkynningar um nýjar útgáfur um leið og þær eru tiltækar.
*   Gallar:
    *   Ekki stafrænt undirritað, sem getur kallað fram vírusvarnarviðvaranir.
    *   Minni létt en MSIX uppsetningarforritið vegna þess að þessi útgáfa inniheldur kembiforrit
         tákn.

## **Uppfæra rásir**

> IndenPendent af uppfærslurásinni Allar útgáfur fá sjálfvirkar uppfærslur,
>  Einnig ef þú notar óstöðuga uppfærslurás mun einnig fá uppfærslur á
>  stöðugri uppfærslurásir, Dæmi: Nightly Take uppfærslur frá nætur en
>  einnig frá beta og losun

### **Slepptu (stöðugt)**

Öruggasta og ráðlagði rásin fyrir alla notendur.

*   Eiginleikar:
    *   Prófað vandlega án mikilvægra galla.
    *   Tilvalið til framleiðslu og daglegrar notkunar.
    *   Fáanlegt í Microsoft Store, Winget, .MSIX og .exe.

### **Beta**

Miðað við notendur sem vilja prófa nýja eiginleika áður en þeir eru opinberlega gefnir út.
 Þessi rás inniheldur betas og sleppir frambjóðendum.

*   Eiginleikar:
    *   Inniheldur nýja eiginleika í prófun.
    *   Gæti verið með minniháttar galla.
    *   Tíðari uppfærslur en stöðug útgáfa.
    *   Aðeins fáanlegt sem .exe á útgáfusíðunni.

### **Að nóttu**

Fyrir háþróaða notendur og verktaki sem vilja fá aðgang að nýjustu breytingum og
 Tilraunaeiginleikar.

*   Eiginleikar:
    *   Inniheldur nýjustu breytingarnar, en ekki rækilega prófaðar.
    *   Getur innihaldið galla eða óunnið eiginleika.
    *   Uppfært daglega eða með öllum verulegum kóðabreytingum.
    *   Aðeins fáanlegt sem .exe á útgáfusíðunni.

Lestu meira um áfram [Seelen ui næstum](./nightly.md)

## **Að fá uppfærslur á Setup.exe vs Msix**

Á MSIX uppfærslum er stjórnað af Microsoft versluninni, en á Setup.exe eru þær
 ekki, svo uppfærslu er með í forritinu sem þetta mun sýna þér a
 Tilkynning þegar uppfærsla er fyrir hendi.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ef þú smellir á tilkynninguna mun það byrja að hlaða niður og setja upp
 Uppfærðu, eftir það mun það endurræsa forritið sjálfkrafa.
