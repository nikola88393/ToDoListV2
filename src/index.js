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
        renderContent.tasksAfterDeletingProject();
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
// let test = project('test123');
// renderContent.renderProject(test);
// test.setTask('taskForTest1', 'taskForTest1', 'taskForTest1');
// // test.getTask();
// let test2 = project('test2');
// test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
// test2.setTask('taskForTest22', 'taskForTest1', 'taskForTest1');
// test2.setTask('taskForTest222', 'taskForTest1', 'taskForTest1');
// // test2.getTask();
// renderContent.renderProject(test2);

setTimeout(() => {
    console.log(projectManager.getProjects());
}, 5000)
setTimeout(() => {
    console.log(projectManager.getProjects());
}, 10000)

// // renderContent.renderTasks(test.getTasks());
// // renderContent.renderTasks(test2.getTasks());
