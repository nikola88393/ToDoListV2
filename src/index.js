import './style.css'
import renderContent from './renderContent';
import Project from './project';
import { saveTasks, saveProjects, loadProjects, loadTasks, clearStorage } from "./localStorage";


const projectManager = (function () {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (name, tasks) => {
        let project = Project(name);

        if (tasks !== undefined && tasks.length > 0) {
            tasks.forEach(element => {
                project.setTask(element['name'], element['description'], element['dueDate']);
            })
        }

        projects.push(project);

        saveProjects(projects);
        renderProjects();
    }

    const checkLocalStorage = () => {
        if (loadProjects()) {
            let obj = loadProjects();

            for (const property in obj) {
                addProject(obj[property]['name'], obj[property]['tasks']);
            }

            renderProjects();
        }
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

    const deleteTask = (name, project) => {
        projects.forEach(element => {
            if (element.name === project.name) {
                element.tasks = element.tasks.filter(task => task.name !== name);
            }
        })
    }

    const renderProjects = () => {
        renderContent.renderProject(projects);
    }

    const addProjectHandler = (name = `test${Math.floor(Math.random() * 100)}`) => {
        addProject(name);
        renderProjects();
    }

    const addProjectButton = document.getElementById('newProjectBtn');
    addProjectButton.addEventListener('click', () => {
        addProjectHandler();
    })

    //doesn't work as intended
    const createDefaultSetting = () => {
        // checkLocalStorage();
        addProject('Default1');
        addProject('Default2');
        // addProject('Default3');
        // saveProjects(projects);
        // checkLocalStorage();
        // renderProjects();
        // for (let i = 0; i < 3; i++) {
        //     projects[0].setTask(`Task${i}`, `Task${i}`, `Task${i}`);
        // }
    }

    return {
        createDefaultSetting,
        deleteProject,
        deleteTask,
        getProjects,
        checkLocalStorage
    }
})();

export default projectManager

projectManager.checkLocalStorage()
// projectManager.createDefaultSetting();
// clearStorage()
console.log(projectManager.getProjects());


//For testing
const clearStorageBtn = document.getElementById('clearStorage');

clearStorageBtn.addEventListener('click', clearStorage)
//For testing


// setTimeout(() => {
//     console.log(projectManager.getProjects());
// }, 5000)
// setTimeout(() => {
//     console.log(projectManager.getProjects());
// }, 10000)
