$(document).ready(function() {
    $('#tasksTable').dataTable();
    var chatButton = document.getElementById("chatButton").addEventListener("click", getChat);
    var chatButton = document.getElementById("chatButton1").addEventListener("click", getChat);
    var chatButton = document.getElementById("chatButton2").addEventListener("click", getChat);
    var chatButton = document.getElementById("chatButton3").addEventListener("click", getChat);
});

function getChat() {
    window.open("../HTML/chatWorker.html");
}