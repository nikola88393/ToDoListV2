
let renderContent = (function () {
    const renderProject = (obj) => {
        let container = document.getElementById('projectsList');

        let projectContainer = document.createElement('div');
        projectContainer.classList.add('project');

        let title = document.createElement('p');
        title.innerHTML = obj.getName();
        title.addEventListener('click', () => {
            obj.handleEventClick();
        })

        let delBtn = document.createElement('button');
        delBtn.innerHTML = 'Delete project';

        projectContainer.appendChild(title)
        projectContainer.appendChild(delBtn);

        container.appendChild(projectContainer);
    }

    const renderTasks = (array) => {
        let container = document.getElementById('tasksList');
        container.innerHTML = '';

        array.forEach(element => {
            let task = document.createElement('li');
            task.classList.add('task');

            let title = document.createElement('p');
            title.innerHTML = element.name;

            let description = document.createElement('p');
            description.innerHTML = element.description;

            let dueDate = document.createElement('p');
            dueDate.innerHTML = element.dueDate;

            let status = document.createElement('p');
            status.innerHTML = element.finished;

            let statusChange = document.createElement('button');
            statusChange.innerHTML = 'Change status';

            let delBtn = document.createElement('button');
            delBtn.innerHTML = 'Delete Task';
            delBtn.addEventListener('click', () => {

            })

            task.appendChild(title);
            task.appendChild(description);
            task.appendChild(dueDate);
            task.appendChild(status);
            task.appendChild(statusChange);
            task.appendChild(delBtn);

            container.appendChild(task);
        });
    }

    return {
        renderProject,
        renderTasks
    }
})();

export default renderContent