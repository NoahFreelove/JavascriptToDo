function checkDeadlines()
{
    let date;
    date = new Date();
    let deadlineChange = false;

    for (let i = 0; i < taskRepo.tasks.length; i++) {
        let hourMinute = [0,0]
        hourMinute = tasks[i].deadline.split(':')

        if(date.getHours() > hourMinute[0])
        {
            console.log(`past deadline task index: ${i}`)
            taskRepo.tasks[i].pastDeadline = true;
            deadlineChange = true;
        }
        else if (date.getHours() == hourMinute[0])
        {
            if(date.getMinutes()>= hourMinute[1])
            {
                console.log(`past deadline task index: ${i}`)
                taskRepo[i].pastDeadline = true;
                deadlineChange = true;
            }
            else {
                console.log(`not past deadline task index: ${i}`)
                taskRepo[i].pastDeadline = false;
            }
        }
        else {
            console.log(`not past deadline task index: ${i}`)
            taskRepo[i].pastDeadline = false;
        }
    }
    return deadlineChange;
}
