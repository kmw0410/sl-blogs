# Seelen UI: Installationsmethoden und Aktualisierungskanäle

## Installationsoptionen

### Microsoft Store (MSIX)

Laden Sie die neueste Version von der herunter
[Microsoft Store](https://www.microsoft.com/store). Dies ist das sicherste und
Benutzerfreundliche Option mit automatischen Updates.

**Profis:**

- Automatische Updates
- Von Microsoft verifiziert und genehmigt
- Hohe Sicherheit und Zuverlässigkeit
- Leichtere Version als .exe Installer (keine Debug -Symbole enthalten)

**Nachteile:**

- Updates können 1-3 Werktage für die Microsoft-Genehmigung dauern
- Schwieriger zu debuggen und Probleme zu melden

---

### Winget (MSIX)

Installieren Sie die neueste Version mit dem folgenden Befehl:

> Winget Install -id seelen.seelenui

Bietet die gleichen Vorteile wie die Microsoft Store -Version mit dem
hinzugefügten Bequemlichkeit der Befehlszeileninstallation.

---

### .exe Installer

Laden Sie das Installationsprogramm setup.exe von der herunter
[Veröffentlichung Seite](https://github.com/eythaann/Seelen-UI/releases) und
laufen Sie es.

**Profis:**

- Sofortige Aktualisierungen verfügbar
- Empfängt Update -Benachrichtigungen, sobald neue Versionen veröffentlicht
  werden
- Besser für Debugging -Zwecke

**Nachteile:**

- Kann Antivirenwarnungen auslösen (nicht digital signiert)
- Größere Dateigröße (enthält Debug -Symbole)

## Kanäle aktualisieren

> Unabhängig von Ihrem ausgewählten Update -Kanal erhalten alle Versionen
> automatisch Aktualisierungen. Instabile Kanäle erhalten auch Aktualisierungen
> von stabileren Kanälen (ENGLEISE erhält die nächtliche Aktualisierungen von
> nächtlichen und Beta/Release).

### Release (stabil)

Der sicherste und empfohlenste Kanal für alle Benutzer.

**Merkmale:**

- Gründlich ohne kritische Fehler getestet
- Ideal für die Produktion und den täglichen Gebrauch
- Erhältlich im Microsoft Store, Winget (.mSIX) und als .exe Installer

### Beta

Für Benutzer, die vor der offiziellen Veröffentlichung frühzeitig Zugriff auf
neue Funktionen wünschen.

**Merkmale:**

- Beinhaltet bevorstehende Funktionen, die unter getestet werden
- Kann kleinere Fehler enthalten
- Häufigere Updates als stabil
- Nur als .exe Installer verfügbar

### Nacht

Für fortgeschrittene Benutzer und Entwickler, die die neuesten Änderungen
wünschen.

**Merkmale:**

- Enthält die neuesten, nicht getesteten Veränderungen
- Kann Fehler oder unvollständige Funktionen umfassen
- Täglich aktualisiert oder mit jeder signifikanten Codeänderung
- Nur als .exe Installer verfügbar

Erfahren Sie mehr über den nächtlichen Kanal in unserem
[Seelen ui Nacht](https://seelen.io/blog/nightly) Dokumentation.

## Update -Mechanismus: setup.exe vs msix

- **MSIX:** Aktualisierungen automatisch vom Microsoft Store verwaltet
- **Setup.exe:** Enthält eingebaute Updater, das Sie benachrichtigt, wenn
  Updates sind verfügbar

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wenn ein Update verfügbar ist:

1. Klicken Sie auf die Benachrichtigung
2. Der Updater wird das Update herunterladen und installieren
3. Die Anwendung wird automatisch neu gestartet
