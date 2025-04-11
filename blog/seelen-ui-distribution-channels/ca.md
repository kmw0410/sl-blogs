---
author: eythaann
published: 13-02-2025
lastRevision: 13-02-2025
description: Obteniu informació sobre els diferents canals de distribució
  disponibles per a la interfície d'usuari de Seelen
title: Canals de distribució de la interfície d'usuari de Seelen
---

# UI SEELEN: Mètodes d’instal·lació i canals d’actualització

## Opcions d’instal·lació

### Microsoft Store (MSIX)

Descarregueu la versió més recent del
[Botiga de Microsoft](https://www.microsoft.com/store). Aquest és el més segur i
Opció fàcil d’utilitzar, amb actualitzacions automàtiques.

**PROS:**

- Actualitzacions automàtiques
- Verificat i aprovat per Microsoft
- Alta seguretat i fiabilitat
- Versió més lleugera que. EXE Instal·lador (no hi ha símbols de depuració
  inclosos)

**Dtres:**

- Les actualitzacions poden trigar 1-3 dies laborables a l'aprovació de
  Microsoft
- Més difícil de depurar i informar dels problemes

---

### Winget (msix)

Instal·leu la versió més recent mitjançant la següent comanda:

> Winget Install --id Seelen.seelenui

Ofereix els mateixos avantatges que la versió de la botiga de Microsoft
Convenient de la instal·lació de la línia de comandaments.

---

### . EXE Instal·lador

Descarregueu l'instal·lador SETUP.EXE des del
[Pàgina de llançaments](https://github.com/eythaann/Seelen-UI/releases) i
executar -lo.

**PROS:**

- Actualitzacions immediates disponibles
- Rep notificacions d’actualització tan aviat com es publiquen noves versions
- Millor per a la depuració

**Dtres:**

- Pot desencadenar avisos antivirus (no signats digitalment)
- Mida del fitxer més gran (inclou símbols de depuració)

## Actualitzar els canals

> Independentment del canal d'actualització escollit, totes les versions reben
> automàticament actualitzacions. Els canals inestables també reben
> actualitzacions de canals més estables (per exemple, Nightly rep
> actualitzacions tant de nit com beta/llançament).

### Llançament (estable)

El canal més segur i recomanat per a tots els usuaris.

**Característiques:**

- Provat completament sense errors crítics
- Ideal per a la producció i l’ús quotidià
- Disponible a Microsoft Store, Winget (.MSIX) i AS .exe Installer

### Beta

Per als usuaris que vulguin accés precoç a les noves funcions abans de la
publicació oficial.

**Característiques:**

- Inclou les properes funcions en prova
- Pot contenir errors menors
- Actualitzacions més freqüents que estables
- Disponible només com a instal·lador .exe

### Nocturna

Per a usuaris avançats i desenvolupadors que vulguin els darrers canvis.

**Característiques:**

- Conté canvis més recents i no provats
- Pot incloure errors o funcions incompletes
- Actualitzat diàriament o amb cada canvi de codi significatiu
- Disponible només com a instal·lador .exe

Obteniu més informació sobre el canal nocturn al nostre
[Seelen ui nocturn](https://seelen.io/blog/nightly) documentació.

## Mecanisme d'actualització: SETUP.EXE VS MSIX

- **MSIX:** Actualitzacions gestionades automàticament per Microsoft Store
- **SETUP.EXE:** Inclou un actualitzador integrat que us notifica quan les
  actualitzacions siguin disponible

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Quan hi hagi una actualització disponible:

1. Feu clic a la notificació
2. L'actualització es descarregarà i instal·larà l'actualització
3. L’aplicació es reiniciarà automàticament
