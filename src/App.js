import "./App.css";
import LeftColumn from "./Components/LeftColumn";
import RightColumn from "./Components/RightColumns";

const App = () => {
  return (
    <div className="App">
      <RightColumn />
      <LeftColumn />
    </div>
  );
};

export default App;
