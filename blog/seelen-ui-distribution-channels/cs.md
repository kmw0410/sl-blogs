# **Seelen UI: Instalační metody a aktualizace kanálů**

## **Možnosti instalace**

### **Microsoft Store (MSIX)**

Stáhněte si nejnovější verzi z obchodu Microsoft Store. Toto je nejbezpečnější
 a uživatelsky přívětivá možnost, s automatickými aktualizacemi.

*   Pros:
    *   Automatické aktualizace.
    *   Ověřeno a schváleno společností Microsoft.
    *   Vysoká bezpečnost a spolehlivost.
    *   Verze Lightwerighter než instalační program .exe, protože tato verze ne
         Zahrnuje ladicí symboly.
*   Nevýhody:
    *   Aktualizace mohou být schváleny 1-3 pracovní dny.
    *   Těžší ladit a nahlásit problémy.

***

### **Winget (MSIX)**

Nainstalujte nejnovější verzi pomocí následujícího příkazu:

```pwsh
winget install --id Seelen.SeelenUI
```

Stejné výhody a nevýhody Microsoft Store s plus rychlé instalace prostřednictvím
 příkazový řádek.

***

### \*\*. Exe instalátor \*\*

Stáhněte si instalační program Setup.exe ze stránky vydání a spusťte jej.

*   Pros:
    *   Rychlejší instalace s okamžitými aktualizacemi.
    *   Obdrží oznámení o nových vydáních, jakmile jsou k dispozici.
*   Nevýhody:
    *   Není digitálně podepsáno, což může vyvolat antivirová varování.
    *   Méně lehký než instalátor MSIX, protože tato verze obsahuje ladění
         symboly.

## **Aktualizovat kanály**

> IndenPendent of the Update Channel Všechny verze obdrží automatické aktualizace,
>  Také pokud používáte nestabilní aktualizační kanál, také obdrží aktualizace
>  Stabilnější aktualizační kanály, Příklad: Noční dotazování aktualizací z noci, ale
>  také z beta a uvolnění

### **Vydání (stabilní)**

Nejbezpečnější a doporučený kanál pro všechny uživatele.

*   Funkce:
    *   Důkladně testováno bez kritických chyb.
    *   Ideální pro výrobu a každodenní použití.
    *   K dispozici v Microsoft Store, Winget, .MSIX a .EXE.

### **Beta**

Zaměřené na uživatele, kteří chtějí vyzkoušet nové funkce dříve, než budou oficiálně vydány.
 Tento kanál zahrnuje beta a kandidáty na uvolnění.

*   Funkce:
    *   Obsahuje nové funkce testování.
    *   Mohou mít drobné chyby.
    *   Častější aktualizace než stabilní vydání.
    *   K dispozici pouze jako .exe na stránce vydání.

### **Noční**

Pro pokročilé uživatele a vývojáře, kteří chtějí přístup k nejnovějším změnám a
 Experimentální funkce.

*   Funkce:
    *   Zahrnuje nejnovější změny, ale ne důkladně testované.
    *   Může obsahovat chyby nebo nedokončené funkce.
    *   Aktualizováno denně nebo s každou významnou změnou kódu.
    *   Dostupné pouze jako .exe na stránce vydání.

Přečtěte si více o ON [Seelen UI se blíží](./nightly.md)

## **Přijímání aktualizací na Setup.exe vs MSIX**

Na aktualizace MSIX jsou spravovány společností Microsoft Store, ale na setup.exe jsou
 ne, takže do aplikace je součástí aktualizace, což vám ukáže a
 Oznámení, když je k dispozici aktualizace.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Pokud kliknete na oznámení, začne stahovat a instalovat
 Aktualizujte, po kterém aplikaci automaticky restartuje.
