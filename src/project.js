import renderContent from "./renderContent";
import task from "./tasks";
import { saveTasks, saveProjects, loadProjects, loadTasks, clearStorage } from "./localStorage";

export default function Project(name) {
    let tasks = [];

    const setTask = (name, description, dueDate) => {
        let temp = task(name, description, dueDate)
        tasks.push(temp);
        saveTasks(tasks);
    }

    const getTasks = () => {
        return tasks;
    }

    const getName = () => {
        return name;
    }

    function deleteTask(name) {
        tasks.forEach(task => {
            if (task.name === name) {
                tasks = tasks.filter(task => task.name !== name);
            }
        })
        saveTasks(tasks);
        refreshTasks(this);
    }

    function refreshTasks(project = this) {
        renderContent.renderTasks(tasks, project);
    }
    return {
        name,
        getName,
        setTask,
        getTasks,
        refreshTasks,
        deleteTask
    }
}