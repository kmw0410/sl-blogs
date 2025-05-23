# Seelen UI: Μέθοδοι εγκατάστασης και κανάλια ενημέρωσης

## Επιλογές εγκατάστασης

### Microsoft Store (MSIX)

Κατεβάστε την τελευταία έκδοση από το
[Κατάστημα Microsoft](https://www.microsoft.com/store). Αυτό είναι το πιο
ασφαλές και Επιλογή φιλικής προς το χρήστη, με αυτόματες ενημερώσεις.

**Πλεονεκτήματα:**

- Αυτόματες ενημερώσεις
- Επαληθεύτηκε και εγκρίθηκε από τη Microsoft
- Υψηλή ασφάλεια και αξιοπιστία
- Ελαφρύτερη έκδοση από το .exe Installer (δεν περιλαμβάνονται σύμβολα
  εντοπισμού σφαλμάτων)

**Μειονεκτήματα:**

- Οι ενημερώσεις ενδέχεται να διαρκέσουν 1-3 εργάσιμες ημέρες για την έγκριση
  της Microsoft
- Πιο δύσκολο να εντοπίσει τα θέματα εντοπισμού και αναφοράς

---

### Winget (MSIX)

Εγκαταστήστε την τελευταία έκδοση χρησιμοποιώντας την ακόλουθη εντολή:

> Εγκατάσταση Winget -

Προσφέρει τα ίδια οφέλη με την έκδοση Microsoft Store με την προσθήκη ευκολία
εγκατάστασης γραμμής εντολών.

---

### Εγκατάσταση .exe

Κατεβάστε το πρόγραμμα εγκατάστασης setup.exe από το
[Απελευθέρωση σελίδας](https://github.com/eythaann/Seelen-UI/releases) και
τρέξτε το.

**Πλεονεκτήματα:**

- Διαθέσιμες άμεσες ενημερώσεις
- Λαμβάνει ειδοποιήσεις ενημέρωσης μόλις κυκλοφορήσουν νέες εκδόσεις
- Καλύτερα για σκοπούς εντοπισμού σφαλμάτων

**Μειονεκτήματα:**

- Μπορεί να προκαλέσει προειδοποιήσεις προστασίας από ιούς (όχι ψηφιακά
  υπογεγραμμένα)
- Μεγαλύτερο μέγεθος αρχείου (περιλαμβάνει σύμβολα εντοπισμού σφαλμάτων)

## Ενημέρωση καναλιών

> Ανεξάρτητα από το επιλεγμένο κανάλι ενημέρωσης, όλες οι εκδόσεις λαμβάνουν
> αυτόματα ενημερώσεις. Τα ασταθή κανάλια λαμβάνουν επίσης ενημερώσεις από πιο
> σταθερά κανάλια (π.χ., το Nightly λαμβάνει ενημερώσεις τόσο από το Nightly όσο
> και από το Beta/Release).

### Απελευθέρωση (σταθερό)

Το πιο ασφαλές και συνιστώμενο κανάλι για όλους τους χρήστες.

**Χαρακτηριστικά:**

- Δοκιμασμένα χωρίς κρίσιμα σφάλματα
- Ιδανικό για παραγωγή και καθημερινή χρήση
- Διατίθεται στο Microsoft Store, Winget (.msix) και ως εγκαταστάτη .exe

### Βήτα

Για χρήστες που θέλουν την έγκαιρη πρόσβαση σε νέες λειτουργίες πριν από την
επίσημη κυκλοφορία.

**Χαρακτηριστικά:**

- Περιλαμβάνει επερχόμενες λειτουργίες υπό δοκιμές
- Μπορεί να περιέχει μικρά σφάλματα
- Πιο συχνές ενημερώσεις από τις σταθερές
- Διατίθεται μόνο ως εγκαταστάτης .exe

### Κάθε βράδυ

Για προηγμένους χρήστες και προγραμματιστές που θέλουν τις τελευταίες αλλαγές.

**Χαρακτηριστικά:**

- Περιέχει πιο πρόσφατες, μη δοκιμασμένες αλλαγές
- Μπορεί να περιλαμβάνει σφάλματα ή ελλιπείς λειτουργίες
- Ενημερώθηκε καθημερινά ή με κάθε σημαντική αλλαγή κώδικα
- Διατίθεται μόνο ως εγκαταστάτης .exe

Μάθετε περισσότερα για το νυχτερινό κανάλι στο δικό μας
[Seelen Ui Nightly](https://seelen.io/blog/nightly) απόδειξη με έγγραφα.

## Μηχανισμός ενημέρωσης: setup.exe vs msix

- **MSIX:** Ενημερώσεις που διαχειρίζονται αυτόματα από το Microsoft Store
- **Setup.exe:** Περιλαμβάνει ενσωματωμένο updater που σας ειδοποιεί όταν είναι
  ενημερώσεις διαθέσιμος

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Όταν είναι διαθέσιμη μια ενημέρωση:

1. Κάντε κλικ στην ειδοποίηση
2. Ο Updater θα κατεβάσει και θα εγκαταστήσει την ενημέρωση
3. Η εφαρμογή θα επανεκκινήσει αυτόματα
