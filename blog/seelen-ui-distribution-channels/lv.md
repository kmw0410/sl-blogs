# **Seelen UI: instalēšanas metodes un atjauniniet kanālus**

## **Instalācijas opcijas**

### **Microsoft Store (MSIX)**

Lejupielādējiet jaunāko versiju no Microsoft veikala. Tas ir visdrošākais
 un lietotājam draudzīga opcija ar automātiskiem atjauninājumiem.

*   Plusi:
    *   Automātiski atjauninājumi.
    *   Pārbaudījis un apstiprinājis Microsoft.
    *   Augsta drošība un uzticamība.
    *   LightWewighter versija nekā .exe instalētājs, jo šī versija nav
         Ietver atkļūdošanas simbolus.
*   Mīnusi:
    *   Atjauninājumi var aizņemt 1-3 darba dienas, lai to apstiprinātu.
    *   Grūtāk atkļūdot un ziņot par jautājumiem.

***

### **Winget (MSIX)**

Instalējiet jaunāko versiju, izmantojot šo komandu:

```pwsh
winget install --id Seelen.SeelenUI
```

Tie paši Microsoft veikala plusi un mīnusi ar ātras instalācijas plus, izmantojot
 komandrinda.

***

### \*\*. EXE instalētājs \*\*

Lejupielādējiet Setup.exe instalētāju no izlaidumu lapas un palaidiet to.

*   Plusi:
    *   Ātrāka instalēšana ar tūlītējiem atjauninājumiem.
    *   Saņem paziņojumus par jauniem izlaidumiem, tiklīdz tie ir pieejami.
*   Mīnusi:
    *   Nav digitāli parakstīts, kas var izraisīt pretvīrusu brīdinājumus.
    *   Mazāks viegls nekā MSIX instalētājs, jo šajā versijā ietilpst atkļūdošana
         simboli.

## **Atjaunināt kanālus**

> Atjaunināšanas kanāla tuvums Visas versijas saņem automātiskus atjauninājumus,
>  Arī tad, ja izmantojat nestabilu atjaunināšanas kanālu
>  Stabilāki atjaunināšanas kanāli, piemērs: nakts saņemšana no nakts, bet nakts - atjauninājumi, bet
>  arī no beta un atbrīvošanas

### **Atlaidiet (stabils)**

Visdrošākais un ieteicamākais kanāls visiem lietotājiem.

*   Funkcijas:
    *   Rūpīgi pārbaudīts bez kritiskām kļūdām.
    *   Ideāli piemērots ražošanai un ikdienas lietošanai.
    *   Pieejams Microsoft Store, Winget, .MSIX un .exe.

### **Beta**

Mērķis ir lietotājiem, kuri vēlas izmēģināt jaunas funkcijas, pirms tās tiek oficiāli atbrīvotas.
 Šajā kanālā ietilpst Betas un atbrīvošanas kandidāti.

*   Funkcijas:
    *   Testēšanā ir jaunas funkcijas.
    *   Varētu būt nelielas kļūdas.
    *   Biežāk atjauninājumi nekā stabilā izlaišana.
    *   Pieejams tikai kā .exe lapā Release.

### **Naktī**

Papildu lietotājiem un izstrādātājiem, kuri vēlas piekļūt jaunākajām izmaiņām un
 Eksperimentālās pazīmes.

*   Funkcijas:
    *   Ietver jaunākās izmaiņas, bet nav rūpīgi pārbaudītas.
    *   Var būt kļūdas vai nepabeigtas funkcijas.
    *   Atjaunināts katru dienu vai ar katru nozīmīgu koda maiņu.
    *   Pieejams tikai kā .exe lapā Release.

Lasiet vairāk par [Seelen ui nighly](./nightly.md)

## **Setup.exe vs MSIX atjauninājumu saņemšana**

MSIX atjauninājumus pārvalda Microsoft Store, bet vietnē setup.exe tie ir
 nē, tāpēc ir iekļauts lietojumprogramma, tas jums parādīs a
 Paziņojums, kad ir pieejams atjauninājums.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ja jūs noklikšķināsit uz paziņojumu, tas sāks lejupielādēt un instalēt
 atjaunināt, pēc tam tā automātiski restartēs lietojumprogrammu.
