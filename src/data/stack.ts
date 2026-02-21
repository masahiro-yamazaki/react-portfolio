export interface StackItem {
  name: string;
  note?: string;
  visible: boolean;
}

export interface StackCategory {
  category: string;
  items: StackItem[];
}

/** 技術スタック — visible: false で非表示にできる */
export const stackData: StackCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", note: "メイン", visible: true },
      { name: "TypeScript", note: "常用", visible: true },
      { name: "Next.js", note: "経験あり", visible: true },
      { name: "CSS Modules", visible: true },
      { name: "Tailwind CSS", visible: true },
      { name: "Storybook", visible: true },
      { name: "Vite", visible: true },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Ruby on Rails", note: "10年以上", visible: true },
      { name: "Ruby", visible: true },
      { name: "PostgreSQL", visible: true },
      { name: "MySQL", visible: true },
      { name: "REST API", visible: true },
      { name: "RSpec", visible: true },
    ],
  },
  {
    category: "Tooling",
    items: [
      { name: "Git / GitHub", visible: true },
      { name: "Docker", visible: true },
      { name: "CI/CD", note: "GitHub Actions", visible: true },
      { name: "Figma", note: "デザイン参照", visible: true },
      { name: "ESLint / Prettier", visible: true },
    ],
  },
];
