import styles from "./topbar.module.scss";
import { IoListOutline, IoCloseOutline } from "react-icons/io5";

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

      <p>박지용</p>
    </div>
  );
};

export default Topbar;
