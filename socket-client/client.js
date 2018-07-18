$("#register").click(function(){
    startChatProcedures(document.getElementById("userName").value);
});

function startChatProcedures(userName){
    var chatServerIP = ""; //Your Chat Server IP
    var port = "" //The Port on which Socket Connection is Open
    var client = io.connect('http://'+chatServerIP+':'+port+'', {transports: ['websocket']});
    client.emit("join", userName);
    $('#send').click(function () {
        var _chatMessageBody = {
            name:userName,
            chat:document.getElementById("chatText").value,
            time:''+new Date(),
            sendTo:document.getElementById("sendTo").value
        }
        client.emit('message',_chatMessageBody);
    });

    client.on('message', function(message) {
       var messageToBDisplayed = "<li>"+
          "<span>From : "+message.name+"</span><br>"+
          "<span>Message : "+message.chat+"</span><br>"+
          "<span>Time : "+message.time+"</span><br>"+
       "</li>" 
       $("#chatMessagesList").append(messageToBDisplayed);
    })
}