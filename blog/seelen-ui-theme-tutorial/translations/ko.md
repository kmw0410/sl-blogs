# Seelen UI: 테마 기본 튜토리얼 - 프로처럼 데스크탑을 사용자 정의하세요!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows 데스크탑을 새롭게 바꾸고 싶으신가요? Seelen UI는 강력한 테마 시스템을 쉽게 만듭니다. 이 가이드는 코딩 경험 없이도 테마 작동 원리에 대한 기본 사항을 안내합니다!

## 테마 제작자를 위한 특별 디버그 버전

시작하기 전에, 테마 제작자는 Seelen UI의 특별 **디버그 버전**에 대해 알아야합니다! 이 버전에서는 다음 기능을 사용할 수 있습니다:

- 웹 페이지처럼 요소 검사 (Ctrl+Shift+I로 개발자 도구 열기)
- HTML/CSS 변경을 라이브로 확인
- 테마 수정을 즉시 테스트
- 스타일링 문제를 쉽게 디버그

우리의 [야간 릴리스 채널](https://seelen.io/apps/seelen-ui/releases/nightly)에서 디버그 버전을 다운로드하세요 (`-debug.exe`로 끝나는 파일을 찾으세요, `Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe` 처럼)

### 야간 빌드에 대해 더 알고 싶으신가요?

우리의 [야간 빌드 설명](https://seelen.io/blog/seelen-ui-nightly) 글을 확인하세요!

## 테마 파일 이해

페인트 층처럼 Seelen UI 테마를 생각해 보세요. 여러 테마를 한 번에 적용할 수 있으며 그림 그리기와 마찬가지로 순서가 중요합니다! 테마는 색상부터 창 스타일까지 모든 것을 바꿀 수 있습니다.

테마를 포장할 수 있는 세 가지 방법이 있습니다:

1. **단일 파일 테마** (.yml 파일)
2. **테마 폴더** (여러 파일 포함)
3. **테마 압축** (.slu 파일 - 특수 Seelen UI 형식)

### 테마를 넣을 곳

모든 테마는 컴퓨터의 이 폴더에 저장됩니다:

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### 테마 폴더 구조

테마 폴더의 내부의 모습은 다음과 같습니다:

```text
C:\Users\{USER}\AppData\Roaming\com.seelen.seelen-ui\themes
├── YourThemeFolder             # 폴더의 이름은 중요하지 않습니다
│   ├── theme.yml               # 테마 메타데이터 파일
│   └── seelen                  # 내부 위젯 제작자의 사용자 이름
│       ├── fancy-toolbar.css   # 리소스 이름 + css 확장
│       └── window-manager.scss # SCSS도 지원합니다!
├── CompactTheme.yml            # 스타일이 포함된 테마 메타데이터 파일
└── CompressedTheme.slu         # Seelen UI에서 사용되는 특별한 파일 포맷
```

## 영감 얻기: 예제 테마

어디서부터 시작 해야 하는지 확실하지 않나요? Seelen UI에는 영감으로 사용할 수 있는 몇 가지 내장 테마가 있습니다! [기본 테마 컬렉션](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)에서 어떻게 만들어졌는지 확인해 보세요.

## 색상 작업 - 생각보다 쉽습니다!

Seelen UI는 자동으로 Windows 강조 색상을 선택하여 만듭니다. 간단한 색상
변수를 통해 다른 색조로 제공됩니다.

### 당신의 주요 강조 색상

이 변수는 Windows 설정에서 설정 한 색상을 사용합니다.

- `--config-accent-color`: 순수한 색 ( #ffbbaa 같이)
- `--config-accent-color-rgb`: RGB 형식의 동일한 색상 (255, 187, 170)

### 완전한 컬러 패밀리

Seelen UI는 강조 색상에서 전체 팔레트를 만듭니다.

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

사용 가능한 색상의 전체 목록은 다음과 같습니다:

- 가장 어두운 버전 : `--config-accent-darkest-color`
- 어두운 버전 : `--config-accent-darker-color`
- 다크 버전 : `--config-accent-dark-color`
- 일반 버전 : `--config-accent-color`
- 라이트 버전 : `--config-accent-light-color`
- 가벼운 버전 : `--config-accent-lighter-color`
- 가벼운 버전 : `--config-accent-lightest-color`

각 색상에는 RGB 버전 (마지막에 -rgb 포함)이 있으며, 이것은 그라디언트와 기타 색상 효과를 생성하는 데 유용합니다.

예를 들어 불투명도로 배경색을 설정하려면:

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### 더 많은 색상 옵션

더 많은 색상 선택을 원하신가요? Seelen UI는 수십 가지 추가 시스템 색상을
노출시킵니다. 사용 가능한 모든 옵션에 대한 [편리한 색상 문서](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)를 확인해보세요.

전문가 팁: Windows 강조 색상이 변경되면 Seelen UI 테마가 자동으로 업데이트됩니다!