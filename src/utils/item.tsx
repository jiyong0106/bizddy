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
        label: "상품 관리",
        href: "/dashboard/products",
        icon: <LuShoppingBag />,
      },
      {
        label: "주문 관리",
        href: "/dashboard/orders",
        icon: <LuShoppingCart />,
      },
      { label: "문의", href: "/dashboard/support", icon: <LuHeadphones /> },
    ],
  },
  {
    title: "판매",
    items: [
      {
        label: "정산",
        href: "/dashboard/settlements",
        icon: <LuWalletMinimal />,
      },
      {
        label: "통계 / 분석",
        href: "/dashboard/analytics",
        icon: <LuChartColumnDecreasing />,
      },
      {
        label: "콘텐츠 스튜디오",
        href: "/dashboard/contents",
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
