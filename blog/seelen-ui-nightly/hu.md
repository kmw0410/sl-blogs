---
description: Tesztelje a Seelen UI legújabb változásait az éjszakai frissítési csatornával!
published: 02-2025.
author: eythaann
title: Seelen ui éjszaka
lastRevision: 02-2025.
---

# Seelen ui éjszaka

![Seelen UI Developer Edition](https://github.com/user-attachments/assets/76634b49-7b09-4ef2-9643-e93542309f5d)

## Mi az éjszakai csatorna?

Az éjszakai kiadási csatorna a seelen felhasználói felület speciális építése,
azaz automatikusan generálva minden új elkötelezettséggel a `master` ág. Ez
biztosítja, hogy az éjszakai verzió mindig magában foglalja a legújabb
változásokat, Jellemzők és hibajavítások, még akkor is, ha még nem mentek át
széles körű tesztelésen.

## Kiadási változatokat enged

Az éjszakai kiadások két különálló változatot tartalmaznak:

1. **Szabványos változat** - Az alkalmazás rendszeres felépítése, alkalmas
   Általános tesztelés.
2. **Hibakeresési változat** - A `-debug` utótag (például
   `Seelen.UI_2.0.10+20241213134120_x64-setup-debug.exe`), ez a változat az
   Optimalizálva a fejlesztők és a tesztelők számára, akik témákon, beépülő
   modulokon vagy kütyükön dolgoznak Kompatibilis a seelen UI -val.

## Előnyök

- **Korai hozzáférés a szolgáltatásokhoz** - tesztelje a legújabb
  fejlesztéseket, mielőtt elérnék stabil kiadások.
- **Proaktív kiadás jelentése** - Segítsen a hibák azonosításában és
  megoldásában a Fejlesztési ciklus.
- **Gyors fejlesztési visszajelzés** - Hozzájáruljon a Seelen felhasználói
  felület finomításához azáltal, hogy biztosítja Valós idejű betekintés.

## Korlátozások

- **Potenciális instabilitás** - Az éjszakai felépítések tartalmazhatnak
  befejezetlen funkciókat, ill Megoldott hibák.
- **Nem ajánlott a termeléshez** - Ezeket az építkezéseket tesztelésre szánják
  Csak a kritikus környezetben nem szabad felhasználni.

## Hogyan lehet engedélyezni az éjszakai csatornát

Az éjszakai kiadási csatornára váltáshoz:

1. Nyitott **Beállítások** > **Extrák** vagy **Információ** > **Frissítési
   csatorna**.
2. Válasszon **Éjszakai** a rendelkezésre álló lehetőségekből.

![Seelen UI How to Enable Nightly Channel](https://github.com/user-attachments/assets/ae88aeac-98cc-4424-a9e7-fb59740b694e)

## További források

- [Éjszakai kiadások (GitHub)](https://github.com/eythaann/Seelen-UI/releases/tag/nightly)
- [Seelen ui diszkréció közösség](https://discord.gg/ABfASx5ZAJ)
- [Hivatalos Seelen weboldal](https://seelen.io)

---

**Jegyzet:** Ha bármilyen problémával szembesül, kérjük, jelentse őket
[GitHub kérdések](https://github.com/eythaann/Seelen-UI/issues) vagy a
[Discord támogató csatorna](https://discord.gg/ABfASx5ZAJ)- A visszajelzése
segít Javítsa a seelen ui -t!
