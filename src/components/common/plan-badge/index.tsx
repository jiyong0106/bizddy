import styles from "./plan-badge.module.scss";
export type PlanTier = "Free" | "Light" | "Pro";

interface Props {
  tier: PlanTier;
  className?: string;
}

const PlanBadge = ({ tier, className }: Props) => {
  return <span className={`${styles.badge} ${className ?? ""}`}>{tier}</span>;
};

export default PlanBadge;
