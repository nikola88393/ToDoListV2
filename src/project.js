import projectManager from ".";
import renderContent from "./renderContent";
import task from "./tasks";
import { saveTasks, saveProjects, loadProjects, loadTasks, clearStorage } from "./localStorage";

export default function Project(name) {
    let tasks = [];

    const setTask = (name, description, dueDate, projectName = this) => {
        let temp = task(name, description, dueDate, projectName);
        tasks.push(temp);
        // console.log(temp);

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

        saveProjects(projectManager.getProjects());
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