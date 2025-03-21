# **Seelen UI: Asennusmenetelmät ja päivityskanavat**

## **Asennusvaihtoehdot**

### **Microsoft Store (MSIX)**

Lataa uusin versio Microsoft Storesta. Tämä on turvallisin
 ja käyttäjäystävällinen vaihtoehto, automaattisilla päivityksillä.

*   Pro:
    *   Automaattiset päivitykset.
    *   Microsoftin vahvistama ja hyväksymä.
    *   Korkea turvallisuus ja luotettavuus.
    *   Lightweighter -versio kuin .exe -asennusohjelma, koska tämä versio ei
         Sisältää virheenkorjaussymbolit.
*   Miinukset:
    *   Päivitykset voivat kestää 1-3 työpäivää hyväksyä.
    *   Vaikeampi virheenkorjaus ja ilmoittaminen asioista.

***

### **Winget (MSIX)**

Asenna uusin versio seuraavan komennon avulla:

```pwsh
winget install --id Seelen.SeelenUI
```

Sama Microsoft Store -hyödykkeet ja haitat pikaasennuksen plus kautta
 komentorivi.

***

### \*\*. Exe -asennusohjelma \*\*

Lataa setup.exe -asennusohjelma julkaisu -sivulta ja suorita se.

*   Pro:
    *   Nopeampi asennus välittömillä päivityksillä.
    *   Vastaanottaa ilmoituksia uusista julkaisuista heti, kun ne ovat saatavilla.
*   Miinukset:
    *   Ei digitaalisesti allekirjoitettu, mikä voi laukaista virustentorjuntavaroitukset.
    *   Vähemmän kevyt kuin MSIX -asennusohjelma, koska tämä versio sisältää virheenkorjauksen
         symbolit.

## **Päivitä kanavat**

> Päivityskanavan indencepdent Kaikki versiot saavat automaattiset päivitykset,
>  Myös jos käytät epävakaa päivityskanavaa, saavat myös päivitykset
>  Vakaammat päivityskanavat, esimerkki: iltaisin saavat päivitykset iltaisin, mutta
>  Myös beeta- ja julkaisusta

### **Vapauta (vakaa)**

Kaikille käyttäjille turvallisin ja suositeltavin kanava.

*   Ominaisuudet:
    *   Perusteellisesti testattu ilman kriittisiä virheitä.
    *   Ihanteellinen tuotantoon ja jokapäiväiseen käyttöön.
    *   Saatavana Microsoft Store, Winget, .Msix ja .exe.

### **Beeta**

Tarkoitettu käyttäjille, jotka haluavat kokeilla uusia ominaisuuksia ennen niiden virallista julkaisua.
 Tämä kanava sisältää betat ja vapauttavat ehdokkaat.

*   Ominaisuudet:
    *   Sisältää uusia ominaisuuksia testauksessa.
    *   Voi olla pieniä virheitä.
    *   Useammat päivitykset kuin vakaa julkaisu.
    *   Saatavana vain .exe julkaisu -sivulla.

### **Iltaisin**

Edistyneille käyttäjille ja kehittäjille, jotka haluavat pääsyn uusimpiin muutoksiin ja
 kokeelliset piirteet.

*   Ominaisuudet:
    *   Sisältää viimeisimmät muutokset, mutta niitä ei testata perusteellisesti.
    *   Voi sisältää virheitä tai keskeneräisiä ominaisuuksia.
    *   Päivitetty päivittäin tai jokaisella merkittävällä koodimuutoksella.
    *   Saatavana vain .exe -sivustolla.

Lue lisää jstk [Seelen ui lähes](./nightly.md)

## **Päivitysten vastaanottaminen asennus.exe vs msix**

Microsoft Store hallinnoi MSIX -päivityksiä, mutta setup.exe ne ovat
 ei, joten päivitys sisältyy sovellukseen, joka näyttää sinulle a
 Ilmoitus, kun päivitys on käytettävissä.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jos napsautat ilmoitusta, se alkaa ladata ja asentaa
 Päivitys, jonka jälkeen se käynnistää sovelluksen uudelleen automaattisesti.
