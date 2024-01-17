export function saveTasks(tasksArray) {
    if (tasksArray !== null) {
        localStorage.setItem('tasks', JSON.stringify(tasksArray));
    }
}

export function loadTasks() {
    return JSON.parse(localStorage.getItem('tasks'));
}

export function saveProjects(projectsArray) {
    if (projectsArray !== null) {
        localStorage.setItem('projects', JSON.stringify(projectsArray));
    }
}

export function loadProjects() {
    return JSON.parse(localStorage.getItem('projects'));
}

export function clearStorage() {
    localStorage.clear();
}