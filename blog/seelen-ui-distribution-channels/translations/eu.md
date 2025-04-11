# Seelen UI: Instalazio metodoak eta eguneratze kanalak

## Instalazio aukerak

### Microsoft Store (MSIX)

Deskargatu azken bertsioa [Microsoft Store](https://www.microsoft.com/store).
Hau da seguruena eta Erabilerrazko aukera, eguneratze automatikoekin.

**Pros:**

- Eguneratze automatikoak
- Microsoft-ek egiaztatu eta onartu du
- Segurtasun eta fidagarritasun handia
- .Exe instalatzailea baino bertsio arinagoa (arazketa sinboloik gabe)

**Kontrak:**

- Eguneratzeak 1-3 lanegun iraun ditzake Microsoft oniritzia egiteko
- Arazo zailagoak gaiak arazteko eta salatzeko

---

### WINGET (MSIX)

Instalatu azken bertsioa komando hau erabiliz:

> WINGET INSTALLATU --ID SEELEN.SEELENUI

Gehitutako Microsoft Store bertsioaren onura berak eskaintzen ditu Komando
lerroko instalazioaren erosotasuna.

---

### .exe instalatzailea

Deskargatu setup.exe instalatzailea
[Argitalpen orria](https://github.com/eythaann/Seelen-UI/releases) eta
exekutatu.

**Pros:**

- Berehalako eguneratzeak eskuragarri daude
- Eguneratze jakinarazpenak jasotzen ditu bertsio berriak kaleratu bezain laster
- Hobe arazketa helburuetarako

**Kontrak:**

- Antivirus abisuak sor ditzake (digitalki sinatuta)
- Fitxategiaren tamaina handiagoa (arazketa sinboloak biltzen ditu)

## Eguneratu kanalak

> Aukeratutako eguneratze kanala edozein dela ere, bertsio guztiek automatikoa
> jasotzen dute Eguneratzeak. Kanal ezegonkorrak kanal egonkorragoen
> eguneratzeak ere jasotzen dira (E.G., gauean gaueko eguneratzeak eta beta /
> askapenak jasotzen ditu).

### Askapena (egonkorra)

Erabiltzaile guztientzako kanalik eta gomendagarriena.

**Ezaugarriak:**

- Sakonki probatu gabeko akats kritikorik gabe
- Ekoizpenerako eta eguneroko erabilerarako aproposa
- Microsoft dendan, WINGET (.MSIX) eta .exe instalatzaile gisa erabilgarri

### Beta

Ohar ofizialaren aurretik funtzio berrietarako sarbide goiztiarra nahi duten
erabiltzaileentzat.

**Ezaugarriak:**

- Datozen funtzioak probatzen ditu
- Akats txikiak izan ditzake
- Egonkorragoak diren eguneratzeak
- .Exe instalatzaile gisa bakarrik erabilgarri

### Gauez

Azken aldaketak nahi dituzten erabiltzaile eta garatzaile aurreratuetarako.

**Ezaugarriak:**

- Aldaketa berrienak eta ez ditu
- Akatsak edo osatu gabeko ezaugarriak izan ditzake
- Eguneratua eguneratuta edo kode aldaketa esanguratsu bakoitzarekin
- .Exe instalatzaile gisa bakarrik erabilgarri

Argibide gehiago gaueko kanalari buruz
[Seelen Ui Gaueko](https://seelen.io/blog/nightly) Dokumentazioa.

## Eguneratze mekanismoa: setup.exe vs msix

- **MSIX:** Microsoft dendak automatikoki kudeatutako eguneratzeak
- **Setup.exe:** Eguneratzeak direnean jakinarazten zaizun eguneratzailea barne
  hartzen du erabilgarri

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Eguneratze bat eskuragarri dagoenean:

1. Egin klik jakinarazpenean
2. Eguneratzailea eguneratzea deskargatu eta instalatuko du
3. Aplikazioa automatikoki berrabiaraziko da
