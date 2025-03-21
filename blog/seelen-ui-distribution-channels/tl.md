# **Seelen UI: Mga Pamamaraan sa Pag -install at Pag -update ng Mga Channel**

## **Mga pagpipilian sa pag -install**

### **Microsoft Store (MSIX)**

I -download ang pinakabagong bersyon mula sa Microsoft Store. Ito ang pinaka ligtas
 at pagpipilian ng friendly na gumagamit, na may awtomatikong pag-update.

*   Mga kalamangan:
    *   Mga awtomatikong pag -update.
    *   Na -verify at naaprubahan ng Microsoft.
    *   Mataas na seguridad at pagiging maaasahan.
    *   Lightweighter bersyon kaysa sa .exe installer dahil ang bersyon na ito ay hindi
         May kasamang mga simbolo ng debug.
*   Cons:
    *   Ang mga pag-update ay maaaring tumagal ng 1-3 araw ng negosyo upang maaprubahan.
    *   Mas mahirap i -debug at iulat ang mga isyu.

***

### **Winget (MSIX)**

I -install ang pinakabagong bersyon gamit ang sumusunod na utos:

```pwsh
winget install --id Seelen.SeelenUI
```

Parehong kalamangan at kahinaan ng Microsoft Store na may plus ng isang mabilis na pag -install sa pamamagitan ng
 linya ng utos.

***

### \*\*. exe installer \*\*

I -download ang installer ng Setup.exe mula sa pahina ng paglabas at patakbuhin ito.

*   Mga kalamangan:
    *   Mas mabilis na pag -install na may agarang pag -update.
    *   Tumatanggap ng mga abiso para sa mga bagong paglabas sa sandaling magagamit na sila.
*   Cons:
    *   Hindi digital na nilagdaan, na maaaring mag -trigger ng mga babala ng antivirus.
    *   Hindi gaanong magaan kaysa sa MSIX installer dahil ang bersyon na ito ay may kasamang debug
         Mga Simbolo.

## **I -update ang mga channel**

> Indenpendent ng Update Channel Lahat ng mga bersyon ay tumatanggap ng mga awtomatikong pag -update,
>  Gayundin kung ang iyong paggamit ng isang hindi matatag na pag -update ng channel ay tatanggap din ng mga pag -update ng
>  mas matatag na pag -update ng mga channel, halimbawa: gabi -gabi na matanggap ang mga pag -update mula sa gabi -gabi ngunit
>  Gayundin mula sa Beta at Paglabas

### **Paglabas (matatag)**

Ang pinaka -secure at inirekumendang channel para sa lahat ng mga gumagamit.

*   Mga Tampok:
    *   Lubusang nasubok nang walang kritikal na mga bug.
    *   Tamang -tama para sa paggawa at pang -araw -araw na paggamit.
    *   Magagamit sa Microsoft Store, Winget, .MSIX, at .exe.

### **Beta**

Nag -target sa mga gumagamit na nais subukan ang mga bagong tampok bago sila opisyal na pinakawalan.
 Kasama sa channel na ito ang mga betas at naglalabas ng mga kandidato.

*   Mga Tampok:
    *   Naglalaman ng mga bagong tampok sa ilalim ng pagsubok.
    *   Maaaring magkaroon ng mga menor de edad na bug.
    *   Mas madalas na pag -update kaysa sa matatag na paglabas.
    *   Magagamit lamang bilang .exe sa pahina ng paglabas.

### **Gabi -gabi**

Para sa mga advanced na gumagamit at developer na nais ng pag -access sa pinakabagong mga pagbabago at
 Mga tampok na pang -eksperimentong.

*   Mga Tampok:
    *   May kasamang pinakabagong mga pagbabago, ngunit hindi lubusang nasubok.
    *   Maaaring maglaman ng mga bug o hindi natapos na mga tampok.
    *   Nai -update araw -araw o sa bawat makabuluhang pagbabago sa code.
    *   Magagamit lamang bilang .exe sa pahina ng paglabas.

Magbasa nang higit pa tungkol sa [Seelen ui Nighly](./nightly.md)

## **Pag -update ng mga update sa Setup.exe vs MSIX**

Sa mga pag -update ng MSIX ay pinamamahalaan ng Microsoft Store, ngunit sa setup.exe sila ay
 Hindi, kaya ang isang updateater ay kasama sa application na ito ay magpapakita sa iyo a
 abiso kapag magagamit ang isang pag -update.

![Seelen UI update notification on settings window](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

Kung nag -click ka sa abiso magsisimulang mag -download at mag -install ng
 I -update, pagkatapos nito ay awtomatikong mai -restart ang application.
