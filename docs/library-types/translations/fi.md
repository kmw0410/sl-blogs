# **SLU -kirjasto: Tyypit ja rajapinnat**

Se `types` SLU -kirjaston moduuli tarjoaa kokoelman välttämättömiä tyyppejä
Määritelmät ja rajapinnat, jotka toimivat perustana widgetin kehittämiselle.
Tämä moduuli on suunniteltu:

- Tarjoa standardoidut tyyppimääritelmät, joita käytetään koko Seelen
  -käyttöliittymän ekosysteemissä
- Tarjoa rajapinnat johdonmukaiselle widget -toteutukselle
- Ota tyypin turvallisuus käyttöön widget -kehityksen välillä
- Toimi jaetuina sopimuksina ydinsovelluksen ja widgetien välillä

## **Käyttö**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Tärkeimmät ominaisuudet:**

- **Ydintyyppiset määritelmät**: Seelen UI -sovelluksen käyttämät perustyypit
- **Widget -sopimukset**: Rajapinnat, jotka widgetissä on toteutettava
  yhteensopivuus
- **Jaetut mallit**: Yleiset tietorakenteet, joita käytetään koko alustalla
- **Tyyppi apuohjelmia**: Widget -kehityksen auttajatyypit

Tämän tyypit kuluttavat sekä sovelluksen sisäisesti että altistuvat Ulkoiset
widget -kehittäjät tyypin johdonmukaisuuden varmistamiseksi ekosysteemissä.
