# **Library SLU: ประเภทและอินเทอร์เฟซ**

ที่ `types` โมดูลของไลบรารี SLU จัดให้มีการรวบรวมประเภทที่จำเป็น
คำจำกัดความและอินเทอร์เฟซที่ทำหน้าที่เป็นรากฐานสำหรับการพัฒนาวิดเจ็ต โมดูลนี้ออกแบบมาเพื่อ:

- เสนอคำจำกัดความประเภทมาตรฐานที่ใช้ตลอดทั้งระบบนิเวศ Seeelen UI
- ให้อินเทอร์เฟซสำหรับการใช้งานวิดเจ็ตที่สอดคล้องกัน
- เปิดใช้งานประเภทความปลอดภัยในการพัฒนาวิดเจ็ต
- ทำหน้าที่เป็นสัญญาที่ใช้ร่วมกันระหว่างแอปพลิเคชันหลักและวิดเจ็ต

## **การใช้งาน**

```ts
import { StructInterface } from "@seelen-ui/lib/types";

const myObject: StructInterface = { ... }
```

## **คุณสมบัติที่สำคัญ:**

- **คำจำกัดความประเภทหลัก**: ประเภทพื้นฐานที่ใช้โดยแอปพลิเคชัน SEELEN UI
- **วิดเจ็ตสัญญา**: อินเทอร์เฟซที่วิดเจ็ตต้องใช้เพื่อความเข้ากันได้
- **โมเดลที่ใช้ร่วมกัน**: โครงสร้างข้อมูลทั่วไปที่ใช้ในแพลตฟอร์ม
- **ประเภทยูทิลิตี้**: ประเภทผู้ช่วยสำหรับการพัฒนาวิดเจ็ต

ประเภทเหล่านี้ใช้ทั้งภายในโดยแอปพลิเคชันและเปิดเผย
ผู้พัฒนาวิดเจ็ตภายนอกเพื่อให้แน่ใจว่าประเภทความสอดคล้องในระบบนิเวศ
