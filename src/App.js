import { useState } from "react";
import Dropdown from "./components/Dropdown";

function App() {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "Blue" },
  ];

  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
  };

  return (
    <Dropdown options={options} onSelect={handleSelect} selected={selected} />
  );
}

export default App;
