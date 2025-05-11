# **مكتبة SLU: مرجع API**

توفر وحدة API تطبيقات ملموسة وفئات فائدة ملخص API API RAW ، الذي يعمل كواجهة
صديقة للمطور تكامل القطعة.

## **غاية**

- ينفذ واجهات من `/types` مع فصول جاهزة للاستخدام
- ملخصات تعقيدات API منخفضة المستوى
- يوفر طرق فائدة للعمليات المشتركة
- بمثابة طبقة التفاعل الأولية بين واجهة المستخدم و SLU طلب

## **الاستخدام**

يمكنك استخدام المكتبة حسب الحاجة. إليك مثال أساسي:

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **ملاحظات مهمة:**

1. تعمل مكتبة واجهة برمجة التطبيقات هذه فقط عند التشغيل داخل تنفيذ عنصر واجهة
   المستخدم Seelen UI بيئة
2. محاولة استخدامه في Node.js أو سياقات المتصفح القياسية سوف ترمي الأخطاء
3. تحتاج الأدوات باستخدام واجهة برمجة التطبيقات هذه إلى تحديثها من أجل العمل بشكل
   صحيح مع آخر إصدار من Seelen UI
