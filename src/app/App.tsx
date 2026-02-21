import styles from "./App.module.css";
import { TopNav } from "../components/TopNav/TopNav.tsx";
import { Section } from "../components/Section/Section.tsx";
import { CaseCard } from "../components/CaseCard/CaseCard.tsx";
import { Container } from "../components/Container/Container.tsx";
import { profile } from "../content/profile.ts";
import { skills } from "../content/skills.ts";
import { cases } from "../content/cases.ts";

export function App() {
  const techStrengths = profile.strengths.filter((s) => s.kind === "tech");
  const mindStrengths = profile.strengths.filter((s) => s.kind === "mind");

  return (
    <div className={styles.app}>
      <TopNav />

      {/* Hero */}
      <section id="top" className={styles.hero}>
        <Container>
          <h1 className={styles.heroName}>{profile.name}</h1>
          <p className={styles.heroTitle}>
            {profile.title}
            <span className={styles.heroSep}> – </span>
            {profile.subtitle}
          </p>
          <p className={styles.heroTagline}>{profile.tagline}</p>
          <div className={styles.heroKeywords}>
            {profile.keywords.map((kw) => (
              <span key={kw} className={styles.heroKeyword}>{kw}</span>
            ))}
          </div>
          <a href="#stack" className={styles.heroCta}>
            Stack を見る ↓
          </a>
        </Container>
      </section>

      {/* About */}
      <Section id="about" title="About">
        <p className={styles.aboutText}>{profile.about}</p>
      </Section>

      {/* Stack */}
      <Section id="stack" title="Stack">
        <div className={styles.stackGrid}>
          {skills.map((cat) => (
            <div key={cat.category} className={styles.stackCategory}>
              <h3 className={styles.stackCategoryTitle}>{cat.category}</h3>
              <ul className={styles.stackList}>
                {cat.items.map((skill) => (
                  <li key={skill.name} className={styles.stackItem}>
                    <span>{skill.name}</span>
                    <span className={styles.stackLevel}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span
                          key={i}
                          className={
                            i < skill.level
                              ? styles.dotFilled
                              : styles.dotEmpty
                          }
                        />
                      ))}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section id="values" title="Values">
        <h3 className={styles.strengthGroupTitle}>技術面</h3>
        <div className={styles.strengthGrid}>
          {techStrengths.map((s) => (
            <div key={s.title} className={styles.strengthCard}>
              <h3 className={styles.strengthTitle}>{s.title}</h3>
              <p className={styles.strengthDesc}>{s.description}</p>
            </div>
          ))}
        </div>

        <h3 className={styles.strengthGroupTitle}>思考面</h3>
        <div className={styles.strengthGrid}>
          {mindStrengths.map((s) => (
            <div key={s.title} className={styles.strengthCard}>
              <h3 className={styles.strengthTitle}>{s.title}</h3>
              <p className={styles.strengthDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Cases */}
      <Section id="cases" title="Cases">
        <div className={styles.casesGrid}>
          {cases.map((c) => (
            <CaseCard key={c.title} data={c} />
          ))}
        </div>
      </Section>

      {/* Footer */}
      <footer className={styles.footer}>
        <Container>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
        </Container>
      </footer>
    </div>
  );
}
