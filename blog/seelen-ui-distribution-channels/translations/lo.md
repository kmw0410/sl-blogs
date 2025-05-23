# SEELEN UI: ວິທີການຕິດຕັ້ງແລະຊ່ອງທາງການຕິດຕັ້ງ

## ຕົວເລືອກການຕິດຕັ້ງ

### ຮ້ານ Microsoft (MSIX)

ດາວໂຫລດເວີຊັນລ້າສຸດຈາກ [Microsoft Store](https://www.microsoft.com/store).
ນີ້ແມ່ນຄວາມປອດໄພທີ່ສຸດແລະ ຕົວເລືອກທີ່ເປັນມິດກັບຜູ້ໃຊ້, ດ້ວຍການປັບປຸງອັດຕະໂນມັດ.

**Pros:**

- ການປັບປຸງໂດຍອັດຕະໂນມັດ
- ຢັ້ງຢືນແລະໄດ້ຮັບການອະນຸມັດຈາກ Microsoft
- ຄວາມປອດໄພສູງແລະຄວາມຫນ້າເຊື່ອຖື
- ຮຸ່ນທີ່ເບົາກວ່າ. ຕິດຕັ້ງເຄື່ອງຕິດຕັ້ງ (ບໍ່ມີສັນຍາລັກ debug)

**Cons:**

- ການປັບປຸງອາດໃຊ້ເວລາ 1-3 ວັນລັດຖະການສໍາລັບການອະນຸມັດຂອງ Microsoft
- ຍາກກວ່າທີ່ຈະແກ້ໄຂບັນຫາແລະລາຍງານບັນຫາ

---

### Wingtet (MSIX)

ຕິດຕັ້ງເວີຊັນລ້າສຸດໂດຍໃຊ້ຄໍາສັ່ງຕໍ່ໄປນີ້:

> Wingat Proad -id Seeelen.eelenui

ສະເຫນີຜົນປະໂຫຍດດຽວກັນກັບ Microsoft Store Version ທີ່ມີການເພີ່ມ ຄວາມສະດວກຂອງການຕິດຕັ້ງຄໍາສັ່ງ.

---

### .Exe Installer

ດາວໂຫລດ setup.exe ຕິດຕັ້ງຈາກ
[ປ່ອຍຫນ້າ](https://github.com/eythaann/Seelen-UI/releases) ແລະແລ່ນມັນ.

**Pros:**

- ມີການປັບປຸງທັນທີ
- ໄດ້ຮັບການແຈ້ງເຕືອນປັບປຸງທັນທີທີ່ສະບັບໃຫມ່ຖືກປ່ອຍອອກມາ
- ດີກວ່າສໍາລັບຈຸດປະສົງ debugging

**Cons:**

- ອາດຈະເຮັດໃຫ້ຄໍາເຕືອນຂອງ Antivirus (ບໍ່ໄດ້ເຊັນແບບດິຈິຕອລ)
- ຂະຫນາດເອກະສານທີ່ໃຫຍ່ກວ່າ (ປະກອບມີສັນຍາລັກ debug)

## ການປັບປຸງຊ່ອງທາງຕ່າງໆ

> ໂດຍບໍ່ສົນເລື່ອງຊ່ອງທາງການປັບປຸງທີ່ທ່ານເລືອກ, ທຸກລຸ້ນໄດ້ຮັບອັດຕະໂນມັດ ການປັບປຸງ.
> ຊ່ອງທາງທີ່ບໍ່ຫມັ້ນຄົງຍັງໄດ້ຮັບການປັບປຸງຈາກຊ່ອງທາງທີ່ມີຄວາມຫມັ້ນຄົງ (ເຊັ່ນ:
> ໄດ້ຮັບການປັບປຸງຄືນໃຫມ່ໃນຕອນກາງຄືນຈາກທັງກາງຄືນແລະການປ່ອຍຕົວ / Beta).

### ການປ່ອຍຕົວ

ຊ່ອງທາງທີ່ປອດໄພແລະແນະນໍາທີ່ສຸດສໍາລັບຜູ້ໃຊ້ທຸກຄົນ.

**ຄຸນນະສົມບັດ:**

- ທົດສອບຢ່າງລະອຽດໂດຍບໍ່ມີຂໍ້ບົກພ່ອງທີ່ສໍາຄັນ
- ເຫມາະສໍາລັບການຜະລິດແລະການນໍາໃຊ້ປະຈໍາວັນ
- ມີຢູ່ໃນ Microsoft Store, Winget (.Msix), ແລະເປັນຜູ້ຕິດຕັ້ງ .exe

### ເບຕ້າ

ສໍາລັບຜູ້ໃຊ້ທີ່ຕ້ອງການການເຂົ້າເຖິງຄຸນລັກສະນະໃຫມ່ໃນຕອນຕົ້ນກ່ອນການປ່ອຍຕົວຢ່າງເປັນທາງການ.

**ຄຸນນະສົມບັດ:**

- ປະກອບມີລັກສະນະທີ່ກໍາລັງຈະມາເຖິງພາຍໃຕ້ການທົດສອບ
- ອາດຈະມີຂໍ້ບົກພ່ອງນ້ອຍ
- ການປັບປຸງເລື້ອຍໆກ່ວາທີ່ຫມັ້ນຄົງ
- ມີເທົ່າທີ່ເປັນຜູ້ຕິດຕັ້ງ .exe

### ຕາມຄ່ໍາ

ສໍາລັບຜູ້ໃຊ້ແລະນັກພັດທະນາຂັ້ນສູງທີ່ຕ້ອງການປ່ຽນແປງໃຫມ່ຫຼ້າສຸດ.

**ຄຸນນະສົມບັດ:**

- ມີການປ່ຽນແປງທີ່ສຸດ, ການປ່ຽນແປງທີ່ບໍ່ມີຄວາມສາມາດ
- ອາດຈະປະກອບມີຂໍ້ບົກພ່ອງຫລືບໍ່ຄົບຖ້ວນ
- ອັບເດດທຸກໆວັນຫຼືດ້ວຍການປ່ຽນລະຫັດທີ່ສໍາຄັນ
- ມີເທົ່າທີ່ເປັນຜູ້ຕິດຕັ້ງ .exe

ຮຽນຮູ້ເພີ່ມເຕີມກ່ຽວກັບຊ່ອງທາງກາງຄືນໃນຂອງພວກເຮົາ
[SEELEN UI ໃນຕອນກາງຄືນ](https://seelen.io/blog/nightly) ເອກະສານ.

## ກົນໄກການປັບປຸງ: SETUP.EXE Vs MSIX

- **MSIX:** ການປັບປຸງການປັບປຸງທີ່ໄດ້ຮັບການຄຸ້ມຄອງໂດຍອັດຕະໂນມັດໂດຍ Microsoft Store
- **setup.exe:** ປະກອບມີການປັບປຸງທີ່ສ້າງຂຶ້ນເຊິ່ງແຈ້ງໃຫ້ທ່ານຊາບເມື່ອມີການປັບປຸງ ມີໄວ້

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

ເມື່ອມີການປັບປຸງໃຫມ່:

1. ກົດແຈ້ງການ
2. ຜູ້ປັບປຸງຈະດາວໂຫລດແລະຕິດຕັ້ງອັບເດດ
3. ການສະຫມັກຈະເລີ່ມຕົ້ນໃຫມ່ໂດຍອັດຕະໂນມັດ
