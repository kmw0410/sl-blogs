---
author: Eythaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Kanali ta 'distribuzzjoni ta' Seelen UI
description: Tgħallem dwar il-kanali ta 'distribuzzjoni differenti disponibbli
  għal Seelen UI

---

# Seelen UI: Metodi ta 'Installazzjoni u Kanali ta' Aġġornament

## Għażliet ta 'installazzjoni

### Microsoft Store (Msix)

Niżżel l-aħħar verżjoni minn
[Microsoft Store](https://www.microsoft.com/store)- Dan huwa l-iktar sigur u
 Għażla faċli għall-utent, b'aġġornamenti awtomatiċi.

**Vantaġġi:**

* Aġġornamenti awtomatiċi
* Verifikat u approvat minn Microsoft
* Sigurtà għolja u affidabilità
* Verżjoni eħfef minn .exe installatur (l-ebda simboli ta 'debug inklużi)

**Vantaġġi:**

* L-aġġornamenti jistgħu jieħdu 1-3 ijiem ta 'negozju għall-approvazzjoni tal-Microsoft
* Aktar diffiċli biex tiddebug u tirrapporta kwistjonijiet

***

### Winget (Msix)

Installa l-aħħar verżjoni billi tuża l-kmand li ġej:

> Winget Install --ID Seelen.seelenui

Joffri l-istess benefiċċji bħall-verżjoni tal-maħżen tal-microsoft ma 'l-miżjud
 konvenjenza ta 'installazzjoni tal-linja ta' kmand.

***

### .Exe Installer

Niżżel is - setup.exe Installer mill -
[Paġna tar-rilaxxi](https://github.com/eythaann/Seelen-UI/releases) u mexxiha.

**Vantaġġi:**

* Aġġornamenti immedjati disponibbli
* Jirċievi notifiki ta 'aġġornament malli jiġu rilaxxati verżjonijiet ġodda
* Aħjar għal skopijiet ta 'debugging

**Vantaġġi:**

* Jistgħu jqanqlu twissijiet antivirus (mhux iffirmati diġitalment)
* Daqs tal-fajl ikbar (jinkludi simboli ta 'debug)

## Aġġorna l-kanali

> Irrispettivament mill-kanal ta 'aġġornament magħżul tiegħek, il-verżjonijiet kollha jirċievu awtomatiċi
>  aġġornamenti. Kanali instabbli jirċievu wkoll aġġornamenti minn kanali aktar stabbli
>  (e.g., Nightly jirċievi aġġornamenti kemm minn filgħaxija kif ukoll minn beta / rilaxx).

### Rilaxx (stabbli)

L-iktar kanal sigur u rrakkomandat għall-utenti kollha.

**Karatteristiċi:**

* Ittestjat sewwa mingħajr bugs kritiċi
* Ideali għall-produzzjoni u l-użu ta 'kuljum
* Disponibbli fuq Microsoft Store, Winget (.msix), u As .exe Installer

### Beta

Għal utenti li jixtiequ aċċess bikri għal karatteristiċi ġodda qabel ir-rilaxx uffiċjali.

**Karatteristiċi:**

* Jinkludi l-karatteristiċi li ġejjin taħt l-ittestjar
* Jista 'jkun fih bugs minuri
* Aġġornamenti aktar frekwenti minn stabbli
* Disponibbli biss bħala .exe Installer

### Filgħaxija

Għal utenti avvanzati u żviluppaturi li jixtiequ l-aħħar bidliet.

**Karatteristiċi:**

* Fih bidliet l-iktar reċenti u mhux ittestjati
* Jistgħu jinkludu bugs jew karatteristiċi mhux kompluti
* Aġġornat kuljum jew ma 'kull bidla sinifikanti tal-kodiċi
* Disponibbli biss bħala .exe Installer

Titgħallem aktar dwar il-kanal ta 'filgħaxija f'NO tagħna
[Seelen ui filgħaxija](https://seelen.io/blog/nightly) Dokumentazzjoni.

## Mekkaniżmu ta 'Aġġornament: setup.exe vs msix

* **Msix:** Aġġornamenti ġestiti awtomatikament minn Microsoft Store
* **Setup.exe:** Jinkludi aġġornatur inkorporat li javżak meta jkunu aġġornamenti
   Disponibbli

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Meta jkun disponibbli aġġornament:

1. Ikklikkja n-notifika
2. L-Updater se jniżżel u jinstalla l-aġġornament
3. L-applikazzjoni terġa 'tibda awtomatikament
