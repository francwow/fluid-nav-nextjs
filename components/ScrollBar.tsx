"use client";

import {
  useInitial,
  usePosition,
  useScrollDown,
  useScrolled,
} from "@/contexts/ContextHooks";
import { useEffect, useState } from "react";

const ScrollBar = () => {
  const { position, setPosition } = usePosition();
  const { setInitial } = useInitial();
  const { scrolled, setScrolled } = useScrolled();
  const [noScroll, setNoScroll] = useState(0);
  const { scrollDown, setScrollDown } = useScrollDown();

  // detect scroll direction
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    function scrollHandle() {
      const scrolled = window.scrollY;

      if (scrolled > noScroll) {
        setScrollDown(true);
      } else if (scrolled < noScroll) {
        setScrollDown(false);
      }
      setNoScroll(scrolled <= 0 ? 0 : scrolled);
    }

    window.addEventListener("scroll", scrollHandle);

    return () => {
      window.removeEventListener("scroll", scrollHandle);
    };
  }, [noScroll, scrollDown, setScrollDown]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY);

      setInitial(false);

      if (scrolled <= 90) {
        setPosition(0);
      } else if (scrolled >= 98 && scrolled <= 190) {
        setPosition(1);
      } else if (scrolled >= 198 && scrolled <= 290) {
        setPosition(2);
      } else if (scrolled >= 298) {
        setPosition(3);
      }

      setTimeout(() => {
        document.documentElement.style.overflow = "scroll";
      }, 700);

      document.documentElement.style.overflow = "hidden";
      // console.log(scrollDown.initial);
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [
    scrolled,
    setPosition,
    scrollDown,
    setScrollDown,
    setInitial,
    setScrolled,
  ]);

  return (
    <div className="scrollbar">
      <div
        style={{
          transform: `translate3d(0, ${position * 100}%, 0)`,
        }}
        className="scroll-thumb"
      ></div>
    </div>
  );
};

export default ScrollBar;
