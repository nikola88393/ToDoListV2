import './style.css'
import renderContent from './renderContent';
import Project from './project';
import { saveProjects, loadProjects } from "./localStorage";
import { displayProjectForm, displayTaskForm, insertProjectOptions } from './manageForms';


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
        if (loadProjects() && loadProjects().length !== 0) {
            let obj = loadProjects();

            for (const property in obj) {
                addProject(obj[property]['name'], obj[property]['tasks']);
            }

            renderProjects();
        }

        else {
            let project = Project("Default");

            projects.push(project);
            saveProjects(projects);
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

    const handleAddTask = () => {
        let newTaskBtn = document.getElementById('newTaskBtn');
        newTaskBtn.addEventListener('click', () => {
            displayTaskForm();
            insertProjectOptions(projects)
        });
    }

    const findProjectByName = (name) => {
        return projects.find(element => element.name === name);
    }

    const findTaskByName = (name, project) => {
        project.findTaskByName(name);
    }

    return {
        addProject,
        renderProjects,
        deleteProject,
        deleteTask,
        getProjects,
        checkLocalStorage,
        changeTaskStatus,
        handleAddTask,
        findProjectByName,
        findTaskByName
    }
})();

export default projectManager

projectManager.checkLocalStorage();
projectManager.handleAddTask();
