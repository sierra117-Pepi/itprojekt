window.onload = function () {
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
    strong.appendChild(document.createTextNode("TestAdmin"));
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

//Define PDF action
var pdf = new jsPDF();
var specialElementHandlers = {
    '#editor': function (element, renderer) {
        return true;
    }
};

document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById('pdf').onclick = function () {

        var options = {
            background: "#FFFFFF"
        };
        //pdf.addHTML (element, x, y, options, callback );
        pdf.addHTML(document.getElementById('content'), 15, 15, options, function () {
            pdf.save('chatVerlauf.pdf');
        });
    };
});
