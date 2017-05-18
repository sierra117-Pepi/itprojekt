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

window.onload = function(){
	addActionListeners();
}

function addActionListeners(){
	var loginButton = document.getElementById("loginButton").addEventListener("click",function(){
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;
		var ticked = document.getElementById("remember").checked;
		
		
		if(user.email === email && user.password === password){
			openWindowUser();
		} else if(worker.email === email && worker.password === password){
			openWindowWorker();
		} else {
			alert("Invalid data!");
		}
	});
}

function openWindowUser(){
	window.open("../HTML/indexUser.html");
}

function openWindowWorker(){
	window.open("../HTML/indexWorker.html");
}
