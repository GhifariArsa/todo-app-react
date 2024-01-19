import React, { useEffect, useState } from "react";
import InputBar from "./Components/input-bar/InputBar";
import { clearTasks, getTasks } from "./data/repository";
import Task from "./Components/todo-items/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(getTasks());
  }, []);

  const handleClear = () => {
    clearTasks();
    setTasks([]);
  };

  return (
    <div className="text-center">
      <div className="m-3">
        <h1 className="text-4xl font-bold mb-6">To-Do List</h1>
      </div>

      <div className="flex align-middle justify-center">
        <InputBar setTasks={setTasks} />
      </div>
      <div className="flex justify-center">
        {tasks.length !== 0 ? (
          <>
            <div className="mt-9 bg-slate-50 p-5 w-1/2">
              <ul>
                {tasks.map((task, index) => (
                  <Task key={index} taskName={task} setTask={setTasks} />
                ))}
              </ul>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-lg font-light mb-6">Enter task in the bar above</h1>
          </>
        )}
      </div>
      <div className="flex align-middle justify-center m-4">
        {tasks.length !== 0 && (
          <button
            onClick={handleClear}
            className="bg-red-400 text-white p-1 w-1/2 rounded-sm hover:scale-110 hover:bg-red-500 transition"
          >
            CLEAR LIST
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
