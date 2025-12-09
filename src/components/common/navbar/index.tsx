"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import {
  LuShoppingCart,
  LuHouse,
  LuShoppingBag,
  LuChartColumnDecreasing,
  LuSettings,
  LuHeadphones,
  LuPackageOpen,
  LuBlocks,
  LuWalletMinimal,
} from "react-icons/lu";

const sections: Array<{
  title: string;
  items: { label: string; href: string; icon: React.ReactNode }[];
}> = [
  {
    title: "",
    items: [{ label: "홈", href: "/spaces", icon: <LuHouse /> }],
  },
  {
    title: "운영",
    items: [
      { label: "상품 관리", href: "/spaces/products", icon: <LuShoppingBag /> },
      { label: "주문 관리", href: "/spaces/orders", icon: <LuShoppingCart /> },
      {
        label: "재고 관리",
        href: "/spaces/inventory",
        icon: <LuPackageOpen />,
      },
      { label: "문의", href: "/spaces/support", icon: <LuHeadphones /> },
    ],
  },
  {
    title: "비즈니스",
    items: [
      { label: "정산", href: "/spaces/settlements", icon: <LuWalletMinimal /> },
      {
        label: "통계 / 분석",
        href: "/spaces/analytics",
        icon: <LuChartColumnDecreasing />,
      },
      {
        label: "콘텐츠 스튜디오",
        href: "/spaces/contents",
        icon: <LuBlocks />,
      },
    ],
  },
  {
    title: "시스템",
    items: [{ label: "설정", href: "/spaces/settings", icon: <LuSettings /> }],
  },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.container}>
      <Logo size={24} />

      {sections.map((section) => (
        <nav key={section.title}>
          <div className={styles.sectionTitle}>{section.title}</div>
          <ul className={styles.menu}>
            {section.items.map((it) => (
              <li key={it.href} className={styles.item}>
                <Link
                  href={it.href}
                  className={clsx(
                    styles.link,
                    pathname === it.href && styles.active
                  )}
                >
                  <div className={styles.icon}>{it.icon}</div>
                  <span>{it.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </aside>
  );
};

export default Navbar;
