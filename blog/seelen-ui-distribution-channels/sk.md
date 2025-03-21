# **Seelen UI: Metódy inštalácie a aktualizačné kanály**

## **Možnosti inštalácie**

### **Microsoft Store (MSIX)**

Stiahnite si najnovšiu verziu z obchodu Microsoft Store. Toto je najbezpečnejšie
 a užívateľsky prívetivá možnosť s automatickými aktualizáciami.

*   Plusy:
    *   Automatické aktualizácie.
    *   Overené a schválené spoločnosťou Microsoft.
    *   Vysoká bezpečnosť a spoľahlivosť.
    *   Ľahká verzia ako inštalátor .exe, pretože táto verzia nie je
         Zahŕňa symboly ladenia.
*   Nevýhody:
    *   Aktualizácie môžu byť schválené 1-3 pracovnými dňami.
    *   Ťažšie ladiť a nahlásiť problémy.

***

### **Krídlo (MSIX)**

Nainštalujte najnovšiu verziu pomocou nasledujúceho príkazu:

```pwsh
winget install --id Seelen.SeelenUI
```

Rovnaké výhody a nevýhody Microsoft Store s plus rýchlou inštaláciou cez
 príkazový riadok.

***

### \*\*. Inštalátor EXE \*\*

Stiahnite si inštalátor setup.exe na stránke vydania a spustite ho.

*   Plusy:
    *   Rýchlejšia inštalácia s okamžitými aktualizáciami.
    *   Dostáva upozornenia pre nové vydania, len čo budú k dispozícii.
*   Nevýhody:
    *   Nie digitálne podpísané, čo môže vyvolať antivírusové varovania.
    *   Menej ľahké ako inštalátor MSIX, pretože táto verzia obsahuje ladenie
         symboly.

## **Kanály aktualizácie**

> Odstráňte sa z aktualizačného kanála Všetky verzie dostávajú automatické aktualizácie,
>  Ak používate nestabilný aktualizačný kanál, tiež dostane aktualizácie
>  Stabilnejšie aktualizačné kanály, príklad: Nočné prijímanie aktualizácií od nočnej, ale
>  tiež z beta a vydania

### **Uvoľnenie (stabilné)**

Najbezpečnejší a odporúčaný kanál pre všetkých používateľov.

*   Vlastnosti:
    *   Dôkladne testované bez kritických chýb.
    *   Ideálne na výrobu a každodenné použitie.
    *   K dispozícii v Microsoft Store, Winget, .MSIX a .exe.

### **Beta**

Zamerané na používateľov, ktorí chcú vyskúšať nové funkcie skôr, ako budú oficiálne prepustení.
 Tento kanál zahŕňa beta a kandidátov na vydanie.

*   Vlastnosti:
    *   Obsahuje nové funkcie testovania.
    *   Môžu mať menšie chyby.
    *   Častejšie aktualizácie ako stabilné vydanie.
    *   K dispozícii iba ako .exe na stránke vydania.

### **Nočný**

Pre pokročilých používateľov a vývojárov, ktorí chcú prístup k najnovším zmenám a
 Experimentálne vlastnosti.

*   Vlastnosti:
    *   Zahŕňa najnovšie zmeny, ale nie sú dôkladne testované.
    *   Môže obsahovať chyby alebo nedokončené funkcie.
    *   Aktualizované denne alebo pri každej významnej zmene kódu.
    *   K dispozícii iba ako .exe na stránke vydania.

Prečítajte si viac o čísle [Seelen ui](./nightly.md)

## **Prijímanie aktualizácií na adrese setup.exe vs MSIX**

Pokiaľ ide o aktualizácie MSIX, spravuje obchod Microsoft Store, ale na setu
 nie, takže aktualizácia je súčasťou aplikácie, ktorá vám ukáže a
 Oznámenie, keď je k dispozícii aktualizácia.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ak kliknete na oznámenie, začne sa sťahovať a inštalovať
 Aktualizácia, potom automaticky reštartuje aplikáciu.
