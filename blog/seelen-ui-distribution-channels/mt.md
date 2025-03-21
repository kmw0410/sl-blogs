# **Seelen UI: Metodi ta 'Installazzjoni u Kanali ta' Aġġornament**

## **Għażliet ta 'installazzjoni**

### **Microsoft Store (Msix)**

Niżżel l-aħħar verżjoni mill-maħżen Microsoft. Dan huwa l-iktar sigur
 u għażla faċli għall-utent, b'aġġornamenti awtomatiċi.

*   Vantaġġi:
    *   Aġġornamenti awtomatiċi.
    *   Verifikat u approvat minn Microsoft.
    *   Sigurtà għolja u affidabilità.
    *   Verżjoni ħafifa minn .exe installatur għax din il-verżjoni ma tagħmilx
         Jinkludi simboli ta 'debug.
*   Vantaġġi:
    *   L-aġġornamenti jistgħu jieħdu 1-3 ijiem ta 'negozju biex jiġu approvati.
    *   Aktar diffiċli biex tiddebug u tirrapporta kwistjonijiet.

***

### **Winget (Msix)**

Installa l-aħħar verżjoni billi tuża l-kmand li ġej:

```pwsh
winget install --id Seelen.SeelenUI
```

L-istess vantaġġi u liżvantaġġi ta 'Microsoft Store bil-plus ta' installazzjoni ta 'malajr permezz
 linja ta 'kmand.

***

### \*\*. Exe Installer \*\*

Niżżel is-setup.exe Installer mill-paġna tar-rilaxxi u mexxiha.

*   Vantaġġi:
    *   Installazzjoni aktar mgħaġġla b'aġġornamenti immedjati.
    *   Jirċievi notifiki għal rilaxxi ġodda malli jkunu disponibbli.
*   Vantaġġi:
    *   Mhux iffirmat b'mod diġitali, li jista 'jikkawża twissijiet antivirus.
    *   Inqas ħafif mill-installatur Msix għaliex din il-verżjoni tinkludi debug
         simboli.

## **Aġġorna l-kanali**

> Indenpendent tal-kanal ta 'aġġornament il-verżjonijiet kollha jirċievu aġġornamenti awtomatiċi,
>  Ukoll jekk l - użu ta 'kanal ta' aġġornament instabbli wkoll tirċievi aġġornamenti tal -
>  Kanali ta 'aġġornament aktar stabbli, Eżempju: Nightly jirċievu aġġornamenti minn filgħaxija imma
>  Ukoll minn beta u rilaxx

### **Rilaxx (stabbli)**

L-iktar kanal sigur u rrakkomandat għall-utenti kollha.

*   Karatteristiċi:
    *   Ittestjat sewwa mingħajr bugs kritiċi.
    *   Ideali għall-produzzjoni u l-użu ta 'kuljum.
    *   Disponibbli fuq Microsoft Store, Winget, .Msix, u .Exe.

### **Beta**

Immirat għal utenti li jixtiequ jippruvaw karatteristiċi ġodda qabel ma jiġu rilaxxati uffiċjalment.
 Dan il-kanal jinkludi betas u kandidati għar-rilaxx.

*   Karatteristiċi:
    *   Fih fatturi ġodda taħt ittestjar.
    *   Jista 'jkollu bugs minuri.
    *   Aġġornamenti aktar frekwenti mir-rilaxx stabbli.
    *   Disponibbli biss bħala .exe fuq il-paġna tar-rilaxxi.

### **Filgħaxija**

Għal utenti avvanzati u żviluppaturi li jixtiequ aċċess għall-aħħar bidliet u
 Karatteristiċi sperimentali.

*   Karatteristiċi:
    *   Jinkludi l-iktar bidliet riċenti, iżda mhux ittestjati sewwa.
    *   Jista 'jkun fih bugs jew karatteristiċi mhux mitmuma.
    *   Aġġornat kuljum jew ma 'kull bidla sinifikanti fil-kodiċi.
    *   Disponibbli biss bħala .exe fuq il-paġna tar-rilaxxi.

Aqra aktar dwar [Seelen ui bil-mod](./nightly.md)

## **Tirċiev l-aġġornamenti fuq setup.exe vs msix**

Fuq l-aġġornamenti MSIX huma ġestiti mill-maħżen tal-Microsoft, iżda fuq setup.exe huma
 le, u għalhekk aġġornatur huwa inkluż mal-applikazzjoni dan jurik
 Notifika meta jkun disponibbli aġġornament.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jekk tikklikkja fuq in-notifika se tibda tniżżel u tinstalla
 Aġġornament, wara li terġa 'tibda l-applikazzjoni awtomatikament.
