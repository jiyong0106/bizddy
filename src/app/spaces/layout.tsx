import styles from "./spaces-layout.module.scss";
import { ClientShell } from "@/components/common";

export const dynamic = "force-static";

export default function SpacesLayout({
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
