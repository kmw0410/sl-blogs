# **Seelen UI: Metode instalacije i kanali za ažuriranje**

## **Opcije instalacije**

### **Microsoft Store (MSIX)**

Preuzmite najnoviju verziju iz Microsoft Store -a. Ovo je najsigurnije
 i korisnička opcija, s automatskim ažuriranjima.

*   Pros:
    *   Automatska ažuriranja.
    *   Provjerio i odobrio Microsoft.
    *   Visoka sigurnost i pouzdanost.
    *   LightWeighter verzija od .exe instalacijski program jer ova verzija nije
         Uključuje simbole za uklanjanje pogrešaka.
*   Protiv:
    *   Ažuriranja mogu biti odobrena 1-3 radna dana.
    *   Teže za uklanjanje pogrešaka i prijavljivanje problema.

***

### **Winget (MSIX)**

Instalirajte najnoviju verziju pomoću sljedeće naredbe:

```pwsh
winget install --id Seelen.SeelenUI
```

Iste prednosti i nedostaci Microsoft Store -a s plusom brze instalacije putem
 naredbeni redak.

***

### \*\*. Exe Installer \*\*

Preuzmite instalacijski program Setup.exe sa stranice izdanja i pokrenite ga.

*   Pros:
    *   Brže instalacije s neposrednim ažuriranjima.
    *   Prima obavijesti za nova izdanja čim budu dostupne.
*   Protiv:
    *   Nije digitalno potpisano, što može pokrenuti upozorenja o antivirusu.
    *   Manje lagan od instalacije MSIX -a jer ova verzija uključuje uklanjanje pogrešaka
         simboli.

## **Ažurirajte kanale**

> Nezadovoljni kanal ažuriranja Sve verzije primaju automatska ažuriranja,
>  Također ako vam koristi nestabilni kanal za ažuriranje također će primiti ažuriranja
>  Stabilniji kanali za ažuriranje, primjer: Noćna primanja ažuriranja od Nightlya, ali
>  također iz beta i puštanja

### **Oslobađanje (stabilno)**

Najsigurniji i preporučeni kanal za sve korisnike.

*   Značajke:
    *   Temeljito testirano bez kritičnih bugova.
    *   Idealno za proizvodnju i svakodnevnu upotrebu.
    *   Dostupno u Microsoft Storeu, Willet, .MSix i .exe.

### **Beta**

Usmjeren na korisnike koji žele isprobati nove značajke prije nego što su službeno objavljeni.
 Ovaj kanal uključuje beta i kandidate za puštanje.

*   Značajke:
    *   Sadrži nove značajke u testiranju.
    *   Mogu imati manje bube.
    *   Češća ažuriranja od stabilnog izdanja.
    *   Dostupno samo kao .exe na stranici izdanja.

### **Noćni**

Za napredne korisnike i programere koji žele pristup najnovijim promjenama i
 eksperimentalne značajke.

*   Značajke:
    *   Uključuje najnovije promjene, ali ne temeljito testirane.
    *   Mogu sadržavati bugove ili nedovršene značajke.
    *   Ažurirano svakodnevno ili sa svakom značajnom promjenom koda.
    *   Dostupno samo kao .exe na stranici izdanja.

Pročitajte više o ON [Seelen ui gotovo](./nightly.md)

## **Prihvaćanje ažuriranja o setup.exe vs msIx**

Na MSIX -ovim ažuriranjima upravlja Microsoft Store, ali na setup.exe su to
 Ne, pa je u aplikaciju uključen ažuriranje, ovo će vam pokazati
 Obavijest kada je ažuriranje dostupno.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Ako kliknete na obavijest, počet će preuzimanje i instaliranje
 Ažurirajte, nakon čega će se aplikacija automatski ponovno pokrenuti.
