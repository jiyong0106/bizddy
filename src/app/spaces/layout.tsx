"use client";

import { useState } from "react";
import clsx from "clsx";
import Navbar from "@/components/spaces/navbar";
import styles from "./spaces-layout.module.scss";

export default function SpacesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.topbar}>
        <div className={styles.brand}>bizddy</div>
        <button
          type="button"
          className={styles.moreBtn}
          onClick={() => setOpen(true)}
        >
          더보기
        </button>
      </div>

      <aside className={clsx(styles.sidebar, open && styles.open)}>
        <Navbar />
      </aside>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      <main className={styles.main}>
        <div className={styles.content}>{children}</div>
      </main>
    </section>
  );
}
