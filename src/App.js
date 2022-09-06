import "./App.scss";

import Calendar from "./components/Calendar";
import Button from "./components/Button";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="container">
      <Button />
      <Slider />
      <Calendar />
    </div>
  );
}

export default App;
