
// Great!! you've add documentation in your page
/*
* JavascriptToDo - Version 1.0 - Noah Freelove
*
* This app lets the user create a task and set a deadline.
* The time is updated every second and each task is checked to see if the deadline has been passed
* */

const doc = document;
class Task
{
    // you can create default value for pastDeadline and make it optional
    constructor(taskName, deadline, pastDeadline = null) {
        this.taskName = taskName;
        this.deadline = deadline;
        // you set a default vqlue for a variable by usig OR operator too
        //  this.pastDeadline = pastDeadline || null
        this.pastDeadline = pastDeadline;
    }
}

// Create a class to store tasks, you can name it TaskRepository

const tasks = [];

// It a naming convention, not mandatory but when using classes, start class name with capital letter 
// and function name with camelCase

function CheckDeadlines()
{
    let date;
    date = new Date();
    let deadlineChange = false;

    for (let i = 0; i < tasks.length; i++) {
        let hourMinute = [0,0]
        hourMinute = tasks[i].deadline.split(':')

        if(date.getHours() > hourMinute[0])
        {
            console.log(`past deadline task index: ${i}`)
            tasks[i].pastDeadline = true;
            deadlineChange = true;
        }
        else if (date.getHours() == hourMinute[0])
        {
            if(date.getMinutes()>= hourMinute[1])
            {
                console.log(`past deadline task index: ${i}`)
                tasks[i].pastDeadline = true;
                deadlineChange = true;
            }
            else {
                console.log(`not past deadline task index: ${i}`)
                tasks[i].pastDeadline = false;
            }
        }
        else {
            console.log(`not past deadline task index: ${i}`)
            tasks[i].pastDeadline = false;
        }
    }
    return deadlineChange;
}

function UpdateTime() {
    let date;
    date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()
    let d = date.getDay()
    let mo = date.getMonth()
    doc.getElementById('lastTimeUpdated').innerHTML =
        `<footer>Last time updated: ${mo}/${d} at ${h}:${m}:${s}</footer>`;
    if (CheckDeadlines()){
        RenderTasks();
        console.log("Rendered Tasks")
    }
}

function RenderTasks()
{
    let id = document.getElementById('tasks');
    let taskList = "";
    if(tasks.length == 0)
    {
        id.innerHTML = "<div>You have no tasks!</div>"
        return;
    }
    for (let i = 0; i < tasks.length; i++)
    {
        taskList += `<div>
        Task: ${tasks[i].taskName}<BR/>
        Deadline: ${tasks[i].deadline}<BR/>
        Past Deadline: ${tasks[i].pastDeadline ? "Yes" : "No"}
        </div><BR/>`;
    }
    taskList += `<button onclick="RemoveTasks()">Remove Past Deadline Tasks</button>`
    id.innerHTML = taskList;
}

function AddTask() {
    setInterval(UpdateTime , 1000)
    // It's better to remove logs from final code.
    console.log(tasks)

    // 1- for readability, try to decalre variable at the first of the function
    // 2- when number of parameters exceeds in one line, try to break each paramter in seprate line
    let tempTask = new Task(
        doc.getElementById('taskName').value, // sometimes adding a comment in front of parameters, helps readability 
        doc.getElementById('deadline').value
    );
    tasks.push(tempTask);
    UpdateTime();
    RenderTasks();
}

function RemoveTasks()
{
    for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].pastDeadline)
        {
            tasks.splice(i,1)
        }
    }
    RenderTasks();
}

// Create a class to compose all other classes together and have a method like render page to render whole page
// Create an init() function to initialize all your project
// you can create a file for each classes and import them in your main code and in there you initiate your application