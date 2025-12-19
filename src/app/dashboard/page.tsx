import styles from "./dashboard-page.module.scss";
import SupatestServer from "@/components/supatest/supatest-server";
import SupatestClient from "@/components/supatest/supatest-client";

const DashboardPage = () => {
  return (
    <div className={styles.container}>
      <h1>SpacesPage</h1>
      <p>좌측 네비게이션 + 우측 콘텐츠 예시 레이아웃입니다.</p>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}
      >
        <section>
          <h2>Server Side</h2>
          <SupatestServer />
        </section>

        <section>
          <h2>Client Side</h2>
          <SupatestClient />
        </section>
      </div>
    </div>
  );
};

export default DashboardPage;
