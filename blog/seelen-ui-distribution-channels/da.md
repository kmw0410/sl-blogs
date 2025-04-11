---
author: ythaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Seelen UI -distributionskanaler
description: Lær om de forskellige distributionskanaler, der er tilgængelige for Seelen UI
---

# Seelen UI: Installationsmetoder og opdateringskanaler

## Installationsmuligheder

### Microsoft Store (MSIX)

Download den nyeste version fra
[Microsoft Store](https://www.microsoft.com/store). Dette er det mest sikre og
Brugervenlig mulighed med automatiske opdateringer.

**Fordele:**

- Automatiske opdateringer
- Verificeret og godkendt af Microsoft
- Høj sikkerhed og pålidelighed
- Lettere version end .exe -installationsprogram (ingen debug -symboler
  inkluderet)

**Ulemper:**

- Opdateringer kan tage 1-3 arbejdsdage til Microsoft-godkendelse
- Vanskeligere at fejlsøge og rapportere problemer

---

### Winget (MSIX)

Installer den nyeste version ved hjælp af følgende kommando:

> Winget Install --ID SEELEN.SEELENUI

Tilbyder de samme fordele som Microsoft Store -versionen med den tilføjede
Bekvemmelighed ved installation af kommandolinje.

---

### .exe installationsprogram

Download Setup.exe -installationsprogrammet fra
[Udgivelser Side](https://github.com/eythaann/Seelen-UI/releases) og kør det.

**Fordele:**

- Øjeblikkelige opdateringer tilgængelige
- Modtager opdateringsmeddelelser, så snart nye versioner frigives
- Bedre til fejlsøgningsformål

**Ulemper:**

- Kan udløse antivirusadvarsler (ikke digitalt underskrevet)
- Større filstørrelse (inkluderer debug -symboler)

## Opdater kanaler

> Uanset din valgte opdateringskanal modtager alle versioner automatisk
> opdateringer. Ustabile kanaler modtager også opdateringer fra mere stabile
> kanaler (f.eks. Natlig modtager opdateringer fra både natlig og
> beta/frigivelse).

### Frigivelse (stabil)

Den mest sikre og anbefalede kanal for alle brugere.

**Funktioner:**

- Grundigt testet uden kritiske fejl
- Ideel til produktion og daglig brug
- Tilgængelig i Microsoft Store, Winget (.MSIX) og AS .exe Installatør

### Beta

For brugere, der ønsker tidlig adgang til nye funktioner inden officiel
frigivelse.

**Funktioner:**

- Inkluderer kommende funktioner under test
- Kan indeholde mindre bugs
- Hyppigere opdateringer end stabile
- Kun tilgængelig som .exe -installationsprogram

### Natligt

For avancerede brugere og udviklere, der ønsker de seneste ændringer.

**Funktioner:**

- Indeholder de seneste, uprøvede ændringer
- Kan omfatte fejl eller ufuldstændige funktioner
- Opdateret dagligt eller med hver betydelig kodeændring
- Kun tilgængelig som .exe -installationsprogram

Lære mere om den natlige kanal i vores
[Seelen UI Nightly](https://seelen.io/blog/nightly) Dokumentation.

## Opdateringsmekanisme: Setup.exe vs MSIX

- **MSIX:** Opdateringer administreret automatisk af Microsoft Store
- **Setup.exe:** Inkluderer indbygget opdatering, der giver dig besked, når
  opdateringer er Tilgængelig

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Når en opdatering er tilgængelig:

1. Klik på meddelelsen
2. Opdateringen downloader og installerer opdateringen
3. Ansøgning genstarter automatisk
