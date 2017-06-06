/**
 * 
 */
 
/* Listener auf Button click -> ruft danach eine getTask Methode auf welche den Mitarbeiter entferndt*/
/*
window.onload = function() {
    var claimButton = document.getElementById("remWorkerButton").addEventListener("click", getTask("worker"));
    var claimButton = document.getElementById("remWorkerButton1").addEventListener("click", getTask("worker1"));
    var claimButton = document.getElementById("remWorkerButton2").addEventListener("click", getTask("worker2"));
    var claimButton = document.getElementById("remWorkerButton3").addEventListener("click", getTask("worker3"));
}

function getTask(elementID) {
    document.getElementById(elementID).innerHTML = "kein Mitarbeiter zugew.";
}

function getTask1() {
    document.getElementById("remWorker1").innerHTML = "kein Mitarbeiter zugew.";
}

function getTask2() {
    document.getElementById("remWorker2").innerHTML = "kein Mitarbeiter zugew.";
}

function getTask3() {
    document.getElementById("remWorker3").innerHTML = "kein Mitarbeiter zugew.";
}
*/
window.onload = function() {
    var claimButton = document.getElementById("remWorkerButton").addEventListener("click", getTask);
    var claimButton = document.getElementById("remWorkerButton1").addEventListener("click", getTask1);
    var claimButton = document.getElementById("remWorkerButton2").addEventListener("click", getTask2);
    var claimButton = document.getElementById("remWorkerButton3").addEventListener("click", getTask3);
}

function getTask() {
    document.getElementById("worker").innerHTML = "kein Mitarbeiter zugew.";
}

function getTask1() {
    document.getElementById("worker1").innerHTML = "kein Mitarbeiter zugew.";
}

function getTask2() {
    document.getElementById("worker2").innerHTML = "kein Mitarbeiter zugew.";
}

function getTask3() {
    document.getElementById("worker3").innerHTML = "kein Mitarbeiter zugew.";
}