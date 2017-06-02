

window.onload = function(){
	addActionListeners();
}

function addActionListeners(){
	var editButton = document.getElementById("editButton").addEventListener("click",function(){
		
		openWindowEditTask();

		
		
	});
}

function openWindowEditTask(){
	window.open("../HTML/editUser.html");
}

