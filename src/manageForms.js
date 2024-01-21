import projectManager from ".";

export function displayProjectForm() {
    let form = document.getElementById('projectForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
}
export function getProjectFormData() {
    let title = document.getElementById('projectName').value;

    document.getElementById('projectName').value = '';
    return {
        title
    }
}
const AddNewProjectBtn = document.getElementById('addProject');

AddNewProjectBtn.addEventListener('click', () => {
    let obj = getProjectFormData();

    if (obj.title) {
        projectManager.addProject(obj.title);
        projectManager.renderProjects();

        displayProjectForm();
    }
})

export function displayTaskForm() {
    let form = document.getElementById('taskForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
}
export function getTaskFormData() {
    let title = document.getElementById('taskName').value;
    let dueDate = document.getElementById('dueDate').value;
    let description = document.getElementById('taskDescription').value;
    let project = document.getElementById('projectInput').value;

    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('taskDescription').value = '';

    return {
        title,
        dueDate,
        description,
        project
    }
}

const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', () => {
    let { title, dueDate, description, project } = getTaskFormData();
    let obj = projectManager.findProjectByName(project);

    if (title && dueDate && description) {
        obj.setTask(title, dueDate, description);
        obj.refreshTasks();

        displayTaskForm();
    }
})

export function insertProjectOptions(projects) {
    let container = document.getElementById('projectInput');
    container.innerHTML = '';

    projects.forEach(element => {
        let option = document.createElement('option');
        option.setAttribute('value', element.name);
        option.innerHTML = element.name;

        container.appendChild(option);
    });
}
