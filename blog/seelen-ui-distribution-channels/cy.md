---
author: eythaann
published: 13-02-2025
lastRevision: 13-02-2025
description: Dysgu am y gwahanol sianeli dosbarthu sydd ar gael ar gyfer Seelen UI
title: Sianeli dosbarthu seelen ui

---

# Seelen UI: Dulliau Gosod a Diweddaru Sianeli

## Opsiynau Gosod

### Microsoft Store (MSIX)

Dadlwythwch y fersiwn ddiweddaraf o'r
[Microsoft Store](https://www.microsoft.com/store). Dyma'r mwyaf diogel a
 opsiwn hawdd ei ddefnyddio, gyda diweddariadau awtomatig.

**Manteision:**

* Diweddariadau awtomatig
* Wedi'i ddilysu a'i gymeradwyo gan Microsoft
* Diogelwch a dibynadwyedd uchel
* Fersiwn ysgafnach na gosodwr .exe (dim symbolau dadfygio wedi'u cynnwys)

**Anfanteision:**

* Gall diweddariadau gymryd 1-3 diwrnod busnes ar gyfer cymeradwyaeth Microsoft
* Anoddach dadfygio ac adrodd ar faterion

***

### Winget (Msix)

Gosodwch y fersiwn ddiweddaraf gan ddefnyddio'r gorchymyn canlynol:

> Winget gosod --id seelen.seelenui

Yn cynnig yr un buddion â'r fersiwn Microsoft Store gyda'r ychwanegiad
 Cyfleustra gosod llinell orchymyn.

***

### gosodwr .exe

Dadlwythwch y gosodwr setup.exe o'r
[Yn rhyddhau tudalen](https://github.com/eythaann/Seelen-UI/releases) a'i redeg.

**Manteision:**

* Diweddariadau ar unwaith ar gael
* Yn derbyn hysbysiadau diweddaru cyn gynted ag y bydd fersiynau newydd yn cael eu rhyddhau
* Gwell at ddibenion difa chwilod

**Anfanteision:**

* Gall sbarduno rhybuddion gwrthfeirws (heb eu llofnodi'n ddigidol)
* Maint ffeil mwy (yn cynnwys symbolau dadfygio)

## Diweddaru Sianeli

> Waeth beth fo'r sianel ddiweddaru a ddewiswyd gennych, mae pob fersiwn yn derbyn awtomatig
>  diweddariadau. Mae sianeli ansefydlog hefyd yn derbyn diweddariadau o sianeli mwy sefydlog
>  (e.e., bob nos yn derbyn diweddariadau gan bob nos a beta/rhyddhau).

### Rhyddhau (Sefydlog)

Y sianel fwyaf diogel ac argymelledig ar gyfer pob defnyddiwr.

**Nodweddion:**

* Wedi'i brofi'n drylwyr heb unrhyw chwilod beirniadol
* Yn ddelfrydol ar gyfer cynhyrchu a defnyddio bob dydd
* Ar gael ar Microsoft Store, Winget (.msix), ac fel gosodwr .exe

### Beta

Ar gyfer defnyddwyr sydd eisiau mynediad cynnar i nodweddion newydd cyn eu rhyddhau'n swyddogol.

**Nodweddion:**

* Yn cynnwys nodweddion sydd ar ddod o dan brofion
* Gall gynnwys mân chwilod
* Diweddariadau amlach na sefydlog
* Ar gael yn unig fel gosodwr .exe

### Bob nos

Ar gyfer defnyddwyr a datblygwyr uwch sydd eisiau'r newidiadau diweddaraf.

**Nodweddion:**

* Yn cynnwys newidiadau mwyaf diweddar, heb eu profi
* Gall gynnwys chwilod neu nodweddion anghyflawn
* Wedi'i ddiweddaru'n ddyddiol neu gyda phob newid cod sylweddol
* Ar gael yn unig fel gosodwr .exe

Dysgu mwy am y sianel nosweithiol yn ein
[Seelen UI bob nos](https://seelen.io/blog/nightly) dogfennaeth.

## Mecanwaith Diweddaru: setup.exe vs msix

* **MSIX:** Diweddariadau a reolir yn awtomatig gan Microsoft Store
* **Setup.exe:** Yn cynnwys diweddarwr adeiledig sy'n eich hysbysu pan fydd diweddariadau
   AR GAEL

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Pan fydd diweddariad ar gael:

1. Cliciwch yr Hysbysiad
2. Bydd y diweddarwr yn lawrlwytho ac yn gosod y diweddariad
3. Bydd y cais yn ailgychwyn yn awtomatig
