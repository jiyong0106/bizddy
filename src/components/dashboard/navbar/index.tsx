import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import Plan from "../plan";
import NavbarSection from "../navbar-section";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.topSection}>
        <Logo size={24} />
        <Plan />
      </div>
      <NavbarSection />
    </nav>
  );
};

export default Navbar;
