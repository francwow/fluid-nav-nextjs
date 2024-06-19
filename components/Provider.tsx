"use client";

import {
  InitialContext,
  PositionContext,
  ScrollDownContext,
  ScrolledContext,
} from "@/contexts/ContextHooks";
import {
  InitialType,
  PositionType,
  ScrollDownType,
  ScrolledType,
} from "@/types/Types";
import { PropsWithChildren, useState } from "react";

const Provider = ({ children }: PropsWithChildren) => {
  const [position, setPosition] = useState<PositionType>(0);
  const [scrollDown, setScrollDown] = useState<ScrollDownType>(true);
  const [initial, setInitial] = useState<InitialType>(true);
  const [scrolled, setScrolled] = useState<ScrolledType>(0);

  return (
    <ScrolledContext.Provider value={{ scrolled, setScrolled }}>
      <InitialContext.Provider value={{ initial, setInitial }}>
        <ScrollDownContext.Provider value={{ scrollDown, setScrollDown }}>
          <PositionContext.Provider value={{ position, setPosition }}>
            {children}
          </PositionContext.Provider>
        </ScrollDownContext.Provider>
      </InitialContext.Provider>
    </ScrolledContext.Provider>
  );
};

export default Provider;
