---
title: Canale de distribuție UI Seelen
lastRevision: 13-02-2025
published: 13-02-2025
description: Aflați mai multe despre diferitele canale de distribuție
  disponibile pentru UI Seelen
author: Eythaann

---

# UI Seelen: Metode de instalare și canale de actualizare

## Opțiuni de instalare

### Microsoft Store (MSIX)

Descărcați cea mai recentă versiune din
[Magazin Microsoft](https://www.microsoft.com/store). Acesta este cel mai sigur și
Opțiune ușor de utilizat, cu actualizări automate.

**Pro:**

* Actualizări automate
* Verificat și aprobat de Microsoft
* Securitate ridicată și fiabilitate
* Versiune mai ușoară decât instalatorul .exe (incluse simboluri de depanare)

**Contra:**

* Actualizările pot dura 1-3 zile lucrătoare pentru aprobarea Microsoft
* Mai dificil de depanat și de raportare probleme

***

### Winget (MSIX)

Instalați cea mai recentă versiune folosind următoarea comandă:

> Winget Install --d seelen.seelenui

Oferă aceleași avantaje ca și versiunea Microsoft Store cu adăugarea
Comoditatea instalării liniei de comandă.

***

### .exe instalator

Descărcați instalatorul setup.exe din
[Pagina de eliberare](https://github.com/eythaann/Seelen-UI/releases) și rulează -l.

**Pro:**

* Actualizări imediate disponibile
* Primește notificări de actualizare imediat ce sunt lansate noi versiuni
* Mai bine în scopuri de depanare

**Contra:**

* Poate declanșa avertismente antivirus (nu sunt semnate digital)
* Dimensiunea mai mare a fișierului (include simboluri de depanare)

## Actualizați canalele

> Indiferent de canalul de actualizare ales, toate versiunile primesc automat
> Actualizări. Canalele instabile primesc, de asemenea, actualizări de la mai multe canale stabile
> (de exemplu, Noaptea primește actualizări atât de la noapte, cât și de beta/versiune).

### Eliberare (stabil)

Cel mai sigur și recomandat canal pentru toți utilizatorii.

**Caracteristici:**

* Testat în detaliu fără bug -uri critice
* Ideal pentru producție și utilizare de zi cu zi
* Disponibil pe Microsoft Store, Winget (.msix) și AS .exe Installer

### Beta

Pentru utilizatorii care doresc acces timpuriu la noi funcții înainte de lansarea oficială.

**Caracteristici:**

* Include caracteristicile viitoare sub testare
* Poate conține erori minore
* Actualizări mai frecvente decât stabile
* Disponibil doar ca instalator .exe

### Noaptea

Pentru utilizatorii avansați și dezvoltatorii care doresc cele mai recente modificări.

**Caracteristici:**

* Conține cele mai recente schimbări testate
* Poate include bug -uri sau funcții incomplete
* Actualizat zilnic sau cu fiecare modificare semnificativă a codului
* Disponibil doar ca instalator .exe

Aflați mai multe despre canalul de noapte din
[Seelen Ui Nightly](https://seelen.io/blog/nightly) documentare.

## Mecanism de actualizare: setup.exe vs MSIX

* **MSIX:** Actualizări gestionate automat de Microsoft Store
* **Setup.exe:** Include Updater încorporat care vă notifică atunci când sunt actualizări
  disponibil

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Când este disponibilă o actualizare:

1. Faceți clic pe notificare
2. Updater va descărca și instala actualizarea
3. Aplicația va reporni automat
