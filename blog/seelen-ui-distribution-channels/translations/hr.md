# Seelen UI: Metode instalacije i kanali za ažuriranje

## Opcije instalacije

### Microsoft Store (MSIX)

Preuzmite najnoviju verziju iz
[Microsoft Store](https://www.microsoft.com/store). Ovo je najsigurnije i Opcija
prilagođena korisnicima, s automatskim ažuriranjima.

**Pros:**

- Automatska ažuriranja
- Provjerio i odobrio Microsoft
- Visoka sigurnost i pouzdanost
- Lakša verzija od .exe instalacijski program (nisu uključeni simboli za
  uklanjanje pogrešaka)

**Protiv:**

- Ažuriranja mogu potrajati 1-3 radna dana za odobrenje Microsofta
- Teže za uklanjanje pogrešaka i prijavljivanje problema

---

### Winget (MSIX)

Instalirajte najnoviju verziju pomoću sljedeće naredbe:

> Instalacija krila --ID seelen.seelenui

Nudi iste prednosti kao i verzija Microsoft Store -a s dodanom Praktičnost
instalacije naredbenog retka.

---

### .exe instalacijski program

Preuzmite instalacijski program Setup.exe s
[Objavljuje stranicu](https://github.com/eythaann/Seelen-UI/releases) I
pokrenite ga.

**Pros:**

- Dostupna trenutna ažuriranja
- Prima obavijesti o ažuriranju čim se objave nove verzije
- Bolje za uklanjanje pogrešaka

**Protiv:**

- Mogu potaknuti upozorenja o antivirusu (nisu digitalno potpisana)
- Veća veličina datoteke (uključuje simbole za uklanjanje pogrešaka)

## Ažurirajte kanale

> Bez obzira na odabrani kanal za ažuriranje, sve verzije primaju automatsko
> Ažuriranja. Nestabilni kanali također dobivaju ažuriranja sa stabilnijih
> kanala (npr., Nightly prima ažuriranja i od Nightly i Beta/Release).

### Oslobađanje (stabilno)

Najsigurniji i preporučeni kanal za sve korisnike.

**Značajke:**

- Temeljito testiran bez kritičnih grešaka
- Idealno za proizvodnju i svakodnevnu upotrebu
- Dostupno u Microsoft Storeu, Winget (.MSix) i AS .EXE Installer

### Beta

Za korisnike koji žele rani pristup novim značajkama prije službenog izdanja.

**Značajke:**

- Uključuje nadolazeće značajke u testiranju
- Mogu sadržavati manje bube
- Češća ažuriranja od stabilnih
- Dostupan samo kao .exe instalater

### Noćni

Za napredne korisnike i programere koji žele najnovije promjene.

**Značajke:**

- Sadrži najnovije, neprovjerene promjene
- Može uključivati ​​greške ili nepotpune značajke
- Ažurirano svakodnevno ili sa svakom značajnom promjenom koda
- Dostupan samo kao .exe instalater

Saznajte više o noćnom kanalu u našem
[Seelen ui noćni](https://seelen.io/blog/nightly) dokumentacija.

## Mehanizam ažuriranja: setUp.exe vs MSIX

- **MSIX:** Ažuriranja automatski upravlja Microsoft Store
- **SetUp.exe:** Uključuje ugrađeni ažuriranje koji vas obavještava kada su
  ažuriranja dostupan

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kad je dostupno ažuriranje:

1. Kliknite obavijest
2. Updater će preuzeti i instalirati ažuriranje
3. Aplikacija će se automatski ponovno pokrenuti
