/*
* JavascriptToDo - Version 1.0 - Noah Freelove
*
* This app lets the user create a task and set a deadline.
* The time is updated every second and each task is checked to see if the deadline has been passed
* */


// Creates a class to store tasks
class TaskRepository{
    constructor(importTasks = []) {
        this.tasks = importTasks;
    }
}
// Create new task repo
const taskRepo = new TaskRepository()

// first function ran in app
function init()
{
    updateTime(); // start tracking time
    setInterval(updateTime , 1000); // update time every second
}



// Create a class to compose all other classes together and have a method like render page to render whole page
