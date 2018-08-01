import openSocket from 'socket.io-client';

class SocketConn {
    constructor(){}
    connect(onMessageReceive, onJoinEvent,onDisconnect){
        this.client = openSocket("http://192.168.8.104:3000", {transports: ['websocket']});
        this.client.on("message",onMessageReceive);
        this.client.on("join",onJoinEvent);
        this.client.on("userDisconnected",onDisconnect);
    }
    subscribeToLocationChanges(onLocationUpdateEvent){
        this.client.on("locationUpdates",onLocationUpdateEvent)
    }
    sendMessage(LoggedInUser,MessageToSend,SendTo){
        this.client.emit('message',{
            name:LoggedInUser,
            chat:MessageToSend,
            time:''+new Date(),
            sendTo:SendTo
        });
    }
    sendLocationUpdates(LoggedInUser,location){
        var locationPayload = {
            name:LoggedInUser,
            coordinates:{
                lat:location.latitude,
                lng:location.longitude
            }
        };
        this.client.emit('locationUpdates',locationPayload);
    }
    sendJoinEvent(loggedInUser){
        this.client.emit("join",loggedInUser);
    }
}

export default SocketConn;