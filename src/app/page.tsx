import styles from "./page.module.scss";
import { LandingHeader } from "@/components/landing";

export default function Home() {
  return (
    <div className={styles.page}>
      <LandingHeader />
    </div>
  );
}
