# Seelen UI : 테마 기본 튜토리얼 - 프로처럼 데스크탑을 사용자 정의하십시오!

![A beautifully customized desktop using Seelen UI themes](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/image.png)

Windows 데스크탑을 신선한 새로운 모습으로 제공하고 싶습니까? Seelen UI는 쉽게
만듭니다 강력한 테마 시스템. 이 가이드는 어떻게 테마 작동 - 코딩 경험이 필요하지
않습니다!

## 테마 제작자를위한 특수 디버그 버전

시작하기 전에 테마 제작자는 우리의 특별한 것에 대해 알아야합니다. **디버그
버전** Seelen UI의! 이 버전은 다음과 같습니다.

- 웹 페이지처럼 요소 검사 (Ctrl+Shift+I Opens Developer Tools)
- 라이브 HTML/CSS 변경 사항을 참조하십시오
- 테마 수정을 즉시 테스트하십시오
- 스타일링을 쉽게 디버그합니다

우리의 디버그 버전을 다운로드하십시오
[야간 릴리스 채널](https://seelen.io/apps/seelen-ui/releases/nightly) (파일이
끝나는 파일을 찾으십시오 `-debug.exe`, 좋다
`Seelen.UI_2.2.8+20250410073056_x64-setup-debug.exe`).

### 야간 빌드에 대해 더 알고 싶으십니까?

우리를 확인하십시오
[야간 빌드가 설명되었습니다](https://seelen.io/blog/seelen-ui-nightly) 기사!

## 테마 파일 이해

페인트 층처럼 Seelen UI 테마를 생각해보십시오. 여러 테마를 적용 할 수 있습니다
한 번, 그리고 그림처럼, 주문은 중요합니다! 테마는 모든 것을 바꿀 수 있습니다
색상에서 창 스타일까지.

테마를 포장 할 수있는 세 가지 방법이 있습니다.

1. **단일 파일 테마** (.yml 파일)
2. **테마 폴더** (여러 파일 포함)
3. **압축 테마** (.SLU 파일 - 특수 Seelen UI 형식)

### 테마를 넣을 곳

모든 테마는 컴퓨터 의이 폴더에 있습니다.

```text
C:\Users\{YOUR_USERNAME}\AppData\Roaming\com.seelen.seelen-ui\themes
```

### 테마 폴더 구조

테마 폴더가 내부의 모습은 다음과 같습니다.

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

## 영감을 얻기 : 예제 테마

어디서부터 시작 해야하는지 확실하지 않습니까? Seelen UI에는 몇 가지 내장 테마가
제공됩니다 영감으로 사용할 수 있습니다! 확인하십시오
[기본 테마 컬렉션](https://github.com/eythaann/Seelen-UI/tree/master/static/themes)
그들이 어떻게 만들어 졌는지보기 위해.

## 색상 작업 - 생각보다 쉽습니다!

Seelen UI는 자동으로 Windows Accent Color를 선택하여 만듭니다. 간단한 색상
변수를 통해 다른 색조로 제공됩니다.

### 당신의 주요 악센트 색상

이 변수는 Windows 설정에서 설정 한 색상을 사용합니다.

- `--config-accent-color`: 순수한 색 (#ffbbaa 예 :)
- `--config-accent-color-rgb`: RGB 형식의 동일한 색상 (255, 187, 170)

### 완전한 컬러 패밀리

Seelen UI는 악센트 색상에서 전체 팔레트를 만듭니다.

![Visual guide to Seelen UI's color palette](https://raw.githubusercontent.com/Seelen-Inc/sl-blogs/refs/heads/master/blog/seelen-ui-theme-tutorial/colors.png)

사용 가능한 색상의 전체 목록은 다음과 같습니다.

- 가장 어두운 버전 : `--config-accent-darkest-color`
- 어두운 버전 : `--config-accent-darker-color`
- 다크 버전 : `--config-accent-dark-color`
- 일반 버전 : `--config-accent-color`
- 라이트 버전 : `--config-accent-light-color`
- 가벼운 버전 : `--config-accent-lighter-color`
- 가벼운 버전 : `--config-accent-lightest-color`

각 색상에는 RGB 버전 (마지막에 -rgb 포함)이 있습니다. 이것은 유용합니다
그라디언트 및 기타 색상 효과 생성.

예를 들어 불투명도로 배경색을 설정합니다.

```css
background-color: rbga(var(--config-accent-darkest-color-rgb), 0.5);
```

### 더 많은 색상 옵션

더 많은 색상 선택을 원하십니까? Seelen UI는 수십 가지 추가 시스템 색상을
노출시킵니다. 이것을 확인하십시오
[편리한 색상 참조](https://gist.github.com/eythaann/cd9a3cda0206ce23a17f5ea00ec2ba06)
사용 가능한 모든 옵션.

전문가 팁 : Windows 악센트 색상이 변경되면 Seelen UI 테마가 업데이트됩니다.
자동으로!
