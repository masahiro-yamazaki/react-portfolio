import styles from "./TopNav.module.css";
import { Container } from "../Container/Container.tsx";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "values", label: "Values" },
  { id: "cases", label: "Cases" },
] as const;

export function TopNav() {
  return (
    <nav className={styles.nav}>
      <Container className={styles.inner}>
        <a href="#top" className={styles.logo}>
          Portfolio
        </a>
        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={styles.link}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}
