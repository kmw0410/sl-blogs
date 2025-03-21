# **Seelen UI: Installatiounsmethoden an Update Channels**

## **Installatiounsoptioune fir**

### **Microsoft Store (Msix)**

Luet déi lescht Versioun aus dem Microsoft Store erof. Dëst ass am meeschte sécher
 an opmierksam Optioun, mat automateschen Updates.

*   InterS:
    *   Automatesch Updates.
    *   Verifizéiert an guttgeheescht vu Microsoft.
    *   Héich Sécherheet an Zouverlässegkeet.
    *   Liichtwechhigter Versioun wéi .exe Installer well dës Versioun net
         enthält Debug Symboler.
*   Cons:
    *   Updates kënnen 1-3 Aarbechtsdeeg daueren fir guttgeheescht ze ginn.
    *   Méi schwéier ze debug a berichten Themen.

***

### **Gewënn (Msix)**

Installéiert déi lescht Versioun mat dem folgenden Kommando:

```pwsh
winget install --id Seelen.SeelenUI
```

Déiselwecht Vir- a Konsum vu Microsoft Store mam Plus vun enger schnell Installatioun iwwer
 Kommandozeil.

***

### \*\*. Exe Installateur \*\*

Luet de Setup.exe Installateur aus der Verëffentlechunge Säit erof a leeft et.

*   InterS:
    *   Méi séier Installatioun mat direkten Updates.
    *   Kritt Notifikatiounen fir nei Verëffentlechungen soubal se verfügbar sinn.
*   Cons:
    *   Net raffinéiert ënnerschriwwen, déi den Antivirus Warnungen ausléisen.
    *   Manner Liichtgewiicht wéi de Msix Installer well dës Versioun Debug enthält
         Symboler.

## **Update Kanäl**

> Indenpending vum Update Kanal all Versioune rekrutéiert automatesch Updates,
>  Och wann Dir och en onbestänneg Update Kanal benotzt gëtt och Updates vun der
>  Méi stabil Update Channels, Beispill: Nightly kritt Updates vun Nightly awer
>  och vu Beta a Fräiloossung

### **Fräisetzung (stabil)**

Dee séchersten an empfohlene Kanal fir all Benotzer.

*   Eegeschaften:
    *   Grëndlech getest ouni kritesch Käfere.
    *   Ideal fir Produktioun an alldeeglech Gebrauch.
    *   Verfügbar am Microsoft Store, Winget, .mmix, an .exe.

### **Betaa**

Zielt op de Benotzer déi nei Feature probéieren ier se offiziell verëffentlecht ginn.
 Dëse Kanal enthält Betaen a Verëffentlechung Kandidaten.

*   Eegeschaften:
    *   Enthält nei Feature ënner Testen.
    *   Vläicht kleng Käfere hunn.
    *   Méi dacks Updates wéi déi stabil Verëffentlechung.
    *   Verfügbar nëmmen als .exe op der Verëffentlechunge Säit.

### **Nuecht**

Fir fortgeschratt Benotzer an Entwéckler déi Zougang zu den leschten Ännerungen an
 experimentell Features.

*   Eegeschaften:
    *   Enthält déi rezentsten Ännerungen, awer net grëndlech getest.
    *   Kann Bugs oder net unfinised Funktiounen enthalen.
    *   Aktualiséiert all Dag oder mat all bedeitende Code Ännerung.
    *   Nëmme verfügbar als .exe op der Verëffentlechunge Säit.

Liest méi no [Seelen ei nighly](./nightly.md)

## **Recievéiere Updates op Setup.exe vs msix**

Op msix Updates ginn vum Microsoft Store geléiert, awer op Setup.exe se sinn
 net, sou datt en Updater mat der Uwendung abegraff ass, wäert Iech eng maachen
 Notifikatioun wann en Update verfügbar ass.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wann Dir op der Notifikatioun klickt, da fänkt et un de
 Update, nodeems et automatesch d'Applikatioun nei starten.
