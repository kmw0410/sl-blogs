# **UI Seelen: Metode de instalare și canale de actualizare**

## **Opțiuni de instalare**

### **Microsoft Store (MSIX)**

Descărcați cea mai recentă versiune din magazinul Microsoft. Acesta este cel mai sigur
 și opțiune ușor de utilizat, cu actualizări automate.

*   Pro:
    *   Actualizări automate.
    *   Verificat și aprobat de Microsoft.
    *   Securitate ridicată și fiabilitate.
    *   Versiune ușoară decât instalatorul .exe, deoarece această versiune nu
         Include simboluri de depanare.
*   Contra:
    *   Actualizările pot dura 1-3 zile lucrătoare pentru a fi aprobate.
    *   Mai greu de depanat și raportat probleme.

***

### **Winget (MSIX)**

Instalați cea mai recentă versiune folosind următoarea comandă:

```pwsh
winget install --id Seelen.SeelenUI
```

Aceleași pro și contra de la Microsoft Store cu plus o instalație rapidă prin intermediul
 linie de comandă.

***

### \*\*. Exe Installer \*\*

Descărcați instalatorul Setup.exe din pagina de lansare și rulați -l.

*   Pro:
    *   Instalare mai rapidă cu actualizări imediate.
    *   Primește notificări pentru noile versiuni imediat ce sunt disponibile.
*   Contra:
    *   Nu este semnat digital, ceea ce poate declanșa avertismente antivirus.
    *   Mai puțin ușor decât instalatorul MSIX, deoarece această versiune include depanarea
         simboluri.

## **Actualizați canalele**

> IndenPendent al canalului de actualizare Toate versiunile primesc actualizări automate,
>  De asemenea, dacă utilizați un canal de actualizare instabil va primi și actualizări ale
>  Canale de actualizare mai stabile, Exemplu: Noaptea de a primi actualizări de la noapte, dar
>  De asemenea, din beta și eliberare

### **Eliberare (stabil)**

Cel mai sigur și recomandat canal pentru toți utilizatorii.

*   Caracteristici:
    *   Testat bine fără bug -uri critice.
    *   Ideal pentru producție și utilizare de zi cu zi.
    *   Disponibil pe Microsoft Store, Winget, .msix și .exe.

### **Beta**

Uitați de utilizatorii care doresc să încerce noi funcții înainte de a fi lansate oficial.
 Acest canal include betas și candidați la eliberare.

*   Caracteristici:
    *   Conține noi funcții în testare.
    *   Ar putea avea erori minore.
    *   Actualizări mai frecvente decât versiunea stabilă.
    *   Disponibil doar ca .exe pe pagina de lansare.

### **Noaptea**

Pentru utilizatorii și dezvoltatorii avansați care doresc acces la cele mai recente modificări și
 Caracteristici experimentale.

*   Caracteristici:
    *   Include cele mai recente modificări, dar nu testate în detaliu.
    *   Poate conține erori sau caracteristici neterminate.
    *   Actualizat zilnic sau cu fiecare modificare semnificativă a codului.
    *   Disponibil doar ca .exe pe pagina de lansare.

Citiți mai multe despre [Seelen ui aproape](./nightly.md)

## **Primirea actualizărilor pe setup.exe vs MSIX**

Pe MSIX Actualizările sunt gestionate de Microsoft Store, dar pe Setup.exe sunt
 Nu, deci un actualizat este inclus în aplicația, aceasta vă va arăta un
 Notificare Când este disponibilă o actualizare.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Dacă faceți clic pe notificare, va începe să descărcați și să instalați
 Actualizare, după care va reporni aplicația automat.
