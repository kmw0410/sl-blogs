# **SLU 라이브러리 : API 참조**

API 모듈은 구체적인 구현 및 유틸리티 클래스를 제공합니다. 
RAW Application API의 초록, 개발자 친화적 인 외관 역할을합니다. 
위젯 통합.

## **목적**

* 인터페이스를 구현합니다 `/types` 즉시 사용 가능한 수업이 있습니다
* 낮은 수준의 API 복잡성을 초록합니다
* 일반적인 운영을위한 유틸리티 방법을 제공합니다
* 위젯과 SLU 사이의 기본 상호 작용 레이어 역할을합니다. 
  애플리케이션

## **용법**

필요에 따라 라이브러리를 사용할 수 있습니다. 기본 예는 다음과 같습니다.

```ts
import { StructClass } from "@seelen-ui/lib/api";

const widgetApi: StructClass = await StructClass.geAsync();
const something = widgetApi.getSomething();
const somethingAsync = await widgetApi.getSomethingAsync();

await widgetApi.doSomething();
```

## **중요한 메모 :**

1. 이 API 라이브러리는 Seelen UI 위젯 실행 내에서 실행될 때만 작동합니다. 
   환경
2. Node.js 또는 표준 브라우저 컨텍스트에서 사용하려고 시도하면 
   오류
3. 이 API를 사용하는 위젯은 제대로 작동하기 위해 업데이트해야합니다. 
   Seelen UI의 최신 버전
