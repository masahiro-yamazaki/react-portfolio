import { Container } from "../components/layout/Container";
import { Card } from "../components/ui/Card";
import { Chip } from "../components/ui/Chip";
import { Segmented } from "../components/ui/Segmented";
import { copySets, heroStrengths, heroProfile } from "../data/copy";
import type { AboutVariant } from "../data/about";
import {
  aboutTexts,
  aboutChips,
  aboutProfile,
  aboutValues,
  aboutBullets,
} from "../data/about";
import styles from "./Hero.module.css";

const aboutOptions: { value: AboutVariant; label: string }[] = [
  { value: "aboutA", label: "短文+チップ" },
  { value: "aboutB", label: "2カラム" },
  { value: "aboutC", label: "箇条書き" },
];

interface HeroProps {
  copyIndex: number;
  aboutVariant: AboutVariant;
  aboutTextIndex: number;
  onAboutVariantChange: (v: AboutVariant) => void;
}

export function Hero({
  copyIndex,
  aboutVariant,
  aboutTextIndex,
  onAboutVariantChange,
}: HeroProps) {
  const copy = copySets[copyIndex] ?? copySets[0];
  const aboutText = aboutTexts[aboutTextIndex] ?? aboutTexts[0];

  return (
    <section className={styles.hero}>
      <Container>
        {/* --- Hero 上部 --- */}
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

        {/* --- About 下部 --- */}
        <div className={styles.about}>
          <div className={styles.aboutHeader}>
            <h2 className={styles.aboutTitle}>About</h2>
            <Segmented
              options={aboutOptions}
              value={aboutVariant}
              onChange={onAboutVariantChange}
            />
          </div>

          {aboutVariant === "aboutA" && (
            <div className={styles.variantA}>
              <p className={styles.text}>{aboutText.text}</p>
              <div className={styles.chips}>
                {aboutChips.map((c) => (
                  <Chip key={c} label={c} />
                ))}
              </div>
            </div>
          )}

          {aboutVariant === "aboutB" && (
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

          {aboutVariant === "aboutC" && (
            <div className={styles.variantC}>
              {aboutBullets.map((b) => (
                <div key={b.title} className={styles.bulletRow}>
                  <span className={styles.bulletTitle}>{b.title}</span>
                  <span className={styles.bulletText}>{b.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* スクロール誘導 */}
        <div className={styles.scroll}>
          <span className={styles.scrollArrow}>↓</span>
        </div>
      </Container>
    </section>
  );
}
