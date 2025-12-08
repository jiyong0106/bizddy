import styles from "./topbar.module.scss";

interface Props {
  onMoreClick: () => void;
}

const Topbar = ({ onMoreClick }: Props) => {
  return (
    <div className={styles.container}>
      <button type="button" className={styles.moreBtn} onClick={onMoreClick}>
        더보기
      </button>
    </div>
  );
};

export default Topbar;
