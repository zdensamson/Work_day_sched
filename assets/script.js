// when the day planner will start
var dayStartHour = 9;
// how many hours the day planner will generate
var hoursDisplayed = 14;
// an empty array to store saved and loaded time blocks in
schedArray = [];

// selects the div to hold all time blocks
var scheduleTable = $(".container");

// generate current date and push to header
var now = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(now);

// grabs array of saved (if any) time blocks
function loadTask() {
    sched = JSON.parse(localStorage.getItem("sched"));
    if (!sched) {
        // an empty array to store saved tasks
        schedArray = [];
        for(i=0 ; i<hoursDisplayed ; i++) {
            taskObj = {};
            taskObj[i] = "";
            schedArray.push(taskObj);
        };
            }
    else {
        schedArray = sched;
    }
};
loadTask();

// dynamically generate time blocks
for(i=0; i<hoursDisplayed; i++ ) {

    // div that will hold time blocks
    var timeBlockEl = $("<div>")
        .addClass("row time-block")
        .attr("id", i);

    // time blocks that will hold save-button, textarea, and time
    var hourEl = $("<div>")
        .addClass("col-1 hour")
        .text(moment().hour(dayStartHour+i).format("hA"));

    // grabs current time, generated time block time, and compares the two
    var hourCurrent = moment().hour();
    var hourGenerated = parseInt(moment().hour(dayStartHour+i).format("H"));
    var hourDiff = hourCurrent - hourGenerated;

    // textarea to accept user input
    var textEl = $("<textarea>").addClass("col-10 description textarea");
    
    // assigns color of text area based on current time
    if(hourDiff > 0){
        textEl.addClass("past");
    }
    else if(hourDiff == 0){
        textEl.addClass("present");
    }
    else {
        textEl.addClass("future");   
    }

    // assigns text area value from local storage
    textEl.val(schedArray[i][i]);

    // save button 
    var btnEl = $("<button>")
        .addClass("col-1 saveBtn");
    btnEl.text("Save")
    
    // appends all time blocks to the page
    timeBlockEl.append(hourEl, textEl, btnEl);
    scheduleTable.append(timeBlockEl);
};

// accepts the ID and USER INPUT TEXT of the timeblock whose save button was clicked
function saveTask(id, text) {
    var taskObj = {};
    taskObj[id] = text;
    schedArray.splice(id,1,taskObj);
    localStorage.setItem("sched", JSON.stringify(schedArray));
};

// task save button was clicked
$(".container").on("click", "button", function() {
    // get the id of the time block who's button was clicked
    var timeBlockSelected = $(this).closest("div.row");
    
    var timeBlockId = $(this).closest("div.row").attr("id");

    var enteredText = timeBlockSelected.children(".description")
        .val();
    saveTask(timeBlockId, enteredText);
});
