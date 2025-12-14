import styles from "./navbar.module.scss";
import { Logo } from "@/components/common";
import Plan from "../plan";
import NavbarSection from "../navbar-section";
import PlanDropdown from "../plan-dorpdown";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <PlanDropdown />
      <div className={styles.topSection}>
        <Logo size={24} />
        <Plan />
      </div>
      <NavbarSection />
    </nav>
  );
};

export default Navbar;
