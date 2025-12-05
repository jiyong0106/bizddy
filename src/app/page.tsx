import styles from "./page.module.scss";
import LandingHeader from "@/components/landing/landing-header";

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingHeader />
    </div>
  );
}
