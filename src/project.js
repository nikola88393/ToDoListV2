import projectManager from ".";
import renderContent from "./renderContent";
import task from "./tasks";
import { saveProjects } from "./localStorage";

export default function Project(name) {
    let tasks = [];

    const setTask = (name, description, dueDate, finished) => {
        let temp = task(name, description, dueDate, finished);
        tasks.push(temp);

        saveProjects(projectManager.getProjects());
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
                projectManager.deleteTask(name, this);
            }
        })

        refreshTasks(this);
    }

    function refreshTasks(project = this) {
        renderContent.renderTasks(tasks, project);
    }
    return {
        name,
        tasks,
        getName,
        setTask,
        getTasks,
        refreshTasks,
        deleteTask
    }
}