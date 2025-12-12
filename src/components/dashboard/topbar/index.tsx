import styles from "./topbar.module.scss";
import { IoListOutline, IoCloseOutline } from "react-icons/io5";
import { ThemeToggle } from "@/components/dashboard";

interface Props {
  onMoreClick: () => void;
  open: boolean;
}

const Topbar = ({ onMoreClick, open }: Props) => {
  const Icon = open ? IoCloseOutline : IoListOutline;

  return (
    <div className={styles.container}>
      <Icon
        className={styles.moreIcon}
        onClick={onMoreClick}
        aria-label="메뉴 열기/닫기"
      />

      <div className={styles.brand}>
        <p>박지용</p>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Topbar;
