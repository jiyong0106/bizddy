"use client";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const items = [
  { label: "홈", href: "/spaces" },
  { label: "상품 관리", href: "/spaces/products" },
  { label: "멤버십 관리", href: "/spaces/memberships" },
  { label: "스토어 관리", href: "/spaces/store" },
  { label: "고객 관리", href: "/spaces/customers" },
  { label: "판매 부스터", href: "/spaces/boost" },
  { label: "스페이스 설정", href: "/spaces/settings" },
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
