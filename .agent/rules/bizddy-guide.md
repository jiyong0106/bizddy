---
trigger: always_on
---



✅ 📌 Cursor Project Rules (최종 정리본)
📌 Next.js + TypeScript 프로젝트 컨벤션

---

### 📁 폴더 구조 원칙

- `app/` 폴더에는 페이지(Route) 관련 파일만 배치한다.
- 기능(Feature) 단위로 파일을 구성한다.
- `components/`, `api/`, `types/`, `store/` 폴더도 기능별로 나눈다.
- 재사용 컴포넌트는 `components/common/`에 위치한다.
- components 내부 폴더에는 `index.tsx`만 존재하며 스타일 파일은 동일 폴더에 둔다.

프로젝트 폴더 구조 예시는 다음을 기준으로 한다:

src/
├─ app/
│ ├─ (routes)/
│ │ ├─ dashboard/
│ │ │ ├─ page.tsx
│ │ │ ├─ loading.tsx
│ │ │ ├─ error.tsx
│ │ │ ├─ layout.tsx
│ │ └─ users/
│ │ ├─ [id]/
│ │ │ └─ page.tsx
│ │ └─ page.tsx
│ ├─ layout.tsx
│ └─ page.tsx
│
├─ components/
│ ├─ common/
│ │ └─ login-button/
│ │ ├─ index.tsx
│ │ └─ login-button.module.scss
│ └─ dashboard/
│ ├─ header/
│ │ ├─ index.tsx
│ │ └─ header.module.scss
│ ├─ table/
│ │ ├─ index.tsx
│ │ └─ table.module.scss
│ └─ index.tsx
│
├─ hooks/
│ └─ useDebounce.ts
├─ lib/
│ ├─ queryProvider.tsx
│ └─ supabaseClient.ts
├─ styles/
│ ├─ globals.css
│ └─ \_variables.scss
├─ types/
│ ├─ authTypes.ts
│ └─ dashboardTypes.ts
├─ constants/
├─ utils/
├─ store/
│ └─ useAuthStore.ts
├─ api/
│ ├─ api.ts
│ ├─ authApi.ts
└─ └─ dashboardApi.ts

---

### 🧾 네이밍 컨벤션

| 종류                   | 규칙                                   |
| ---------------------- | -------------------------------------- |
| 폴더명                 | kebab-case                             |
| app 내부 페이지 폴더명 | camelCase                              |
| 페이지 파일            | `page.tsx`                             |
| 페이지 CSS             | `[page-name].module.scss` (kebab-case) |
| 컴포넌트 폴더명        | kebab-case                             |
| 컴포넌트 파일          | `index.tsx`                            |
| 컴포넌트 CSS           | `[name].module.scss` (kebab-case)      |
| 훅 파일명              | camelCase (예: `useAuth.ts`)           |
| Zustand store          | camelCase (예: `useAuthStore.ts`)      |
| API 파일명             | camelCase + `Api` (예: `authApi.ts`)   |
| 스타일 파일            | kebab-case (예: `_variables.scss`)     |

---

### 🧩 TypeScript 사용 규칙

| 용도                | 사용        |
| ------------------- | ----------- |
| 컴포넌트 Props 타입 | `interface` |
| API Response/DTO    | `interface` |
| 함수 타입           | `type`      |
| 유니온/Utility 타입 | `type`      |

예시:

```ts
interface Props {
	item: ItemType;
}

🎯 컴포넌트 규칙

React 컴포넌트는 함수 표현식 + default export

React.FC 사용 금지

단일 책임 원칙 유지

해당 컴포넌트 요소 위치에 맞는 시맨틱태그 준수

과한 추상화 금지 (읽기 쉬운 코드 우선)

해당 컴포넌트에서 사용 안한느 코드 정리, (css도 확인)

props 변수명은 props 대신 명시적으로 표현

예:

interface Props {
	item: ItemType;
}

const ChatItem = ({ item }: Props) => {
	return <div>...</div>;
};

export default ChatItem;

🎨 스타일 가이드

CSS는 module.scss 사용

스타일은 clsx 사용

스타일 클래스명은 kebab-case

반응형 기준:

기본은 모바일 스타일로 작성 (Mobile First)

breakpoints:

@media (min-width: 768px) {}
@media (min-width: 1024px) {}


📌 목표:

모든 파일은 읽기 쉬워야 하며, 확장성과 유지보수를 고려하여 작성한다.
```
