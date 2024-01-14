import './style.css'
import project from './project';
import renderContent from './renderContent';

let test = project('test123');
renderContent.renderProject(test);
test.setTask('taskForTest1', 'taskForTest1', 'taskForTest1');
// test.getTask();
let test2 = project('test2');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
// test2.getTask();
renderContent.renderProject(test2);

setTimeout(() => {
    console.log(test2.getTasks());
}, 10000)

// renderContent.renderTasks(test.getTasks());
// renderContent.renderTasks(test2.getTasks());
