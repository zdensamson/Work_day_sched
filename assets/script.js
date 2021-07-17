// when the day planner will start
var dayStartHour = 9;
// how many hours the day planner will generate
var hoursDisplayed = 14;

// selects the div to hold all time blocks
var scheduleTable = $(".container");

// generate current date and push to header
var now = moment().format("dddd, MMMM Do");
var currentDayEl = $("#currentDay").text(now);

// dynamically generate time blocks
for(i=0; i<hoursDisplayed; i++ ) {

    var timeBlockEl = $("<div>")
        .addClass("row time-block");

    var hourEl = $("<div>")
        .addClass("col-1 hour")
        .text(moment().hour(dayStartHour+i).format("hA"));

    var hourCurrent = moment().hour();
    var hourGenerated = parseInt(moment().hour(dayStartHour+i).format("H"));
    var hourDiff = hourCurrent - hourGenerated;

    if(hourDiff > 0){
        var textEl = $("<textarea>")
        .addClass("col-10 description")
        .addClass("past");
    }
    else if(hourDiff == 0){
        var textEl = $("<textarea>")
        .addClass("col-10 description")
        textEl.addClass("present");
    }
    else {
        var textEl = $("<textarea>")
        .addClass("col-10 description")
        textEl.addClass("future");   
    }

    var btnEl = $("<button>")
        .addClass("col-1 saveBtn");

    timeBlockEl.append(hourEl, textEl, btnEl);
    scheduleTable.append(timeBlockEl);
};
