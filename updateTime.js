function updateTime() // updates the time and calls the checkDeadline() function to see if any tasks have expired
{
    // create date variables to display the time in HTML
    let date;
    date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds()
    let d = date.getDay()
    let mo = date.getMonth()

    // set html time text to the updated time
    document.getElementById('lastTimeUpdated').innerHTML =
        `<footer>
        Last time updated: ${mo}/${d} 
        at 
        ${h}:${m}:${s}</footer>`;

    if (checkDeadlines()){ // run the checkDeadlines() function. Returns true if tasks have expired
        renderPage(); // if tasks have expired, render the page.
        //console.log("Rendered Tasks")
    }
}
