import styles from "./plan.module.scss";
import { LuChevronDown } from "react-icons/lu";

const Plan = () => {
  return (
    <div className={styles.container}>
      <span>Free</span>
      <LuChevronDown />
    </div>
  );
};

export default Plan;
