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

