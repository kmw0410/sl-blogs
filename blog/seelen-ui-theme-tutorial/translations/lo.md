# SEELEN UI: ຫົວຂໍ້ການສອນພື້ນຖານການສອນ - ປັບແຕ່ງຄອມພິວເຕີຂອງທ່ານຄືກັບ Pro!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

ຕ້ອງການໃຫ້ Windows desktop ຂອງທ່ານເປັນຮູບແບບໃຫມ່ບໍ? SEELEN UI ເຮັດໃຫ້ມັນງ່າຍຂື້ນ
ລະບົບຫົວຂໍ້ທີ່ມີພະລັງຂອງມັນ. ຄູ່ມືນີ້ຈະຍ່າງທ່ານຜ່ານພື້ນຖານຂອງວິທີການ ຫົວຂໍ້ເຮັດວຽກ - ບໍ່ຕ້ອງມີປະສົບການການປັບຕົວ!

## ລຸ້ນ Debug ພິເສດສໍາລັບຜູ້ສ້າງຫົວຂໍ້

ກ່ອນທີ່ພວກເຮົາຈະເລີ່ມຕົ້ນ, ຜູ້ສ້າງຫົວຂໍ້ຄວນຮູ້ກ່ຽວກັບພິເສດຂອງພວກເຮົາ **DEBUG VERE** ຂອງ Searen UI!
ສະບັບນີ້ສາມາດເຮັດໃຫ້ທ່ານ:

- ກວດກາອົງປະກອບຄືກັນກັບຫນ້າເວບໄຊທ໌ (Ctrl + Shift + ຂ້ອຍເປີດເຄື່ອງມືພັດທະນາ)
- ເບິ່ງການປ່ຽນແປງຂອງ HTML / CSS Live
- ການດັດແປງຫົວຂໍ້ການທົດສອບທັນທີ
- ບັນຫາ Debug Styling ໄດ້ງ່າຍ

