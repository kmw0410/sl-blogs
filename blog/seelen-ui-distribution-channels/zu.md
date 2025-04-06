---
author: eythainn
published: 13-02-2025
lastRevision: 13-02-2025
description: Funda mayelana neziteshi ezahlukahlukene zokusabalalisa
  ezitholakala nge-Seelen UI
title: Iziteshi zokusabalalisa zeSeelen UI

---

# I-Seelen UI: Izindlela zokufaka kanye neziteshi zokuvuselela

## Izinketho zokufaka

### Isitolo seMicrosoft (MSIX)

Landa inguqulo yakamuva kusuka ku
[Isitolo seMicrosoft](https://www.microsoft.com/store). Lokhu kuphephe kakhulu futhi
 Inketho esebenziseka kalula, ngezibuyekezo ezizenzakalelayo.

**Okuhle:**

* Ukuvuselelwa okuzenzakalelayo
* Iqinisekiswe futhi yavunywa yi-Microsoft
* Ukuphepha okuphezulu nokuthembela
* Uhlobo olukhanyayo kune- .exe isifaki (azikho izimpawu ze-debug ezifakiwe)

**USIZO:**

* Ukuvuselelwa kungathatha izinsuku ezingama-1-3 zebhizinisi ukuze kuvunyelwe i-Microsoft
* Kunzima ngokwengeziwe ukulungisa ukulungisa kabusha nokubika izindaba

***

### I-WINGET (MSIX)

Faka uhlobo lwakamuva usebenzisa umyalo olandelayo:

> I-Winget Faka - Selen.seelenui

Inikeza izinzuzo ezifanayo nenguqulo ye-Microsoft Store ene
 lula ukufakwa komugqa we-command-line.

***

### .exe isifaki

Landa isifaki se-setup.exe kusuka ku
[Kukhulula ikhasi](https://github.com/eythaann/Seelen-UI/releases) futhi uyiqede.

**Okuhle:**

* Ukuvuselelwa okusheshayo kuyatholakala
* Ithola izaziso zokuvuselela ngokushesha nje lapho kukhishwa izinhlobo ezintsha
* Kungcono ngezinhloso zokulungisa iphutha

**USIZO:**

* Ingabangela izexwayiso ze-antivirus (hhayi ezisayiniwe ngokwedijithali)
* Ubungako befayela elikhudlwana (kufaka phakathi izimpawu ze-debug)

## Vuselela iziteshi

> Akunandaba noma ngabe isiteshi sakho esikhethiwe, zonke izinhlobo zithola okuzenzakalelayo
>  izibuyekezo. Iziteshi ezingazinzile futhi zithola izibuyekezo ezivela eziteshini ezizinzile
>  (e.g., ithola ubusuku bokuvuselelwa kusuka kokubili ebusuku nase-beta / ukukhishwa).

### Ukudedelwa (ezinzile)

Isiteshi esiphephe kakhulu futhi esinconyelwe sabo bonke abasebenzisi.

**Izici:**

* Ihlolwe ngokuphelele ngaphandle kwezimbungulu ezibucayi
* Ilungele ukukhiqizwa kanye nokusetshenziswa kwansuku zonke
* Kutholakala ku-Microsoft Store, Winget (.MIST), kanye ne-.exe Installer

### Beta

Kwabasebenzisi abafuna ukufinyelela kusenesikhathi kwizici ezintsha ngaphambi kokukhululwa okusemthethweni.

**Izici:**

* Kufaka phakathi izici ezizayo ngaphansi kokuhlolwa
* Ingaqukatha izimbungulu ezincane
* Ukuvuselelwa okuvame kakhulu kunokuzinzile
* Kutholakala kuphela njengesifaki

### Ngobusuku

Kwabasebenzisi abathuthukile nabathuthukisi bafuna izinguquko zakamuva.

**Izici:**

* Iqukethe izinguquko zakamuva kakhulu, ezingavunyelwe
* Ingafaka izimbungulu noma izici ezingaphelele
* Kuvuselelwa nsuku zonke noma ngoshintsho lwekhodi ngayinye ebalulekile
* Kutholakala kuphela njengesifaki

Funda kabanzi ngesiteshi sobusuku esikusethuneni
[USeelen UI ebusuku](https://seelen.io/blog/nightly) imibhalo.

## Ukuvuselela Mechanism: Setup.exe vs Msix

* **MSIX:** Ukuvuselelwa okuphethwe ngokuzenzakalelayo yi-Microsoft Store
* **Setup.exe:** Kufaka phakathi isibuyekezo esakhelwe ngaphakathi esikwazisa lapho izibuyekezo zikhona
   -tholakala

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Lapho isibuyekezo sitholakala:

1. Chofoza isaziso
2. Isibuyekezo sizolanda bese sifaka isibuyekezo
3. Isicelo sizoqala kabusha ngokuzenzakalelayo
