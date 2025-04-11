# Seelen UI: Instalační metody a aktualizace kanálů

## Možnosti instalace

### Microsoft Store (MSIX)

Stáhněte si nejnovější verzi z
[Microsoft Store](https://www.microsoft.com/store). Toto je nejbezpečnější a
Uživatelsky přívětivá možnost, s automatickými aktualizacemi.

**Pros:**

- Automatické aktualizace
- Ověřeno a schváleno společností Microsoft
- Vysoká bezpečnost a spolehlivost
- Lehčí verze než .Exe instalační program (zahrnuty žádné symboly ladění)

**Nevýhody:**

- Aktualizace mohou trvat 1-3 pracovní dny ke schválení Microsoft
- Obtížnější ladit a nahlásit problémy

---

### Winget (MSIX)

Nainstalujte nejnovější verzi pomocí následujícího příkazu:

> Instalace Winget --Id Seelen.seelenui

Nabízí stejné výhody jako verze Microsoft Store s přidáním Pohodlí instalace
příkazové linie.

---

### .EXE Instalační program

Stáhněte si instalační program Setup.exe z
[Vydání stránky](https://github.com/eythaann/Seelen-UI/releases) a spustit to.

**Pros:**

- K dispozici okamžité aktualizace
- Jakmile budou vydány nové verze, obdrží oznámení o aktualizaci
- Lepší pro účely ladění

**Nevýhody:**

- Může vyvolat antivirová varování (není digitálně podepsáno)
- Větší velikost souboru (zahrnuje ladicí symboly)

## Aktualizovat kanály

> Bez ohledu na váš zvolený kanál aktualizace, všechny verze dostávají
> automatické aktualizace. Nestabilní kanály také dostávají aktualizace ze
> stabilnějších kanálů (např. Nightly dostává aktualizace z nočního i
> beta/uvolnění).

### Vydání (stabilní)

Nejbezpečnější a doporučený kanál pro všechny uživatele.

**Funkce:**

- Důkladně testováno bez kritických chyb
- Ideální pro výrobu a každodenní použití
- K dispozici v Microsoft Store, Winget (.MSIX) a jako.

### Beta

Pro uživatele, kteří chtějí před oficiálním vydáním včasný přístup k novým
funkcím.

**Funkce:**

- Zahrnuje připravované funkce testování
- Může obsahovat drobné chyby
- Častější aktualizace než stabilní
- K dispozici pouze jako instalační program .exe

### Noční

Pro pokročilé uživatele a vývojáře chtějí nejnovější změny.

**Funkce:**

- Obsahuje nejnovější netestované změny
- Může zahrnovat chyby nebo neúplné funkce
- Aktualizováno denně nebo s každou významnou změnou kódu
- K dispozici pouze jako instalační program .exe

Další informace o nočním kanálu v našem
[Seelen UI v noci](https://seelen.io/blog/nightly) dokumentace.

## Mechanismus aktualizace: Setup.exe vs MSIX

- **MSIX:** Aktualizace spravované automaticky společností Microsoft Store
- **Setup.exe:** Zahrnuje vestavěný updater, který vás upozorňuje, když jsou
  aktualizace k dispozici

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Když je k dispozici aktualizace:

1. Klikněte na oznámení
2. Updater si stáhne a nainstaluje aktualizaci
3. Aplikace se automaticky restartuje
