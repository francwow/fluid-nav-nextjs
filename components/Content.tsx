import { Content } from "@/data/Content";
import ContentItem from "./ContentItem";

const ContentComponent = () => {
  return (
    <div>
      {Content.map((item, index) => {
        return (
          <div className="contentItem w-full h-full" key={index}>
            <ContentItem item={item} index={index} />
          </div>
        );
      })}
    </div>
  );
};

export default ContentComponent;
