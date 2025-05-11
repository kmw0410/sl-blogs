# **SNU kutubxonasi: API ma'lumotnomasi**

API moduli aniq amalga oshirilayotgan va foydali sinflarni taqdim etadi Ishlab
chiquvchi jabhada ishlab chiqaruvchi sifatida xizmat ko'rsatadigan xom apple API
vidjet integratsiyasi.

## **Maqsad**

- ISHLAB CHIQARISh `/types` foydalanishga tayyor sinflar bilan
- Past darajadagi API murakkabliklari
- Umumiy operatsiyalar uchun foydali usullarni taqdim etadi
- Vidjetlar va slu o'rtasidagi birlamchi o'zaro ta'sir qatlami sifatida xizmat
  qiladi ariza

## **Foydalanish**

Kerak bo'lganda kutubxonadan foydalanishingiz mumkin. Mana asosiy misol:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **Muhim eslatmalar:**

1. Ushbu API kutubxonasi faqat seelen UI vidjetining bajarilishi paytida
   ishlaydi atrof-muhit
2. Uni tugun yoki standart brauzer kontekstlarida foydalanishga urinish xatolar
3. Ushbu API yordamida vidjetlar uni to'g'ri ishlash uchun uni yangilashlari
   kerak Seelen UIning eng so'nggi versiyasi
