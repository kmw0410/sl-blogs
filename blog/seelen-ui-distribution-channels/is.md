---
author: Eythaann
lastRevision: 13-02-2025
published: 13-02-2025
title: Seelen Dreifingarrásir UI
description: Lærðu um mismunandi dreifileiðir sem eru í boði fyrir Seelen HÍ

---

# Seelen UI: Uppsetningaraðferðir og uppfæra rásir

## Uppsetningarvalkostir

### Microsoft Store (MSIX)

Sæktu nýjustu útgáfuna frá
[Microsoft verslun](https://www.microsoft.com/store). Þetta er öruggast og
 Notendavænn valkostur, með sjálfvirkum uppfærslum.

**Kostir:**

* Sjálfvirkar uppfærslur
* Staðfest og samþykkt af Microsoft
* Mikið öryggi og áreiðanleika
* Léttari útgáfa en .exe uppsetningaraðili (engin kembiforrit innifalin)

**Gallar:**

* Uppfærslur geta tekið 1-3 virka daga fyrir Microsoft samþykki
* Erfiðara að kemba og tilkynna málefni

***

### Winget (Msix)

Settu upp nýjustu útgáfuna með eftirfarandi skipun:

> Winget Install --id Seelen.seelenui

Býður upp á sömu ávinning og Microsoft Store útgáfan með bætt við
 Þægindi við uppsetningu skipanalínu.

***

### .Exe Installer

Sæktu Setup.exe uppsetningaraðila frá
[Sleppir síðu](https://github.com/eythaann/Seelen-UI/releases) Og keyrðu það.

**Kostir:**

* Strax uppfærslur í boði
* Fær uppfærslu tilkynningar um leið og nýjar útgáfur eru gefnar út
* Betra í kembiforritum

**Gallar:**

* Getur kallað fram antivirus viðvaranir (ekki undirritaðar stafrænt)
* Stærri skráarstærð (inniheldur kembiforrit)

## Uppfæra rásir

> Burtséð frá valinni uppfærslurásinni þinni, allar útgáfur fá sjálfvirkar
>  uppfærslur. Óstöðugar rásir fá einnig uppfærslur frá stöðugri rásum
>  (t.d. fær nóttina uppfærslur frá bæði nætur og beta/losun).

### Slepptu (stöðugt)

Öruggasta og ráðlagði rásin fyrir alla notendur.

**Eiginleikar:**

* Prófað vandlega án mikilvægra galla
* Tilvalið til framleiðslu og daglegrar notkunar
* Fáanlegt í Microsoft Store, Winget (.MSIX) og AS .Exe Installer

### Beta

Fyrir notendur sem vilja snemma aðgang að nýjum eiginleikum fyrir opinbera útgáfu.

**Eiginleikar:**

* Inniheldur komandi eiginleika í prófun
* Getur innihaldið minniháttar galla
* Tíðari uppfærslur en stöðugar
* Aðeins fáanlegt sem .exe uppsetningarforrit

### Að nóttu

Fyrir háþróaða notendur og verktaki vilja nýjustu breytingarnar.

**Eiginleikar:**

* Inniheldur nýjustu, óprófaðar breytingar
* Getur innihaldið galla eða ófullkomna eiginleika
* Uppfært daglega eða með hverri verulegri breytingu á kóða
* Aðeins fáanlegt sem .exe uppsetningarforrit

Lærðu meira um næturrásina í okkar
[Seelen Ui á kvöldin](https://seelen.io/blog/nightly) skjöl.

## Uppfærslukerfi: Setup.exe vs Msix

* **MSIX:** Uppfærslur stjórnaðar sjálfkrafa af Microsoft Store
* **Setup.exe:** Felur í sér innbyggða uppfærslu sem tilkynnir þér þegar uppfærslur eru
   Laus

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Þegar uppfærsla er í boði:

1. Smelltu á tilkynninguna
2. Uppfærslan mun hlaða niður og setja upp uppfærsluna
3. Forrit mun endurræsa sjálfkrafa
