import { Container } from "../components/layout/Container";
import { SectionTitle } from "../components/ui/SectionTitle";
import { Chip } from "../components/ui/Chip";
import { projects } from "../data/projects";
import type { Project } from "../data/projects";
import styles from "./ProjectSummary.module.css";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className={styles.card}>
      <div className={styles.grid}>
        {/* 左：案件サマリ */}
        <div className={styles.left}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <dl className={styles.meta}>
            <div className={styles.metaRow}>
              <dt>業種</dt>
              <dd>{project.industry}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>規模</dt>
              <dd>{project.scale}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>役割</dt>
              <dd>{project.role}</dd>
            </div>
            <div className={styles.metaRow}>
              <dt>期間</dt>
              <dd>{project.period}</dd>
            </div>
          </dl>
          <p className={styles.summary}>{project.summary}</p>
          <div className={styles.techs}>
            {project.techs.map((t) => (
              <Chip key={t} label={t} accent />
            ))}
          </div>
        </div>

        {/* 右：やったこと */}
        <div className={styles.right}>
          <h3 className={styles.tasksTitle}>やったこと</h3>
          <ul className={styles.taskList}>
            {project.tasks.map((task) => (
              <li key={task} className={styles.taskItem}>
                {task}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function ProjectSummary() {
  return (
    <section className={styles.section} id="projects">
      <Container>
        <SectionTitle>Project Summary</SectionTitle>
        <div className={styles.list}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
