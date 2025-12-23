import styles from "./login-form.module.scss";
import clsx from "clsx";

interface Props {
  phone: string;
  onChangePhone: (value: string) => void;
  onSubmit: () => void;
}

const LoginForm = ({ phone, onChangePhone, onSubmit }: Props) => {
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

        <form
          className={clsx(styles.form)}
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className={clsx(styles["input-group"])}>
            <label htmlFor="phone" className={clsx(styles.label)}>
              핸드폰 번호 <span className={clsx(styles.required)}>*</span>
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => onChangePhone(e.target.value)}
              className={clsx(styles.input)}
              placeholder="핸드폰 번호를 입력해 주세요"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
