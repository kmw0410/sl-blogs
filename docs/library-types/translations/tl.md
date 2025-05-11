# **SLU Library: Mga Uri at Interfaces**

Ang `types` Ang module ng SLU library ay nagbibigay ng isang koleksyon ng
mahahalagang uri Ang mga kahulugan at interface na nagsisilbing pundasyon para
sa pag -unlad ng widget. Ang modyul na ito ay idinisenyo upang:

- Mag -alok ng mga pamantayang uri ng mga kahulugan na ginamit sa buong Seelen
  UI ecosystem
- Magbigay ng mga interface para sa pare -pareho ang pagpapatupad ng widget
- Paganahin ang kaligtasan ng uri sa buong pag -unlad ng widget
- Maglingkod bilang ibinahaging mga kontrata sa pagitan ng pangunahing
  aplikasyon at mga widget

## **Paggamit**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Mga pangunahing tampok:**

- **Mga kahulugan ng uri ng pangunahing**: Mga pangunahing uri na ginamit ng
  application ng Seelen UI
- **Mga Kontrata ng Widget**: Ang mga interface na dapat ipatupad ng mga widget
  para sa pagiging tugma
- **Ibinahaging mga modelo**: Karaniwang mga istruktura ng data na ginamit sa
  buong platform
- **I -type ang mga utility**: Mga uri ng katulong para sa pag -unlad ng widget

Ang mga uri na ito ay natupok kapwa sa loob ng application at nakalantad para sa
Mga panlabas na developer ng widget upang matiyak ang pagkakapareho ng uri sa
buong ekosistema.
