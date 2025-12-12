import clsx from "clsx";
import styles from "./logo.module.scss";

interface Props {
  size?: number | string;
}

const toCssSize = (v?: number | string) =>
  typeof v === "number" ? `${v}px` : v;

const Logo = ({ size }: Props) => {
  return (
    <div
      className={clsx(styles.container)}
      style={size ? { fontSize: toCssSize(size) } : undefined}
    >
      Bizddy
    </div>
  );
};

export default Logo;
