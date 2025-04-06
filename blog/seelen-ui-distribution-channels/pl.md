---
author: Eythaann
title: Kanały dystrybucji interfejsu użytkownika Seelen
published: 13-02-2025
description: Dowiedz się o różnych kanałach dystrybucji dostępnych dla Seelen UI
lastRevision: 13-02-2025

---

# Seelen interfejs użytkownika: Metody instalacji i kanały aktualizacji

## Opcje instalacji

### Microsoft Store (MSIX)

Pobierz najnowszą wersję z
[Microsoft Store](https://www.microsoft.com/store). To jest najbezpieczniejsze i
Opcja przyjazna dla użytkownika z automatycznymi aktualizacjami.

**Profesjonaliści:**

* Automatyczne aktualizacje
* Zweryfikowane i zatwierdzone przez Microsoft
* Wysokie bezpieczeństwo i niezawodność
* Lżejsza wersja niż instalator .exe (bez symboli debugowania)

**Wady:**

* Aktualizacje mogą zająć 1-3 dni robocze do zatwierdzenia Microsoft
* Trudniejsze do debugowania i zgłoszenia problemów

***

### Wining (MSIX)

Zainstaluj najnowszą wersję za pomocą następującego polecenia:

> instalacja Winget --D Seelen.seelenui

Oferuje takie same korzyści jak wersja sklepu Microsoft z dodanymi
Wygoda instalacji wiersza poleceń.

***

### instalator .exe

Pobierz instalator instalator setup.exe z
[Uwalnia stronę](https://github.com/eythaann/Seelen-UI/releases) i uruchom go.

**Profesjonaliści:**

* Dostępne natychmiastowe aktualizacje
* Otrzymuje powiadomienia o aktualizacji, gdy tylko nowe wersje zostaną wydane
* Lepiej do celów debugowania

**Wady:**

* Może wywołać ostrzeżenia antywirusowe (nie podpisane cyfrowo)
* Większy rozmiar pliku (obejmuje symbole debugowania)

## Aktualizacja kanałów

> Niezależnie od wybranego kanału aktualizacji, wszystkie wersje odbierają automatyczne
> aktualizacje. Niestabilne kanały otrzymują również aktualizacje z bardziej stabilnych kanałów
> (np. Nightly otrzymuje aktualizacje zarówno z nocy, jak i beta/wydania).

### Wydanie (stabilne)

Najbezpieczniejszy i zalecany kanał dla wszystkich użytkowników.

**Cechy:**

* Dokładnie przetestowane bez krytycznych błędów
* Idealny do produkcji i codziennego użytku
* Dostępne w Microsoft Store, Winget (.msix) i jako instalator .exe

### Beta

Dla użytkowników, którzy chcą wczesnego dostępu do nowych funkcji przed oficjalną wersją.

**Cechy:**

* Zawiera nadchodzące funkcje w testowaniu
* Może zawierać drobne błędy
* Częstsze aktualizacje niż stabilne
* Dostępny tylko jako instalator .exe

### Nocny

Dla zaawansowanych użytkowników i programistów chcą najnowszych zmian.

**Cechy:**

* Zawiera najnowsze, niesprawdzone zmiany
* Może obejmować błędy lub niekompletne funkcje
* Zaktualizowane codziennie lub z każdą znaczącą zmianą kodu
* Dostępny tylko jako instalator .exe

Dowiedz się więcej o nocnym kanale w naszym
[Seelen UI Nightly](https://seelen.io/blog/nightly) dokumentacja.

## Mechanizm aktualizacji: Setup.exe vs MSIX

* **MSIX:** Aktualizacje zarządzane automatycznie przez Microsoft Store
* **Setup.exe:** Zawiera wbudowany aktualizację, który powiadamia, gdy są aktualizacje
  dostępny

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Gdy aktualizacja jest dostępna:

1. Kliknij powiadomienie
2. Aktualizator pobranie i zainstaluje aktualizację
3. Aplikacja ponownie uruchomi się automatycznie
