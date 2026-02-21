import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Chip } from "../components/ui/Chip";
import type { AboutVariant } from "../data/about";
import {
  aboutTexts,
  aboutChips,
  aboutProfile,
  aboutValues,
  aboutBullets,
} from "../data/about";
import styles from "./About.module.css";

interface AboutProps {
  variant: AboutVariant;
  textIndex: number;
}

export function About({ variant, textIndex }: AboutProps) {
  const text = aboutTexts[textIndex] ?? aboutTexts[0];

  return (
    <section className={styles.section} id="about">
      <Container>
        <SectionTitle>About</SectionTitle>

        {variant === "aboutA" && (
          <div className={styles.variantA}>
            <p className={styles.text}>{text.text}</p>
            <div className={styles.chips}>
              {aboutChips.map((c) => (
                <Chip key={c} label={c} />
              ))}
            </div>
          </div>
        )}

        {variant === "aboutB" && (
          <div className={styles.variantB}>
            <div className={styles.colLeft}>
              <h3 className={styles.colTitle}>Profile</h3>
              <dl className={styles.dl}>
                <div className={styles.dlRow}>
                  <dt>経験年数</dt>
                  <dd>{aboutProfile.experience}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt>注力領域</dt>
                  <dd>{aboutProfile.focus}</dd>
                </div>
                <div className={styles.dlRow}>
                  <dt>経歴</dt>
                  <dd>{aboutProfile.background}</dd>
                </div>
              </dl>
            </div>
            <div className={styles.colRight}>
              <h3 className={styles.colTitle}>Values</h3>
              <ul className={styles.valueList}>
                {aboutValues.map((v) => (
                  <li key={v} className={styles.valueItem}>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {variant === "aboutC" && (
          <div className={styles.variantC}>
            {aboutBullets.map((b) => (
              <div key={b.title} className={styles.bulletRow}>
                <span className={styles.bulletTitle}>{b.title}</span>
                <span className={styles.bulletText}>{b.text}</span>
              </div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
