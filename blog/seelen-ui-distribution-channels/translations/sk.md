# Seelen UI: Metódy inštalácie a aktualizačné kanály

## Možnosti inštalácie

### Microsoft Store (MSIX)

Stiahnite si najnovšiu verziu z
[Microsoft Store](https://www.microsoft.com/store). Toto je najbezpečnejšie a
Užívateľsky prívetivá možnosť s automatickými aktualizáciami.

**Plusy:**

- Automatické aktualizácie
- Overené a schválené spoločnosťou Microsoft
- Vysoká bezpečnosť a spoľahlivosť
- Ľahšia verzia ako inštalačný program .exe (nezahrnuté žiadne symboly ladenia)

**Nevýhody:**

- Aktualizácie môžu trvať 1-3 pracovné dni na schválenie spoločnosti Microsoft
- Ťažšie laditeľné a hlásenie problémov

---

### Krídlo (MSIX)

Nainštalujte najnovšiu verziu pomocou nasledujúceho príkazu:

> inštalácia krídla --id seelen.selenui

Ponúka rovnaké výhody ako verzia Microsoft Store s pridanou Pohodlie inštalácie
príkazového riadku.

---

### .exe inštalátor

Stiahnite si inštalátor setup.exe z
[Vydanie stránky](https://github.com/eythaann/Seelen-UI/releases) A spustite to.

**Plusy:**

- K dispozícii sú okamžité aktualizácie
- Prijíma upozornenia na aktualizáciu hneď po vydaní nových verzií
- Lepšie pre účely ladenia

**Nevýhody:**

- Môže spustiť antivírusové varovania (nie digitálne podpísané)
- Väčšia veľkosť súboru (obsahuje symboly ladenia)

## Kanály aktualizácie

> Bez ohľadu na váš zvolený aktualizačný kanál, všetky verzie dostávajú
> automatické Aktualizácie. Nestabilné kanály tiež prijímajú aktualizácie zo
> stabilnejších kanálov (napr. Nightly prijíma aktualizácie z nočných aj
> beta/vydania).

### Uvoľnenie (stabilné)

Najbezpečnejší a odporúčaný kanál pre všetkých používateľov.

**Vlastnosti:**

- Dôkladne testované bez kritických chýb
- Ideálne na výrobu a každodenné použitie
- K dispozícii v obchode Microsoft Store, Winget (.MSIX) a ako inštalátor .exe

### Beta

Pre používateľov, ktorí chcú predčasný prístup k novým funkciám pred oficiálnym
vydaním.

**Vlastnosti:**

- Zahŕňa nadchádzajúce funkcie, ktoré sú predmetom testovania
- Môže obsahovať menšie chyby
- Častejšie aktualizácie ako stabilné
- K dispozícii iba ako inštalátor .exe

### Nočný

Pre pokročilých používateľov a vývojárov, ktorí chcú najnovšie zmeny.

**Vlastnosti:**

- Obsahuje najnovšie, netestované zmeny
- Môže obsahovať chyby alebo neúplné funkcie
- Aktualizované denne alebo pri každej významnej zmene kódu
- K dispozícii iba ako inštalátor .exe

Dozviete sa viac o nočnom kanáli v našom
[Seelen Ui Nightly](https://seelen.io/blog/nightly) dokumentácia.

## Mechanizmus aktualizácie: setup.exe vs MSIX

- **MSIX:** Aktualizácie spravované automaticky spoločnosťou Microsoft Store
- **Setup.exe:** Zahŕňa vstavaný aktualizátor, ktorý vás upozorňuje, keď sú
  aktualizácie dostupný

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Keď je k dispozícii aktualizácia:

1. Kliknite na oznámenie
2. Updater sťahuje a nainštaluje aktualizáciu
3. Aplikácia sa automaticky reštartuje
