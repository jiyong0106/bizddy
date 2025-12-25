import { createClient } from "@/libs/supabase/client";
import styles from "./google-login-form.module.scss";
import clsx from "clsx";

const GoogleLoginForm = () => {
  //구글 로그인
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });
    if (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div className={clsx(styles.container)}>
      <div className={clsx(styles["login-card"])}>
        <header className={clsx(styles.header)}>
          <h1 className={clsx(styles.title)}>환영해요</h1>
          <p className={clsx(styles.subtitle)}>
            단 10초, 인증 한 번으로 간단하게 시작할 수 있어요.
          </p>
        </header>

        <hr className={clsx(styles.divider)} />

        <button className={clsx(styles.button)} onClick={handleGoogleLogin}>
          구글로 로그인
        </button>
      </div>
    </div>
  );
};

export default GoogleLoginForm;
