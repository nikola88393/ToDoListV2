import './style.css'
import renderContent from './renderContent';
import Project from './project';
import { saveProjects, loadProjects } from "./localStorage";
import { displayProjectForm } from './manageForms';


const projectManager = (function () {
    let projects = [];

    const getProjects = () => {
        return projects;
    }

    const addProject = (name, tasks) => {
        let project = Project(name);

        if (tasks !== undefined && tasks.length > 0) {
            tasks.forEach(element => {
                project.setTask(element['name'], element['description'], element['dueDate'], element['finished']);
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
                saveProjects(projects);
            }

        })
    }

    const changeTaskStatus = (project, name) => {
        projects.forEach(element => {
            if (element.name === project.name) {
                element.tasks.forEach(entry => {
                    if (entry.name === name) {
                        entry.changeStatus();
                        entry.finished = (entry.finished === false) ? true : false;
                        saveProjects(projects);
                    }
                })
            }
        })
    }

    const renderProjects = () => {
        renderContent.renderProject(projects);
    }

    const addProjectButton = document.getElementById('newProjectBtn');
    addProjectButton.addEventListener('click', () => {
        displayProjectForm();
    })

    return {
        addProject,
        renderProjects,
        deleteProject,
        deleteTask,
        getProjects,
        checkLocalStorage,
        changeTaskStatus
    }
})();

export default projectManager

projectManager.checkLocalStorage()
// projectManager.createDefaultSetting();
// clearStorage()
console.log(projectManager.getProjects());



//For testing


// setTimeout(() => {
//     console.log(projectManager.getProjects());
// }, 5000)
// setTimeout(() => {
//     console.log(projectManager.getProjects());
// }, 10000)
