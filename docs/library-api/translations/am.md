# **SOL MERMARE: API ማጣቀሻ**

የኤ.ፒ.አይ ሞዱል ተጨባጭ ትግበራዎችን እና የመገልገያ ትምህርቶችን ያቀርባል 
የገንቢ-ወዳጃዊ ፋብሪካ ሆኖ የሚያገለግል ጥሬ ትግበራ ኤፒአይ ረቂቅ 
ማዋሃድ.

## **ዓላማ**

* የመረጃ መግቢያዎች ከ `/types` በተዘጋጁት ትምህርቶች ጋር
* ዝቅተኛ-ደረጃ ኤፒአይ ውስብስብነት ያላቸው
* የተለመዱ ስራዎች የፍጆታ ዘዴዎችን ያቀርባል
* በንብረት እና በ SU መካከል መካከል ዋነኛው የመስተዋወቂያ ንብርብር ሆኖ ያገለግላል 
  ትግበራ

## **አጠቃቀም**

እንደ አስፈላጊነቱ ቤተመጽሐፍቱን መጠቀም ይችላሉ. መሠረታዊ ምሳሌ እነሆ-

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **አስፈላጊ ማስታወሻዎች**

1. ይህ የኤ.ፒ.አይ. ቤተ-መጽሐፍት ብቻ የሚሰራው በእቅድ ዌይ ዌይ ፍርግም አፈፃፀም ውስጥ በሚሠራበት ጊዜ ብቻ ነው የሚሰራው 
   አካባቢ
2. በመስቀለኛ መንገድ ውስጥ ለመጠቀም በመሞከር ላይ በመሞከር ላይ መሞከር ይጥላሉ 
   ስህተቶች
3. ይህንን ኤፒአይ የሚጠቀሙ መግብሮች በትክክል ከ ጋር በትክክል እንዲሠሩ ለማድረግ ያስፈልጉታል 
   የምርጫ ስሪት
