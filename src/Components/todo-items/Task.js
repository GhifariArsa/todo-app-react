import { useState } from "react";
import { deleteTaskLocalStorage } from "../../data/repository";

export default function Task({ key, taskName, setTask }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleDelete = () => {
    setTask((prevTasks) => {
      const updatedTasks = deleteTaskLocalStorage(taskName);
      if (isChecked) {
        setIsChecked(false);
      }
      return updatedTasks;
    });
  };

  return (
    <li className="flex justify-between text-center p-3 transition transform border-b border-gray-300 last:border-none m-0">
      <label className="flex items-center">
        <input
          type="checkbox"
          className="mr-2"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {taskName}
      </label>
      <button
        onClick={handleDelete}
        className="bg-red-500 pr-2 pl-2 text-white rounded-md hover:outline hover:text-black"
      >
        X
      </button>
    </li>
  );
}
