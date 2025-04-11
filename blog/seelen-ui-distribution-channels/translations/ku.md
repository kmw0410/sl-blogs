# SEELEN UI: Rêbazên sazkirinê û kanalên nûvekirina

## Vebijarkên sazkirinê

### Microsoft Store (MSIX)

Guhertoya herî dawî ji [Microsoft Store](https://www.microsoft.com/store). Ev
ewle herî ewledar e û Vebijarka bikarhêner-heval, bi nûvekirinên otomatîk.

**Pros:**

- Nûvekirinên otomatîkî
- Verast kirin û pejirandin ji hêla Microsoft ve hatî pejirandin
- Ewlehî û pêbaweriya bilind
- Guhertoya siviktir ji sazker .exe (No sembolên debug)

**Cons:**

- Nûvekirin dibe ku ji bo pejirandina Microsoft 1-3 rojên karsaziyê bigirin
- Pirsgirêkên dijwartir û rapor bikin

---

### Winget (MSIX)

Guhertoya herî dawî bi karanîna fermana jêrîn saz bikin:

> Winget Install --id Seelen.seelenui

Heman feydeyên wekî guhertoya Microsoft Store bi lê zêde kir rehetiya sazkirina
fermandariyê.

---

### .exe sazker

Sazkirina sazker.exe ji
[Rûpelê berdide](https://github.com/eythaann/Seelen-UI/releases) û ew birêve
bibe.

**Pros:**

- Nûvekirinên bilez ên berdest
- Dema ku guhertoyên nû hatine berdan, nûvekirinên nûvekirinê digire
- Ji bo armancên debugging çêtir e

**Cons:**

- Dibe ku hişyariya antivirus (ne bi dîjîtal îmze kirin)
- Mezinahiya pelê mezintir (sembolên debug) tê de)

## Kanalên nûvekirin

> Tevî kanala nûvekirina we ya bijartî, hemî guhertoyên otomatîkî digirin
> Nûvekirin. Kanalên bêserûber jî ji kanalên din ên stabîl nûve dikin (mînak,
> şevên şevê ji nûvekirin û beta / berdanê werdigire).

### Berdan (domdar)

Kanala herî ewledar û pêşniyazkirî ji bo hemî bikarhêneran.

**Taybetmendî:**

- Bi şaşiyên krîtîk re ceribandin
- Ji bo hilberîn û karanîna rojane îdeal e
- Li ser Microsoft Store, Winget (.msix), û wekî sazker .exe

### Beta

Ji bo bikarhênerên ku di destpêka serbestberdana fermî de gihîştina destpêka
taybetmendiyên nû dixwazin.

**Taybetmendî:**

- Di bin ceribandinê de taybetmendiyên pêşerojê pêk tîne
- Dibe ku bugsên piçûk hebe
- Nûvekirinên dubare ji stabîl
- Tenê wekî sazker .exe peyda dibe

### Şevî

Ji bo bikarhênerên pêşkeftî û pêşdebiran guherînên herî dawî dixwazin.

**Taybetmendî:**

- Guhertinên herî dawî, yên herî dawî hene
- Dibe ku taybetmendiyên an taybetmendiyên bêkêmasî pêk bînin
- Rojane an bi her guhertina kodê girîng hatî nûve kirin
- Tenê wekî sazker .exe peyda dibe

Li ser kanala şevê di nava me de bêtir fêr bibin
[SEELEN UI Nightly](https://seelen.io/blog/nightly) belgekirin.

## Mekanîzmaya nûvekirinê: Setup.exe vs Msix

- **MSIX:** Nûvekirin bixweber ji hêla Microsoft Store ve hatî rêvebirin
- **Setup.exe:** Di nav nûvekirina nûvekirî de ku we agahdar dike dema ku
  nûvekirinan agahdar dike berdeste

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Dema ku nûvekirinek heye:

1. Nîşaneyê bikirtînin
2. Nûvekirin dê nûvekirin dakêşin û saz bikin
3. Serlêdan bixweber ji nû ve dest pê bike
