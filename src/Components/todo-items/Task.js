import { deleteTaskLocalStorage } from "../../data/repository";

export default function Task({ key, taskName, setTask }) {
  const handleDelete = () => {
    setTask(deleteTaskLocalStorage(taskName));
  };
  return (
    <li className="flex justify-between my-3 text-center p-3 hover:bg-slate-200 hover:scale-105 transition transform border-b border-gray-300 last:border-none first:mt-0 last:mb-0">
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
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
