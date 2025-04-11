# SEELEN UI: Diegimo metodai ir atnaujinimo kanalai

## Diegimo parinktys

### „Microsoft Store“ (MSIX)

Atsisiųskite naujausią versiją iš
[„Microsoft Store“](https://www.microsoft.com/store). Tai yra saugiausia ir
patogi vartotojui parinktis su automatiniais atnaujinimais.

**Argumentai:**

- Automatiniai atnaujinimai
- Patvirtino ir patvirtino „Microsoft“
- Aukštas saugumas ir patikimumas
- Lengvesnė versija nei .exe diegimo programa (nėra derinimo simbolių)

**Trūkumai:**

- Atnaujinimai „Microsoft“ patvirtinimui gali užtrukti 1-3 darbo dienas
- Sunkiau suderinti ir pranešti apie problemas

---

### Sparnas (MSIX)

Įdiekite naujausią versiją naudodami šią komandą:

> „Winget Install“ -Iid seelen.seelenui

Siūlo tuos pačius pranašumus kaip ir „Microsoft Store“ versija su pridėta
Komandos linijos diegimo patogumas.

---

### .exe montuotojas

Atsisiųskite „Setup.exe“ montuotoją iš
[Išleidimų puslapis](https://github.com/eythaann/Seelen-UI/releases) Ir
paleiskite.

**Argumentai:**

- Galimi tiesioginiai atnaujinimai
- Gauna atnaujinimo pranešimus, kai tik bus išleistos naujos versijos
- Geriau derinimo tikslais

**Trūkumai:**

- Gali sukelti antivirusinius įspėjimus (nepasirašyti skaitmeniniu būdu)
- Didesnis failo dydis (apima derinimo simbolius)

## Atnaujinkite kanalus

> Nepriklausomai nuo jūsų pasirinkto atnaujinimo kanalo, visos versijos gauna
> automatines atnaujinimai. Nestabilūs kanalai taip pat gauna atnaujinimus iš
> stabilesnių kanalų (pvz., Naktį galima atnaujinti tiek iš nakties, tiek beta
> versijos/išleidimo).

### Paleisti (stabili)

Pats saugiausias ir rekomenduojamas kanalas visiems vartotojams.

**Savybės:**

- Kruopščiai išbandyta be kritinių klaidų
- Idealiai tinka gamybai ir kasdieniam naudojimui
- Galima įsigyti „Microsoft Store“, „Winget“ (.MSIX) ir AS .exe diegimo
  programoje

### Beta

Vartotojams, norintiems ankstyvos prieigos prie naujų funkcijų prieš oficialų
išleidimą.

**Savybės:**

- Apima būsimas bruožus, susijusius su testavimu
- Gali būti nedidelių klaidų
- Dažnesni atnaujinimai nei stabilūs
- Galima įsigyti tik kaip .exe diegimo programa

### Naktį

Pažangiems vartotojams ir kūrėjams, norintiems naujausių pakeitimų.

**Savybės:**

- Yra naujausių, nepatikrintų pokyčių
- Gali būti klaidų ar neišsamių funkcijų
- Atnaujinta kasdien arba su kiekvienu reikšmingu kodo pakeitimu
- Galima įsigyti tik kaip .exe diegimo programa

Sužinokite daugiau apie naktinį kanalą mūsų
[Seelen UI naktį](https://seelen.io/blog/nightly) Dokumentacija.

## Atnaujinimo mechanizmas: Setup.exe vs MSIX

- **MSIX:** Atnaujinimai automatiškai valdo „Microsoft Store“
- **Setup.exe:** Apima integruotą atnaujinimą, kuris praneša jums, kai yra
  atnaujinimai Galima

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kai yra atnaujinimas:

1. Spustelėkite pranešimą
2. „Updater“ atsisiųs ir įdiegs atnaujinimą
3. Programa bus automatiškai paleista iš naujo
