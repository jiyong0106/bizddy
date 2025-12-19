import styles from "./plan-dorpdown.module.scss";
import { LuLogOut, LuSettings, LuCreditCard } from "react-icons/lu";
import clsx from "clsx";

interface Props {
  open: boolean;
}

const PlanDropdown = ({ open }: Props) => {
  const menuItems = [
    { label: "내 정보",  icon: <LuSettings /> },
    { label: "플랜",  icon: <LuCreditCard /> },
    { label: "로그아웃",  icon: <LuLogOut /> },
  ];

  return (
    <ul className={clsx(styles.container, { [styles.open]: open })}>
      {menuItems.map((item) => (
        <li key={item.label} className={styles.menu}>
          <div className={styles.icon}>{item.icon}</div>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

export default PlanDropdown;
