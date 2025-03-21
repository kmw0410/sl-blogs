# **Selen UI: installatiemethoden en update kanalen**

## **Installatie -opties**

### **Microsoft Store (MSIX)**

Download de nieuwste versie van de Microsoft Store. Dit is de meest beveiligde
 en gebruiksvriendelijke optie, met automatische updates.

*   Voordelen:
    *   Automatische updates.
    *   Geverifieerd en goedgekeurd door Microsoft.
    *   Hoge beveiliging en betrouwbaarheid.
    *   Lightweighter -versie dan .exe -installatieprogramma omdat deze versie dat niet doet
         Bevat foutopsporingssymbolen.
*   Nadelen:
    *   Updates kunnen 1-3 werkdagen duren om goedgekeurd te worden.
    *   Moeilijker te debuggen en problemen te melden.

***

### **Winget (MSIX)**

Installeer de nieuwste versie met behulp van de volgende opdracht:

```pwsh
winget install --id Seelen.SeelenUI
```

Dezelfde voor- en nadelen van Microsoft Store met de plus van een snelle installatie via
 opdrachtregel.

***

### \*\*. Exe -installatieprogramma \*\*

Download het installatieprogramma Setup.exe van de pagina Releases en voer het uit.

*   Voordelen:
    *   Snellere installatie met onmiddellijke updates.
    *   Ontvangt meldingen voor nieuwe releases zodra ze beschikbaar zijn.
*   Nadelen:
    *   Niet digitaal ondertekend, wat antiviruswaarschuwingen kan activeren.
    *   Minder lichtgewicht dan het MSIX -installatieprogramma omdat deze versie foutopsporing bevat
         Symbolen.

## **Update kanalen**

> Indentendent van het updatekanaal Alle versies ontvangen automatische updates,
>  Ook als u een onstabiel updatekanaal gebruikt, ontvangt u ook updates van de
>  meer stabiele updatekanalen, voorbeeld: nachtelijke ontvangstupdates van nachtelijk maar
>  Ook uit bèta en release

### **Release (stabiel)**

Het meest veilige en aanbevolen kanaal voor alle gebruikers.

*   Functies:
    *   Grondig getest zonder kritische bugs.
    *   Ideaal voor productie en dagelijks gebruik.
    *   Beschikbaar op Microsoft Store, Winget, .msix en .exe.

### **Bèta**

Gericht op gebruikers die nieuwe functies willen proberen voordat ze officieel worden vrijgegeven.
 Dit kanaal bevat bèta's en release -kandidaten.

*   Functies:
    *   Bevat nieuwe functies die worden getest.
    *   Kan kleine bugs hebben.
    *   Frequentere updates dan de stabiele release.
    *   Alleen beschikbaar als .exe op de pagina Releases.

### **Nachtelijk**

Voor geavanceerde gebruikers en ontwikkelaars die toegang willen tot de nieuwste wijzigingen en
 experimentele kenmerken.

*   Functies:
    *   Bevat de meest recente wijzigingen, maar niet grondig getest.
    *   Kan bugs of onafgemaakte functies bevatten.
    *   Dagelijks bijgewerkt of met elke significante codeverandering.
    *   Alleen beschikbaar als .exe op de pagina Releases.

Lees meer over ON [Seelen ui bijna](./nightly.md)

## **Updates ontvangen op setup.exe vs msix**

Op MSIX worden updates beheerd door de Microsoft Store, maar op setup.exe zijn ze
 niet, dus een updater is opgenomen in de applicatie die u een
 Melding wanneer een update beschikbaar is.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Als u op de melding klikt, begint het met het downloaden en installeren van de
 Update, waarna het de applicatie automatisch opnieuw start.
