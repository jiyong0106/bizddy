import { PlanBadge } from "@/components/common";
import styles from "./plan.module.scss";
import { LuChevronDown } from "react-icons/lu";

const Plan = () => {
  return (
    <div className={styles.container}>
      <div className={styles.planContainer}>
        <PlanBadge tier="Free" />
        <span className={styles.email}>partoyu94@naver.com</span>
      </div>
      <LuChevronDown className={styles.icon} />
    </div>
  );
};

export default Plan;
