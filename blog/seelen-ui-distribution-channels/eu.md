# **Seelen UI: Instalazio metodoak eta eguneratze kanalak**

## **Instalazio aukerak**

### **Microsoft Store (MSIX)**

Deskargatu azken bertsioa Microsoft dendatik. Hau da seguruena
 eta erabilgarritasun aukera, eguneratze automatikoekin.

*   Pros:
    *   Eguneratze automatikoak.
    *   Microsoft-ek egiaztatu eta onartu du.
    *   Segurtasun eta fidagarritasun handia.
    *   Bertsio arina .exe instalatzailea baino bertsio hau ez delako
         arazketa sinboloak biltzen ditu.
*   Kontrak:
    *   Eguneratzeak 1-3 lanegun har ditzake homologatzeko.
    *   Zailagoa da arazoren bat eta txostenak.

***

### **WINGET (MSIX)**

Instalatu azken bertsioa komando hau erabiliz:

```pwsh
winget install --id Seelen.SeelenUI
```

Microsoft Store-ren alde eta alde berak instalazio azkar baten bidez
 komando lerroa.

***

### \*\*. EXE Instalatzailea \*\*

Deskargatu setup.exe instalatzailea kaleratzeen orrialdetik eta exekutatu.

*   Pros:
    *   Instalazio azkarragoa berehalako eguneratzeekin.
    *   Eskuragarri daudenean kaleratze berrien jakinarazpenak jasotzen ditu.
*   Kontrak:
    *   Ez da digitalki sinatuta, eta horrek antibirusaren abisuak sor ditzake.
    *   MSIX instalatzailea baino arinagoa da bertsio honek arazketa dakar
         sinboloak.

## **Eguneratu kanalak**

> Eguneratze kanalaren indibidualitateak bertsio guztiak eguneratze automatikoak jasotzen ditu,
>  Era berean, eguneratze ezegonkorreko kanal bat erabiltzeak ere eguneratzeak jasoko ditu
>  Eguneratze kanal egonkorragoak, adibidez: gaueko eguneratzeak gaueko baina
>  baita beta eta askatzea ere

### **Askapena (egonkorra)**

Erabiltzaile guztientzako kanalik eta gomendagarriena.

*   Ezaugarriak:
    *   Akats kritikorik gabe probatuta.
    *   Ekoizpenerako eta eguneroko erabilerarako aproposa.
    *   Microsoft dendan, WINGET, .MSIX eta .exe eskuragarri daude.

### **Beta**

Ezaugarri berriak probatu nahi dituzten erabiltzaileei zuzenduta, ofizialki askatu aurretik.
 Kanal honek beas eta kaleratzeko hautagaiak biltzen ditu.

*   Ezaugarriak:
    *   Proba azpian funtzio berriak ditu.
    *   Akats txikiak izan ditzake.
    *   Ohar egonkorragoa baino eguneratze gehiago.
    *   .Exe bertsioan bakarrik erabilgarri.

### **Gauez**

Azken aldaketetara sarbidea nahi duten erabiltzaile eta garatzaile aurreratuetarako
 Ezaugarri esperimentalak.

*   Ezaugarriak:
    *   Azken aldaketak barne hartzen ditu, baina ez dira ondo probatu.
    *   Akatsak edo amaitu gabeko ezaugarriak izan ditzake.
    *   Eguneroko eguneratua edo kode aldaketa esanguratsu guztiekin.
    *   .Exe gisa bakarrik eskuragarri dago.

Irakurri gehiago buruz [Seelen ui nignly](./nightly.md)

## **Konfect.exe vs Msix-en eguneratzeak jasotzea**

MSIX eguneratzeak Microsoft dendak kudeatzen ditu, baina konfigurazio.exe dira
 ez, beraz, eguneratzaile batek aplikazioarekin batera sartzen da
 Eguneratze bat eskuragarri dagoenean jakinarazpena.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jakinarazpenean klik egiten baduzu deskargatzen eta instalatzen hasiko da
 Eguneratu, eta horren ondoren, aplikazioa automatikoki berrabiaraziko da.
