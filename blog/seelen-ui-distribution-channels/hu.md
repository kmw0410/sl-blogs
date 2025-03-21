# **Seelen UI: Telepítési módszerek és frissítési csatornák**

## **Telepítési beállítások**

### **Microsoft Store (MSIX)**

Töltse le a legújabb verziót a Microsoft Store -ból. Ez a legbiztonságosabb
 és felhasználóbarát opció, automatikus frissítésekkel.

*   Előnyök:
    *   Automatikus frissítések.
    *   A Microsoft által ellenőrizte és jóváhagyta.
    *   Magas biztonság és megbízhatóság.
    *   Lightweighter verzió, mint a .exe telepítője, mert ez a verzió nem
         Tartalmazza a hibakeresési szimbólumokat.
*   Hátrányok:
    *   A frissítések jóváhagyása 1-3 munkanapon is igénybe vehet.
    *   Nehezebb hibakeresni és jelenteni a kérdéseket.

***

### **Winget (MSIX)**

Telepítse a legújabb verziót a következő paranccsal:

```pwsh
winget install --id Seelen.SeelenUI
```

Ugyanazok az előnyei és hátrányai a Microsoft Store -ban a gyors telepítés pluszával
 parancssor.

***

### \*\*. Exe telepítő \*\*

Töltse le a Setup.exe telepítőt a kiadások oldalról, és futtassa azt.

*   Előnyök:
    *   Gyorsabb telepítés azonnali frissítésekkel.
    *   Értesítést kap az új kiadásokról, amint rendelkezésre állnak.
*   Hátrányok:
    *   Nem digitálisan aláírt, ami víruskereső figyelmeztetéseket válthat ki.
    *   Kevesebb könnyű, mint az MSIX telepítő, mert ez a verzió tartalmazza a hibakeresést
         szimbólumok.

## **Frissítse a csatornákat**

> A frissítés csatornájának IndenPendenje Az összes verzió automatikus frissítéseket kap,
>  Ha instabil frissítési csatornát használ, akkor a frissítéseket is megkapja a
>  Stabilabb frissítési csatornák, példa: Éjszakai fogadás frissítései az éjszakai, de
>  A béta és a kiadás is

### **Kiadás (istálló)**

A legbiztonságosabb és a leginkább ajánlott csatorna minden felhasználó számára.

*   Jellemzők:
    *   Alaposan tesztelve kritikus hibák nélkül.
    *   Ideális a termeléshez és a mindennapi használathoz.
    *   Elérhető a Microsoft Store -ban, a Winget, .Msix és a .exe -ben.

### **Béta**

Célja azoknak a felhasználóknak, akik új funkciókat akarnak kipróbálni, mielőtt hivatalosan megjelennek.
 Ez a csatorna magában foglalja a béta és a kiadás jelölteit.

*   Jellemzők:
    *   Új funkciókat tartalmaz a tesztelés alatt.
    *   Lehet, hogy kisebb hibák vannak.
    *   Gyakoribb frissítések, mint a stabil kiadás.
    *   Csak .exe -ként érhető el a kiadás oldalon.

### **Éjszakai**

Fejlett felhasználók és fejlesztők számára, akik hozzáférést akarnak a legújabb változásokhoz és
 Kísérleti jellemzők.

*   Jellemzők:
    *   Tartalmazza a legfrissebb változtatásokat, de nem alaposan tesztelt.
    *   Tartalmazhat hibákat vagy befejezetlen funkciókat.
    *   Frissítve naponta vagy minden jelentős kódváltozással.
    *   Csak .exe néven érhető el a kiadás oldalon.

További információ a következő [Seelen ui majdnem](./nightly.md)

## **Frissítések fogadása a setup.exe vs msix oldalon**

Az MSIX frissítéseket a Microsoft Store kezeli, de a setup.exe webhelyen vannak
 nem, tehát egy frissítőt tartalmaznak az alkalmazáshoz, ez megmutatja a
 Értesítés, ha elérhető frissítés.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ha rákattint az értesítésre, akkor elkezdi letölteni és telepíteni a
 Frissítse, ezután automatikusan újraindítja az alkalmazást.
