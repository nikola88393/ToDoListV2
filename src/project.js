import task from "./tasks";

export default function Project(name) {
    let tasks = [];

    const getTask = () => {
        tasks.forEach(element => {
            console.log(element.getTaskName());
        });
    }
    const setTask = (name, description, dueDate) => {
        let temp = task(name, description, dueDate)
        tasks.push(temp);
    }
    const getTasks = () => {
        return tasks;
    }
    const getName = () => {
        return name;
    }
    return {
        name,
        getName,
        getTask,
        setTask,
        getTasks
    }
}