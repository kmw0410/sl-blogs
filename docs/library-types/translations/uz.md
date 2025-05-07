# **SNU kutubxonasi: Turli va interfeyslar**

Bu `types` SNU kutubxonasining moduli muhim turini taqdim etadi 
Xidjimlarni rivojlantirish asoslari sifatida xizmat qiladigan ta'riflar va interfeyslar. 
Ushbu modul quyidagilarga mo'ljallangan:

* Seelen UI ekotizimida ishlatiladigan standart turlarni taklif qilish
* Izchil vidjetni amalga oshirish uchun interfeyslarni taqdim eting
* Vidjetni rivojlantirish bo'yicha turdagi xavfsizlikni yoqish
* Asosiy dastur va vidjetlar o'rtasida umumiy shartnomalar sifatida xizmat qiladi

## **Foydalanish**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Asosiy xususiyatlar:**

* **Yadro turini aniqlash**: Seelen UI dasturidan foydalaniladigan fundamental turlar
* **Vidjet shartnomalari**: Vidjetlar moslik uchun amalga oshirilishi kerak bo'lgan interfeyslar
* **Umumiy modellar**: Platformada ishlatiladigan umumiy ma'lumotlar tuzilmalari
* **Turli kommunal xizmatlar**: Vidjetni rivojlantirish uchun yordam turlari

Ushbu turlar ilova orqali ham, ular tomonidan oshkor qilingan 
Tashqi vidjet ekotizim bo'yicha turdagi izchillikni ta'minlash uchun tashqi vidjet.
