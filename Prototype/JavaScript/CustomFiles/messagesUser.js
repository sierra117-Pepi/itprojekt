window.onload = function () {
    var art = localStorage.getItem("art");
    var auftrag = localStorage.getItem("auftrag");
    if (auftrag != undefined || auftrag != null) {
        changeAuftragType(auftrag, art);
        localStorage.removeItem("art");
        localStorage.removeItem("auftrag");
    }
    addActionListeners();
}

function addActionListeners() {
    //Define action for btn-chat
    document.getElementById("btn-chat").addEventListener("click", function () {
        var message = document.getElementById("btn-input").value;
        var chat = document.getElementById("chat-div");
        addMessage(chat, message);
    });
}

function addMessage(chat, message) {

    //Create the entry for the caht list
    var li = document.createElement("li");
    li.setAttribute("class", "left clearfix");
    var span = document.createElement("span");
    span.setAttribute("class", "chat-img pull-left");
    var img = document.createElement("img");
    img.setAttribute("class", "img-circle");
    img.setAttribute("alt", "User Avatar");
    img.setAttribute("src", "http://placehold.it/50/55C1E7/fff");
    var divBody = document.createElement("div");
    divBody.setAttribute("class", "chat-body clearfix");
    var divHeader = document.createElement("div");
    divHeader.setAttribute("class", "header");
    var strong = document.createElement("strong");
    strong.setAttribute("class", "primary-font");
    strong.appendChild(document.createTextNode("TestUser"));
    var small = document.createElement("small");
    small.setAttribute("class", "pull-right text-muted");
    var i = document.createElement("i");
    i.setAttribute("class", "fa fa-clock-o fa-fw");
    var p = document.createElement("p");
    p.appendChild(document.createTextNode(message));
    //End create the entry for the caht list

    //Appen child elements
    small.appendChild(i);
    small.appendChild(document.createTextNode(" Vor 1 Sekunde"));
    divHeader.appendChild(strong);
    divHeader.appendChild(small);
    divBody.appendChild(divHeader);
    divBody.appendChild(p);
    span.appendChild(img);
    li.appendChild(span);
    li.appendChild(divBody);
    chat.appendChild(li);
    //End append child elements
}

function changeAuftragType(auftrag, art) {
    switch (auftrag) {
        case 'Auftrag1':
            document.getElementById("Art1").innerHTML = art;
            break;
        case 'Auftrag2':
            document.getElementById("Art2").innerHTML = art;
            break;
        case 'Auftrag3':
            document.getElementById("Art3").innerHTML = art;
            break;
        case 'Auftrag4':
            document.getElementById("Art4").innerHTML = art;
            break;
    }
}

function changeColour(btn) {
    switch (btn) {
        case 'btn1':
            document.getElementById("btn1").setAttribute("class", "btn btn-success btn-circle");
            break;
        case 'btn2':
            document.getElementById("btn2").setAttribute("class", "btn btn-success btn-circle");
            break;
        case 'btn3':
            document.getElementById("btn3").setAttribute("class", "btn btn-success btn-circle");
            break;
        case 'btn4':
            document.getElementById("btn4").setAttribute("class", "btn btn-success btn-circle");
            break;

    }
}
