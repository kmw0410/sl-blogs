# সিলেন ইউআই: ইনস্টলেশন পদ্ধতি এবং আপডেট চ্যানেলগুলি

## ইনস্টলেশন বিকল্প

### মাইক্রোসফ্ট স্টোর (এমএসআইএক্স)

থেকে সর্বশেষ সংস্করণ ডাউনলোড করুন [মাইক্রোসফ্ট স্টোর](https://www.microsoft.com/store)।
এটি সবচেয়ে সুরক্ষিত এবং স্বয়ংক্রিয় আপডেট সহ ব্যবহারকারী-বান্ধব বিকল্প।

**পেশাদাররা:**

- স্বয়ংক্রিয় আপডেট
- মাইক্রোসফ্ট দ্বারা যাচাই করা এবং অনুমোদিত
- উচ্চ সুরক্ষা এবং নির্ভরযোগ্যতা
- .Exe ইনস্টলার থেকে হালকা সংস্করণ (কোনও ডিবাগ প্রতীক অন্তর্ভুক্ত নেই)

**কনস:**

- মাইক্রোসফ্ট অনুমোদনের জন্য আপডেটগুলি 1-3 ব্যবসায়িক দিন নিতে পারে
- সমস্যাগুলি ডিবাগ করা এবং রিপোর্ট করা আরও কঠিন

---

### উইঙ্গেট (এমএসআইএক্স)

নিম্নলিখিত কমান্ডটি ব্যবহার করে সর্বশেষ সংস্করণটি ইনস্টল করুন:

> উইজেট ইনস্টল -আইড সিলেন.সেলেনুই

যুক্ত সহ মাইক্রোসফ্ট স্টোর সংস্করণের মতো একই সুবিধাগুলি সরবরাহ করে কমান্ড-লাইন ইনস্টলেশন সুবিধা।

---

### .exe ইনস্টলার

এর থেকে সেটআপ.এক্সই ইনস্টলারটি ডাউনলোড করুন
[প্রকাশ পৃষ্ঠা](https://github.com/eythaann/Seelen-UI/releases) এবং এটি চালান।

**পেশাদাররা:**

- তাত্ক্ষণিক আপডেট উপলব্ধ
- নতুন সংস্করণ প্রকাশের সাথে সাথে আপডেট বিজ্ঞপ্তিগুলি গ্রহণ করে
- ডিবাগিংয়ের উদ্দেশ্যে আরও ভাল

**কনস:**

- অ্যান্টিভাইরাস সতর্কতাগুলি ট্রিগার করতে পারে (ডিজিটালি স্বাক্ষরিত নয়)
- বৃহত্তর ফাইলের আকার (ডিবাগ প্রতীক অন্তর্ভুক্ত)

## চ্যানেল আপডেট করুন

> আপনার নির্বাচিত আপডেট চ্যানেল নির্বিশেষে, সমস্ত সংস্করণ স্বয়ংক্রিয়ভাবে গ্রহণ করে আপডেট।
> অস্থির চ্যানেলগুলি আরও স্থিতিশীল চ্যানেলগুলি থেকে আপডেটগুলিও গ্রহণ করে (উদাঃ, রাতের বেলা রাত
> এবং বিটা/রিলিজ উভয় থেকে আপডেটগুলি পান)।

### মুক্তি (স্থিতিশীল)

সমস্ত ব্যবহারকারীর জন্য সর্বাধিক সুরক্ষিত এবং প্রস্তাবিত চ্যানেল।

**বৈশিষ্ট্য:**

- কোনও সমালোচনামূলক বাগ সহ পুঙ্খানুপুঙ্খভাবে পরীক্ষা করা
- উত্পাদন এবং দৈনন্দিন ব্যবহারের জন্য আদর্শ
- মাইক্রোসফ্ট স্টোর, উইঙ্গেট (.msix), এবং এএস .exe ইনস্টলার এ উপলব্ধ

### বিটা

সরকারী প্রকাশের আগে নতুন বৈশিষ্ট্যগুলিতে প্রাথমিক অ্যাক্সেস চান এমন ব্যবহারকারীদের জন্য।

**বৈশিষ্ট্য:**

- পরীক্ষার অধীনে আগত বৈশিষ্ট্যগুলি অন্তর্ভুক্ত করে
- ছোটখাট বাগ থাকতে পারে
- স্থিতিশীল চেয়ে আরও ঘন ঘন আপডেট
- কেবল .exe ইনস্টলার হিসাবে উপলব্ধ

### রাত্রে

উন্নত ব্যবহারকারী এবং বিকাশকারীদের জন্য সর্বশেষ পরিবর্তনগুলি চান।

**বৈশিষ্ট্য:**

- সর্বাধিক সাম্প্রতিক, অনির্ধারিত পরিবর্তন রয়েছে
- বাগ বা অসম্পূর্ণ বৈশিষ্ট্য অন্তর্ভুক্ত থাকতে পারে
- প্রতিদিন বা প্রতিটি উল্লেখযোগ্য কোড পরিবর্তনের সাথে আপডেট করা হয়েছে
- কেবল .exe ইনস্টলার হিসাবে উপলব্ধ

আমাদের মধ্যে রাতের চ্যানেল সম্পর্কে আরও জানুন
[সেলেন ইউআই রাত্রে](https://seelen.io/blog/nightly) ডকুমেন্টেশন।

## আপডেট প্রক্রিয়া: সেটআপ.এক্সই বনাম এমএসআইএক্স

- **এমএসআইএক্স:** মাইক্রোসফ্ট স্টোর দ্বারা স্বয়ংক্রিয়ভাবে পরিচালিত আপডেটগুলি
- **Setup.exe:** অন্তর্নির্মিত আপডেটের অন্তর্ভুক্ত যা আপডেটগুলি হলে আপনাকে অবহিত করে উপলব্ধ

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

যখন একটি আপডেট পাওয়া যায়:

1. বিজ্ঞপ্তি ক্লিক করুন
2. আপডেটার আপডেটটি ডাউনলোড এবং ইনস্টল করবে
3. অ্যাপ্লিকেশন স্বয়ংক্রিয়ভাবে পুনরায় চালু হবে
