# ממשק המשתמש של Seelen: הדרכה של יסודות נושא - התאם אישית את שולחן העבודה שלך כמו מקצוען!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

רוצה לתת לשולחן העבודה של Windows שלך מראה חדש ורענן? ממשק המשתמש של Seelen מקל
על זה מערכת הנושא החזקה שלה. מדריך זה יעבור אותך דרך היסודות של איך עבודות ערכות
נושא - אין צורך בחווית קידוד!

## גרסת ניפוי מיוחדת ליוצרי נושא

לפני שנתחיל, יוצרי הנושאים צריכים לדעת על המיוחד שלנו **גרסת באגים** של סילן UI!
גרסה זו מאפשרת לך:

- בדוק אלמנטים ממש כמו דף אינטרנט (Ctrl+Shift+I פותח כלי מפתחים)
- ראה שינויים בשידור חי HTML/CSS
- שינויים בבדיקת נושא באופן מיידי
- ניפוי סטיילינג באגים בקלות

הורד את גרסת הבאגים משלנו
[Nightly Freting Channel](https://seelen.io/apps/seelen-ui/releases/nightly)
(חפש קבצים שמסתיימים עם `-debug.exe`, כמו
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### רוצה ללמוד עוד על בניינים ליליים?

בדוק את שלנו [הסבירו בניינים ליליים](https://seelen.io/blog/seelen-ui-nightly)
סָעִיף!

## הבנת קבצי נושא

חשבו על נושאים של ממשק המשתמש של Seelen כמו שכבות צבע. אתה יכול להחיל מספר
נושאים ב פעם אחת, ובדיוק כמו לצייר, הסדר חשוב! נושאים יכולים לשנות הכל מצבעים
לסגנונות חלון.

ישנן שלוש דרכים שניתן לארוז נושאים:

1. **נושא קובץ יחיד** (קובץ .yml)
2. **תיקיית נושא** (מכיל מספר קבצים)
3. **נושא דחוס** (קובץ .slu - פורמט ממשק משתמש מיוחד של Seelen)

### איפה לשים את הנושאים שלך

כל הנושאים עוברים בתיקיה זו במחשב שלך:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### מבנה תיקיית נושא

הנה איך נראית תיקיית נושא בפנים:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # the name of the folder doesn't matter
│   ├── theme.yml               # Theme metadata file
│   └── seelen                  # creator's username of widgets inside
│       ├── fancy-toolbar.css   # resource's name + css extension
│       └── window-manager.scss # supports SCSS too!
├── CompactTheme.yml            # Theme metadata file with styles inside
└── CompressedTheme.slu         # Special file format used on Seelen UI
```

## מקבל השראה: נושאים לדוגמא

לא בטוח מאיפה או איך להתחיל? Seelen UI מגיע עם כמה נושאים מובנים לך יכול להשתמש
כהשראה! בדוק את
[אוסף נושאי ברירת מחדל](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
לראות איך הם עשויים.

## עבודה עם צבעים - זה קל יותר ממה שאתה חושב!

ממשק המשתמש של Seelen מרים אוטומטית את צבע המבטא של Windows שלך והופך אותו ניתן
להשיג בגוונים שונים באמצעות משתני צבע פשוטים.

### צבע המבטא העיקרי שלך

משתנים אלה משתמשים בצבע שאתה מגדיר בהגדרות Windows:

- `--config-accent-color`: הצבע הטהור (כמו #FFBBAA)
- `--config-accent-color-rgb`: אותו צבע בפורמט RGB (255, 187, 170)

### משפחת הצבעים השלמה

ממשק המשתמש של Seelen יוצר פלטה שלמה מצבע המבטא שלך:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

להלן הרשימה המלאה של הצבעים הזמינים:

- הגרסה האפלה ביותר: `--config-accent-darkest-color`
- גרסה כהה יותר: `--config-accent-darker-color`
- גרסה אפלה: `--config-accent-dark-color`
- גרסה רגילה: `--config-accent-color`
- גרסת אור: `--config-accent-light-color`
- גרסה קלה יותר: `--config-accent-lighter-color`
- הגרסה הקלה ביותר: `--config-accent-lightest-color`

לכל צבע יש גם גרסת RGB (עם -RGB בסוף). זה שימושי עבור יצירת שיפועים ואפקטים
צבעוניים אחרים.

כדוגמה מגדיר צבע רקע עם אטימות:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### אפשרויות צבע עוד יותר

רוצים יותר אפשרויות צבע? ממשק המשתמש של Seelen חושף עשרות צבעי מערכת נוספים.
בדוק את זה
[התייחסות צבעונית שימושית](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
לכל האפשרויות הזמינות.

טיפ מקצוען: כאשר צבע המבטא של Windows שלך משתנה, עדכוני הנושא של ממשק המשתמש שלך
באופן אוטומטי!
