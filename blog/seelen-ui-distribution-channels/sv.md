# **Seelen UI: Installationsmetoder och uppdateringskanaler**

## **Installationsalternativ**

### **Microsoft Store (MSIX)**

Ladda ner den senaste versionen från Microsoft -butiken. Detta är det säkraste
 och användarvänligt alternativ, med automatiska uppdateringar.

*   Fördelar:
    *   Automatiska uppdateringar.
    *   Verifierad och godkänd av Microsoft.
    *   Hög säkerhet och tillförlitlighet.
    *   Lightweighter -version än .exe installationsprogram eftersom den här versionen inte gör det
         Inkluderar felsökningssymboler.
*   Nackdelar:
    *   Uppdateringar kan ta 1-3 arbetsdagar att godkännas.
    *   Svårare att felsöka och rapportera problem.

***

### **Winget (msix)**

Installera den senaste versionen med följande kommando:

```pwsh
winget install --id Seelen.SeelenUI
```

Samma fördelar och nackdelar med Microsoft Store med plus av en snabb installation via
 kommandorad.

***

### \*\*. EXE Installer \*\*

Ladda ner installationsprogrammet Setup.exe från sidan Releases och kör den.

*   Fördelar:
    *   Snabbare installation med omedelbara uppdateringar.
    *   Får aviseringar för nya utgåvor så snart de är tillgängliga.
*   Nackdelar:
    *   Inte digitalt signerad, vilket kan utlösa antivirusvarningar.
    *   Mindre lätt än MSIX -installationsprogrammet eftersom den här versionen innehåller felsökning
         symboler.

## **Uppdatera kanaler**

> Indenspendent för uppdateringskanalen Alla versioner får automatiska uppdateringar,
>  Även om du använder en instabil uppdateringskanal kommer också att få uppdateringar av
>  Mer stabila uppdateringskanaler, exempel: nattliga få uppdateringar från nattlig men
>  också från beta och frisläppande

### **Släpp (stabil)**

Den säkraste och rekommenderade kanalen för alla användare.

*   Drag:
    *   Grundligt testad utan kritiska buggar.
    *   Perfekt för produktion och vardagligt bruk.
    *   Finns i Microsoft Store, Winget, .MSIX och .EXE.

### **Beta**

Riktad mot användare som vill prova nya funktioner innan de officiellt släpps.
 Denna kanal innehåller betor och släppkandidater.

*   Drag:
    *   Innehåller nya funktioner under testning.
    *   Kan ha mindre buggar.
    *   Mer frekventa uppdateringar än den stabila utgåvan.
    *   Endast tillgängligt som .exe på sidan Releases.

### **Nattlig**

För avancerade användare och utvecklare som vill ha tillgång till de senaste ändringarna och
 Experimentella funktioner.

*   Drag:
    *   Inkluderar de senaste ändringarna, men inte grundligt testade.
    *   Kan innehålla buggar eller oavslutade funktioner.
    *   Uppdaterad dagligen eller med varje betydande kodändring.
    *   Endast tillgängligt som .exe på sidan Releases.

Läs mer om [Seelen ui nästan](./nightly.md)

## **Få uppdateringar på setup.exe vs MSIX**

På MSIX -uppdateringar hanteras av Microsoft -butiken, men på Setup.exe är de
 Inte, så en uppdateringare ingår i applikationen detta visar dig en
 Meddelande när en uppdatering är tillgänglig.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Om du klickar på meddelandet kommer det att börja ladda ner och installera
 Uppdatering, varefter den startar om applikationen automatiskt.
