# **એસએલયુ લાઇબ્રેરી: પ્રકારો અને ઇન્ટરફેસો**

તે `types` એસએલયુ લાઇબ્રેરીનું મોડ્યુલ આવશ્યક પ્રકારનો સંગ્રહ પ્રદાન કરે છે વ્યાખ્યાઓ અને ઇન્ટરફેસો
જે વિજેટ વિકાસના પાયા તરીકે સેવા આપે છે. આ મોડ્યુલ આ માટે રચાયેલ છે:

- સીલેન યુઆઈ ઇકોસિસ્ટમ દરમ્યાન વપરાયેલી પ્રમાણિત પ્રકારની વ્યાખ્યાઓ પ્રદાન કરો
- સતત વિજેટ અમલીકરણ માટે ઇન્ટરફેસો પ્રદાન કરો
- વિજેટ વિકાસમાં પ્રકારની સલામતી સક્ષમ કરો
- મુખ્ય એપ્લિકેશન અને વિજેટો વચ્ચે વહેંચાયેલા કરાર તરીકે સેવા આપે છે

## **ઉપયોગ**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **મુખ્ય સુવિધાઓ:**

- **મુખ્ય પ્રકારની વ્યાખ્યાઓ**: સીલેન યુઆઈ એપ્લિકેશન દ્વારા ઉપયોગમાં લેવાતા મૂળભૂત પ્રકારો
- **વિજજનો કરાર**: ઇન્ટરફેસો કે વિજેટોએ સુસંગતતા માટે અમલ કરવો આવશ્યક છે
- **વહેંચાયેલ નમૂનાઓ**: પ્લેટફોર્મ પર વપરાયેલ સામાન્ય ડેટા સ્ટ્રક્ચર્સ
- **પ્રકાર**: વિજેટ વિકાસ માટે સહાયક પ્રકારો

આ પ્રકારો એપ્લિકેશન દ્વારા આંતરિક રીતે પીવામાં આવે છે અને તેના માટે સંપર્કમાં આવે છે બાહ્ય વિજેટ
વિકાસકર્તાઓ સમગ્ર ઇકોસિસ્ટમમાં પ્રકારની સુસંગતતા સુનિશ્ચિત કરવા માટે.
