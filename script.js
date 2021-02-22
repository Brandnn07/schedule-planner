var tasksInput = document.querySelector("Tasks");
var savedInput = localStorage.getItem("tasks");
var tasksSpan = document.querySelector("#hour");
var today = moment();
$("#currentDay").text(today.format("MMMM Do YYYY, h:mm:ss a"));
var presentTime = moment().hour();

function loadTasks() {
    tasksSpan.textContent = savedInput
}
for (var i = 9; i < 18  ; i++) {
    if (presentTime > i) {
        $("#hour" + i).addClass("past");
    } else if (presentTime === i) {
        $("#hour" + i).addClass("present");
    } else {
        $("#hour" + i).addClass("future");
    }
}
var textarea = document.querySelector("textarea");

$(".saveBtn").click(function(event) {
    event.preventDefault
    input = $("textarea").val;
    localStorage.setItem("tasks", JSON.stringify(tasksInput));
});