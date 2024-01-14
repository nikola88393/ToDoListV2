import './style.css'
import project from './project';
import renderContent from './renderContent';

let test = project('test123');
renderContent.renderProject(test.getName());
test.setTask('taskForTest1', 'taskForTest1', 'taskForTest1');
// test.getTask();
let test2 = project('test2');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
test2.setTask('taskForTest2', 'taskForTest1', 'taskForTest1');
// test2.getTask();
renderContent.renderProject(test2.getName());

renderContent.renderTasks(test.getTasks());
renderContent.renderTasks(test2.getTasks());
