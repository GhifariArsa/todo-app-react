import { useState } from "react";
import { addTaskToLocalStorage, getTasks } from "../../data/repository";

export default function InputBar({ setTasks }) {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = (v) => {
    setInputValue(v);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
    addTaskToLocalStorage(inputValue);

    const fetchedTasks = getTasks();
    setTasks(fetchedTasks);
  };

  return (
    <form className="flex w-1/2 justify-between" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Task"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className="p-2 border-2 rounded-sm flex-1" 
      />
    </form>
  );
}
