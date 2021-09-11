const doc = document;
class Task
{
    constructor(taskName, deadline, pastDeadline) {
        this.taskName = taskName;
        this.deadline = deadline;
        this.pastDeadline = pastDeadline;
    }
}

const tasks = [];

function CheckDeadlines()
{
    let date;
    date = new Date();

    for (let i = 0; i < tasks.length; i++) {
        let hourMinute = [0,0]
        hourMinute = tasks[i].deadline.split(':')

        if(date.getHours() > hourMinute[0])
        {
            console.log(`past deadline task index: ${i}`)
            tasks[i].pastDeadline = true;
        }
        else if (date.getHours() == hourMinute[0])
        {
            if(date.getMinutes()>= hourMinute[1])
            {
                console.log(`past deadline task index: ${i}`)
                tasks[i].pastDeadline = true;
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
}

function UpdateTime()
{
    let date;
    date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()
    let d = date.getDay()
    let mo = date.getMonth()
    doc.getElementById('lastTimeUpdated').innerHTML =
        `<footer>Last time updated: ${mo}/${d} at ${h}:${m}:${s}</footer>`;
    CheckDeadlines();
    RenderTasks();
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
    id.innerHTML = taskList;
}
function AddTask() {
    console.log(tasks)
    let tempTask = new Task
    (doc.getElementById('taskName').value, doc.getElementById('deadline').value);
    tasks.push(tempTask);
    UpdateTime();
    RenderTasks();
}
