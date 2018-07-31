import openSocket from 'socket.io-client';

class SocketConn {
    constructor(){}
    connect(onMessageReceive, onJoinEvent,onDisconnect){
        this.client = openSocket("http://192.168.8.103:3000", {transports: ['websocket']});
        this.client.on("message",onMessageReceive);
        this.client.on("join",onJoinEvent);
        this.client.on("userDisconnected",onDisconnect);
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