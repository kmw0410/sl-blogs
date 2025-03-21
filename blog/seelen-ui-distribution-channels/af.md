# **Seelen UI: Installasie -metodes en opdateringskanale**

## **Installasie -opsies**

### **Microsoft Store (MSIX)**

Laai die nuutste weergawe van die Microsoft -winkel af. Dit is die veiligste
 en gebruikersvriendelike opsie, met outomatiese opdaterings.

*   Voordele:
    *   Outomatiese opdaterings.
    *   Verifieer en goedgekeur deur Microsoft.
    *   Hoë sekuriteit en betroubaarheid.
    *   LightWeighter -weergawe as .exe -installeerder omdat hierdie weergawe dit nie doen nie
         Sluit ontfoutsimbole in.
*   Nadat:
    *   Opdaterings kan 1-3 werksdae neem om goedgekeur te word.
    *   Moeiliker om probleme te ontfout en aan te meld.

***

### **Winget (MSIX)**

Installeer die nuutste weergawe met behulp van die volgende opdrag:

```pwsh
winget install --id Seelen.SeelenUI
```

Dieselfde voordele en nadele van Microsoft Store met die plus van 'n vinnige installasie via
 opdragreël.

***

### \*\*. exe installeerder \*\*

Laai die setup.exe -installeerder af van die vrystellingsbladsy en voer dit uit.

*   Voordele:
    *   Vinnige installasie met onmiddellike opdaterings.
    *   Ontvang kennisgewings vir nuwe vrystellings sodra dit beskikbaar is.
*   Nadat:
    *   Nie digitaal onderteken nie, wat antiviruswaarskuwings kan veroorsaak.
    *   Minder liggewig as die MSIX -installeerder, want hierdie weergawe bevat ontfout
         simbole.

## **UPDATE KANALE**

> IndenPendent van die opdateringskanaal Alle weergawes ontvang outomatiese opdaterings,
>  Ook as u 'n onstabiele opdateringskanaal gebruik, sal dit ook opdaterings van die
>  Meer stabiele opdateringskanale, voorbeeld: nagtelike opdaterings van nagtelik ontvang
>  ook van beta en vrylating

### **Vrystelling (stabiel)**

Die veiligste en aanbevole kanaal vir alle gebruikers.

*   Kenmerke:
    *   Deeglik getoets sonder kritiese foute.
    *   Ideaal vir produksie en alledaagse gebruik.
    *   Beskikbaar in Microsoft Store, Winget, .Msix en .exe.

### **Beta**

Gemik op gebruikers wat nuwe funksies wil probeer voordat hulle amptelik vrygestel word.
 Hierdie kanaal bevat betas en vrystellingskandidate.

*   Kenmerke:
    *   Bevat nuwe funksies onder toetsing.
    *   Kan geringe foute hê.
    *   Meer gereelde opdaterings as die stabiele weergawe.
    *   Slegs beskikbaar as .exe op die vrystellingsblad.

### **Nagtelik**

Vir gevorderde gebruikers en ontwikkelaars wat toegang tot die nuutste veranderinge wil hê en
 Eksperimentele kenmerke.

*   Kenmerke:
    *   Sluit die mees onlangse veranderinge in, maar nie deeglik getoets nie.
    *   Kan foute of onvoltooide funksies bevat.
    *   Daagliks opgedateer of met elke beduidende kodeverandering.
    *   Slegs beskikbaar as .exe op die vrystellingsbladsy.

Lees meer oor op [Seelen Ui Nighly](./nightly.md)

## **Herstel van opdaterings op setup.exe vs msix**

Op MSIX -opdaterings word deur die Microsoft Store bestuur, maar op setup.exe is dit
 nie, dus is 'n opdatering by die toepassing ingesluit, dit sal u 'n
 Kennisgewing wanneer 'n opdatering beskikbaar is.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

As u op die kennisgewing klik, sal dit die aflaai en installeer
 Opdatering, waarna dit die toepassing outomaties sal herbegin.
