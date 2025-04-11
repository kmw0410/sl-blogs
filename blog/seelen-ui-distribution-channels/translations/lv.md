# Seelen UI: instalēšanas metodes un atjauniniet kanālus

## Instalācijas opcijas

### Microsoft Store (MSIX)

Lejupielādējiet jaunāko versiju no
[Microsoft veikals](https://www.microsoft.com/store)Apvidū Tas ir visdrošākais
un lietotājam draudzīga opcija ar automātiskiem atjauninājumiem.

**Plusi:**

- Automātiski atjauninājumi
- Pārbaudījis un apstiprinājis Microsoft
- Augsta drošība un uzticamība
- Vieglāka versija nekā .exe instalētājs (nav iekļauti atkļūdošanas simboli)

**Mīnusi:**

- Atjauninājumi Microsoft apstiprināšanai var aizņemt 1-3 darba dienas
- Grūtāk atkļūdot un ziņot par jautājumiem

---

### Winget (MSIX)

Instalējiet jaunāko versiju, izmantojot šo komandu:

> Winget Install --id Seelen.seelenui

Piedāvā tādas pašas priekšrocības kā Microsoft Store versijai ar pievienoto
Komandrindas instalēšanas ērtība.

---

### .exe instalētājs

Lejupielādējiet setup.exe instalētāju no
[Atlaidiet lapu](https://github.com/eythaann/Seelen-UI/releases) un palaist to.

**Plusi:**

- Pieejami tūlītēji atjauninājumi
- Saņem atjaunināšanas paziņojumus, tiklīdz tiek izlaistas jaunas versijas
- Labāk atkļūdošanas nolūkos

**Mīnusi:**

- Var izraisīt pretvīrusu brīdinājumus (nav digitāli parakstīts)
- Lielāks faila lielums (ietver atkļūdošanas simbolus)

## Atjaunināt kanālus

> Neatkarīgi no jūsu izvēlētā atjaunināšanas kanāla, visas versijas saņem
> automātisku atjauninājumi. Nestabili kanāli saņem arī atjauninājumus no
> stabilākiem kanāliem (piemēram, nakts saņem atjauninājumus gan no nakts, gan
> beta/izlaišanas).

### Atlaidiet (stabils)

Visdrošākais un ieteicamākais kanāls visiem lietotājiem.

**Funkcijas:**

- Rūpīgi pārbaudīts bez kritiskām kļūdām
- Ideāli piemērots ražošanai un ikdienas lietošanai
- Pieejams Microsoft Store, Winget (.MSIX) un AS .Exe instalētājs

### Beta

Lietotājiem, kuri pirms oficiālās izlaišanas vēlas agrīnu piekļuvi jaunām
funkcijām.

**Funkcijas:**

- Ietver gaidāmās funkcijas, kas saistītas ar testēšanu
- Var saturēt nelielas kļūdas
- Biežāk atjauninājumi nekā stabili
- Pieejams tikai kā .exe instalētājs

### Naktī

Papildu lietotājiem un izstrādātājiem, kuri vēlas jaunākās izmaiņas.

**Funkcijas:**

- Satur jaunākās, nepārbaudītās izmaiņas
- Var ietvert kļūdas vai nepilnīgas funkcijas
- Atjaunināts katru dienu vai ar katru nozīmīgu koda maiņu
- Pieejams tikai kā .exe instalētājs

Uzziniet vairāk par nakts kanālu mūsu
[Seelen ui naktī](https://seelen.io/blog/nightly) Dokumentācija.

## Atjaunināšanas mehānisms: setup.exe vs mSIX

- **MSIX:** Atjauninājumi, ko automātiski pārvalda Microsoft Store
- **Setup.exe:** Ietver iebūvētu atjauninātāju, kas paziņo jums, kad ir
  atjauninājumi pieejams

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kad ir pieejams atjauninājums:

1. Noklikšķiniet uz paziņojuma
2. Updater lejupielādēs un instalēs atjauninājumu
3. Lietojumprogramma tiks automātiski restartēta
