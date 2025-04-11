# Seelen UI: การสอนพื้นฐานธีม - ปรับแต่งเดสก์ท็อปของคุณเหมือนมืออาชีพ!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

ต้องการให้เดสก์ท็อปของคุณดูใหม่หรือไม่? Seelen UI ทำให้ง่ายด้วย
 ระบบธีมที่ทรงพลัง คู่มือนี้จะนำคุณผ่านพื้นฐานของวิธีการ
 ชุดรูปแบบการทำงาน - ไม่จำเป็นต้องมีประสบการณ์การเข้ารหัส!

## เวอร์ชันดีบั๊กพิเศษสำหรับผู้สร้างธีม

ก่อนที่เราจะเริ่มต้นผู้สร้างธีมควรรู้เกี่ยวกับพิเศษของเรา **เวอร์ชันดีบั๊ก**
ของ Seelen UI! เวอร์ชันนี้ให้คุณ:

* การตรวจสอบองค์ประกอบเช่นหน้าเว็บ (Ctrl+Shift+I เปิดเครื่องมือนักพัฒนา)
* ดูการเปลี่ยนแปลง HTML/CSS สด
* ทดสอบการปรับเปลี่ยนธีมทันที
* ปัญหาการออกแบบการออกแบบอย่างง่ายดาย

ดาวน์โหลดเวอร์ชันดีบั๊กจากของเรา
[Channel ปล่อยทุกคืน](https://seelen.io/apps/seelen-ui/releases/nightly)
(มองหาไฟล์ที่ลงท้ายด้วย `-debug.exe`, ชอบ
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`-

### ต้องการเรียนรู้เพิ่มเติมเกี่ยวกับการสร้างยามค่ำคืนหรือไม่?

ตรวจสอบไฟล์
[สร้างการอธิบายทุกคืน](https://seelen.io/blog/seelen-ui-nightly) บทความ!

## ทำความเข้าใจไฟล์ธีม

นึกถึงธีม UI ของ Seelen เช่นชั้นของสี คุณสามารถใช้หลายธีมได้ที่
 ครั้งหนึ่งและเช่นเดียวกับการวาดภาพคำสั่งก็สำคัญ! ชุดรูปแบบสามารถเปลี่ยนแปลงทุกอย่างได้
 จากสีไปจนถึงสไตล์หน้าต่าง

มีสามวิธีที่สามารถบรรจุได้:

1. **ธีมไฟล์เดียว** (ไฟล์. yml)
2. **โฟลเดอร์ธีม** (มีหลายไฟล์)
3. **ธีมบีบอัด** (.SLU ไฟล์ - รูปแบบ SEELEN UI พิเศษ)

### จะวางธีมของคุณที่ไหน

ชุดรูปแบบทั้งหมดไปในโฟลเดอร์นี้บนคอมพิวเตอร์ของคุณ:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### โครงสร้างธีมโฟลเดอร์

นี่คือสิ่งที่โฟลเดอร์ธีมดูเหมือนภายใน:

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

## รับแรงบันดาลใจ: ตัวอย่างชุดรูปแบบ

ไม่แน่ใจว่าจะเริ่มต้นที่ไหนหรืออย่างไร? Seelen UI มาพร้อมกับธีมในตัวคุณ
 สามารถใช้เป็นแรงบันดาลใจ! ตรวจสอบไฟล์
[คอลเลกชันชุดรูปแบบเริ่มต้น](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
เพื่อดูว่าพวกเขาทำอย่างไร

## การทำงานกับสี - มันง่ายกว่าที่คุณคิด!

Seelen UI จะเลือกสีที่เน้นหน้าต่างของคุณโดยอัตโนมัติและทำให้มัน
 มีอยู่ในเฉดสีที่แตกต่างกันผ่านตัวแปรสีที่เรียบง่าย

### สีสำเนียงหลักของคุณ

ตัวแปรเหล่านี้ใช้สีที่คุณตั้งค่าในการตั้งค่า Windows:

* `--config-accent-color`: สีบริสุทธิ์ (เช่น #FFBBAA)
* `--config-accent-color-rgb`: สีเดียวกันในรูปแบบ RGB (255, 187, 170)

### ครอบครัวสีที่สมบูรณ์

Seelen UI สร้างจานสีทั้งหมดจากสีสำเนียงของคุณ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

นี่คือรายการสีที่มีอยู่ทั้งหมด:

* เวอร์ชันที่มืดที่สุด: `--config-accent-darkest-color`
* เวอร์ชันมืดกว่า: `--config-accent-darker-color`
* เวอร์ชั่นมืด: `--config-accent-dark-color`
* เวอร์ชันปกติ: `--config-accent-color`
* เวอร์ชันเบา: `--config-accent-light-color`
* เวอร์ชันเบากว่า: `--config-accent-lighter-color`
* เวอร์ชันที่เบาที่สุด: `--config-accent-lightest-color`

แต่ละสียังมีรุ่น RGB (พร้อม -RGB ในตอนท้าย) สิ่งนี้มีประโยชน์สำหรับ
 การสร้างการไล่ระดับสีและเอฟเฟกต์สีอื่น ๆ

เป็นตัวอย่างการตั้งค่าสีพื้นหลังด้วยความทึบ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ตัวเลือกสีมากยิ่งขึ้น

ต้องการตัวเลือกสีเพิ่มเติมหรือไม่? Seelen UI เปิดเผยสีของระบบเพิ่มเติมหลายสิบสี
 ตรวจสอบสิ่งนี้
[การอ้างอิงสีที่มีประโยชน์](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
สำหรับตัวเลือกที่มีอยู่ทั้งหมด

เคล็ดลับสำหรับมืออาชีพ: เมื่อสีที่เน้นสี windows ของคุณเปลี่ยนไปการอัพเดทชุดรูปแบบ UI ของคุณ
 โดยอัตโนมัติ
