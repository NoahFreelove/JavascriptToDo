function addTask() // creates new tasks
{

    // create new task in preparation to be added to the task repo
    let tempTask = new Task(
        document.getElementById('taskName').value,
        document.getElementById('deadline').value
    );

    taskRepo.tasks.push(tempTask) // add the new task to the task repo
    renderPage(); // Render the page now that there is a new task
}

function removeTasks() // removes completed tasks
{
    for (let i = 0; i < taskRepo.tasks.length; i++) { // check each task to see if they have expired
        if(taskRepo.tasks[i].pastDeadline) // if they have, delete them
        {
            taskRepo.tasks.splice(i,1)
        }
    }
    renderPage(); // re-render the page to show results.
}
