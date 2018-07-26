import openSocket from 'socket.io-client';

class SocketConn {
    constructor(){
        let client = null;
    }
    connect(onMessageReceive, onJoinEvent){
        this.client = openSocket("http://10.41.121.171:3000", {transports: ['websocket']});
        this.client.on("message",onMessageReceive);
        this.client.on("join",onJoinEvent);
    }
    sendMessage(LoggedInUser,MessageToSend,SendTo){
        this.client.emit('message',{
            name:LoggedInUser,
            chat:MessageToSend,
            time:''+new Date(),
            sendTo:SendTo
        });
    }
    sendJoinEvent(loggedInUser){
        this.client.emit("join",loggedInUser);
    }
}

export default SocketConn;