export default function task(name, description, dueDate) {
    let finished = false;

    const getTaskInfo = () => {
        return {
            name, description, dueDate
        }
    }

    const getStatus = () => {
        return finished;
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
        getTaskInfo,
        getStatus,
        changeStatus
    }
}