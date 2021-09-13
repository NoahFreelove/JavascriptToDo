function checkDeadlines() // this function checks the deadlines of each task
{
    let date;
    date = new Date(); // get current time
    // deadlineChange variable make sure that the page wont be unnecessarily rendered if there hasn't been a change
    let deadlineChange = false;

    // for loop goes through every task in the taskRepo and checks the hour and minute to see if its past the deadline
    for (let i = 0; i < taskRepo.tasks.length; i++) {
            let hourMinute = [0, 0] // hour minute splits the task's deadline into just an hour and minute
            hourMinute = taskRepo.tasks[i].deadline.split(':')

            if (date.getHours() > hourMinute[0]) { // if the current hour is past the deadline hour
                taskRepo.tasks[i].pastDeadline = true; // tell renderer to render it as expired
                deadlineChange = true;
                }
            else if (date.getHours() == hourMinute[0]) // if the current hour is equal to the deadline hour
            {
                if (date.getMinutes() >= hourMinute[1]) {// if the current minute is past the deadline minute
                    taskRepo.tasks[i].pastDeadline = true; // tell renderer to render it as expired
                    deadlineChange = true;
                }
                else // if the current minute is not past the deadline minute
                {
                    taskRepo.tasks[i].pastDeadline = false; // tell renderer to not render it as expired
                }
            }
            else // if the current hour is not past the deadline hour
            {
                taskRepo[i].pastDeadline = false; // tell renderer to not render it as expired
            }
    }
    return deadlineChange;
}
