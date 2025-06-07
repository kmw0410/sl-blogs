# Seelen UI: 설치 방법 및 채널 업데이트

## 설치 옵션

### Microsoft Store (MSIX)

[Microsoft Store](https://www.microsoft.com/store)에서 최신 버전을 다운로드하세요.
이것은 가장 안전하고 사용자 친화적인 옵션으로 자동 업데이트가 가능합니다.

**장점:**

- 자동 업데이트
- Microsoft에서 검증 및 승인
- 높은 보안 및 신뢰성
- .exe 설치 프로그램보다 가벼운 버전 (디버그 기호는 표함되지 않음)

**단점:**

- 업데이트는 Microsoft 승인까지 영업일 기준 1~3일이 소요될 수 있음
- 디버그 및보고 문제가 더 어려움

---

### Winget (MSIX)

다음 명령어를 사용하여 최신 버전을 설치하세요:

> winget install -id seelen.seelenui

명령줄 설치의 편리함이 추가된 Microsoft 스토어 버전과 동일한 혜택을 제공합니다.

---

### .exe 설치 프로그램

[릴리즈 페이지](https://github.com/eythaann/Seelen-UI/releases)에서 setup.exe 설치 프로그램을 다운로드 후 실행하세요.

**장점:**

- 즉각적인 업데이트 가능
- 새 버전이 출시될 때 알림을 받을 수 있음
- 디버깅 목적으로 더 좋음

**단점:**

- 안티 바이러스 경고가 표시될 수 있음 (디지털 서명 안 됨)
- 더 큰 파일 크기 (디버그 기호 포함)

## 채널 업데이트

![Seelen UI Update Channels](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-distribution-channels/image.png)

> 선택한 업데이트 채널에 관계없이 모든 버전은 자동으로 업데이트를 받으며, 불안정한 채널도 안정 채널에서 업데이트를 받습니다.
> (예: Nightly는 Nightly와 베타/릴리즈 업데이트를 둘 다 받습니다)

### 릴리스 (안정)

모든 사용자에게 가장 안전하고 권장되는 채널입니다.

**특징:**

- 중요한 버그 없이 철저히 테스트됨
- 일상적인 사용을 위한 생산에 이상적
- Microsoft Store, Winget (.msix) 및 .exe 설치 프로그램에서 사용 가능

### 베타

공식 출시 전에 새로운 기능을 먼저 사용해보고 싶은 사용자들을 위한 것입니다.

**특징:**

- 테스트 중인 예정된 기능을 포함
- 사소한 버그가 포함될 수 있음
- 안정보다 더 빈번한 업데이트
- .exe 설치 프로그램만 사용할 수 있습니다

### 야간

최신 변경 사항을 원하는 고급 사용자 및 개발자를 위한 것입니다.

**특징:**

- 가장 최근의 테스트되지 않은 변경 사항이 포함되어 있음
- 버그 또는 불완전한 기능이 포함될 수 있음
- 매일 또는 각각의 중요한 코드 변경으로 업데이트됨
- .exe 설치 프로그램 만 사용 가능

[Seelen UI 야간](https://seelen.io/blog/nightly) 문서에서 야간 채널에 대해 더 알아보세요.

## 업데이트 메커니즘: Setup.exe vs MSIX

- **msix:** Microsoft Store에서 자동으로 관리하는 업데이트
- **setup.exe:** 업데이트가 가능할 때 알려주는 내장 업데이터가 포함되어 있음

![Seelen UI update notification](https://github.com/Seelen-Inc/slu-blog/blob/master/blog/seelen-ui-distribution-channels/image.png?raw=true)

업데이트를 사용할 수 있는 경우:

1. 알림을 클릭하세요
2. 업데이터가 업데이트를 다운로드하여 설치합니다
3. 애플리케이션이 자동으로 시작됩니다
