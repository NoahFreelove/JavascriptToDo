/*
* JavascriptToDo - Version 1.0 - Noah Freelove
*
* This app lets the user create a task and set a deadline.
* The time is updated every second and each task is checked to see if the deadline has been passed
* */

// Create a class to store tasks, you can name it TaskRepository
class TaskRepository{
    constructor(tasks) {
        this.tasks = tasks;
    }
}
const taskRepo = new TaskRepository(new Task)

function init()
{
    updateTime();
    setInterval(updateTime , 1000);
}


function updateTime() {
    let date;
    date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()
    let d = date.getDay()
    let mo = date.getMonth()
    document.getElementById('lastTimeUpdated').innerHTML =
        `<footer>Last time updated: ${mo}/${d} at ${h}:${m}:${s}</footer>`;
    if (checkDeadlines()){
        renderPage();
        console.log("Rendered Tasks")
    }
}



function addTask() {
    // It's better to remove logs from final code.
    console.log(taskRepo.tasks)

    // 1- for readability, try to decalre variable at the first of the function
    // 2- when number of parameters exceeds in one line, try to break each parameter in seprate line
    let tempTask = new Task(
        document.getElementById('taskName').value, // sometimes adding a comment in front of parameters, helps readability
        document.getElementById('deadline').value
    );
    taskRepo.tasks.push(tempTask);
    updateTime();
    renderPage();
}

function removeTasks()
{
    for (let i = 0; i < taskRepo.tasks.length; i++) {
        if(taskRepo.tasks[i].pastDeadline)
        {
            taskRepo.tasks.splice(i,1)
        }
    }
    renderPage();
}

// Create a class to compose all other classes together and have a method like render page to render whole page
// Create an init() function to initialize all your project
// you can create a file for each classes and import them in your main code and in there you initiate your application
