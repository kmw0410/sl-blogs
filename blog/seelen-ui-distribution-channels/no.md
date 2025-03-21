# **Seelen UI: Installasjonsmetoder og oppdateringskanaler**

## **Installasjonsalternativer**

### **Microsoft Store (MSIX)**

Last ned den siste versjonen fra Microsoft Store. Dette er det sikreste
 og brukervennlig alternativ, med automatiske oppdateringer.

*   Fordeler:
    *   Automatiske oppdateringer.
    *   Bekreftet og godkjent av Microsoft.
    *   Høy sikkerhet og pålitelighet.
    *   LightWeighter -versjon enn .exe installasjonsprogram fordi denne versjonen ikke gjør det
         Inkluderer feilsøkesymboler.
*   Ulemper
    *   Oppdateringer kan ta 1-3 virkedager å bli godkjent.
    *   Vanskeligere å feilsøke og rapportere problemer.

***

### **Winget (MSIX)**

Installer den siste versjonen ved å bruke følgende kommando:

```pwsh
winget install --id Seelen.SeelenUI
```

Samme fordeler og ulemper med Microsoft Store med pluss av en rask installasjon via
 Kommandolinje.

***

### \*\*. EXE Installator \*\*

Last ned installasjonsprogrammet Setup.exe fra utgivelses -siden og kjør den.

*   Fordeler:
    *   Raskere installasjon med umiddelbare oppdateringer.
    *   Mottar varsler for nye utgivelser så snart de er tilgjengelige.
*   Ulemper
    *   Ikke digitalt signert, som kan utløse antivirusadvarsler.
    *   Mindre lett enn MSIX -installasjonsprogrammet fordi denne versjonen inkluderer feilsøking
         symboler.

## **Oppdateringskanaler**

> IndenPendent of the Update Channel Alle versjoner mottar automatiske oppdateringer,
>  Også hvis du bruker en ustabil oppdateringskanal også vil motta oppdateringer av
>  Mer stabile oppdateringskanaler, eksempel: Nattmotell oppdateringer fra nattlig, men
>  Også fra beta og utgivelse

### **Utgivelse (stabil)**

Den mest sikre og anbefalte kanalen for alle brukere.

*   Funksjoner:
    *   Grundig testet uten kritiske feil.
    *   Ideell for produksjon og daglig bruk.
    *   Tilgjengelig i Microsoft Store, Winget, .MSIX og .exe.

### **Beta**

Rettet mot brukere som vil prøve nye funksjoner før de offisielt blir utgitt.
 Denne kanalen inkluderer betas og slipper kandidater.

*   Funksjoner:
    *   Inneholder nye funksjoner som er under testing.
    *   Kan ha mindre feil.
    *   Hyppigere oppdateringer enn den stabile utgivelsen.
    *   Kun tilgjengelig som .exe på utgivelsessiden.

### **Nattlig**

For avanserte brukere og utviklere som ønsker tilgang til de siste endringene og
 eksperimentelle funksjoner.

*   Funksjoner:
    *   Inkluderer de siste endringene, men ikke grundig testet.
    *   Kan inneholde feil eller uferdige funksjoner.
    *   Oppdatert daglig eller med alle vesentlige kodeendringer.
    *   Bare tilgjengelig som .exe på utgivelsessiden.

Les mer om på [Seelen ui Nær](./nightly.md)

## **Motta oppdateringer om setup.exe vs msix**

På MSIX -oppdateringer administreres av Microsoft Store, men på setup.exe er de
 ikke, så en oppdaterer er inkludert i applikasjonen, dette vil vise deg en
 Varsel når en oppdatering er tilgjengelig.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Hvis du klikker på varselet, vil den begynne å laste ned og installere
 Oppdatering, hvoretter den starter applikasjonen automatisk på nytt.
