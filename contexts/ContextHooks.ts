"use client";

import { createContext, useContext } from "react";
import {
  InitialContextType,
  LanguageContextType,
  PositionContextType,
  ScrollContextType,
  ScrolledContextType,
} from "../types/Types";

export const LanguageContext = createContext<LanguageContextType | null>(null);
export const PositionContext = createContext<PositionContextType | null>(null);
export const ScrollDownContext = createContext<ScrollContextType | null>(null);
export const InitialContext = createContext<InitialContextType | null>(null);
export const ScrolledContext = createContext<ScrolledContextType | null>(null);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const usePosition = (): PositionContextType => {
  const context = useContext(PositionContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useScrollDown = (): ScrollContextType => {
  const context = useContext(ScrollDownContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useInitial = (): InitialContextType => {
  const context = useContext(InitialContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};

export const useScrolled = (): ScrolledContextType => {
  const context = useContext(ScrolledContext);

  if (!context) {
    throw new Error("Please use Provider in parent component");
  }

  return context;
};
