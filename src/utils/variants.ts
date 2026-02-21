import { useState, useCallback } from "react";
import type { AboutVariant } from "../data/about";

export type ProjectVariant = "project1" | "project2" | "project3";

export interface VariantState {
  about: AboutVariant;
  project: ProjectVariant;
  copyIndex: number;
  aboutTextIndex: number;
}

const initialState: VariantState = {
  about: "aboutA",
  project: "project1",
  copyIndex: 0,
  aboutTextIndex: 0,
};

export function useVariants() {
  const [state, setState] = useState<VariantState>(initialState);

  const setVariant = useCallback(
    <K extends keyof VariantState>(key: K, value: VariantState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return { variants: state, setVariant } as const;
}
