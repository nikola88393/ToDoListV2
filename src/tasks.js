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

    return {
        name,
        description,
        dueDate,
        finished,
        getTaskName,
        getTaskInfo
    }
}