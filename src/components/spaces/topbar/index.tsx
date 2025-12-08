import styles from "./topbar.module.scss";

interface Props {
  onMoreClick: () => void;
}

const Topbar = ({ onMoreClick }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.brand}>bizddy</div>
      <button type="button" className={styles.moreBtn} onClick={onMoreClick}>
        더보
      </button>
    </div>
  );
};

export default Topbar;
