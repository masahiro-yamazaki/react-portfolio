import { useVariants } from "../utils/variants";
import { copySets } from "../data/copy";
import { aboutTexts } from "../data/about";

import { Container } from "../components/layout/Container";
import { Hero } from "../sections/Hero";
import { Stack } from "../sections/Stack";
import { ProjectSummary } from "../sections/ProjectSummary";

import styles from "./App.module.css";

export function App() {
  const { variants, setVariant } = useVariants();

  return (
    <div className={styles.app}>
      {/* Variant コントロールパネル */}
      <div className={styles.controlBar}>
        <Container>
          <div className={styles.controls}>
            <div className={styles.controlGroup}>
              <span className={styles.controlLabel}>Catch</span>
              <select
                className={styles.select}
                value={variants.copyIndex}
                onChange={(e) =>
                  setVariant("copyIndex", Number(e.target.value))
                }
              >
                {copySets.map((c, i) => (
                  <option key={c.id} value={i}>
                    {c.id}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.controlGroup}>
              <span className={styles.controlLabel}>About文</span>
              <select
                className={styles.select}
                value={variants.aboutTextIndex}
                onChange={(e) =>
                  setVariant("aboutTextIndex", Number(e.target.value))
                }
              >
                {aboutTexts.map((t, i) => (
                  <option key={t.id} value={i}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </Container>
      </div>

      {/* 1) Hero + About */}
      <Hero
        copyIndex={variants.copyIndex}
        aboutVariant={variants.about}
        aboutTextIndex={variants.aboutTextIndex}
        onAboutVariantChange={(v) => setVariant("about", v)}
      />

      {/* 2) Stack */}
      <Stack />

      {/* 3) Project Summary */}
      <ProjectSummary />

      {/* Footer */}
      <footer className={styles.footer}>
        <Container>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} Masahiro Yamazaki
          </p>
        </Container>
      </footer>
    </div>
  );
}
