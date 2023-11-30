import Carousel from "./Carousel";
import imgData from "./Data";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Carousel data={imgData} />
    </div>
  );
}

export default App;
