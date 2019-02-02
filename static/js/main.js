var addToChat = function() {
    let input = document.getElementById("userInput").value;
    //console.log(input);
    let chat = document.getElementById("chat");
    chat.innerHTML += "<div class=\"ui-body ui-body-a ui-corner-all\">" + input + "<div>";
}