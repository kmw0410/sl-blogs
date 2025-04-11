# Seelen UI: Installasie -metodes en opdateringskanale

## Installasie -opsies

### Microsoft Store (MSIX)

Laai die nuutste weergawe van die
[Microsoft Store](https://www.microsoft.com/store). Dit is die veiligste en
Gebruikersvriendelike opsie, met outomatiese opdaterings.

**Voordele:**

- Outomatiese opdaterings
- Verifieer en goedgekeur deur Microsoft
- Hoë sekuriteit en betroubaarheid
- Ligter weergawe as .exe -installeerder (geen ontfoutsimbole ingesluit nie)

**Nadat:**

- Opdaterings kan 1-3 werksdae neem vir Microsoft-goedkeuring
- Moeiliker om kwessies te ontfout en aan te meld

---

### Winget (MSIX)

Installeer die nuutste weergawe met behulp van die volgende opdrag:

> Winget Install --id Seelen.Seelenui

Bied dieselfde voordele as die Microsoft Store -weergawe met die bygevoeg Gemak
van opdragreëlinstallasie.

---

### .exe installeerder

Laai die setup.exe -installeerder af van die
[Verkladingsbladsy](https://github.com/eythaann/Seelen-UI/releases) en hardloop
dit.

**Voordele:**

- Onmiddellike opdaterings beskikbaar
- Ontvang opdateringskennisgewings sodra nuwe weergawes vrygestel word
- Beter vir ontfoutingsdoeleindes

**Nadat:**

- Mag antiviruswaarskuwings veroorsaak (nie digitaal onderteken nie)
- Groter lêergrootte (sluit ontfoutsimbole in)

## UPDATE KANALE

> Ongeag u gekose opdateringskanaal, alle weergawes ontvang outomaties
> opdaterings. Onstabiele kanale ontvang ook opdaterings van meer stabiele
> kanale (Bv. Nightly ontvang opdaterings van beide nag en beta/vrystelling).

### Vrystelling (stabiel)

Die veiligste en aanbevole kanaal vir alle gebruikers.

**Kenmerke:**

- Deeglik getoets sonder kritiese foute
- Ideaal vir produksie en alledaagse gebruik
- Beskikbaar in Microsoft Store, Winget (.msix), en as .exe -installeerder

### Beta

Vir gebruikers wat vroeë toegang tot nuwe funksies wil hê voor die amptelike
vrystelling.

**Kenmerke:**

- Sluit opkomende funksies onder toetsing in
- Kan geringe foute bevat
- Meer gereelde opdaterings as stabiel
- Slegs beskikbaar as .exe -installeerder

### Nagtelik

Vir gevorderde gebruikers en ontwikkelaars wat die nuutste veranderinge wil hê.

**Kenmerke:**

- Bevat die mees onlangse, ongetoetste veranderinge
- Kan foute of onvolledige funksies insluit
- Daagliks opgedateer of met elke beduidende kodeverandering
- Slegs beskikbaar as .exe -installeerder

Lees meer oor die nagtelike kanaal in ons
[Seelen Ui Nightly](https://seelen.io/blog/nightly) dokumentasie.

## Opdateringsmeganisme: setup.exe vs msix

- **MSIX:** Opdaterings word outomaties deur Microsoft Store bestuur
- **Setup.exe:** Bevat ingeboude opdatering wat u in kennis stel wanneer
  opdaterings is beskikbaar

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Wanneer 'n opdatering beskikbaar is:

1. Klik op die kennisgewing
2. Die opdatering sal die opdatering aflaai en installeer
3. Toepassing sal outomaties weer begin
