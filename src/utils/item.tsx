import {
  LuShoppingCart,
  LuHouse,
  LuShoppingBag,
  LuChartColumnDecreasing,
  LuSettings,
  LuHeadphones,
  LuBlocks,
  LuWalletMinimal,
} from "react-icons/lu";

export const sections: Array<{
  title: string;
  items: { label: string; href: string; icon: React.ReactNode }[];
}> = [
  {
    title: "",
    items: [{ label: "홈", href: "/dashboard", icon: <LuHouse /> }],
  },
  {
    title: "상품",
    items: [
      {
        label: "수집상품",
        href: "/dashboard/products",
        icon: <LuShoppingBag />,
      },
      {
        label: "등록상품",
        href: "/dashboard/orders",
        icon: <LuShoppingCart />,
      },
    ],
  },
  {
    title: "판매",
    items: [
      {
        label: "주문관리",
        href: "/dashboard/settlements",
        icon: <LuShoppingCart />,
      },
      {
        label: "정산",
        href: "/dashboard/analytics",
        icon: <LuWalletMinimal />,
      },
      {
        label: "문의",
        href: "/dashboard/contents",
        icon: <LuHeadphones />,
      },
    ],
  },
  {
    title: "비즈니스",
    items: [
      {
        label: "통계 / 분석",
        href: "/dashboard/settlements",
        icon: <LuChartColumnDecreasing />,
      },
      {
        label: "콘텐츠 스튜디오",
        href: "/dashboard/analytics",
        icon: <LuBlocks />,
      },
    ],
  },
  {
    title: "시스템",
    items: [
      { label: "설정", href: "/dashboard/settings", icon: <LuSettings /> },
    ],
  },
];
