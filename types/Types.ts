export type LanguageType = string;

export type PositionType = number;

export type ScrollDownType = boolean;

export type InitialType = boolean;

export type ScrolledType = number;

export type LanguageContextType = {
  language: LanguageType;
  // eslint-disable-next-line no-unused-vars
  setLanguage: (Language: string) => void;
};

export type PositionContextType = {
  position: PositionType;
  // eslint-disable-next-line no-unused-vars
  setPosition: (position: number) => void;
};

export type ScrollContextType = {
  scrollDown: ScrollDownType;
  // eslint-disable-next-line no-unused-vars
  setScrollDown: (scrollDown: ScrollDownType) => void;
};

export type InitialContextType = {
  initial: InitialType;
  // eslint-disable-next-line no-unused-vars
  setInitial: (initial: InitialType) => void;
};

export type ScrolledContextType = {
  scrolled: ScrolledType;
  // eslint-disable-next-line no-unused-vars
  setScrolled: (scrolled: ScrolledType) => void;
};
