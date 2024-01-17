import './style.css'
import renderContent from './renderContent';
import Project from './project';

const projectManager = (function () {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (name) => {
        let project = Project(name);
        projects.push(project);
    }

    const deleteProject = (name) => {
        projects.forEach(project => {
            if (project.name === name) {
                projects = projects.filter(project => project.name !== name);
            }
        })
        renderProjects();
        renderContent.tasksAfterDeletingProject(name);
    }

    const renderProjects = () => {
        renderContent.renderProject(projects);
    }

    const addProjectHandler = (name = 'test') => {
        addProject(name);
        renderProjects();
    }

    const addProjectButton = document.getElementById('newProjectBtn');
    addProjectButton.addEventListener('click', () => {
        addProjectHandler();
    })

    const createDefaultSetting = () => {
        addProject('Default1');
        addProject('Default2');
        addProject('Default3');
        renderProjects();
        for (let i = 0; i < 3; i++) {
            projects[0].setTask(`Task${i}`, `Task${i}`, `Task${i}`);
        }
    }

    return {
        createDefaultSetting,
        deleteProject,
        getProjects
    }
})();

projectManager.createDefaultSetting();

export default projectManager


setTimeout(() => {
    console.log(projectManager.getProjects());
}, 5000)
setTimeout(() => {
    console.log(projectManager.getProjects());
}, 10000)
