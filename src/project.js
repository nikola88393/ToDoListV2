import renderContent from "./renderContent";
import task from "./tasks";

export default function Project(name) {
    let tasks = [];

    const setTask = (name, description, dueDate) => {
        let temp = task(name, description, dueDate)
        tasks.push(temp);
        // refreshTasks();
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