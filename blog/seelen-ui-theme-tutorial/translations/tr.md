# Seelen UI: Tema Temelleri Eğitimi - Masaüstünüzü bir Pro Gibi Özelleştirin!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows masaüstünüze yeni bir görünüm vermek ister misiniz? Seelen UI bunu
kolaylaştırır güçlü tema sistemi. Bu kılavuz, nasıl olduğunun temellerinde size
yol gösterecektir Temalar çalışır - kodlama deneyimi gerekmez!

## Tema Yaratıcısı için Özel Hata Ayıklama Sürümü

Başlamadan önce, tema yaratıcıları özelliğimizi bilmeli **Hata ayıklama sürümü**
Seelen UI! Bu sürüm size izin verir:

- Öğeleri tıpkı bir web sayfası gibi inceleyin (Ctrl+Shift+I geliştirici
  araçlarını açar)
- Canlı HTML/CSS değişikliklerine bakın
- Tema değişikliklerini anında test edin
- Stil sorunları kolayca hata ayıklama

Hata ayıklama sürümünü indirin
[Gece Buluşuyor Kanal](https://seelen.io/apps/seelen-ui/releases/nightly) (ile
biten dosyaları arayın `-debug.exe`, beğenmek
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### Gece yapıları hakkında daha fazla bilgi edinmek ister misiniz?

Bize bak [Gece yapıları açıklandı](https://seelen.io/blog/seelen-ui-nightly)
madde!

## Tema Dosyalarını Anlamak

Boya katmanları gibi Seelen UI temalarını düşünün. Birden çok tema
uygulayabilirsiniz Bir zamanlar ve resim gibi, sipariş önemlidir! Temalar her
şeyi değiştirebilir Renklerden pencere stillerine.

Temaların paketlenmesinin üç yolu vardır:

1. **Tek dosya teması** (.yml dosyası)
2. **Tema klasörü** (birden çok dosya içerir)
3. **Sıkıştırılmış tema** (.slu Dosyası - Özel Seelen UI biçimi)

### Temalarınızı nereye koyabilirsiniz

Tüm temalar bilgisayarınızdaki bu klasöre girer:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### Tema Klasör Yapısı

İşte bir tema klasörü içinde neye benziyor:

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

## İlham Almak: Örnek Temalar

Nereden veya nasıl başlayacağınızdan emin değil misiniz? Seelen UI birkaç
yerleşik tema ile geliyor. İlham olarak kullanabilir! Kontrol et
[Varsayılan temalar koleksiyonu](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
nasıl yapıldıklarını görmek için.

## Renklerle çalışmak - düşündüğünüzden daha kolay!

Seelen UI, pencerelerinizi otomatik olarak alır ve bunu yapar Basit renk
değişkenleri aracılığıyla farklı tonlarda mevcuttur.

### Ana vurgu renginiz

Bu değişkenler, Windows ayarlarında ayarladığınız rengi kullanır:

- `--config-accent-color`: Saf renk (#ffbbaa gibi)
- `--config-accent-color-rgb`: RGB formatında aynı renk (255, 187, 170)

### Tam renkli aile

Seelen UI, aksan renginizden bütün bir palet oluşturur:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

İşte mevcut renklerin tam listesi:

- En karanlık sürüm: `--config-accent-darkest-color`
- Daha karanlık sürüm: `--config-accent-darker-color`
- Karanlık Sürüm: `--config-accent-dark-color`
- Normal sürüm: `--config-accent-color`
- Işık Versiyonu: `--config-accent-light-color`
- Daha hafif sürüm: `--config-accent-lighter-color`
- En hafif sürüm: `--config-accent-lightest-color`

Her renk ayrıca bir RGB sürümü vardır (sonunda -rgb ile). Bu için yararlı
gradyanlar ve diğer renk efektleri oluşturmak.

Örnek olarak opaklıklı bir arka plan rengi ayarlar:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### Daha fazla renk seçeneği

Daha fazla renk seçeneği mi istiyorsunuz? Seelen UI düzinelerce ek sistem rengi
ortaya çıkarır. Buna bak
[Kullanışlı renk referansı](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
mevcut tüm seçenekler için.

PRO İPUCU: Windows vurgu renginiz değiştiğinde, Seelen UI teması
güncellemeleriniz otomatik olarak!
