"use client";

import {
  useInitial,
  usePosition,
  useScrollDown,
} from "@/contexts/ContextHooks";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

type ContentItemProps = {
  index: number;
  item: {
    heading: string;
    imgSrc: StaticImageData;
    text: string;
    link: string;
    inverted: boolean;
  };
};

const ContentItem = ({ index, item }: ContentItemProps) => {
  const { position, setPosition } = usePosition();
  const { scrollDown, setScrollDown } = useScrollDown();
  const { initial, setInitial } = useInitial();
  const containerRef = useRef<HTMLDivElement>(null);

  const [prevPageY, setPrevPageY] = useState(null);
  let positionDiff: any;

  const autoSlide = () => {
    setInitial(false);
    console.log(positionDiff);
    if (positionDiff <= -100) {
      setScrollDown(true);
      if (position === 0) {
        setPosition(1);
      } else if (position === 1) {
        setPosition(2);
      } else if (position === 2) {
        setPosition(3);
      } else if (position === 3) {
        return;
      }
    } else if (positionDiff >= 100) {
      setScrollDown(false);
      if (position === 3) {
        setPosition(2);
      } else if (position === 2) {
        setPosition(1);
      } else if (position === 1) {
        setPosition(0);
      } else if (position === 0) {
        return;
      }
    }
  };

  // DeskTop
  const dragStartDeskTop = (e: any) => {
    let initialY = e.clientY;
    setPrevPageY(e.clientY);
    console.log(initialY, "dragStart");
  };

  const dragStopDeskTop = (e: any) => {
    let finalY = e.clientY;
    console.log(finalY, "dragStop");
    console.log(prevPageY, "prevPageY");
    autoSlide();
  };

  const draggingDeskTop = (e: any) => {
    if (prevPageY !== null) {
      positionDiff = e.clientY - prevPageY;
    }

    return;
  };

  // Mobile
  const dragStartMobile = (e: any) => {
    let initialY = e.touches[0].clientY;
    setPrevPageY(initialY);
  };

  // eslint-disable-next-line no-unused-vars
  const dragStopMobile = (e: any) => {
    let finalY = prevPageY + positionDiff;
    console.log(finalY, "dragStop");

    autoSlide();
  };

  const draggingMobile = (e: any) => {
    if (prevPageY !== null) {
      positionDiff = e.touches[0].clientY - prevPageY;
    }
  };

  return (
    <div
      ref={containerRef}
      // href={"https://www.francwow.com/"}
      className={`${
        item.inverted ? "content reflect" : "content not-reflect"
      }  ${position === index ? "active" : "not-active"} ${
        initial ? "initial" : "not-initial"
      } ${scrollDown ? "down" : "up"}`}
      onPointerMove={(e) => draggingDeskTop(e)}
      onPointerDown={(e) => dragStartDeskTop(e)}
      onPointerUp={(e) => dragStopDeskTop(e)}
      onTouchMove={(e) => draggingMobile(e)}
      onTouchStart={(e) => dragStartMobile(e)}
      onTouchEnd={(e) => dragStopMobile(e)}
    >
      <div className="overlay"></div>
      <div className="img-container">
        <Image
          src={item.imgSrc}
          alt="Colombian landscape"
          width={2000}
          height={2000}
          priority
        />
      </div>
      <div className="heading">
        <h1>{item.heading}</h1>
      </div>
      <div className="info-container">
        <div className="info">
          <p>{item.text}</p>
          <Link className="cta" href={item.link} target="_blank">
            <span>learn more here</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentItem;
