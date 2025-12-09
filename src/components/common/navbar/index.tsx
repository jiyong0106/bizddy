"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { label: "홈", href: "/spaces" },
  { label: "상품 관리", href: "/spaces/products" },
  { label: "주문 관리", href: "/spaces/orders" },
  { label: "재고 관리", href: "/spaces/inventory" },
  { label: "문의", href: "/spaces/support" },
  { label: "정산", href: "/spaces/settlements" },
  { label: "통계 / 분석", href: "/spaces/analytics" },
  { label: "콘텐츠 스튜디오", href: "/spaces/contents" },
  { label: "설정", href: "/spaces/settings" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.container}>
      <Logo size={24} />
      <ul className={styles.menu}>
        {items.map((it) => (
          <li key={it.href} className={styles.item}>
            <Link
              href={it.href}
              className={clsx(
                styles.link,
                pathname === it.href && styles.active
              )}
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Navbar;
