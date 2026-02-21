import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: string;
}

export function SectionTitle({ children }: SectionTitleProps) {
  return <h2 className={styles.title}>{children}</h2>;
}
