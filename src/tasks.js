import projectManager from ".";

export default function task(name, description, dueDate, finished = false) {
    // let finished = false;
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
        finished,
        getTaskInfo,
        getStatus,
        changeStatus
    }
}