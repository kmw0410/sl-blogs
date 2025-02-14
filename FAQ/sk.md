# **Často kladené otázky**

## **Spoločné otázky**

### **Čo je Seelen UI?**

Seelen UI je stolná aplikácia, ktorá vám umožňuje prispôsobiť si zážitok zo systému Windows 10/11. Poskytuje širokú škálu tém, widgetov a doplnkov na vylepšenie prostredia pracovnej plochy.

***

### **Je Seelen UI bezplatným softvérom?**

Áno, Seelen UI je bezplatný softvér. Môžete si bezplatne stiahnuť a používať používateľské rozhranie Seelen.

***

### **Upravuje Seelen UI môj operačný systém?**

Nie,**Seelen UI nemenuje váš operačný systém**. Funguje to, že sa prihlási na natívne udalosti systému Windows a interpretuje ich podľa potreby na zobrazenie príslušného obsahu. Seelen UI číta nastavenia systému a rozširuje ich v rámci svojich vlastných nastavení, ale**nemení ani neupravuje žiadne základné systémové súbory alebo položky registra**. Aplikácia prísne dodržiava rozhrania Windows API a interaguje iba so systémom spôsobom, ktorý spoločnosť Windows umožňuje.

***

### **Môže Seelen UI prelomiť môj operačný systém?**

Nie,**Seelen UI nemôže prelomiť váš operačný systém**. Pretože nemenuje žiadne základné systémy alebo nastavenia (ako je vysvetlené v predchádzajúcej otázke), neexistuje riziko, že spôsobí poškodenie vášho OS. Seelen UI je navrhnuté tak, aby bezproblémovo pracovalo v hraniciach rozhraní API Windows a zaisťovalo bezpečný a stabilný zážitok.

***

### **Môže Windows Update Break Seelen UI?**

Nie,**Nie je to pravdepodobné**To, že štandardná aktualizácia systému Windows prelomí používateľské rozhranie Seelen. Vždy však existuje malé riziko, najmä ak používate**experimentálne budovy**Rovnako ako zostavy zasvätených Windows. Tieto zostavy často zahŕňajú nedokončené alebo nestabilné zmeny, ktoré by mohli ovplyvniť aplikácie tretích strán, ako je Seelen UI. Pre najstabilnejší zážitok sa odporúča používať stabilné verzie systému Windows.

***

### **Vyžaduje používateľské rozhranie Seelen na fungovanie pripojenie na internet?**

Nie,**Seelen UI nevyžaduje pripojenie na internet**fungovať. Aplikácia funguje po inštalácii perfektne jemne v režime. Budete však potrebovať pripojenie na internet na:

* Sťahovať novú**miniaplikácia**,**doplnky**alebo**témy**z oficiálneho úložiska.
* Skontrolujte aktualizácie aplikácie alebo jej komponentov.

Okrem týchto aktivít funguje Seelen UI nezávisle bez toho, aby potrebovala pripojenie na internet.

***

### **Ako sťahovať Seelen UI?**

Môžete si stiahnuť Seelen UI z[oficiálna webová stránka](https://seelen.io).

## **Bežné problémy s používateľom**

### **Problém so sivou/tmavou obrazovkou**

Niektorí používatelia pri používaní používateľského rozhrania Seelen zažívajú sivú alebo tmavú obrazovku. Tento problém je často spôsobený aplikáciami tretích strán, ktoré upravujú vzhľad systému Windows, napríklad**Micareveryón**.

**Riešenie**:

* Zakážte tieto typy aplikácií.
* Ak to aplikácia umožňuje, pridajte Seelen UI do zoznamu vylúčenia, aby ste zabránili konfliktom.

***

### **Systémový podnos nefunguje správne**

Ak zásobník systému v používateľskom rozhraní Seelen nefunguje správne, môže to byť spôsobené konfliktmi s aplikáciami tretích strán, ktoré upravujú panel úloh Windows, napríklad ako napríklad**Štart11**,**StartlAltback**alebo podobné nástroje.

**Prečo sa to stáva?**\
Modul zásobníka Seelen UI vyžaduje prístup k**pretečenie zásobníka**správne pracovať. Tieto aplikácie môžu zasahovať do tejto funkcie.

**Riešenie**:

* Pred použitím používateľského rozhrania Seelen zakážte alebo odinštalujte akékoľvek nástroje na modifikáciu úloh tretích strán.
* Zaistite, že používateľské rozhranie Seelen má plný prístup k natívnemu systému systému.

***

### **Proti podvádzaniu vyvolané AHK**

Niektoré systémy proti podvádzaniu môžu zistiť použitie**AuTOHotkey (AHK)**, na ktoré sa Seelen UI spolieha na skratky ako potenciálne podvádzanie.

**Riešenie**:

* Pred spustením hier so systémami proti podvádzaniu zakážte skratky spoločnosti Seelen UI z nastavení.
* Po dokončení hier znovu povolte skratky.
