# Seelen UI: Tutorial Basics Θέματα - Προσαρμόστε την επιφάνεια εργασίας σας σαν επαγγελματίας!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Θέλετε να δώσετε στο Windows Desktop μια νέα εμφάνιση; Το Seelen UI το
διευκολύνει το ισχυρό του θεματικό σύστημα. Αυτός ο οδηγός θα σας οδηγήσει στα
βασικά του πώς Τα θέματα λειτουργούν - δεν απαιτείται εμπειρία κωδικοποίησης!

## Ειδική έκδοση εντοπισμού σφαλμάτων για δημιουργούς θεμάτων

Πριν ξεκινήσουμε, οι δημιουργοί θεμάτων πρέπει να γνωρίζουν για την ειδική μας
**εντοπισμός σφαλμάτων** του Seelen UI! Αυτή η έκδοση σας επιτρέπει:

- Επιθεωρήστε τα στοιχεία ακριβώς όπως μια ιστοσελίδα (Ctrl+Shift+I Ανοίγει
  εργαλεία προγραμματιστή)
- Ανατρέξτε στην ενότητα Ζωντανές αλλαγές HTML/CSS
- Δοκιμάστε αμέσως τις τροποποιήσεις θεμάτων
- Ζητήματα στυλ εντοπισμού σφαλμάτων εύκολα

Κατεβάστε την έκδοση εντοπισμού σφαλμάτων από το δικό μας
[Νυχτερινές κυκλοφορίες κανάλι](https://seelen.io/apps/seelen-ui/releases/nightly)
(Αναζητήστε αρχεία που τελειώνουν με `-debug.exe`, όπως και
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Θέλετε να μάθετε περισσότερα για τις νυχτερινές κατασκευές;

Δείτε το δικό μας
[Εξηγούνται νυχτερινές κατασκευές](https://seelen.io/blog/seelen-ui-nightly)
άρθρο!

## Κατανόηση αρχείων θεμάτων

Σκεφτείτε τα θέματα Seelen UI όπως τα στρώματα του χρώματος. Μπορείτε να
εφαρμόσετε πολλά θέματα στο Κάποτε, και όπως η ζωγραφική, η σειρά έχει σημασία!
Τα θέματα μπορούν να αλλάξουν τα πάντα από χρώματα σε στυλ παραθύρων.

Υπάρχουν τρεις τρόποι με τους οποίους τα θέματα μπορούν να συσκευαστούν:

1. **Θέμα ενός αρχείου** (αρχείο .yml)
2. **Θεματικός φάκελος** (Περιέχει πολλαπλά αρχεία)
3. **Συμπιεσμένο θέμα** (.slu αρχείο - Ειδική μορφή SEELEN UI)

### Πού να βάλετε τα θέματα σας

Όλα τα θέματα πηγαίνουν σε αυτόν τον φάκελο στον υπολογιστή σας:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Δομή φακέλου θεμάτων

Εδώ είναι τι ένα θεματικό φάκελο μοιάζει μέσα:

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

## Εμπνευσμένη: Παράδειγμα θεμάτων

Δεν είστε σίγουροι πού ή πώς να ξεκινήσετε; Το Seelen UI έρχεται με αρκετά
ενσωματωμένα θέματα Μπορεί να χρησιμοποιήσει ως έμπνευση! Δείτε το
[προεπιλεγμένα θέματα συλλογή](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
για να δούμε πώς γίνονται.

## Εργασία με χρώματα - είναι ευκολότερη από ό, τι νομίζετε!

Το Seelen UI παίρνει αυτόματα το χρώμα των παραθύρων σας και το κάνει Διατίθεται
σε διαφορετικές αποχρώσεις μέσω απλών μεταβλητών χρώματος.

### Το κύριο χρώμα σας

Αυτές οι μεταβλητές χρησιμοποιούν το χρώμα που ρυθμίζετε στις ρυθμίσεις των
Windows:

- `--config-accent-color`: Το καθαρό χρώμα (όπως #ffbbaa)
- `--config-accent-color-rgb`: Το ίδιο χρώμα σε μορφή RGB (255, 187, 170)

### Η πλήρης οικογένεια χρωμάτων

Το Seelen UI δημιουργεί μια ολόκληρη παλέτα από το χρώμα του προφορά σας:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

Εδώ είναι η πλήρης λίστα των διαθέσιμων χρωμάτων:

- Πιο σκοτεινή έκδοση: `--config-accent-darkest-color`
- Σκοτεινότερη έκδοση: `--config-accent-darker-color`
- Σκοτεινή έκδοση: `--config-accent-dark-color`
- Τακτική έκδοση: `--config-accent-color`
- ΦΩΤΙΣΤΙΚΗ έκδοση: `--config-accent-light-color`
- Ελαφρύτερη έκδοση: `--config-accent-lighter-color`
- Ελαφρύτερη έκδοση: `--config-accent-lightest-color`

Κάθε χρώμα έχει επίσης μια έκδοση RGB (με -RGB στο τέλος). Αυτό είναι χρήσιμο
για δημιουργώντας κλίσεις και άλλα εφέ χρώματος.

Ως παράδειγμα ρυθμίζει ένα χρώμα φόντου με αδιαφάνεια:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Ακόμα περισσότερες επιλογές χρώματος

Θέλετε περισσότερες επιλογές χρωμάτων; Το Seelen UI εκθέτει δεκάδες επιπλέον
χρώματα συστήματος. Δείτε αυτό
[εύχρηστη αναφορά χρώματος](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
για όλες τις διαθέσιμες επιλογές.

PRO TIP: Όταν τα παράθυρα σας έμφαση αλλάζουν, οι ενημερώσεις θεμάτων SEELEN UI
αυτομάτως!
