import { profile } from "../data/profile";
import styles from "./IntroSection.module.css";

export function IntroSection() {

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* ===== 左カラム（1/3）===== */}
          <div>
            <h1 className={styles.catch}>{profile.catchCopies[0]}</h1>
            <p className={styles.name}>{profile.name}</p>
            <p className={styles.title}>{profile.title}</p>

            <ul className={styles.strengths}>
              {profile.strengths.map((s, i) => (
                <li key={i} className={styles.strengthItem}>
                  <span className={styles.strengthNum}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.strengthText}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== 右カラム（2/3）===== */}
          <div>
            <h2 className={styles.summaryTitle}>Summary</h2>

            <div className={styles.paragraphs}>
              {profile.summaryParagraphs.map((p, i) => (
                <p key={i} className={styles.paragraph}>
                  {p}
                </p>
              ))}
            </div>

            <p className={styles.closing}>{profile.closingLine}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
