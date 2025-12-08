import styles from "./spaces-layout.module.scss";

const SpacesLayout = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};

export default SpacesLayout;
