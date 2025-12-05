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
              <li className={styles.menuItem}>{item.label}</li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <Link href={"/login"}>시작하기</Link>
        </div>
      </div>
    </header>
  );
};

export default LandingHeader;
