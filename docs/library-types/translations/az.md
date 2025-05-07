# **SLU Kitabxanası: növləri və interfeyslər**

Bu `types` SLU Kitabxanasının modulu vacib tip toplusunu təmin edir 
Widget inkişafı üçün təməl kimi xidmət edən təriflər və interfeyslər. 
Bu modul aşağıdakılar üçün hazırlanmışdır:

* Seelen UI ekosistemi boyunca istifadə olunan standart tip təriflər təklif edin
* Ardıcıl widget tətbiqi üçün interfeys təmin edin
* Widget İnkişafı boyunca tipli təhlükəsizliyi aktivləşdirin
* Əsas tətbiq və vidjetlər arasında paylaşılan müqavilələrə xidmət edin

## **İstifadə**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **Əsas xüsusiyyətlər:**

* **Əsas tipli təriflər**: Seelen UI tətbiqinin istifadə etdiyi fundamental növlər
* **Widget müqavilələri**: Vidjetlərin uyğunluğu üçün həyata keçirməli olan interfeyslər
* **Paylaşılan modellər**: Platformada istifadə olunan ümumi məlumat strukturları
* **Kommunal xidmətlər yazın**: Widget İnkişafı üçün Köməkçi növləri

Bu tiplər həm daxili, həm də tətbiq tərəfindən istehlak olunur və məruz qalır 
Xarici widget inkişaf etdiriciləri ekosistem boyunca tip ardıcıllığını təmin etmək üçün.
