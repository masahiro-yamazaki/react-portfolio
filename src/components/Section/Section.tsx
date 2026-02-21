import type { ReactNode } from "react";
import styles from "./Section.module.css";
import { Container } from "../Container/Container.tsx";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section}${className ? ` ${className}` : ""}`}
    >
      <Container>
        {title && <h2 className={styles.title}>{title}</h2>}
        {children}
      </Container>
    </section>
  );
}
