export interface Skill {
  name: string;
  level: number; // 1–5
}

export interface SkillCategory {
  category: string;
  items: Skill[];
}

export const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Next.js", level: 4 },
      { name: "CSS Modules", level: 4 },
      { name: "HTML / CSS", level: 5 },
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Vite", level: 4 },
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Vercel", level: 4 },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Node.js", level: 3 },
      { name: "REST API 設計", level: 4 },
      { name: "Figma", level: 3 },
      { name: "Testing", level: 4 },
    ],
  },
];
