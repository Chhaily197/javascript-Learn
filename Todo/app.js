const taskList = document.querySelector('#taskList');
const taskInput = document.querySelector('#task').value;

function displayTask(){
    taskList.innerHTML = taskInput;
    taskList.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task;
        taskList.appendChild(listItem);
    });
}
