---
author: eythaan
published: 13-02-2025
lastRevision: 13-02-2025
title: Selen UI -distributiekanalen
description: Meer informatie over de verschillende distributiekanalen die
  beschikbaar zijn voor Selen UI
---

# Selen UI: installatiemethoden en update kanalen

## Installatie -opties

### Microsoft Store (MSIX)

Download de nieuwste versie van de
[Microsoft Store](https://www.microsoft.com/store). Dit is de meest beveiligde
en Gebruikersvriendelijke optie, met automatische updates.

**Voordelen:**

- Automatische updates
- Geverifieerd en goedgekeurd door Microsoft
- Hoge veiligheid en betrouwbaarheid
- Lichtere versie dan .exe -installatieprogramma (geen foutopsporingssymbolen
  inbegrepen)

**Nadelen:**

- Updates kunnen 1-3 werkdagen duren voor goedkeuring van Microsoft
- Moeilijker te debuggen en problemen te melden

---

### Winget (MSIX)

Installeer de nieuwste versie met behulp van de volgende opdracht:

> Winget Install --id selen.seelenui

Biedt dezelfde voordelen als de Microsoft Store -versie met de toegevoegde Gemak
van opdrachtregelinstallatie.

---

### .exe installatieprogramma

Download het installatieprogramma van de setup.exe van de
[Pagina vrijgeeft](https://github.com/eythaann/Seelen-UI/releases) En voer het
uit.

**Voordelen:**

- Onmiddellijke updates beschikbaar
- Ontvangt updatemeldingen zodra nieuwe versies zijn vrijgegeven
- Beter voor foutopsporingsdoeleinden

**Nadelen:**

- Moge Antivirus waarschuwingen activeren (niet digitaal ondertekend)
- Grotere bestandsgrootte (inclusief foutopsporingssymbolen)

## Update kanalen

> Ongeacht uw gekozen updatekanaal, ontvangen alle versies automatisch updates.
> Onstabiele kanalen ontvangen ook updates van stabielere kanalen (Bijv. Nightly
> ontvangt updates van zowel nachtelijke als bèta/release).

### Release (stabiel)

Het meest veilige en aanbevolen kanaal voor alle gebruikers.

**Functies:**

- Grondig getest zonder kritische bugs
- Ideaal voor productie en dagelijks gebruik
- Beschikbaar op Microsoft Store, Winget (.msix) en As .exe Installer

### Bèta

Voor gebruikers die vroege toegang willen tot nieuwe functies vóór de officiële
release.

**Functies:**

- Bevat aankomende functies die worden getest
- Kan kleine bugs bevatten
- Frequentere updates dan stabiel
- Alleen beschikbaar als .exe -installatieprogramma

### Nachtelijk

Voor geavanceerde gebruikers en ontwikkelaars die de nieuwste wijzigingen
willen.

**Functies:**

- Bevat de meest recente, niet -geteste wijzigingen
- Kan bugs of onvolledige functies bevatten
- Dagelijks bijgewerkt of met elke significante codeverandering
- Alleen beschikbaar als .exe -installatieprogramma

Lees meer over het nachtelijke kanaal in onze
[Seelen UI 's avonds](https://seelen.io/blog/nightly) documentatie.

## Update mechanisme: setup.exe vs msix

- **MSIX:** Updates automatisch beheerd door Microsoft Store
- **Setup.exe:** Inclusief ingebouwde updater die u op de hoogte brengt wanneer
  updates zijn beschikbaar

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wanneer een update beschikbaar is:

1. Klik op de melding
2. De updater zal de update downloaden en installeren
3. Toepassing wordt automatisch opnieuw gestart
