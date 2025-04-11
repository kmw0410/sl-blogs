---
author: Eythaann
published: 13-02-2025
lastRevision: 13-02-2025
title: Seelen UI Mga Channel ng Pamamahagi
description: Alamin ang tungkol sa iba't ibang mga channel ng pamamahagi na
  magagamit para sa Seelen UI
---

# Seelen UI: Mga Pamamaraan sa Pag -install at Pag -update ng Mga Channel

## Mga pagpipilian sa pag -install

### Microsoft Store (MSIX)

I -download ang pinakabagong bersyon mula sa
[Microsoft Store](https://www.microsoft.com/store). Ito ang pinaka ligtas at
pagpipilian ng friendly na gumagamit, na may awtomatikong pag-update.

**Mga kalamangan:**

- Mga awtomatikong pag -update
- Na -verify at naaprubahan ng Microsoft
- Mataas na seguridad at pagiging maaasahan
- Mas magaan na bersyon kaysa sa .exe installer (walang kasama na mga simbolo ng
  debug)

**Cons:**

- Ang mga pag-update ay maaaring tumagal ng 1-3 araw ng negosyo para sa
  pag-apruba ng Microsoft
- Mas mahirap i -debug at iulat ang mga isyu

---

### Winget (MSIX)

I -install ang pinakabagong bersyon gamit ang sumusunod na utos:

> Winget install --id seelen.seelenui

Nag -aalok ng parehong mga benepisyo tulad ng bersyon ng Microsoft Store na may
idinagdag kaginhawaan ng pag-install ng command-line.

---

### .exe installer

I -download ang installer ng setup.exe mula sa
[Naglalabas ng pahina](https://github.com/eythaann/Seelen-UI/releases) at
patakbuhin ito.

**Mga kalamangan:**

- Magagamit ang mga agarang pag -update
- Tumatanggap ng mga abiso sa pag -update sa sandaling mailabas ang mga bagong
  bersyon
- Mas mahusay para sa mga layunin ng pag -debug

**Cons:**

- Maaaring mag -trigger ng mga babala sa antivirus (hindi digital na naka -sign)
- Mas malaking laki ng file (may kasamang mga simbolo ng debug)

## I -update ang mga channel

> Anuman ang iyong napiling pag -update ng channel, ang lahat ng mga bersyon ay
> tumatanggap ng awtomatiko mga update. Ang mga hindi matatag na channel ay
> nakakatanggap din ng mga update mula sa mas matatag na mga channel (hal.,
> Nightly ay tumatanggap ng mga update mula sa parehong gabi -gabi at
> beta/release).

### Paglabas (matatag)

Ang pinaka -secure at inirekumendang channel para sa lahat ng mga gumagamit.

**Mga Tampok:**

- Lubusang nasubok nang walang kritikal na mga bug
- Tamang -tama para sa paggawa at pang -araw -araw na paggamit
- Magagamit sa Microsoft Store, Winget (.msix), at bilang .exe installer

### Beta

Para sa mga gumagamit na nais ng maagang pag -access sa mga bagong tampok bago
ang opisyal na paglabas.

**Mga Tampok:**

- May kasamang paparating na mga tampok sa ilalim ng pagsubok
- Maaaring maglaman ng mga menor de edad na bug
- Mas madalas na pag -update kaysa sa matatag
- Magagamit lamang bilang .exe installer

### Gabi -gabi

Para sa mga advanced na gumagamit at developer na nais ang pinakabagong mga
pagbabago.

**Mga Tampok:**

- Naglalaman ng pinakabagong, hindi nasusulat na mga pagbabago
- Maaaring isama ang mga bug o hindi kumpletong mga tampok
- Nai -update araw -araw o sa bawat makabuluhang pagbabago sa code
- Magagamit lamang bilang .exe installer

Matuto nang higit pa tungkol sa gabi -gabi na channel sa aming
[Seelen ui gabi -gabi](https://seelen.io/blog/nightly) dokumentasyon.

## I -update ang mekanismo: setup.exe vs msix

- **MSIX:** Awtomatikong pinamamahalaan ang mga pag -update ng Microsoft Store
- **Setup.exe:** May kasamang built-in na pag-update na nagpapaalam sa iyo kapag
  ang mga pag-update magagamit

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kapag magagamit ang isang pag -update:

1. I -click ang abiso
2. I -download at i -install ng Updateater ang pag -update
3. Awtomatikong i -restart ang application
