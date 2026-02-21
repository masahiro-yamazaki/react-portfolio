import { IntroSection } from "../components/IntroSection";
import { Stack } from "../sections/Stack";
import { ProjectSummary } from "../sections/ProjectSummary";
import { Container } from "../components/layout/Container";

import styles from "./App.module.css";

export function App() {
  return (
    <div className={styles.app}>
      {/* 1) Hero + About */}
      <IntroSection />

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
