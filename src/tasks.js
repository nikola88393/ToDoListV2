export default function task(name, description, dueDate) {
    let finished = false;

    const getTaskName = () => {
        return name;
    }

    const getTaskInfo = () => {
        return {
            name, description, dueDate
        }
    }

    const changeStatus = () => {
        finished = !finished;
    }

    return {
        name,
        description,
        dueDate,
        finished,
        getTaskName,
        getTaskInfo,
        changeStatus
    }
}