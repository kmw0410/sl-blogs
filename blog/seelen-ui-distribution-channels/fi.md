---
author: Eythaanann
lastRevision: 13-02-2025
title: Seelen UI -jakelukanavat
published: 13-02-2025
description: "Tutustu Seelen UI: lle käytettävissä olevista erilaisista jakelukanavista"

---

# Seelen UI: Asennusmenetelmät ja päivityskanavat

## Asennusvaihtoehdot

### Microsoft Store (MSIX)

Lataa uusin versio
[Microsoft Store](https://www.microsoft.com/store). Tämä on turvallisin ja
Käyttäjäystävällinen vaihtoehto automaattisilla päivityksillä.

**Pro:**

* Automaattiset päivitykset
* Microsoftin vahvistama ja hyväksymä
* Korkea turvallisuus ja luotettavuus
* Kevyempi versio kuin .exe -asennusohjelma (

**Miinukset:**

* Päivitykset voivat kestää 1-3 työpäivää Microsoftin hyväksyntää varten
* Vaikeampi virheenkorjaus ja ilmoittaminen asioista

***

### Winget (MSIX)

Asenna uusin versio seuraavan komennon avulla:

> Winget Install --Id Seelen.seelenui

Tarjoaa samat edut kuin Microsoft Store -versio lisättynä
Komentolinjan asennuksen mukavuus.

***

### .exe -asennusohjelma

Lataa setup.exe -asennusohjelma
[Julkaisu -sivu](https://github.com/eythaann/Seelen-UI/releases) Ja suorita se.

**Pro:**

* Välittömät päivitykset saatavilla
* Vastaanottaa päivitysilmoituksia heti, kun uusia versioita julkaistaan
* Parempi virheenkorjaustarkoituksiin

**Miinukset:**

* Voi laukaista virustentorjuntavaroitukset (ei digitaalisesti allekirjoitettu)
* Suurempi tiedostokoko (sisältää virheenkorjaussymbolit)

## Päivitä kanavat

> Riippumatta valitsemastasi päivityskanavasta, kaikki versiot vastaanottavat automaattisen
> Päivitykset. Epävakaat kanavat saavat myös päivityksiä vakaimmilta kanavilta
> (esim. Yöhäiriöt saavat päivityksiä sekä öistä että beetaversiosta/julkaisusta).

### Vapauta (vakaa)

Kaikille käyttäjille turvallisin ja suositeltavin kanava.

**Ominaisuudet:**

* Perusteellisesti testattu ilman kriittisiä virheitä
* Ihanteellinen tuotantoon ja päivittäiseen käyttöön
* Saatavana Microsoft Store, Winget (.Msix) ja As .exe -asennusohjelmassa

### Beeta

Käyttäjille, jotka haluavat varhaisen pääsyn uusiin ominaisuuksiin ennen virallista julkaisua.

**Ominaisuudet:**

* Sisältää testien tulevat ominaisuudet
* Voi sisältää pieniä vikoja
* Useammin päivitykset kuin vakaa
* Saatavana vain .exe -asennusohjelmana

### Iltaisin

Edistyneille käyttäjille ja kehittäjille, jotka haluavat uusimmat muutokset.

**Ominaisuudet:**

* Sisältää viimeisimmät, testaamattomat muutokset
* Voi sisältää virheitä tai puutteellisia ominaisuuksia
* Päivitetty päivittäin tai jokaisen merkittävän koodimuutoksen myötä
* Saatavana vain .exe -asennusohjelmana

Lisätietoja öistä kanavasta
[Seelen UI iltaisin](https://seelen.io/blog/nightly) dokumentaatio.

## Päivitysmekanismi: Setup.exe vs MSIX

* **MSIX:** Päivitykset, joita Microsoft Store hallitsee automaattisesti
* **Setup.exe:** Sisältää sisäänrakennetun päivityksen, joka ilmoittaa sinulle, kun päivitykset ovat
  käytettävissä oleva

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kun päivitys on käytettävissä:

1. Napsauta ilmoitusta
2. Päivittäjä lataa ja asentaa päivityksen
3. Sovellus käynnistyy uudelleen automaattisesti
