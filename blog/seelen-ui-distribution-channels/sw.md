# **Seelen UI: Njia za ufungaji na sasisha chaneli**

## **Chaguzi za usanikishaji**

### **Duka la Microsoft (MSIX)**

Pakua toleo la hivi karibuni kutoka Duka la Microsoft. Hii ndio salama zaidi
 na chaguo la kupendeza la watumiaji, na sasisho za moja kwa moja.

*   Faida:
    *   Sasisho za moja kwa moja.
    *   Imethibitishwa na kupitishwa na Microsoft.
    *   Usalama wa hali ya juu na kuegemea.
    *   Toleo nyepesi kuliko .exe kisakinishi kwa sababu toleo hili halifanyi
         Ni pamoja na alama za Debug.
*   Cons:
    *   Sasisho zinaweza kuchukua siku za biashara 1-3 kupitishwa.
    *   Vigumu kurekebisha na kuripoti maswala.

***

### **Winget (MSIX)**

Weka toleo la hivi karibuni kwa kutumia amri ifuatayo:

```pwsh
winget install --id Seelen.SeelenUI
```

Faida sawa na hasara za Duka la Microsoft na pamoja na usanikishaji wa haraka kupitia
 mstari wa amri.

***

### \*\*. exe kisakinishi \*\*

Pakua kisakinishi cha setup.exe kutoka ukurasa wa kutolewa na uendeshe.

*   Faida:
    *   Usanikishaji wa haraka na sasisho za haraka.
    *   Inapokea arifa za kutolewa mpya mara tu zinapopatikana.
*   Cons:
    *   Haijasainiwa kwa dijiti, ambayo inaweza kusababisha maonyo ya antivirus.
    *   Uzani mdogo kuliko kisakinishi cha MSIX kwa sababu toleo hili linajumuisha utatuzi
         alama.

## **Sasisha vituo**

> INDENPENDENT ya kituo cha sasisho matoleo yote hupokea sasisho moja kwa moja,
>  Pia ikiwa kutumia kituo chako cha sasisho kisicho na msimamo pia kitapokea sasisho za
>  Vituo vya sasisho thabiti zaidi, Mfano: Kupokea Sasisho za Usiku kutoka Usiku lakini
>  Pia kutoka kwa beta na kutolewa

### **Kutolewa (thabiti)**

Kituo salama na kilichopendekezwa kwa watumiaji wote.

*   Vipengee:
    *   Kupimwa kabisa bila mende muhimu.
    *   Inafaa kwa uzalishaji na matumizi ya kila siku.
    *   Inapatikana kwenye Duka la Microsoft, Winget, .msix, na .exe.

### **Beta**

Inayolenga watumiaji ambao wanataka kujaribu huduma mpya kabla ya kutolewa rasmi.
 Kituo hiki ni pamoja na betas na wagombea wa kutolewa.

*   Vipengee:
    *   Inayo huduma mpya chini ya upimaji.
    *   Inaweza kuwa na mende mdogo.
    *   Sasisho za mara kwa mara zaidi kuliko kutolewa kwa utulivu.
    *   Inapatikana tu kama .exe kwenye ukurasa wa kutolewa.

### **Usiku**

Kwa watumiaji wa hali ya juu na watengenezaji ambao wanataka ufikiaji wa mabadiliko ya hivi karibuni na
 Vipengele vya majaribio.

*   Vipengee:
    *   Ni pamoja na mabadiliko ya hivi karibuni, lakini hayajapimwa kabisa.
    *   Inaweza kuwa na mende au huduma ambazo hazijakamilika.
    *   Imesasishwa kila siku au kwa kila mabadiliko muhimu ya nambari.
    *   Inapatikana tu kama .exe kwenye ukurasa wa kutolewa.

Soma zaidi juu ya [Seelen ui karibu](./nightly.md)

## **Kupokea sasisho kwenye setUp.exe vs MSIX**

Kwenye sasisho za MSIX zinasimamiwa na Duka la Microsoft, lakini kwenye setup.exe ziko
 Sio, kwa hivyo sasisho linajumuishwa na programu hii itakuonyesha a
 Arifa wakati sasisho inapatikana.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ukibonyeza arifa itaanza kupakua na kusanikisha
 Sasisha, baada ya hapo itaanzisha tena programu moja kwa moja.
