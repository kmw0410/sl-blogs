# **SEELEN UI: Diegimo metodai ir atnaujinimo kanalai**

## **Diegimo parinktys**

### **„Microsoft Store“ (MSIX)**

Atsisiųskite naujausią versiją iš „Microsoft Store“. Tai yra saugiausia
 ir patogi vartotojui parinktis su automatiniais atnaujinimais.

*   Argumentai:
    *   Automatiniai atnaujinimai.
    *   Patvirtinta ir patvirtinta „Microsoft“.
    *   Aukštas saugumas ir patikimumas.
    *   „Lightwighter“ versija nei .exe montuotojas, nes ši versija nėra
         Apima derinimo simbolius.
*   Trūkumai:
    *   Atnaujinimai gali būti patvirtinti 1-3 darbo dienomis.
    *   Sunkiau suderinti ir pranešti apie problemas.

***

### **Sparnas (MSIX)**

Įdiekite naujausią versiją naudodami šią komandą:

```pwsh
winget install --id Seelen.SeelenUI
```

Tie patys „Microsoft Store“ privalumai ir trūkumai su greito diegimo pliusu per
 Komandinė eilutė.

***

### \*\*. EXE diegėjas \*\*

Atsisiųskite „Setup.exe“ diegimo programą iš puslapio išleidimo ir paleiskite jį.

*   Argumentai:
    *   Greitesnis diegimas su neatidėliotinais atnaujinimais.
    *   Gauna pranešimus apie naujus leidimus, kai tik jie bus prieinami.
*   Trūkumai:
    *   Ne skaitmeniniu būdu pasirašyta, o tai gali sukelti antivirusinius įspėjimus.
    *   Mažiau lengvas nei „MSIX“ diegimo programa, nes ši versija apima derinimą
         simboliai.

## **Atnaujinkite kanalus**

> Nepatenkintas atnaujinimo kanalo visos versijos gauna automatinius atnaujinimus,
>  Taip pat, jei naudojate nestabilų atnaujinimo kanalą
>  Stabilesni atnaujinimo kanalai, pavyzdys: Naktį gaukite atnaujinimus iš nakties, bet
>  taip pat iš beta ir paleidimo

### **Paleisti (stabili)**

Pats saugiausias ir rekomenduojamas kanalas visiems vartotojams.

*   Savybės:
    *   Kruopščiai išbandyta be kritinių klaidų.
    *   Idealiai tinka gamybai ir kasdieniam naudojimui.
    *   Galima įsigyti „Microsoft Store“, „Winget“, .MSIX ir .exe.

### **Beta**

Skirta vartotojams, norintiems išbandyti naujas funkcijas prieš oficialiai išleidžiant.
 Šis kanalas apima betas ir išleidimo kandidatus.

*   Savybės:
    *   Sudėtyje yra naujų funkcijų.
    *   Gali turėti nedidelių klaidų.
    *   Dažnesni atnaujinimai nei stabilus leidimas.
    *   Galima įsigyti tik kaip .exe puslapyje „REASESES“.

### **Naktį**

Pažengusiems vartotojams ir kūrėjams, norintiems pasiekti naujausius pakeitimus ir
 Eksperimentinės savybės.

*   Savybės:
    *   Apima naujausius pakeitimus, tačiau nėra kruopščiai išbandytos.
    *   Gali būti klaidų ar nebaigtų funkcijų.
    *   Atnaujinta kasdien arba su kiekvienu reikšmingu kodo pakeitimu.
    *   Išleidimo puslapyje galima įsigyti tik kaip .exe.

Skaityti daugiau apie [Seelen ui beveik](./nightly.md)

## **Sąrankos atnaujinimų atnaujinimas**

„MSIX“ atnaujinimus valdo „Microsoft Store“, tačiau „Setup.exe“ jie yra
 ne, todėl atnaujinimas yra įtrauktas į programą, tai parodys jums a
 Pranešimas, kai yra atnaujinimas.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jei spustelėsite pranešimą, jis pradės atsisiųsti ir diegti
 Atnaujinimas, po kurio ji automatiškai paleis programą.
