# यूई हेर्नुहोस्: विषयवस्तु बेमेल ट्यूटोरियल - प्रो जस्तै तपाईंको डेस्कटप अनुकूलन गर्नुहोस्!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

तपाईंको विन्डोज डेस्कटपलाई नयाँ नयाँ लुक दिन चाहनुहुन्छ? नजर भेट्नुहोस् यूईले यसलाई सजिलो बनाउँदछ
यसको शक्तिशाली विषयवस्तु प्रणाली। यो गाईडहरू कसरी तपाईंलाई कसरी हिंड्ने गर्दछ विषयवस्तु
काम - कुनै कोडिंग अनुभव आवश्यक छैन!

## विषयवस्तुहरू को लागी विशेष डिबग संस्करण

हामीले सुरु गर्नु अघि, विषयवस्तुहरू हाम्रो विशेषको बारेमा जान्नु पर्छ **डिबग संस्करण** देखिने उई!
यस संस्करणले तपाईंलाई अनुमति दिन्छ:

- तत्वहरूको निरीक्षण गरिएको वेब पृष्ठ जस्तै (CTRL + शिफ्ट + म विकासकर्ता उपकरणहरू खोल्छ)
- प्रत्यक्ष HTML / CSS परिवर्तन हेर्नुहोस्
- परीक्षण विषयवस्तुहरू तत्काल परीक्षण गर्नुहोस्
- डिबग स्टिलिंग मुद्दाहरू सजिलैसँग

हाम्रो बाट डिबग संस्करण डाउनलोड गर्नुहोस्
[राति च्यानल जारी](https://seelen.io/apps/seelen-ui/releases/nightly) (को साथ
समाप्त गरिएका फाइलहरू खोज्नुहोस् `-debug.exe`, जस्तै
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`)

### राति निर्माणको बारेमा अझ बढी जान्न चाहनुहुन्छ?

हाम्रो जाँच गर्नुहोस् [राति वर्णन गर्दछ](https://seelen.io/blog/seelen-ui-nightly) लेख!

## विषयवस्तु फाइलहरू बुझ्दै

हेलेन UI थिमहरु को तह को तहहरु को रूप मा सोच्नुहोस्। तपाईं धेरै विषयवस्तुहरू लागू गर्न सक्नुहुन्छ एक
पटक, र केवल चित्रकला जस्तै, अर्डर मामलाहरु! विषयवस्तुहरूले सबै परिवर्तन गर्न सक्दछन् र colors
्गबाट ​​विन्डो शैलीहरूमा।

त्यहाँ तीन तरिकाहरू प्याकेज गर्न सकिन्छ:

1. **एकल फाईल विषयवस्तु** (.YML फाईल)
2. **थिम फोल्डर** (बहु फाइलहरू समावेश गर्दछ)
3. **संकुचित थिम** (.Sllu फाईल - विशेष देखिनेज UI ढाँचा)

### कहाँ तपाईंको विषयवस्तुहरू राख्ने

सबै विषयवस्तुहरू तपाईंको कम्प्युटरमा यस फोल्डरमा जान्छन्:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### थिम फोल्डर संरचना

यहाँ के एक थिम फोल्डर भित्र देखिन्छ:

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

## प्रेरणा पाउँदा: उदाहरण विषयवस्तुहरू

पक्का छैन कि कहाँ वा कसरी सुरू गर्ने? भेटिएन UI तपाईं धेरै निर्मित-मा धेरै बिषयहरु संग आउँदछ
प्रेरणाको रूपमा प्रयोग गर्न सक्दछ! जाँच गर्नुहोस्
[पूर्वनिर्धारित थिम संग्रह](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
कसरी उनीहरू बनाइएका छन् हेर्नका लागि।

## र colors हरूसँग काम गर्दै - यो तपाईको सोचाइ भन्दा सजिलो छ!

नजरले यूईले स्वचालित रूपमा तपाईंको विन्डोज उच्वस्था र color ्ग लिन्छन् र यसलाई बनाउँदछ साधारण
रंग भ्यारीएबलको माध्यमबाट विभिन्न शेडहरूमा उपलब्ध।

### तपाईंको मुख्य उच्तको रंग

यी भ्यारीएबलले विन्डोज सेटिंग्समा सेट गर्नुभयो जुन तपाईं विन्डोज सेटिंग्समा सेट गर्नुभयो:

- `--config-accent-color`: शुद्ध र color (#ffbbaa)
- `--config-accent-color-rgb`: RGB ढाँचामा उही र color (255, 1 255, 1 187,
  1 1700)

### पूर्ण र color ्ग परिवार

नजरले यूएईले तपाईंको उच्चारण र color ्गबाट ​​सम्पूर्ण प्यालेट सिर्जना गर्दछ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

यहाँ उपलब्ध र colors को पूर्ण सूची छ:

- गाढा संस्करण: `--config-accent-darkest-color`
- गाढा संस्करण: `--config-accent-darker-color`
- गाढा संस्करण: `--config-accent-dark-color`
- नियमित संस्करण: `--config-accent-color`
- प्रकाश संस्करण: `--config-accent-light-color`
- हल्का संस्करण: `--config-accent-lighter-color`
- हल्का संस्करण: `--config-accent-lightest-color`

प्रत्येक र color साथै एक RGB संस्करण (अन्त मा संग) छ। यो उपयोगी छ ग्रेडियन्ट्स र अन्य रंग
प्रभावहरू सिर्जना गर्दै।

उदाहरणको रूपमा, मैदानको साथ एक पृष्ठभूमि रंग अस्पष्ट रंगको रूपमा:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### अझ रंग विकल्प पनि

अधिक रंग विकल्पहरू चाहानुहुन्छ? हेर्य युडीले दर्जनौं प्रणाली र colors हरूको पर्दाफास गर्दछ। यो
जाँच गर्नुहोस्
[ह्यान्डल रंग सन्दर्भ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
सबै उपलब्ध विकल्पहरूको लागि।

प्रो टिप: जब तपाइँको विन्डोज वोल्ट र color ्ग परिवर्तनहरू, तपाईंको परिसर UI थिम अपडेटहरू
स्वचालित रूपमा!