ດາວໂຫລດ Debug Version ຈາກຂອງພວກເຮົາ
[ການປ່ອຍຊ່ອງທາງກາງຄືນ](https://seelen.io/apps/seelen-ui/releases/nightly)
(ຊອກຫາເອກະສານສິ້ນສຸດດ້ວຍ `-debug.exe`, ຄື
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### ຕ້ອງການຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບການກໍ່ສ້າງໃນຕອນກາງຄືນບໍ?

ກວດສອບຂອງພວກເຮົາ
[ການກໍ່ສ້າງໃນຕອນກາງຄືນໄດ້ອະທິບາຍ](https://seelen.io/blog/seelen-ui-nightly) ມາດຕາ!

## ເຂົ້າໃຈເອກະສານຫົວຂໍ້

ຄິດເຖິງນາງ Seelen Ui ຫົວຂໍ້ເຊັ່ນ: ຊັ້ນຂອງສີ. ທ່ານສາມາດນໍາໃຊ້ຫລາຍຫົວຂໍ້ທີ່ ຄັ້ງຫນຶ່ງ, ແລະຄືກັນກັບການແຕ້ມຮູບ,
ຄໍາສັ່ງທີ່ສໍາຄັນ! ຫົວຂໍ້ສາມາດປ່ຽນແປງທຸກຢ່າງ ຈາກສີສັນໄປຫາຮູບແບບ window.

ຫົວຂໍ້ສາມວິທີສາມາດຖືກຫຸ້ມຫໍ່:

1. **ຫົວຂໍ້ເອກະສານດຽວ** (.YML File)
2. **ໂຟນເດີຫົວຂໍ້** (ມີຫລາຍເອກະສານ)
3. **ຫົວຂໍ້ທີ່ບີບອັດ** (.slu file - ຮູບແບບ Setelen ພິເສດ UI)

### ບ່ອນທີ່ຈະເອົາໃຈໃສ່ຫົວຂໍ້ຂອງທ່ານ

ຫົວຂໍ້ທັງຫມົດໄປໃນໂຟນເດີນີ້ໃນຄອມພິວເຕີຂອງທ່ານ:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### ໂຄງສ້າງຂອງແຟ້ມຫົວຂໍ້

ນີ້ແມ່ນສິ່ງທີ່ໂຟນເດີຫົວຂໍ້ມີລັກສະນະຄ້າຍຄືພາຍໃນ:

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

## ການໄດ້ຮັບການດົນໃຈ: ຫົວຂໍ້ຕົວຢ່າງ

ບໍ່ແນ່ໃຈວ່າຫຼືວິທີເລີ່ມຕົ້ນຢູ່ໃສ? Setelen UI ມາພ້ອມກັບຫົວຂໍ້ທີ່ສ້າງຂຶ້ນຫຼາຍທ່ານ ສາມາດໃຊ້ເປັນແຮງບັນດານໃຈ!
ກວດສອບ
[ການເກັບກໍາຂໍ້ມູນເລີ່ມຕົ້ນ](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
ເພື່ອເບິ່ງວ່າພວກເຂົາສ້າງຂື້ນແນວໃດ.

## ການເຮັດວຽກກັບສີສັນ - ມັນງ່າຍກວ່າທີ່ທ່ານຄິດ!

SEELEN UI ໂດຍອັດຕະໂນມັດເອົາສີ Windows ທີ່ເປັນສີ Windows ຂອງທ່ານແລະເຮັດໃຫ້ມັນ
ມີຢູ່ໃນຮົ່ມທີ່ແຕກຕ່າງກັນໂດຍຜ່ານຕົວແປສີທີ່ງ່າຍດາຍ.

### ສີສໍານຽງຫຼັກຂອງທ່ານ

ຕົວແປເຫຼົ່ານີ້ໃຊ້ສີທີ່ທ່ານກໍານົດໃນການຕັ້ງຄ່າ Windows:

- `--config-accent-color`: ສີບໍລິສຸດ (ຄື #ffbbaa)
- `--config-accent-color-rgb`: ສີດຽວກັນໃນຮູບແບບ RGB (255, 187, 170)

### ຄອບຄົວສີທີ່ສົມບູນ

SEELEN UI ສ້າງກະດານທັງຫມົດຈາກສີສໍານຽງຂອງທ່ານ:

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

ນີ້ແມ່ນບັນຊີລາຍຊື່ເຕັມຂອງສີທີ່ມີຢູ່:

- ສະບັບທີ່ມືດມົນທີ່ສຸດ: `--config-accent-darkest-color`
- verser version: `--config-accent-darker-color`
- ສະບັບມືດ: `--config-accent-dark-color`
- ສະບັບປົກກະຕິ: `--config-accent-color`
- ສະບັບແສງສະຫວ່າງ: `--config-accent-light-color`
- ຮຸ່ນທີ່ມີສີມ້ານ: `--config-accent-lighter-color`
- ລຸ້ນທີ່ເບົາທີ່ສຸດ: `--config-accent-lightest-color`

ແຕ່ລະສີກໍ່ມີລຸ້ນ RGB (ກັບ -RGB ໃນຕອນທ້າຍ). ນີ້ແມ່ນເປັນປະໂຫຍດສໍາລັບ ການສ້າງ gradients
ແລະຜົນກະທົບສີອື່ນໆ.

ໃນຂະນະທີ່ຕົວຢ່າງການຕັ້ງຄ່າຄວາມເປັນມາທີ່ມີສີສັນສະສົມ:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### ຕົວເລືອກສີຫຼາຍກວ່ານັ້ນ

ຕ້ອງການການເລືອກສີເພີ່ມເຕີມບໍ? SEELEN UI Exposes ຫຼາຍສິບສີຂອງລະບົບເພີ່ມເຕີມ. ກວດເບິ່ງສິ່ງນີ້
[ເອກະສານອ້າງອີງສີທີ່ມີປະໂຫຍດ](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
ສໍາລັບຕົວເລືອກທັງຫມົດທີ່ມີ.

Pro TIP: ໃນເວລາທີ່ການປ່ຽນແປງສີ Windows ຂອງທ່ານ, ການປັບປຸງສີ Windows ຂອງທ່ານ, ການປັບປຸງ The
Searen UI ອັດຕະໂນມັດ!
