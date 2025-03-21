# **UI Seelen: metodi di installazione e canali di aggiornamento**

## **Opzioni di installazione**

### **Microsoft Store (MSIX)**

Scarica l'ultima versione da Microsoft Store. Questo è il più sicuro
 e opzione intuitiva, con aggiornamenti automatici.

*   Pro:
    *   Aggiornamenti automatici.
    *   Verificato e approvato da Microsoft.
    *   Alta sicurezza e affidabilità.
    *   Versione Lightweighter di .exe Installer perché questa versione no
         Include simboli di debug.
*   Contro:
    *   Gli aggiornamenti possono richiedere 1-3 giorni lavorativi per essere approvati.
    *   Più difficile da eseguire il debug e segnalare i problemi.

***

### **Winget (MSIX)**

Installa l'ultima versione utilizzando il comando seguente:

```pwsh
winget install --id Seelen.SeelenUI
```

Stessi pro e contro di Microsoft Store con il vantaggio di una rapida installazione tramite
 riga di comando.

***

### \*\*. Exe Installer \*\*

Scarica il programma di installazione setup.exe dalla pagina delle versioni ed eseguilo.

*   Pro:
    *   Installazione più veloce con aggiornamenti immediati.
    *   Riceve notifiche per le nuove versioni non appena sono disponibili.
*   Contro:
    *   Non firmato digitalmente, che può innescare avvisi antivirus.
    *   Meno leggero rispetto all'installatore MSIX perché questa versione include il debug
         simboli.

## **Aggiorna canali**

> Indenpendente del canale di aggiornamento Tutte le versioni ricevono aggiornamenti automatici,
>  anche se si utilizza un canale di aggiornamento instabile riceverà anche gli aggiornamenti del
>  Canali di aggiornamento più stabili, Esempio: aggiornamenti di ricezione notturna da notte ma
>  anche da beta e rilascio

### **Rilascio (stabile)**

Il canale più sicuro e consigliato per tutti gli utenti.

*   Caratteristiche:
    *   Testato accuratamente senza bug critici.
    *   Ideale per la produzione e l'uso quotidiano.
    *   Disponibile su Microsoft Store, Winget, .Msix e .exe.

### **Beta**

Mirato agli utenti che desiderano provare nuove funzionalità prima che vengano rilasciati ufficialmente.
 Questo canale include beta e candidati a rilascio.

*   Caratteristiche:
    *   Contiene nuove funzionalità in test.
    *   Potrebbe avere bug minori.
    *   Aggiornamenti più frequenti rispetto alla versione stabile.
    *   Disponibile solo come .exe nella pagina delle versioni.

### **Notturna**

Per utenti e sviluppatori avanzati che desiderano accedere alle ultime modifiche e
 Caratteristiche sperimentali.

*   Caratteristiche:
    *   Include le modifiche più recenti, ma non completamente testate.
    *   Può contenere bug o funzionalità incompiute.
    *   Aggiornato quotidianamente o con ogni modifica del codice significativa.
    *   Disponibile solo come .exe nella pagina delle versioni.

Leggi di più su On [Seelen Ui Nightly](./nightly.md)

## **Aggiornamenti di ricezione su setup.exe vs msix**

Sugli aggiornamenti MSIX sono gestiti da Microsoft Store, ma su setup.exe lo sono
 no, quindi un aggiornamento è incluso nell'applicazione questo ti mostrerà un
 Notifica quando è disponibile un aggiornamento.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Se si fa clic sulla notifica, inizierà a scaricare e installare il
 Aggiornamento, dopo di che riavverrà automaticamente l'applicazione.
