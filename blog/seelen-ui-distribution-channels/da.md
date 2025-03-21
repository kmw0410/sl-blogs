# **Seelen UI: Installationsmetoder og opdateringskanaler**

## **Installationsmuligheder**

### **Microsoft Store (MSIX)**

Download den nyeste version fra Microsoft Store. Dette er det mest sikre
 og brugervenlig mulighed med automatiske opdateringer.

*   Fordele:
    *   Automatiske opdateringer.
    *   Bekræftet og godkendt af Microsoft.
    *   Høj sikkerhed og pålidelighed.
    *   Lettere version end .exe installatør, fordi denne version ikke gør
         Inkluderer debug -symboler.
*   Ulemper:
    *   Opdateringer kan tage 1-3 arbejdsdage at blive godkendt.
    *   Sværere at fejlsøge og rapportere problemer.

***

### **Winget (MSIX)**

Installer den nyeste version ved hjælp af følgende kommando:

```pwsh
winget install --id Seelen.SeelenUI
```

Samme fordele og ulemper ved Microsoft Store med plus af en hurtig installation via
 Kommandolinje.

***

### \*\*. Exe installationsprogram \*\*

Download Setup.exe -installationsprogrammet fra siden Udgivelserne, og kør den.

*   Fordele:
    *   Hurtigere installation med øjeblikkelige opdateringer.
    *   Modtager meddelelser for nye udgivelser, så snart de er tilgængelige.
*   Ulemper:
    *   Ikke digitalt underskrevet, hvilket kan udløse antivirusadvarsler.
    *   Mindre let end MSIX -installationsprogrammet, fordi denne version inkluderer debug
         symboler.

## **Opdater kanaler**

> Indenpendent af opdateringskanalen Alle versioner modtager automatiske opdateringer,
>  Også hvis du bruger en ustabil opdateringskanal, vil også modtage opdateringer af
>  Mere stabile opdateringskanaler, eksempel: natlige modtagelsesopdateringer fra natligt men
>  Også fra beta og frigivelse

### **Frigivelse (stabil)**

Den mest sikre og anbefalede kanal for alle brugere.

*   Funktioner:
    *   Grundigt testet uden kritiske fejl.
    *   Ideel til produktion og daglig brug.
    *   Tilgængelig i Microsoft Store, Winget, .msix og .exe.

### **Beta**

Målrettet mod brugere, der ønsker at prøve nye funktioner, før de officielt frigives.
 Denne kanal inkluderer Betas og frigiver kandidater.

*   Funktioner:
    *   Indeholder nye funktioner under test.
    *   Kan have mindre bugs.
    *   Hyppigere opdateringer end den stabile frigivelse.
    *   Kun tilgængelig som .exe på siden Releases.

### **Natligt**

For avancerede brugere og udviklere, der ønsker adgang til de nyeste ændringer og
 Eksperimentelle funktioner.

*   Funktioner:
    *   Inkluderer de seneste ændringer, men ikke grundigt testet.
    *   Kan indeholde bugs eller ufærdige funktioner.
    *   Opdateret dagligt eller med enhver betydelig kodeændring.
    *   Kun tilgængelig som .exe på siden Releases.

Læs mere om på [Seelen Ui Neighly](./nightly.md)

## **Modtagelse af opdateringer på Setup.exe vs Msix**

På MSIX administreres opdateringer af Microsoft -butikken, men på opsæt.exe er de
 ikke, så en opdatering er inkluderet i applikationen, dette viser dig en
 Meddelelse Når en opdatering er tilgængelig.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Hvis du klikker på meddelelsen, vil den begynde at downloade og installere
 Opdatering, hvorefter den genstarter applikationen automatisk.
