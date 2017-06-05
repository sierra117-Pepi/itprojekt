window.onload = function () {
    addActionListeners();
}

function addActionListeners() {
    var editButton1 = document.getElementById("editButton1").addEventListener("click", function () {
        openWindowEditTask();
    });
    var editButton2 = document.getElementById("editButton2").addEventListener("click", function () {
        openWindowEditTask();
    });
    var editButton3 = document.getElementById("editButton3").addEventListener("click", function () {
        openWindowEditTask();
    });
    var editButton4 = document.getElementById("editButton4").addEventListener("click", function () {
        openWindowEditTask();
    });
}

function openWindowEditTask() {
    window.location.href = "editTask.html";
}
