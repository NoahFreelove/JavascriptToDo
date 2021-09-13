function renderPage()
{
    let id = document.getElementById('tasks');
    let taskList = "";
    if(taskRepo.tasks.length == 0)
    {
        id.innerHTML = "<div>You have no tasks!</div>"
        return;
    }
    for (let i = 0; i < taskRepo.tasks.length; i++)
    {
        taskList += `<div>
        Task: ${tasks[i].taskName}<BR/>
        Deadline: ${tasks[i].deadline}<BR/>
        Past Deadline: ${tasks[i].pastDeadline ? "Yes" : "No"}
        </div><BR/>`;
    }
    taskList += `<button onclick="removeTasks()">Remove Past Deadline Tasks</button>`
    id.innerHTML = taskList;
}
