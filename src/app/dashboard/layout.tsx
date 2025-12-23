import styles from "./dashboard-layout.module.scss";
import { ClientShell } from "@/components/layout";

export const dynamic = "force-dynamic";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.container}>
      <ClientShell>
        <main className={styles.main}>{children}</main>
      </ClientShell>
    </section>
  );
}
