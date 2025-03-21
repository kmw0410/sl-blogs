# **Seelen UI: Installationsmethoden und Aktualisierungskanäle**

## **Installationsoptionen**

### **Microsoft Store (MSIX)**

Laden Sie die neueste Version aus dem Microsoft Store herunter. Dies ist das sicherste
 und benutzerfreundliche Option mit automatischen Updates.

*   Profis:
    *   Automatische Updates.
    *   Von Microsoft verifiziert und genehmigt.
    *   Hohe Sicherheit und Zuverlässigkeit.
    *   Lightweather -Version als .exe Installer, da diese Version nicht
         Enthält Debug -Symbole.
*   Nachteile:
    *   Aktualisierungen können 1-3 Werktage dauern, um zu genehmigen.
    *   Schwerer zu debuggen und zu melden.

***

### **Winget (MSIX)**

Installieren Sie die neueste Version mit dem folgenden Befehl:

```pwsh
winget install --id Seelen.SeelenUI
```

Gleiche Vor- und Nachteile von Microsoft Store mit dem Plus einer schnellen Installation über
 Befehlszeile.

***

### \*\*. Exe Installer \*\*

Laden Sie das Installationsprogramm setup.exe auf der Seite "Releases" herunter und führen Sie es aus.

*   Profis:
    *   Schnellere Installation mit sofortigen Aktualisierungen.
    *   Empfängt Benachrichtigungen für neue Veröffentlichungen, sobald sie verfügbar sind.
*   Nachteile:
    *   Nicht digital signiert, was Antivirenwarnungen auslösen können.
    *   Weniger leicht als das MSIX -Installationsprogramm, da diese Version Debug enthält
         Symbole.

## **Kanäle aktualisieren**

> Intenpendent des Update -Kanals Alle Versionen erhalten automatische Aktualisierungen,
>  Auch wenn Sie einen instabilen Update -Kanal verwenden, erhalten Sie auch Aktualisierungen der
>  Stabilere Update -Kanäle, Beispiel: Nachts erteilen Updates von abends aber, aber
>  Auch von Beta und Veröffentlichung

### **Release (stabil)**

Der sicherste und empfohlenste Kanal für alle Benutzer.

*   Merkmale:
    *   Gründlich getestet ohne kritische Fehler.
    *   Ideal für die Produktion und den täglichen Gebrauch.
    *   Erhältlich in Microsoft Store, Winget, .msix und .exe.

### **Beta**

Ziel an Benutzer, die neue Funktionen ausprobieren möchten, bevor sie offiziell veröffentlicht werden.
 Dieser Kanal enthält Betas und Release -Kandidaten.

*   Merkmale:
    *   Enthält neue Funktionen, die testet werden.
    *   Könnte kleinere Fehler haben.
    *   Häufiger Aktualisierungen als die stabile Version.
    *   Nur als .exe auf der Seite "Releases" verfügbar.

### **Nacht**

Für fortgeschrittene Benutzer und Entwickler, die Zugriff auf die neuesten Änderungen wünschen und
 Experimentelle Merkmale.

*   Merkmale:
    *   Enthält die neuesten Änderungen, aber nicht gründlich getestet.
    *   Kann Fehler oder unvollendete Funktionen enthalten.
    *   Täglich aktualisiert oder mit jeder bedeutenden Codeänderung.
    *   Nur als .exe auf der Seite veröffentlicht.

Lesen Sie mehr über auf [Seelen ui nimm](./nightly.md)

## **Erhalt von Updates auf Setup.exe vs MSIX erhalten**

Auf MSIX -Updates werden vom Microsoft Store verwaltet, aber auf setup.exe sind sie
 Nicht, also ist ein Updater in der Anwendung enthalten. Dies zeigt Ihnen a
 Benachrichtigung Wenn ein Update verfügbar ist.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wenn Sie auf die Benachrichtigung klicken, wird das heruntergeladen und installiert
 Aktualisieren Sie die Anwendung automatisch neu.
