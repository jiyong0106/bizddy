"use client";
import styles from "./theme-toggle.module.scss";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import clsx from "clsx";
import { useEffect, useState } from "react";

type ThemeMode = "light" | "dark";

const ThemeToggle = () => {
  const [mode, setMode] = useState<ThemeMode>("light");

  // initialize from localStorage or system
  useEffect(() => {
    try {
      const stored =
        (localStorage.getItem("theme") as ThemeMode | null) ?? null;
      if (stored === "light" || stored === "dark") {
        setMode(stored);
        document.documentElement.setAttribute("data-theme", stored);
        document.documentElement.style.colorScheme = stored;
      } else {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        const resolved: ThemeMode = systemDark ? "dark" : "light";
        setMode(resolved);
        document.documentElement.setAttribute("data-theme", resolved);
        document.documentElement.style.colorScheme = resolved;
      }
    } catch {}
  }, []);

  const toggle = () => {
    const next: ThemeMode = mode === "light" ? "dark" : "light";
    setMode(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
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
