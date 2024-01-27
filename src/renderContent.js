import projectManager from ".";

let renderContent = (function () {
    const renderProject = (array) => {
        let container = document.getElementById('projectsList');
        container.innerHTML = '';

        array.forEach(element => {
            let projectContainer = document.createElement('div');
            projectContainer.classList.add('project');

            let title = document.createElement('p');
            title.innerHTML = "Title: " + element.name;
            title.addEventListener('click', () => {
                renderTasks(element.getTasks(), element);
            })

            let delBtn = document.createElement('button');
            delBtn.innerHTML = 'Delete project';
            delBtn.addEventListener('click', () => {
                projectManager.deleteProject(element.name);
            })

            projectContainer.appendChild(title)
            projectContainer.appendChild(delBtn);

            container.appendChild(projectContainer);
        })

    }

    const renderTasks = (array, project) => {

        let container = document.getElementById('tasksContainer');
        container.innerHTML = '';

        let tasksContainer = document.createElement('ul');
        tasksContainer.id = 'tasksList';

        if (array.length != 0) {
            array.forEach(element => {
                let task = document.createElement('li');
                task.classList.add('task');

                let title = document.createElement('p');
                title.innerHTML = "Title: " + element.name;

                let description = document.createElement('p');
                description.innerHTML = "Description: " + element.description;
                console.log(element.description);

                let dueDate = document.createElement('p');
                dueDate.innerHTML = "Due date: " + element.dueDate;
                console.log(element.dueDate);

                let status = document.createElement('p');
                status.innerHTML = "Status: " + ((element.getStatus() === true) ? 'finished' : 'not finished');

                let statusChange = document.createElement('button');
                statusChange.innerHTML = 'Change status';
                statusChange.addEventListener('click', () => {
                    projectManager.changeTaskStatus(project, element.name);
                    status.innerHTML = "Status: " + ((element.getStatus() === true) ? 'finished' : 'not finished');
                });

                let delBtn = document.createElement('button');
                delBtn.innerHTML = 'Delete Task';
                delBtn.addEventListener('click', () => {
                    project.deleteTask(element.name);

                })

                task.appendChild(title);
                task.appendChild(description);
                task.appendChild(dueDate);
                task.appendChild(status);
                task.appendChild(statusChange);
                task.appendChild(delBtn);

                tasksContainer.appendChild(task);
            });

        }

        else {
            let p = document.createElement('p');
            p.innerHTML = 'No tasks found. Click "Add new task".';

            tasksContainer.appendChild(p);
        }

        container.appendChild(tasksContainer);
    }

    const tasksAfterDeletingProject = (name) => {
        let container = document.getElementById('tasksContainer');
        container.innerHTML = '';

        let p = document.createElement('p');
        p.innerHTML = `Project ${name} deleted. Select another to make changes or view tasks.`;

        container.appendChild(p);
    }

    return {
        renderProject,
        renderTasks,
        tasksAfterDeletingProject
    }
})();

export default renderContent