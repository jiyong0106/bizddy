import Link from "next/link";
import styles from "./landing-header.module.scss";
import clsx from "clsx";

const LandingHeader = () => {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={clsx(styles.container)}>
      <div className={styles.inner}>
        <div className={styles.logo}>bizddy</div>

        <nav className={styles.nav}>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.href} className={styles.menuItem}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href={"/login"}>시작하기</Link>
          <Link href={"/login"}>메인페이지</Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
