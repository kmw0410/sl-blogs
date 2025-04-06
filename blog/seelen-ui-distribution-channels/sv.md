---
title: Seelen UI -distributionskanaler
lastRevision: 13-02-2025
published: 13-02-2025
description: Lär dig mer om de olika distributionskanalerna för Seelen UI
author: eythaann

---

# Seelen UI: Installationsmetoder och uppdateringskanaler

## Installationsalternativ

### Microsoft Store (MSIX)

Ladda ner den senaste versionen från
[Microsoft Store](https://www.microsoft.com/store). Detta är det säkraste och
Användarvänligt alternativ, med automatiska uppdateringar.

**Fördelar:**

* Automatiska uppdateringar
* Verifierad och godkänd av Microsoft
* Hög säkerhet och tillförlitlighet
* Lättare version än .exe installationsprogram (inga felsökningssymboler ingår)

**Nackdelar:**

* Uppdateringar kan ta 1-3 arbetsdagar för Microsoft-godkännande
* Svårare att felsöka och rapportera problem

***

### Winget (msix)

Installera den senaste versionen med följande kommando:

> winget install --id seelen.seelenui

Erbjuder samma fördelar som Microsoft Store -versionen med den tillagda
bekvämlighet med kommandoradsinstallation.

***

### .exe -installationsprogram

Ladda ner installationsprogrammet Setup.exe från
[Släpps sida](https://github.com/eythaann/Seelen-UI/releases) och kör den.

**Fördelar:**

* Omedelbara uppdateringar tillgängliga
* Får uppdateringsmeddelanden så snart nya versioner släpps
* Bättre för felsökningsändamål

**Nackdelar:**

* Kan utlösa antivirusvarningar (inte digitalt signerade)
* Större filstorlek (inkluderar felsökningssymboler)

## Uppdatera kanaler

> Oavsett din valda uppdateringskanal får alla versioner automatiska
> uppdateringar. Instabila kanaler får också uppdateringar från mer stabila kanaler
> (t.ex. får nattliga uppdateringar från både nattlig och beta/release).

### Släpp (stabil)

Den säkraste och rekommenderade kanalen för alla användare.

**Drag:**

* Testat noggrant utan kritiska buggar
* Perfekt för produktion och vardagligt bruk
* Finns i Microsoft Store, Winget (.MSIX) och AS .EXE -installationsprogrammet

### Beta

För användare som vill ha tidig tillgång till nya funktioner före officiell släpp.

**Drag:**

* Inkluderar kommande funktioner under testning
* Kan innehålla mindre buggar
* Mer frekventa uppdateringar än stabila
* Endast tillgängligt som .exe -installationsprogram

### Nattlig

För avancerade användare och utvecklare som vill ha de senaste ändringarna.

**Drag:**

* Innehåller senaste, otestade förändringar
* Kan inkludera buggar eller ofullständiga funktioner
* Uppdaterad dagligen eller med varje betydande kodändring
* Endast tillgängligt som .exe -installationsprogram

Lär dig mer om den nattliga kanalen i vår
[Seelen ui nattlig](https://seelen.io/blog/nightly) dokumentation.

## Uppdateringsmekanism: setup.exe vs MSIX

* **Msix:** Uppdateringar hanteras automatiskt av Microsoft Store
* **Setup.exe:** Inkluderar inbyggd uppdatering som meddelar dig när uppdateringar är
  tillgänglig

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

När en uppdatering är tillgänglig:

1. Klicka på meddelandet
2. Uppdateringen kommer att ladda ner och installera uppdateringen
3. Applikationen startas om automatiskt
