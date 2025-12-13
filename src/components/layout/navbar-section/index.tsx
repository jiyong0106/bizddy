"use client";

import { sections } from "@/utils/item";
import styles from "./navbar-section.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarSection = () => {
  const pathname = usePathname();

  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className={styles.section}>
          <div className={styles.sectionTitle}>{section.title}</div>
          <ul className={styles.menu}>
            {section.items.map((it) => (
              <li key={it.href} className={styles.item}>
                <Link
                  href={it.href}
                  aria-current={pathname === it.href ? "page" : undefined}
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
        </section>
      ))}
    </>
  );
};

export default NavbarSection;
