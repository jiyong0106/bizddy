import { PlanBadge } from "@/components/common";
import styles from "./plan.module.scss";
import { LuChevronDown } from "react-icons/lu";

import { Dispatch, SetStateAction } from "react";

interface Props {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const Plan = ({ setOpen }: Props) => {
  return (
    <div className={styles.container} onClick={() => setOpen((prev) => !prev)}>
      <div className={styles.planContainer}>
        <PlanBadge tier="Free" />
        <span className={styles.email}>partoyu94@naver.com</span>
      </div>
      <LuChevronDown className={styles.icon} />
    </div>
  );
};

export default Plan;
