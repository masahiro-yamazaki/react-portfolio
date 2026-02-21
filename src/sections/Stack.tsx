import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Chip } from "../components/ui/Chip";
import { stackData } from "../data/stack";
import styles from "./Stack.module.css";

export function Stack() {
  return (
    <section className={styles.section} id="stack">
      <Container>
        <SectionTitle>Stack</SectionTitle>
        <div className={styles.grid}>
          {stackData.map((cat) => (
            <div key={cat.category} className={styles.column}>
              <h3 className={styles.categoryTitle}>{cat.category}</h3>
              <div className={styles.items}>
                {cat.items
                  .filter((item) => item.visible)
                  .map((item) => (
                    <div key={item.name} className={styles.item}>
                      <Chip label={item.name} accent />
                      {item.note && (
                        <span className={styles.note}>{item.note}</span>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
