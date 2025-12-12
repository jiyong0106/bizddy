"use client";
import styles from "./theme-toggle.module.scss";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import clsx from "clsx";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const ThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // initialize from cookie (fallback to light)
  useEffect(() => {
    const match = document.cookie.match(/(?:^|;\s*)theme=(light|dark)/);
    const initial = (match?.[1] as ThemeMode | undefined) ?? "light";
    setMode(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    // persist to cookie (1 year)
    document.cookie = `theme=${next}; path=/; max-age=31536000; samesite=lax`;
    document.documentElement.setAttribute("data-theme", next);
  };

  const isLight = mode === "light";

  return (
    <>
      <button
        type="button"
        className={clsx(styles.container, isLight && styles.active)}
        onClick={toggle}
        aria-pressed={isLight ? true : false}
        aria-label={isLight ? "다크 모드로 전환" : "라이트 모드로 전환"}
      >
        {isLight ? (
          <CiLight className={styles.lightIcon} />
        ) : (
          <MdDarkMode className={styles.darkIcon} />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
