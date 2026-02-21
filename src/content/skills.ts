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
    category: "Backend",
    items: [
      { name: "Ruby on Rails", level: 5 },
      { name: "Ruby", level: 5 },
      { name: "SQL", level: 4 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React", level: 4 },
      { name: "TypeScript", level: 4 },
      { name: "HTML / CSS", level: 5 },
      { name: "JavaScript", level: 5 },
    ],
  },
  {
    category: "Tools & Infra",
    items: [
      { name: "Git / GitHub", level: 5 },
      { name: "Docker", level: 3 },
      { name: "CI/CD", level: 3 },
      { name: "Vite", level: 3 },
      { name: "Vercel", level: 3 },
    ],
  },
];
