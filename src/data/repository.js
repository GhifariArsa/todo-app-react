import { TASK_KEY } from "../Constants/constants";

export function initTasks() {
  if (localStorage.getItem(TASK_KEY) !== null) return;
  const emptyTask = [];
  localStorage.setItem(TASK_KEY, JSON.stringify(emptyTask));
}

export function getTasks() {
  const tasks = localStorage.getItem(TASK_KEY);

  if (tasks !== null) return JSON.parse(tasks);
  else return [];
}

export function addTaskToLocalStorage(task) {
  const currentTask = JSON.parse(localStorage.getItem(TASK_KEY));
  if (currentTask !== null) {
    currentTask.push(task);
    localStorage.setItem(TASK_KEY, JSON.stringify(currentTask));
  } else {
    const currentTask = [task];
    localStorage.setItem(TASK_KEY, JSON.stringify(currentTask));
  }
}

export function deleteTaskLocalStorage(task) {
  const currentTasks = JSON.parse(localStorage.getItem(TASK_KEY));
  const index = currentTasks.indexOf(task);
  if (index > -1) {
    currentTasks.splice(index, 1);
  }
  localStorage.setItem(TASK_KEY, JSON.stringify(currentTasks));
  return currentTasks;
}

export function clearTasks() {
  const emptyTask = [];
  localStorage.setItem(TASK_KEY, JSON.stringify(emptyTask));
}
