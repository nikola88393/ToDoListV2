import projectManager from ".";

export function displayProjectForm() {
    let form = document.getElementById('projectForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
    let formMessage = document.getElementById('projectFormMessage');
    formMessage.innerHTML = '';
}
export function getProjectFormData() {
    let title = document.getElementById('projectName').value;

    document.getElementById('projectName').value = '';

    if (projectManager.findProjectByName(title) === undefined) {
        return {
            title
        }
    }
    else {
        let formMessage = document.getElementById('projectFormMessage');
        formMessage.innerHTML = 'Project already exists!';
        return undefined;
    }

}
const AddNewProjectBtn = document.getElementById('addProject');

AddNewProjectBtn.addEventListener('click', () => {
    let obj = getProjectFormData();
    if (obj !== undefined) {
        if (obj.title) {
            projectManager.addProject(obj.title);
            projectManager.renderProjects();

            displayProjectForm();
        }
    }
})

export function displayTaskForm() {
    let form = document.getElementById('taskForm');
    form.style.display = (getComputedStyle(form).display === 'none') ? 'flex' : 'none';
    let formMessage = document.getElementById('taskFormMessage');
    formMessage.innerHTML = '';
}

export function getTaskFormData() {
    let title = document.getElementById('taskName').value;
    let dueDate = document.getElementById('dueDate').value;
    let description = document.getElementById('taskDescription').value;
    let project = document.getElementById('projectInput').value;
    let projectObj = projectManager.findProjectByName(project);

    if (projectObj.findTaskByName(title) === undefined) {
        document.getElementById('taskName').value = '';
        document.getElementById('dueDate').value = '';
        document.getElementById('taskDescription').value = '';
        return {
            title,
            description,
            dueDate,
            project
        }
    }

    else {
        let formMessage = document.getElementById('taskFormMessage');
        formMessage.innerHTML = `Task '${title}' already exists!`;
        return undefined;
    }

}

const addTaskBtn = document.getElementById('addTask');
addTaskBtn.addEventListener('click', () => {
    let data = getTaskFormData();

    if (data !== undefined) {
        let { title, dueDate, description, project } = data;
        let obj = projectManager.findProjectByName(project);
        if (title && dueDate && description) {
            obj.setTask(title, description, dueDate);
            obj.refreshTasks();

            displayTaskForm();
        }
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
