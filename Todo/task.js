let taskList = [];

function addTask(task){
    taskList.push(task);
}

function displayTask(){
    console.log("Tasks: ", taskList.join(", "));
}

addTask("Complete coding exercise");
addTask("Read a programming article");

displayTask();

// Example: Web APIs
async function fetchTasks() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const tasks = await response.json();
    tasks.forEach(element => {
    const list = document.createElement('tr');
        list.innerHTML = `
           <td>${element.userId}</td>
           <td>${element.id}</td>
           <td style="text-align: start;">${element.title}</td>
           <td>${element.completed}</td>
        `
         document.getElementById('task-list').appendChild(list);
    });
  } catch (error) {
    console.error('Error fetching tasks:', error);
  }
}
// Fetch tasks
fetchTasks();
