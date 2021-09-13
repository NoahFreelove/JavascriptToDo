function renderPage() // renders the page's html
{
    let id = document.getElementById('tasks'); // gets the id of the task section
    let taskList = ""; // stores working html in a string that can be added to the webpage later
    if(taskRepo.tasks.length == 0) // if you have no tasks, show you have no tasks
    {
        id.innerHTML = "<div>You have no tasks!</div>"
        return; // return to not go through the for loop
    }
    for (let i = 0; i < taskRepo.tasks.length; i++) // for loop creates a new task element for each task
    {
        taskList += `<div>
        Task: ${taskRepo.tasks[i].taskName}<BR/> 
        Deadline: ${taskRepo.tasks[i].deadline}<BR/>
        Past Deadline: ${taskRepo.tasks[i].pastDeadline ? "Yes" : "No"}
        </div><BR/>`;
    }
    // add button that lets you remove an expired task to the render queue
    taskList += `<button onclick="removeTasks()">Remove Past Deadline Tasks</button>`
    id.innerHTML = taskList; // render all the html stored in the taskList variable
}
