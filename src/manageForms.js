import projectManager from ".";

export function displayProjectForm() {
    let form = document.getElementById('projectForm');
    form.style.display = (form.style.display === 'none') ? 'flex' : 'none';
}
export function getProjectFormData() {
    let title = document.getElementById('projectName').value;

    return {
        title
    }
}
const AddNewProjectBtn = document.getElementById('addProject');

AddNewProjectBtn.addEventListener('click', () => {
    let obj = getProjectFormData();

    projectManager.addProject(obj.title);
    projectManager.renderProjects();

    displayProjectForm();
    console.log(obj);
})

export function displayTaskForm() {
    let form = document.getElementById('taskForm');
    form.style.display = (form.style.display === 'none') ? 'flex' : 'none';
}
export function getTaskFormData() {
    let title = document.getElementById('taskName').value;
    let dueDate = document.getElementById('dueDate').value;
    let description = document.getElementById('taskDescription').value;

    document.getElementById('taskName').value = '';
    document.getElementById('dueDate').value = '';
    document.getElementById('taskDescription').value = '';

    return {
        title,
        dueDate,
        description
    }
}
