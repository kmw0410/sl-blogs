# **UI SEELEN: Mètodes d’instal·lació i canals d’actualització**

## **Opcions d’instal·lació**

### **Microsoft Store (MSIX)**

Descarregueu la versió més recent de la botiga Microsoft. Això és el més segur
 i opció fàcil d’utilitzar, amb actualitzacions automàtiques.

*   PROS:
    *   Actualitzacions automàtiques.
    *   Verificat i aprovat per Microsoft.
    *   Alta seguretat i fiabilitat.
    *   Versió Lightweighter que. EXE Instal·lador perquè aquesta versió no
         Inclou símbols de depuració.
*   Dtres:
    *   Les actualitzacions poden trigar 1-3 dies laborables a aprovar-se.
    *   Més difícil de depurar i informar dels problemes.

***

### **Winget (msix)**

Instal·leu la versió més recent mitjançant la següent comanda:

```pwsh
winget install --id Seelen.SeelenUI
```

Els mateixos avantatges i els contres de Microsoft Store amb el més d'una instal·lació ràpida mitjançant
 Línia d'ordres.

***

### \*\*. Instal·lador exe \*\*

Descarregueu l'instal·lador SETUP.EXE de la pàgina de llançaments i executeu -lo.

*   PROS:
    *   Instal·lació més ràpida amb actualitzacions immediates.
    *   Rep notificacions per a nous llançaments tan aviat com estiguin disponibles.
*   Dtres:
    *   No signat digitalment, que pot desencadenar avisos antivirus.
    *   Menys lleuger que l’instal·lador de Msix perquè aquesta versió inclou depuració
         símbols.

## **Actualitzar els canals**

> IndenPendent del canal d'actualització Totes les versions reben actualitzacions automàtiques,
>  A més, si utilitzeu un canal d'actualització inestable, també rebrà les actualitzacions del
>  Canals d'actualització més estables, exemple: rep actualitzacions nocturnes des de la nit però
>  També de Beta i Release

### **Llançament (estable)**

El canal més segur i recomanat per a tots els usuaris.

*   Característiques:
    *   Es va provar a fons sense errors crítics.
    *   Ideal per a la producció i l’ús quotidià.
    *   Disponible a Microsoft Store, Winget, .MSIX i .exe.

### **Beta**

Dirigits a usuaris que vulguin provar noves funcions abans que siguin llançades oficialment.
 Aquest canal inclou betas i llançament de candidats.

*   Característiques:
    *   Conté noves funcions en prova.
    *   Pot tenir errors menors.
    *   Actualitzacions més freqüents que la versió estable.
    *   Disponible només com a .exe a la pàgina de llançaments.

### **Nocturna**

Per a usuaris avançats i desenvolupadors que vulguin accedir als darrers canvis i
 Característiques experimentals.

*   Característiques:
    *   Inclou els canvis més recents, però no provats a fons.
    *   Pot contenir insectes o funcions inacabades.
    *   Actualitzat diàriament o amb cada canvi de codi significatiu.
    *   Només disponible com a .exe a la pàgina de llançaments.

Llegiu més informació sobre [Seelen ui](./nightly.md)

## **Recuperació de les actualitzacions de SETUP.EXE vs MSIX**

A MSIX, les actualitzacions estan gestionades per Microsoft Store, però a SETUP.EXE ho són
 no, de manera que un actualitzador s'inclou amb l'aplicació que us mostrarà un
 Notificació quan hi ha una actualització disponible.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Si feu clic a la notificació, començarà a descarregar i instal·lar el
 Actualització, després de la qual cosa reiniciarà l'aplicació automàticament.
