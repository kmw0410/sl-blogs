---
author: Eythaann
published: 13-02-2025
description: Lær om de forskjellige distribusjonskanalene som er tilgjengelige for Seelen UI
title: Seelen UI distribusjonskanaler
lastRevision: 13-02-2025
---

# Seelen UI: Installasjonsmetoder og oppdateringskanaler

## Installasjonsalternativer

### Microsoft Store (MSIX)

Last ned den siste versjonen fra
[Microsoft Store](https://www.microsoft.com/store). Dette er det mest sikre og
Brukervennlig alternativ, med automatiske oppdateringer.

**Fordeler:**

- Automatiske oppdateringer
- Bekreftet og godkjent av Microsoft
- Høy sikkerhet og pålitelighet
- Lettere versjon enn .exe installasjonsprogram (ingen feilsøkesymboler
  inkludert)

**Ulemper**

- Oppdateringer kan ta 1-3 virkedager for Microsoft-godkjenning
- Vanskeligere å feilsøke og rapportere problemer

---

### Winget (MSIX)

Installer den siste versjonen ved å bruke følgende kommando:

> Winget Install --ID Seelen.seelenui

Tilbyr de samme fordelene som Microsoft Store -versjonen med den ekstra
Bekvemmelighet ved kommandolinjeinstallasjon.

---

### .exe installasjonsprogram

Last ned installasjonsprogrammet setup.exe fra
[Slipper siden](https://github.com/eythaann/Seelen-UI/releases) og kjør den.

**Fordeler:**

- Umiddelbare oppdateringer tilgjengelig
- Mottar oppdateringsvarsler så snart nye versjoner er utgitt
- Bedre for feilsøkingsformål

**Ulemper**

- Kan utløse antivirusadvarsler (ikke signert digitalt)
- Større filstørrelse (inkluderer feilsøkesymboler)

## Oppdateringskanaler

> Uansett valgt oppdateringskanal, mottar alle versjoner automatisk
> oppdateringer. Ustabile kanaler mottar også oppdateringer fra mer stabile
> kanaler (f.eks. Nightly mottar oppdateringer fra både nattlig og
> beta/utgivelse).

### Utgivelse (stabil)

Den mest sikre og anbefalte kanalen for alle brukere.

**Funksjoner:**

- Grundig testet uten kritiske feil
- Ideell for produksjon og hverdagsbruk
- Tilgjengelig i Microsoft Store, Winget (.MSIX), og som .exe
  installasjonsprogram

### Beta

For brukere som ønsker tidlig tilgang til nye funksjoner før offisiell
utgivelse.

**Funksjoner:**

- Inkluderer kommende funksjoner under testing
- Kan inneholde mindre feil
- Hyppigere oppdateringer enn stabil
- Bare tilgjengelig som .exe installasjonsprogram

### Nattlig

For avanserte brukere og utviklere som ønsker de siste endringene.

**Funksjoner:**

- Inneholder de siste, uprøvde endringer
- Kan inkludere feil eller ufullstendige funksjoner
- Oppdatert daglig eller med hver viktig kodeendring
- Bare tilgjengelig som .exe installasjonsprogram

Lær mer om den nattlige kanalen i vår
[Seelen Ui nattlig](https://seelen.io/blog/nightly) Dokumentasjon.

## Oppdateringsmekanisme: setup.exe vs msix

- **MSIX:** Oppdateringer administreres automatisk av Microsoft Store
- **Setup.exe:** Inkluderer innebygd updater som varsler deg når oppdateringer
  er tilgjengelig

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Når en oppdatering er tilgjengelig:

1. Klikk på varselet
2. Oppdatereren vil laste ned og installere oppdateringen
3. Applikasjonen starter automatisk på nytt
