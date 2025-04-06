---
author: Eythaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Seelen UI kanali distribucije
description: Saznajte o različitim distributivnim kanalima dostupnim za Seelen Ui

---

# SEENEN UI: Metode instalacije i ažuriranje kanala

## Opcije instalacije

### Microsoft Store (Msix)

Preuzmite najnoviju verziju iz
[Microsoft Store](https://www.microsoft.com/store). Ovo je najsigurnije i
 Korisnička opcija, sa automatskim ažuriranjima.

**Pros:**

* Automatska ažuriranja
* Provjereno i odobrio Microsoft
* Visoka sigurnost i pouzdanost
* Laklija verzija od .exe instalatora (nemam isključivanja pogrešaka)

**Protiv:**

* Ažuriranja mogu trajati 1-3 radna dana za Microsoft odobrenje
* Teže ispravljati i izvještavati o problemima

***

### Winget (Msix)

Instalirajte najnoviju verziju pomoću sljedeće naredbe:

> Winget Install --id seelen.seelenui

Nudi iste prednosti kao i verziju Microsoft Store s dodanim
 Pogodnost instalacije naredbenog retka.

***

### .exe instalater

Preuzmite instalacijski program Setup.exe iz
[Puštanje stranice](https://github.com/eythaann/Seelen-UI/releases) i pokreni ga.

**Pros:**

* Dostupne su trenutne nadogradnje
* Prima obavijesti o ažuriranju čim se objave nove verzije
* Bolje za uklanjanje pogrešaka

**Protiv:**

* Može pokrenuti antivirusna upozorenja (nije digitalno potpisano)
* Veća veličina datoteke (uključuje simbole za uklanjanje pogrešaka)

## Ažurirajte kanale

> Bez obzira na vaš odabrani kanal za ažuriranje, sve verzije primaju automatski
>  ažuriranja. Nestabilni kanali takođe primaju ažuriranja sa stabilnijih kanala
>  (npr. Noćno prima ažuriranja iz noći i beta / puštanja).

### Puštanje (stabilno)

Najsigurniji i preporučeni kanal za sve korisnike.

**Značajke:**

* Temeljito testiran bez kritičnih grešaka
* Idealno za proizvodnju i svakodnevnu upotrebu
* Dostupno u Microsoft Storeu, Winget (.Mix) i kao .exe instalater

### Beta

Za korisnike koji žele rani pristup novim funkcijama prije službenog puštanja na slobodu.

**Značajke:**

* Uključuje nadolazeće funkcije u testiranju
* Može sadržavati manje greške
* Češća ažuriranja od stabilnih
* Dostupno samo kao .exe instalater

### Noćno

Za napredne korisnike i programere želeći najnovije promjene.

**Značajke:**

* Sadrži najnovije, neprovjerene promjene
* Može uključivati ​​greške ili nepotpune funkcije
* Ažurirani dnevno ili sa svakim značajnim promjenama koda
* Dostupno samo kao .exe instalater

Saznajte više o noćnom kanalu u našem
[Seelen ui noću](https://seelen.io/blog/nightly) Dokumentacija.

## Ažuriranje mehanizma: SETUP.EXE VS MSIX

* **Msix:** Ažuriranja Automatski upravlja Microsoft Store
* **Setup.exe:** Uključuje ugrađeni ažuriranje koji vas obavještava kada su ažuriranja
   na raspolaganju

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kada je ažuriranje dostupno:

1. Kliknite na obavijest
2. Updater će preuzeti i instalirati ažuriranje
3. Aplikacija će se automatski ponovo pokrenuti
