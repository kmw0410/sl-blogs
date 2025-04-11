# Seelen UI: Tutorial di base a tema - Personalizza il tuo desktop come un professionista!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Vuoi dare al desktop di Windows un nuovo look? L'interfaccia utente di Seelen lo
rende facile il suo potente sistema a tema. Questa guida ti guiderà attraverso
le basi di come I temi funzionano - nessuna esperienza di codifica richiesta!

## Versione di debug speciale per i creatori di temi

Prima di iniziare, i creatori di temi dovrebbero conoscere il nostro speciale
**Versione di debug** di Seelen Ui! Questa versione ti consente:

- Ispeziona elementi proprio come una pagina Web (Ctrl+Shift+I Apre Strumenti
  per sviluppatori)
- Vedere le modifiche Live HTML/CSS
- Test istantaneamente modifiche al tema
- Problemi di styling del debug facilmente

Scarica la versione di debug dal nostro
[Canale di rilasci notturni](https://seelen.io/apps/seelen-ui/releases/nightly)
(Cerca i file che terminano con `-debug.exe`, Piace
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Vuoi saperne di più sulle build notturne?

Dai un'occhiata al nostro
[Build notturne spiegate](https://seelen.io/blog/seelen-ui-nightly) articolo!

## Comprensione dei file del tema

Pensa a temi dell'interfaccia utente di Seelen come strati di vernice. Puoi
applicare più temi a Una volta, e proprio come dipingere, l'ordine conta! I temi
possono cambiare tutto Dai colori agli stili di finestra.

Ci sono tre modi in cui i temi possono essere confezionati:

1. **Tema singolo file** (file .yml)
2. **Cartella a tema** (contiene più file)
3. **Tema compresso** (File .SLU - Formato dell'interfaccia utente SPECIALE)

### Dove mettere i tuoi temi

Tutti i temi vanno in questa cartella sul tuo computer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Struttura delle cartelle a tema

Ecco come appare una cartella a tema all'interno:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## Essere ispirati: temi di esempio

Non sei sicuro di dove o come iniziare? Seelen Ui viene fornito con diversi temi
integrati può usare come ispirazione! Dai un'occhiata al
[Collezione temi predefiniti](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
Per vedere come sono fatti.

## Lavorare con i colori: è più facile di quanto pensi!

L'interfaccia utente di Seelen raccoglie automaticamente il colore dell'accento
di Windows e lo fa Disponibile in diverse tonalità attraverso semplici variabili
di colore.

### Il tuo colore di accento principale

Queste variabili utilizzano il colore impostato nelle impostazioni di Windows:

- `--config-accent-color`: Il colore puro (come #FFBBAA)
- `--config-accent-color-rgb`: Stesso colore in formato RGB (255, 187, 170)

### La famiglia a colori completa

Seelen Ui crea un'intera tavolozza dal tuo colore accento:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Ecco l'elenco completo dei colori disponibili:

- Versione più scura: `--config-accent-darkest-color`
- Versione più scura: `--config-accent-darker-color`
- Versione oscura: `--config-accent-dark-color`
- Versione regolare: `--config-accent-color`
- Versione leggera: `--config-accent-light-color`
- Versione più chiara: `--config-accent-lighter-color`
- Versione più leggera: `--config-accent-lightest-color`

Ogni colore ha anche una versione RGB (con -rgb alla fine). Questo è utile per
Creazione di gradienti e altri effetti di colore.

Come impostazione di esempio un colore di sfondo con opacità:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ancora più opzioni di colore

Vuoi più scelte di colore? L'interfaccia utente di Seelen espone dozzine di
colori aggiuntivi del sistema. Dai un'occhiata a questo
[Referenziale di colore utile](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
Per tutte le opzioni disponibili.

Suggerimento professionale: quando il colore del tuo accento Windows cambia, i
temi dell'interfaccia utente Seelen si aggiornano automaticamente!
