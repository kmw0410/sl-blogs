# **Seeleni kasutajaliides: installimismeetodid ja värskenduskanalid**

## **Installimisvalikud**

### **Microsofti pood (MSIX)**

Laadige uusim versioon Microsofti poest. See on kõige turvalisem
 ja kasutajasõbralik valik koos automaatsete värskendustega.

*   Plussid:
    *   Automaatsed värskendused.
    *   Microsofti kinnitatud ja heaks kiitnud.
    *   Kõrge turvalisus ja usaldusväärsus.
    *   Lightweighter versioon kui .exe installija, kuna see versioon seda ei tee
         Sisaldab silumisümbolle.
*   Miinused:
    *   Värskenduste kinnitamiseks võib kuluda 1-3 tööpäeva.
    *   Raskem siluda ja probleemidest teatada.

***

### **Winget (MSIX)**

Installige uusim versioon, kasutades järgmist käsku:

```pwsh
winget install --id Seelen.SeelenUI
```

Samad Microsofti poe plussid ja miinused koos kiire installimise pluss
 käsurida.

***

### \*\*. Exe installija \*\*

Laadige lehel Releasesi installija SUTUP.EXE alla ja käivitage see.

*   Plussid:
    *   Kiirem installimine koos viivitamatute värskendustega.
    *   Saab teatisi uute väljaannete kohta kohe, kui need on saadaval.
*   Miinused:
    *   Pole digitaalselt allkirjastatud, mis võib põhjustada viirusetõrjehoiatusi.
    *   Vähem kerge kui MSIX -i installija, kuna see versioon sisaldab silumist
         Sümbolid.

## **Värskendage kanaleid**

> Uuenduskanali innustatavad kõik versioonid saavad automaatseid värskendusi,
>  Ka siis, kui kasutate ebastabiilset värskenduskanalit
>  Stabiilsemad värskenduskanalid, näide: öised saavad värskendusi öistelt, kuid
>  ka beetaversioonist ja vabastamisest

### **Vabastamine (stabiilne)**

Kõigi kasutajatele kõige turvalisem ja soovitatav kanal.

*   Funktsioonid:
    *   Põhjalikult testitud ilma kriitiliste vigadeta.
    *   Ideaalne tootmiseks ja igapäevaseks kasutamiseks.
    *   Saadaval Microsoft Store'is, Winget, .mix ja .exe.

### **Beeta**

Suunatud kasutajatele, kes soovivad proovida uusi funktsioone enne ametlikult vabastamist.
 See kanal sisaldab beetasid ja vabastamiskandidaate.

*   Funktsioonid:
    *   Sisaldab uusi funktsioone testimisel.
    *   Võib olla väiksemaid vigu.
    *   Sagedasemad värskendused kui stabiilne väljaanne.
    *   Saadaval ainult kui .exe lehel Releases.

### **Öösel**

Arenenud kasutajatele ja arendajatele, kes soovivad juurdepääsu uusimatele muudatustele ja
 eksperimentaalsed omadused.

*   Funktsioonid:
    *   Sisaldab viimaseid muudatusi, kuid mitte põhjalikult testitud.
    *   Võib sisaldada vigu või lõpetamata funktsioone.
    *   Uuendatud iga päev või iga olulise koodimuutusega.
    *   Saadaval on ainult .exe lehel väljaanded.

Loe lähemalt [Seelen ui sallly](./nightly.md)

## **SETUP.EXE VS MSIX -i värskenduste saamine**

MSIX -i värskendusi haldab Microsofti pood, kuid saidil SETUP.EXE on need
 mitte, nii et värskendaja on lisatud rakendusega, mis näitab teile a
 teatis, kui värskendus on saadaval.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kui klõpsate teatisel, hakkab see alla laadima ja installima
 Värskendus, mille järel see rakenduse automaatselt taaskäivitab.
