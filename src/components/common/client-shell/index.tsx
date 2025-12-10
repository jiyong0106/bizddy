"use client";
import { useState } from "react";
import clsx from "clsx";
import { Navbar, Topbar } from "@/components/spaces";
import styles from "./client-shell.module.scss";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.topbarArea}>
        <Topbar onMoreClick={() => setOpen((prev) => !prev)} open={open} />
      </div>

      <aside className={clsx(styles.sidebar, open && styles.open)}>
        <Navbar />
      </aside>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)} />
      )}

      {children}
    </>
  );
}
