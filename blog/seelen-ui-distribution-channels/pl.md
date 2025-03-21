# **Seelen interfejs użytkownika: Metody instalacji i kanały aktualizacji**

## **Opcje instalacji**

### **Microsoft Store (MSIX)**

Pobierz najnowszą wersję ze sklepu Microsoft. To jest najbezpieczniejsze
 i opcja przyjazna dla użytkownika, z automatycznymi aktualizacjami.

*   Profesjonaliści:
    *   Automatyczne aktualizacje.
    *   Zweryfikowane i zatwierdzone przez Microsoft.
    *   Wysokie bezpieczeństwo i niezawodność.
    *   Lekka wersja niż instalator .exe, ponieważ ta wersja nie
         Obejmuje symbole debugowania.
*   Wady:
    *   Zatwierdzenie aktualizacji mogą potrwać 1-3 dni robocze.
    *   Trudniejsze do debugowania i zgłoszenia problemów.

***

### **Wining (MSIX)**

Zainstaluj najnowszą wersję za pomocą następującego polecenia:

```pwsh
winget install --id Seelen.SeelenUI
```

Te same zalety i wady sklepu Microsoft z plus szybką instalację za pośrednictwem
 wiersz poleceń.

***

### \*\*. instalator exe \*\*

Pobierz instalator instalator Setup.exe ze strony wydania i uruchom go.

*   Profesjonaliści:
    *   Szybsza instalacja z natychmiastowymi aktualizacjami.
    *   Otrzymuje powiadomienia o nowych wydaniach, gdy tylko będą dostępne.
*   Wady:
    *   Nie podpisane cyfrowo, które mogą wywołać ostrzeżenia antywirusowe.
    *   Mniej lekkie niż instalator MSIX, ponieważ ta wersja obejmuje debugowanie
         symbolika.

## **Aktualizacja kanałów**

> Niezależny od kanału aktualizacji wszystkie wersje otrzymują automatyczne aktualizacje,
>  Również jeśli korzystanie z niestabilnego kanału aktualizacji również otrzyma aktualizacje
>  Bardziej stabilne kanały aktualizacji, Przykład: Nocne otrzymuj aktualizacje z nocy, ale
>  Również z beta i wydania

### **Wydanie (stabilne)**

Najbezpieczniejszy i zalecany kanał dla wszystkich użytkowników.

*   Cechy:
    *   Dokładnie przetestowane bez krytycznych błędów.
    *   Idealny do produkcji i codziennego użytku.
    *   Dostępne w Microsoft Store, Winget, .msix i .exe.

### **Beta**

Skierowane do użytkowników, którzy chcą wypróbować nowe funkcje, zanim zostaną oficjalnie wydane.
 Ten kanał obejmuje kandydatów na BET i wydawnictw.

*   Cechy:
    *   Zawiera nowe funkcje w testowaniu.
    *   Może mieć drobne błędy.
    *   Częstsze aktualizacje niż stabilna wersja.
    *   Dostępne tylko jako .exe na stronie wydania.

### **Nocny**

Dla zaawansowanych użytkowników i programistów, którzy chcą uzyskać dostęp do najnowszych zmian i
 Cechy eksperymentalne.

*   Cechy:
    *   Obejmuje najnowsze zmiany, ale nie są dokładnie przetestowane.
    *   Może zawierać błędy lub niedokończone funkcje.
    *   Aktualizowane codziennie lub przy każdej znaczącej zmianie kodu.
    *   Dostępne tylko jako .exe na stronie wydania.

Przeczytaj więcej o [Seelen UI](./nightly.md)

## **Otrzymanie aktualizacji na Setup.exe vs MSIX**

W przypadku aktualizacji MSIX są zarządzane przez Microsoft Store, ale na setup.exe są
 nie, więc do aplikacji jest dołączony do aplikacji
 Powiadomienie, gdy aktualizacja jest dostępna.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Jeśli klikniesz powiadomienie, rozpocznie pobieranie i instalowanie
 Aktualizacja, po czym automatycznie uruchomi się ponownie.
