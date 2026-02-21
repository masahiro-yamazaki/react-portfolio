import type { Case } from "../../content/cases.ts";
import styles from "./CaseCard.module.css";

interface CaseCardProps {
  data: Case;
}

export function CaseCard({ data }: CaseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>{data.title}</h3>
        <span className={styles.period}>{data.period}</span>
      </div>
      <p className={styles.role}>{data.role}</p>
      <p className={styles.description}>{data.description}</p>
      <div className={styles.techs}>
        {data.techs.map((tech) => (
          <span key={tech} className={styles.tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
