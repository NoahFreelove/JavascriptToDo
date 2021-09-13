class Task // task class is an object class that holds the relevant information to create a task
{
    // default constructor
    constructor(taskName, deadline, pastDeadline = null) {
        this.taskName = taskName;
        this.deadline = deadline;
        this.pastDeadline = pastDeadline || null;
    }
}

