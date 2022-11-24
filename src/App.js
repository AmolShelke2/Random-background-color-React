import { useState } from "react";
import "./App.css";

const randomColors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
];

function App() {
  const [color, setRandomColor] = useState(randomColors[0]);

  const randomColorChangeHandler = () => {
    const randomColor = Math.ceil(Math.random() * randomColors.length);
  };

  return (
    <div className="App">
      <p>Change Random Background color</p>
      <button>Change</button>
    </div>
  );
}

export default App;
