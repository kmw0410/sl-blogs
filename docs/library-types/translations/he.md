# **ספריית SLU: סוגים וממשקים**

THE `types` מודול של ספריית SLU מספק אוסף מסוג חיוני הגדרות וממשקים המשמשים
כבסיס לפיתוח יישומונים. מודול זה נועד:

- להציע הגדרות סוג סטנדרטי המשמשות בכל המערכת האקולוגית של ממשק המשתמש של Seelen
- לספק ממשקים ליישום יישומון עקבי
- לאפשר בטיחות מסוג פיתוח יישומון
- לשמש כחוזים משותפים בין יישום הליבה ווידג'טים

## **נוֹהָג**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **תכונות מפתח:**

- **הגדרות סוג ליבה**: סוגים בסיסיים המשמשים את יישום ממשק המשתמש של Seelen
- **חוזי יישומון**: ממשקים שעל יישומונים ליישם לצורך תאימות
- **דגמים משותפים**: מבני נתונים נפוצים המשמשים ברחבי הפלטפורמה
- **הקלד כלי עזר**: סוגי עוזרים לפיתוח יישומון

סוגים אלה נצרכים הן באופן פנימי על ידי היישום ונחשפים עבור מפתחי יישומונים
חיצוניים כדי להבטיח עקביות מסוג המערכת האקולוגית.
