# **Seelen UI: Dulliau Gosod a Diweddaru Sianeli**

## **Opsiynau Gosod**

### **Microsoft Store (MSIX)**

Dadlwythwch y fersiwn ddiweddaraf o siop Microsoft. Dyma'r mwyaf diogel
 ac opsiwn hawdd ei ddefnyddio, gyda diweddariadau awtomatig.

*   Manteision:
    *   Diweddariadau awtomatig.
    *   Wedi'i wirio a'i gymeradwyo gan Microsoft.
    *   Diogelwch a dibynadwyedd uchel.
    *   Fersiwn ysgafn na gosodwr .exe oherwydd nad yw'r fersiwn hon
         Yn cynnwys symbolau dadfygio.
*   Anfanteision:
    *   Gall diweddariadau gymryd 1-3 diwrnod busnes i'w cymeradwyo.
    *   Yn anoddach dadfygio ac adrodd ar faterion.

***

### **Winget (Msix)**

Gosodwch y fersiwn ddiweddaraf gan ddefnyddio'r gorchymyn canlynol:

```pwsh
winget install --id Seelen.SeelenUI
```

Yr un manteision ac anfanteision i Microsoft Store gyda phlws gosodiad cyflym trwy
 llinell orchymyn.

***

### \*\*. Gosodwr exe \*\*

Dadlwythwch y gosodwr setup.exe o'r dudalen rhyddhau a'i rhedeg.

*   Manteision:
    *   Gosodiad cyflymach gyda diweddariadau ar unwaith.
    *   Yn derbyn hysbysiadau ar gyfer datganiadau newydd cyn gynted ag y byddant ar gael.
*   Anfanteision:
    *   Heb ei lofnodi'n ddigidol, a allai sbarduno rhybuddion gwrthfeirws.
    *   Llai ysgafn na'r gosodwr Msix oherwydd bod y fersiwn hon yn cynnwys dadfygio
         symbolau.

## **Diweddaru Sianeli**

> Yn ddibynnol ar y sianel ddiweddaru mae pob fersiwn yn derbyn diweddariadau awtomatig,
>  hefyd os ydych chi'n defnyddio sianel ddiweddaru ansefydlog hefyd yn derbyn diweddariadau o'r
>  Sianeli diweddaru mwy sefydlog, enghraifft: Diweddariadau Derbyniol Nosonol o Nightly OND
>  hefyd o beta a rhyddhau

### **Rhyddhau (Sefydlog)**

Y sianel fwyaf diogel ac argymelledig ar gyfer pob defnyddiwr.

*   Nodweddion:
    *   Profwyd yn drylwyr heb unrhyw chwilod beirniadol.
    *   Yn ddelfrydol ar gyfer cynhyrchu a defnyddio bob dydd.
    *   Ar gael ar Microsoft Store, Winget, .Msix, a .exe.

### **Beta**

Wedi'i anelu at ddefnyddwyr sydd am roi cynnig ar nodweddion newydd cyn iddynt gael eu rhyddhau'n swyddogol.
 Mae'r sianel hon yn cynnwys betas ac ymgeiswyr rhyddhau.

*   Nodweddion:
    *   Yn cynnwys nodweddion newydd o dan brofion.
    *   Gallai fod â mân chwilod.
    *   Diweddariadau amlach na'r datganiad sefydlog.
    *   Ar gael yn unig fel .exe ar y dudalen rhyddhau.

### **Bob nos**

Ar gyfer defnyddwyr a datblygwyr uwch sydd eisiau mynediad i'r newidiadau diweddaraf a
 nodweddion arbrofol.

*   Nodweddion:
    *   Yn cynnwys y newidiadau mwyaf diweddar, ond heb eu profi'n drylwyr.
    *   Gall gynnwys chwilod neu nodweddion anorffenedig.
    *   Wedi'i ddiweddaru'n ddyddiol neu gyda phob newid cod arwyddocaol.
    *   Dim ond ar gael fel .exe ar y dudalen rhyddhau.

Darllenwch fwy am ymlaen [Seelen ui yn agos](./nightly.md)

## **Derbyn diweddariadau ar setup.exe vs msix**

Ar Msix mae diweddariadau yn cael eu rheoli gan y Microsoft Store, ond ar setup.exe maen nhw
 nid, felly mae diweddarwr wedi'i gynnwys gyda'r cais, bydd hyn yn dangos i chi a
 Hysbysiad pan fydd diweddariad ar gael.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Os cliciwch ar yr hysbysiad bydd yn dechrau lawrlwytho a gosod y
 Diweddariad, ar ôl hynny bydd yn ailgychwyn y cais yn awtomatig.
