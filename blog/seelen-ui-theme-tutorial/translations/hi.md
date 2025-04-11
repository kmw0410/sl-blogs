# सेलेन यूआई: थीम बेसिक्स ट्यूटोरियल - एक प्रो की तरह अपने डेस्कटॉप को अनुकूलित करें!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

अपने विंडोज डेस्कटॉप को एक नया नया रूप देना चाहते हैं? सेलेन यूआई के साथ यह आसान बनाता है
 इसकी शक्तिशाली थीम सिस्टम। यह गाइड आपको मूल बातें कैसे करेगा
 थीम्स वर्क - कोई कोडिंग अनुभव की आवश्यकता नहीं है!

## थीम क्रिएटर्स के लिए विशेष डिबग संस्करण

शुरू करने से पहले, थीम क्रिएटर्स को हमारे विशेष के बारे में पता होना चाहिए **डिबग संस्करण**
सेलेन उई की! यह संस्करण आपको देता है:

* एक वेब पेज की तरह ही तत्वों का निरीक्षण करें (CTRL+SHIFT+I ओपन्स डेवलपर टूल)
* लाइव HTML/CSS परिवर्तन देखें
* परीक्षण थीम संशोधनों को तुरंत
* डीबग स्टाइलिंग मुद्दों को आसानी से

हमारे से डिबग संस्करण डाउनलोड करें
[रात का रिलीज चैनल](https://seelen.io/apps/seelen-ui/releases/nightly)
(के साथ समाप्त होने वाली फ़ाइलों के लिए देखें `-debug.exe`, पसंद
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)।

### रात के निर्माण के बारे में अधिक सीखना चाहते हैं?

हमारी जाँच करें
[रात में बिल्ड्स समझाया गया](https://seelen.io/blog/seelen-ui-nightly) लेख!

## थीम फ़ाइलों को समझना

पेंट की परतों की तरह सेलेन यूआई विषयों के बारे में सोचें। आप कई विषयों को लागू कर सकते हैं
 एक बार, और पेंटिंग की तरह, ऑर्डर मायने रखता है! थीम सब कुछ बदल सकते हैं
 रंगों से लेकर खिड़की की शैलियों तक।

तीन तरीके हैं जो थीम को पैक किया जा सकता है:

1. **एकल फ़ाइल थीम** (.yml फ़ाइल)
2. **थीम फ़ोल्डर** (कई फाइलें हैं)
3. **संपीड़ित विषय** (.SLU फ़ाइल - विशेष Seelen UI प्रारूप)

### अपने विषयों को कहाँ रखना है

सभी थीम आपके कंप्यूटर पर इस फ़ोल्डर में जाते हैं:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### थीम फ़ोल्डर संरचना

यहाँ एक थीम फ़ोल्डर अंदर जैसा दिखता है:

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

## प्रेरित हो रही है: उदाहरण थीम

निश्चित नहीं है कि कहां या कैसे शुरू करें? सेलेन यूआई कई अंतर्निहित विषयों के साथ आता है
 प्रेरणा के रूप में उपयोग कर सकते हैं! इसकी जाँच पड़ताल करो
[डिफ़ॉल्ट थीम संग्रह](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
यह देखने के लिए कि वे कैसे बने हैं।

## रंगों के साथ काम करना - यह आपके विचार से आसान है!

सेलेन यूआई स्वचालित रूप से आपके विंडोज उच्चारण रंग को उठाता है और इसे बनाता है
 सरल रंग चर के माध्यम से विभिन्न रंगों में उपलब्ध है।

### आपका मुख्य उच्चारण रंग

ये चर आपके द्वारा विंडोज सेटिंग्स में सेट किए गए रंग का उपयोग करते हैं:

* `--config-accent-color`: शुद्ध रंग (जैसे #FFBBAA)
* `--config-accent-color-rgb`: आरजीबी प्रारूप में एक ही रंग (255, 187, 170)

### पूरा रंग परिवार

सेलेन यूआई आपके उच्चारण रंग से एक पूरा पैलेट बनाता है:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

यहां उपलब्ध रंगों की पूरी सूची है:

* सबसे गहरा संस्करण: `--config-accent-darkest-color`
* गहरा संस्करण: `--config-accent-darker-color`
* अंधेरा संस्करण: `--config-accent-dark-color`
* नियमित संस्करण: `--config-accent-color`
* संक्षिप्त संस्करण: `--config-accent-light-color`
* लाइटर संस्करण: `--config-accent-lighter-color`
* सबसे हल्का संस्करण: `--config-accent-lightest-color`

प्रत्येक रंग में एक RGB संस्करण भी होता है (अंत में -RGB के साथ)। इसके लिए उपयोगी है
 ग्रेडिएंट और अन्य रंग प्रभाव बनाना।

उदाहरण के रूप में अपारदर्शिता के साथ एक पृष्ठभूमि रंग सेटिंग:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### और भी अधिक रंग विकल्प

अधिक रंग विकल्प चाहते हैं? सेलेन यूआई दर्जनों अतिरिक्त सिस्टम रंगों को उजागर करता है।
 इसे देखें
[संभाले रंग संदर्भ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
सभी उपलब्ध विकल्पों के लिए।

प्रो टिप: जब आपका विंडोज उच्चारण रंग बदल जाता है, तो आपका सेलेन यूआई थीम अपडेट
 खुद ब खुद!
