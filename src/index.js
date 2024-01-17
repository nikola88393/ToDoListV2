import './style.css'
import renderContent from './renderContent';
import Project from './project';
import { saveTasks, saveProjects, loadProjects, loadTasks, clearStorage } from "./localStorage";


const projectManager = (function () {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const checkLocalStorage = () => {
        if (loadProjects()) {
            let obj = loadProjects();
            for (const property in obj) {
                addProject(obj[property]['name']);
            }
            renderProjects();
        }
    }

    const addProject = (name) => {
        let project = Project(name);
        projects.push(project);
        saveProjects(projects);
    }

    const deleteProject = (name) => {
        projects.forEach(project => {
            if (project.name === name) {
                projects = projects.filter(project => project.name !== name);
            }
        })
        saveProjects(projects);
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

    //doesn't work as intended
    const createDefaultSetting = () => {
        // addProject('Default1');
        // addProject('Default2');
        // addProject('Default3');
        // saveProjects(projects);
        checkLocalStorage();
        // renderProjects();
        // for (let i = 0; i < 3; i++) {
        //     projects[0].setTask(`Task${i}`, `Task${i}`, `Task${i}`);
        // }
    }

    return {
        createDefaultSetting,
        deleteProject,
        getProjects,
        checkLocalStorage
    }
})();
// projectManager.checkLocalStorage()
projectManager.createDefaultSetting();
// clearStorage()
console.log(projectManager.getProjects());

export default projectManager


setTimeout(() => {
    console.log(projectManager.getProjects());
}, 5000)
setTimeout(() => {
    console.log(projectManager.getProjects());
}, 10000)
