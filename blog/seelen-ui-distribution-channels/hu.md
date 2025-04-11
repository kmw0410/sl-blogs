---
published: 02-2025.
author: eythaann
lastRevision: 02-2025.
title: Seelen ui disztribúciós csatornák
description: Ismerje meg a Seelen UI számára elérhető különféle elosztási csatornákat
---

# Seelen UI: Telepítési módszerek és frissítési csatornák

## Telepítési beállítások

### Microsoft Store (MSIX)

Töltse le a legújabb verziót a
[Microsoft Store](https://www.microsoft.com/store)- Ez a legbiztonságosabb és
Felhasználóbarát opció, automatikus frissítésekkel.

**Előnyök:**

- Automatikus frissítések
- A Microsoft által ellenőrizte és jóváhagyta
- Magas biztonság és megbízhatóság
- Könnyebb verzió, mint a .exe telepítője (nincs hibakeresési szimbólumok)

**Hátrányok:**

- A frissítések a Microsoft jóváhagyásához 1-3 munkanapon is igénybe vehetnek
- Nehezebb hibakeresni és jelenteni a problémákat

---

### Winget (MSIX)

Telepítse a legújabb verziót a következő paranccsal:

> Winget Install --id seelen.seelenui

Ugyanazokat az előnyöket kínálja, mint a Microsoft Store verzióval a Hozzáadva A
parancssori telepítés kényelme.

---

### .exe telepítő

Töltse le a Setup.exe telepítőt a
[Kiadás oldal](https://github.com/eythaann/Seelen-UI/releases) És futtassa.

**Előnyök:**

- Azonnali frissítések elérhetőek
- A frissítési értesítéseket fogadja, amint az új verziók megjelennek
- Jobb hibakeresési célokra

**Hátrányok:**

- Kiválthatja az antivírus figyelmeztetéseket (nem digitálisan aláírva)
- Nagyobb fájlméret (magában foglalja a hibakeresési szimbólumokat)

## Frissítse a csatornákat

> A választott frissítési csatornától függetlenül az összes verzió automatikusan
> fogad Frissítések. Az instabil csatornák frissítéseket is kapnak stabilabb
> csatornáktól (Például, az éjszakai frissítéseket kapnak mind éjszakai, mind
> béta/kiadásról).

### Kiadás (istálló)

A legbiztonságosabb és leginkább ajánlott csatorna minden felhasználó számára.

**Jellemzők:**

- Alaposan tesztelték kritikus hibák nélkül
- Ideális a termeléshez és a mindennapi használathoz
- Elérhető a Microsoft Store -ban, a Winget -ben (.Msix) és a .exe Installer
  -ben

### Béta

Azoknak a felhasználóknak, akik korai hozzáférést akarnak az új funkciókhoz a
hivatalos kiadás előtt.

**Jellemzők:**

- Tartalmazza a tesztelés alatt álló közelgő funkciókat
- Tartalmazhat kisebb hibákat
- Gyakoribb frissítések, mint stabilak
- Csak .exe telepítőiként érhető el

### Éjszakai

A fejlett felhasználók és fejlesztők számára, akik a legújabb változtatásokat
akarják.

**Jellemzők:**

- A legfrissebb, nem tesztelt változásokat tartalmazza
- Tartalmazhat hibákat vagy hiányos funkciókat
- Naponta vagy minden jelentős kódváltozással frissítve
- Csak .exe telepítőiként érhető el

Tudjon meg többet az éjszakai csatornáról a
[Seelen ui éjszaka](https://seelen.io/blog/nightly) dokumentáció.

## Frissítse a mechanizmust: setup.exe vs msix

- **MSIX:** A Microsoft Store automatikusan kezelt frissítéseket
- **Setup.exe:** Tartalmazza a beépített frissítőt, amely értesíti Önt, amikor a
  frissítések vannak elérhető

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ha frissítés áll rendelkezésre:

1. Kattintson az értesítésre
2. Az Updater letölti és telepíti a frissítést
3. Az alkalmazás automatikusan újraindul
