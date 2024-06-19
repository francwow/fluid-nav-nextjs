"use client";

import { usePosition } from "@/contexts/ContextHooks";

const ContentCount = () => {
  const { position } = usePosition();

  return (
    <div className="count-container">
      <div className="count">
        <span>{`${position + 1} / 4`}</span>
      </div>
    </div>
  );
};

export default ContentCount;
