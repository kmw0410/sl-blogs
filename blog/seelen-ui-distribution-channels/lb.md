---
author: Eythann
published: 13-02-2025
lastRevision: 13-02-2025
title: Seelen UI Distribution Channels
description: Léiert iwwer déi verschidde Verdeelungskananze fir Seelen Ui
---

# Seelen UI: Installatiounsmethoden an Update Channels

## Installatiounsoptioune fir

### Microsoft Store (Msix)

Luet déi lescht Versioun vum
[Micro Microsoft Store](https://www.microsoft.com/store)An. Dëst ass am meeschte
sécher an Benotzer friddeg Optioun, mat automateschen Updates.

**InterS:**

- Automatesch Updates
- Verifizéiert an guttgeheescht vu Microsoft
- Héich Sécherheet an Zouverlässegkeet
- Méi hell Versioun wéi .exe Installer (keng Debug Symboler abegraff)

**Cons:**

- Updates kann 1-3 Aarbechtsdeeg fir Microsoft Genehmegung huelen
- Méi schwéier ze debug a berichten Themen

---

### Gewënn (Msix)

Installéiert déi lescht Versioun mat dem folgenden Kommando:

> Winget installéieren --ID Sendelen.SeeElenui

Bitt déiselwecht Virdeeler wéi d'Microsoft Store Versioun mat der Zousätzlech
Komfort vu Kommandozeil-Line-Installatioun.

---

### .exe Installer

Luet de Setup.exe Installer aus der
[Verflichtociéieren Säit](https://github.com/eythaann/Seelen-UI/releases) a
leeft et.

**InterS:**

- Direkt Updates verfügbar
- Kritt Update Notifikatiounen soubal nei Versioune verëffentlecht ginn
- Besser fir Debugging Zwecker

**Cons:**

- Kann den Antivirus Warnungen ausléisen (net digital ënnerschriwwen)
- Méi grouss Dateigréisst (enthält Debug Symboler)

## Update Kanäl

> Onofhängeg vun Ärem gewielte Update Kanal, all Versioune kréien automatesch
> Updates. Onbestänneg Channels kréien och Updates vun méi stabil Kanäl (z.B.
> Nightly kritt Updates vun béide Nightly a Beta / Verëffentlechung).

### Fräisetzung (stabil)

Dee séchersten an empfohlene Kanal fir all Benotzer.

**Eegeschaften:**

- Grëndlech getest mat kee kritesche Käfer
- Ideal fir Produktioun an alldeeglech Gebrauch
- Verfügbar op Microsoft Store, Winget (.mix), an als .exe Installer

### Betaa

Fir de Benotzer déi fréi Zougang zu neie Feature virun der offizieller
Verëffentlechung wëllen.

**Eegeschaften:**

- Ëmfaasst Upassungsfunktiounen ënner Tester
- Kann kleng Bugs enthalen
- Méi dacks Updates wéi stabil
- Verfügbar nëmmen als .exe Installateur

### Nuecht

Fir fortgeschratt Benotzer an Entwéckler wëllen déi lescht Ännerungen.

**Eegeschaften:**

- Enthält déi lescht, onstaaf Ännerungen
- Kann Bugs oder onvollstänneg Featuren enthalen
- Aktualiséiert all Dag oder mat all bedeitende Code Ännerung
- Verfügbar nëmmen als .exe Installateur

Léiert méi iwwer den nuets Kanal an eiser
[Seelen ui nuets](https://seelen.io/blog/nightly) Dokumentatioun.

## Update Mechanismus: Setup.exe vs msix

- **Msix:** Updates, déi automatesch vu Microsoft Store geréiert
- **Setup.exe:** Enthält gebauter Updater déi Iech informéiert wann d'Updates
  sinn Liwwerungen

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wann en Update verfügbar ass:

1. Klickt op d'Notifikatioun
2. Den Updater wäert den Update eroflueden an installéieren
3. Applikatioun wäert automatesch nei starten
