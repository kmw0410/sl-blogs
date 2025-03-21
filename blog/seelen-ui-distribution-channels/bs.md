# **SEENEN UI: Metode instalacije i ažuriranje kanala**

## **Opcije instalacije**

### **Microsoft Store (Msix)**

Preuzmite najnoviju verziju iz Microsoft Store-a. Ovo je najsigurnije
 i opcija prilagođena korisnicima, sa automatskim ažuriranjima.

*   Pros:
    *   Automatska ažuriranja.
    *   Provjereno i odobrio Microsoft.
    *   Visoka sigurnost i pouzdanost.
    *   Lightweighter verzija od .exe instalatora jer ova verzija ne postoji
         uključuje simbole za uklanjanje pogrešaka.
*   Protiv:
    *   Ažuriranja mogu trebati 1-3 radna dana da budu odobrene.
    *   Teže za uklanjanje pogrešaka i izvještavati o pitanjima.

***

### **Winget (Msix)**

Instalirajte najnoviju verziju pomoću sljedeće naredbe:

```pwsh
winget install --id Seelen.SeelenUI
```

Iste prednosti i nedostaci Microsoftove trgovine sa plus brzim ugradnjom putem
 naredbena linija.

***

### \*\*. EXE Installer \*\*

Preuzmite Installer Setup.exe sa stranice puštanja i pokrenite je.

*   Pros:
    *   Brže ugradnja sa trenutnim ažuriranjima.
    *   Prima obavijesti za nova izdanja čim budu dostupne.
*   Protiv:
    *   Nije digitalno potpisan, što može pokrenuti antivirusna upozorenja.
    *   Manje lagane od MSIX instalatora, jer ova verzija uključuje ispravljanje pogrešaka
         Simboli.

## **Ažurirajte kanale**

> Indengendent za ažuriranje kanala Sve verzije primaju automatske ispravke,
>  Takođe, ako će vam upotreba nestabilnog ažuriranja primiti i ažuriranja
>  Stabilniji ažuriranje kanala, primjer: Noćno primanje ažuriranja iz noći, ali
>  takođe iz beta i puštanja

### **Puštanje (stabilno)**

Najsigurniji i preporučeni kanal za sve korisnike.

*   Značajke:
    *   Temeljno testiran bez kritičnih grešaka.
    *   Idealno za proizvodnju i svakodnevnu upotrebu.
    *   Dostupno u Microsoft Storeu, Winget, .Mix i .exe.

### **Beta**

Usmjeren na korisnike koji žele isprobati nove funkcije prije nego što su zvanično pušteni.
 Ovaj kanal uključuje betame i otpuštaju kandidate.

*   Značajke:
    *   Sadrži nove funkcije u testiranju.
    *   Može imati manje greške.
    *   Češća ažuriranja od stabilnog izdanja.
    *   Dostupno samo kao .exe na stranici Puls.

### **Noćno**

Za napredne korisnike i programere koji žele pristup najnovijim promjenama i
 Eksperimentalne karakteristike.

*   Značajke:
    *   Sadrži najnovije promjene, ali ne temeljito testirane.
    *   Može sadržavati greške ili nedovršene funkcije.
    *   Ažurirano svakodnevno ili sa svakim značajnim promjenama koda.
    *   Dostupno samo kao .exe na stranici Puls.

Pročitajte više o [Seelen ui nighly](./nightly.md)

## **Primanje ažuriranja za SETUP.EXE VS MSIX**

U MSIX ažuriranja upravlja Microsoft Store, ali na Setup.exe su
 ne, pa je ažuriranje uključen u aplikaciju, ovo će vam pokazati
 Obavijest kada je dostupno ažuriranje.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ako kliknete na obavijest, počet će preuzeti i instalirati
 Ažurirajte, nakon čega će se automatski ponovo pokrenuti aplikaciju.
