# **Biblioteka SLU: Odniesienie API**

Moduł API zapewnia konkretne implementacje i klasy użyteczności streszczenie
interfejsy API aplikacji surowego, służąc jako elewacja przyjazna dla
programistów Integracja widżetu.

## **Zamiar**

- Wdraża interfejsy z `/types` z gotowymi do użycia zajęć
- Streszczenie złożoności API niskiego poziomu
- Zapewnia metody użyteczności dla wspólnych operacji
- Służy jako podstawowa warstwa interakcji między widżetami i SLU aplikacja

## **Stosowanie**

W razie potrzeby możesz użyć biblioteki. Oto podstawowy przykład:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Ważne notatki:**

1. Ta biblioteka API działa tylko przy uruchomieniu w wykonaniu widżetu
   interfejsu użytkownika środowisko
2. Próba użycia go w Node.js lub standardowe konteksty przeglądarki będą błędy
3. Widżety korzystające z tego interfejsu API muszą go zaktualizować, aby
   działać poprawnie Ostatnia wersja Seelen UI
