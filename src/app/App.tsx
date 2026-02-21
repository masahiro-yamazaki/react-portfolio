import styles from "./App.module.css";
import { TopNav } from "../components/TopNav/TopNav.tsx";
import { Section } from "../components/Section/Section.tsx";
import { CaseCard } from "../components/CaseCard/CaseCard.tsx";
import { Container } from "../components/Container/Container.tsx";
import { profile } from "../content/profile.ts";
import { skills } from "../content/skills.ts";
import { cases } from "../content/cases.ts";

export function App() {
  return (
    <div className={styles.app}>
      <TopNav />

      {/* Hero */}
      <section id="top" className={styles.hero}>
        <Container>
          <p className={styles.heroTag}>Portfolio</p>
          <h1 className={styles.heroName}>{profile.name}</h1>
          <p className={styles.heroTitle}>{profile.title}</p>
          <p className={styles.heroTagline}>{profile.tagline}</p>
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

      {/* Strength */}
      <Section id="strength" title="Strength">
        <div className={styles.strengthGrid}>
          {profile.strengths.map((s) => (
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
