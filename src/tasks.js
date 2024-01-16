export default function task(name, description, dueDate, finished = false) {
    const getTaskName = () => {
        return name;
    }

    const getTaskInfo = () => {
        return {
            name, description, dueDate
        }
    }

    const changeStatus = () => {
        console.log("Before change: ", finished);
        finished = !finished;
        console.log("After change: ", finished);
    }

    return {
        name,
        description,
        dueDate,
        getTaskName,
        getTaskInfo,
        changeStatus
    }
}