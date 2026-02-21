import { Container } from "../components/layout/Container";
import { Card } from "../components/ui/Card";
import { copySets, heroStrengths, heroProfile } from "../data/copy";
import styles from "./Hero.module.css";

interface HeroProps {
  copyIndex: number;
}

export function Hero({ copyIndex }: HeroProps) {
  const copy = copySets[copyIndex] ?? copySets[0];

  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          {/* 左：タイトル */}
          <div className={styles.left}>
            <p className={styles.subtitle}>
              {heroProfile.title}
              <span className={styles.sep}> / </span>
              {heroProfile.subtitle}
            </p>
            <h1 className={styles.name}>{heroProfile.name}</h1>
            <p className={styles.catch}>{copy.catchphrase}</p>
          </div>

          {/* 右：強みカード */}
          <div className={styles.right}>
            {heroStrengths.map((s) => (
              <Card key={s.label}>
                <p className={styles.strengthLabel}>{s.label}</p>
                <p className={styles.strengthDesc}>{s.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* スクロール誘導 */}
        <div className={styles.scroll}>
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </Container>
    </section>
  );
}
