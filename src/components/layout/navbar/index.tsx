"use client";
import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import Plan from "../plan";
import NavbarSection from "../navbar-section";
import PlanDropdown from "../plan-dropdown";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className={styles.container}>
      <div className={styles.topSection}>
        <Logo size={24} />
        <Plan setOpen={setOpen} />
        {open && (
          <div className={styles.dropdown}>
            <PlanDropdown open={open} />
          </div>
        )}
      </div>
      <NavbarSection />
    </nav>
  );
};

export default Navbar;
