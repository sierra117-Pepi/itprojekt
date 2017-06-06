var user = {
    name: "testUser",
    email: "test@user.com",
    password: "testuser"
};
var worker = {
    name: "testWorker",
    email: "test@worker.com",
    password: "testworker"
};

$(document).ready(function () {
    addActionListeners();
});

function addActionListeners() {
    var loginButton = document.getElementById("loginButton").addEventListener("click", function () {
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        if (user.email === email && user.password === password) {
            openWindowUser();
        } else if (worker.email === email && worker.password === password) {
            openWindowWorker();
        } else {
            alert("Invalid data!");
        }
    });
}

function openWindowUser() {
    window.location.href = "../HTML/UserSites/indexUser.html";
}

function openWindowWorker() {
    window.location.href = "../HTML/WorkerSites/indexWorker.html";
}
