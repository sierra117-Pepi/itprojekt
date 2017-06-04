/**
 * 
 */
window.onload = function() {
    var claimButton = document.getElementById("claimButton").addEventListener("click", getTask);
}

function getTask() {
    document.getElementById("claimWorker").innerHTML = "Mitarbeiter1";
}