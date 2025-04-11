# Seeleni kasutajaliides: installimismeetodid ja värskenduskanalid

## Installimisvalikud

### Microsofti pood (MSIX)

Laadige uusim versioon alla [Microsofti pood](https://www.microsoft.com/store).
See on kõige turvalisem ja Kasutajasõbralik valik koos automaatsete
värskendustega.

**Plussid:**

- Automaatsed värskendused
- Microsofti kinnitatud ja heaks kiitnud
- Kõrge turvalisus ja usaldusväärsus
- Kergem versioon kui .exe installija (silumissümbolid ei sisalda)

**Miinused:**

- Uuendused võivad Microsofti kinnitamiseks kuluda 1-3 tööpäeva
- Raskem siluda ja teatada probleemidest

---

### Winget (MSIX)

Installige uusim versioon, kasutades järgmist käsku:

> Winget Install --ID Seelen.seelenui

Pakub samu eeliseid kui lisatud Microsofti poe versioon Käsuliini paigaldamise
mugavus.

---

### .exe installija

Laadige installija SEUT.EXE alla
[Väljalaske leht](https://github.com/eythaann/Seelen-UI/releases) ja jookse
seda.

**Plussid:**

- Saadaval on kohesed värskendused
- Saab värskenduse teatisi kohe, kui uued versioonid välja antakse
- Parem silumiseks

**Miinused:**

- Võib käivitada viirusetõrjehoiatused (mitte digitaalselt allkirjastatud)
- Suurem faili suurus (sisaldab silumisümboleid)

## Värskendage kanaleid

> Sõltumata teie valitud värskenduskanalist saavad kõik versioonid automaatseks
> värskendused. Ebastabiilsed kanalid saavad värskendusi ka stabiilsematest
> kanalitest (nt Öösel saab värskendusi nii öisest kui ka beeta/väljaandest).

### Vabastamine (stabiilne)

Kõigi kasutajatele kõige turvalisem ja soovitatav kanal.

**Funktsioonid:**

- Põhjalikult testitud ilma kriitiliste vigadeta
- Ideaalne tootmiseks ja igapäevaseks kasutamiseks
- Saadaval Microsoft Store'is, Winget (.mix) ja As .exe installija

### Beeta

Kasutajatele, kes soovivad enne ametlikku väljaandmist uutele funktsioonidele
varakult juurdepääsu.

**Funktsioonid:**

- Sisaldab testimisel tulevaid funktsioone
- Võib sisaldada väiksemaid vigu
- Sagedasemad värskendused kui stabiilsed
- Saadaval ainult .exe installeerijana

### Öösel

Arenenud kasutajate ja arendajate jaoks, kes soovivad uusimaid muudatusi.

**Funktsioonid:**

- Sisaldab viimaseid testimata muudatusi
- Võib sisaldada vigu või mittetäielikke funktsioone
- Uuendatud iga päev või iga olulise koodimuutusega
- Saadaval ainult .exe installeerijana

Lisateavet meie öise kanali kohta leiate meiest
[Seelen ui öösel](https://seelen.io/blog/nightly) Dokumentatsioon.

## Värskendusmehhanism: SETUP.EXE VS MSIX

- **MSIX:** Värskendused hallatavad automaatselt Microsoft Store
- **SETUP.EXE:** Sisaldab sisseehitatud värskendajat, mis teatab teile, kui
  värskendused on saadav

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kui värskendus on saadaval:

1. Klõpsake teatist
2. Värskendaja laadib värskenduse alla ja installib
3. Rakendus taaskäivitub automaatselt
