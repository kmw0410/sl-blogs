# UI Seelen: metodi di installazione e canali di aggiornamento

## Opzioni di installazione

### Microsoft Store (MSIX)

Scarica l'ultima versione da [Microsoft Store](https://www.microsoft.com/store).
Questo è il più sicuro e Opzione intuitiva, con aggiornamenti automatici.

**Pro:**

- Aggiornamenti automatici
- Verificato e approvato da Microsoft
- Alta sicurezza e affidabilità
- Versione più chiara di .exe Installer (nessun simboli di debug inclusi)

**Contro:**

- Gli aggiornamenti possono richiedere 1-3 giorni lavorativi per l'approvazione
  di Microsoft
- Più difficile da eseguire il debug e segnalare le questioni

---

### Winget (MSIX)

Installa l'ultima versione utilizzando il comando seguente:

> installazione alet --id seelen.seelenui

Offre gli stessi vantaggi della versione Microsoft Store con il aggiunto
comodità dell'installazione della riga di comando.

---

### .exe Installer

Scarica il programma di installazione setup.exe da
[Rilascia pagina](https://github.com/eythaann/Seelen-UI/releases) e eseguilo.

**Pro:**

- Aggiornamenti immediati disponibili
- Riceve notifiche di aggiornamento non appena vengono rilasciate nuove versioni
- Meglio per scopi di debug

**Contro:**

- Può innescare avvisi antivirus (non firmati digitalmente)
- Dimensione del file più grandi (include simboli di debug)

## Aggiorna canali

> Indipendentemente dal canale di aggiornamento scelto, tutte le versioni
> ricevono automatiche Aggiornamenti. I canali instabili ricevono anche
> aggiornamenti da canali più stabili (ad esempio, notturno riceve aggiornamenti
> sia da notte che beta/rilascio).

### Rilascio (stabile)

Il canale più sicuro e consigliato per tutti gli utenti.

**Caratteristiche:**

- Accuratamente testato senza bug critici
- Ideale per la produzione e l'uso quotidiano
- Disponibile su Microsoft Store, Winget (.MSIX) e AS .exe Installer

### Beta

Per gli utenti che desiderano accedere anticipati alle nuove funzionalità prima
del rilascio ufficiale.

**Caratteristiche:**

- Include le prossime funzionalità in test
- Può contenere bug minori
- Aggiornamenti più frequenti che stabili
- Disponibile solo come installatore .exe

### Notturna

Per gli utenti e gli sviluppatori avanzati che desiderano le ultime modifiche.

**Caratteristiche:**

- Contiene cambiamenti più recenti e non testati
- Può includere bug o funzionalità incomplete
- Aggiornato quotidianamente o con ogni significativa modifica del codice
- Disponibile solo come installatore .exe

Scopri di più sul canale notturno nel nostro
[Seelen Ui di notte](https://seelen.io/blog/nightly) documentazione.

## Meccanismo di aggiornamento: setup.exe vs msix

- **Msix:** Aggiornamenti gestiti automaticamente da Microsoft Store
- **Setup.exe:** Include un aggiornamento integrato che ti avvisa quando gli
  aggiornamenti sono disponibile

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Quando è disponibile un aggiornamento:

1. Fai clic sulla notifica
2. L'aggiornamento scaricherà e installerà l'aggiornamento
3. L'applicazione si riavvierà automaticamente
