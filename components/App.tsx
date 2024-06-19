import ScrollBar from "./ScrollBar";
import ContentComponent from "./Content";
import ContentCount from "./ContentCount";

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <ScrollBar />
        <ContentCount />
        <ContentComponent />
      </div>
    </div>
  );
};

export default App;
