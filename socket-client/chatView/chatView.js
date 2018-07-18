var chatViewController = function($scope,$stateParams,$timeout){
    $scope.chatViewModel = {
        user:$stateParams.username,
        messageBody:'',
        sendTo:'',
        incomingMessages:[],
        onlineUsers:[]
    };
    var client = null;
    var startChatProcedures = function(){
        var connectTo = "http"+"Your Chat Server IP"+"Port on which Socket Connection is available";
        client = io.connect(connectTo, {transports: ['websocket']});
        client.emit("join", $scope.chatViewModel.user);
        client.on('message', function(message) {
            $timeout(function(){
              $scope.chatViewModel.incomingMessages.push(message);
            }); 
        });
        client.on("join",function(user){
            if(user.name !== $scope.chatViewModel.user){
                $timeout(function(){
                    $scope.chatViewModel.onlineUsers.push(user);
                }); 
            }
        });
    };
    startChatProcedures();
    $scope.sendMessage = function(){
        if($scope.chatViewModel.sendTo !== '' && $scope.chatViewModel.messageBody !== ''){
            var _chatMessageBody = {
                name:$scope.chatViewModel.user,
                chat:$scope.chatViewModel.messageBody,
                time:''+new Date(),
                sendTo:$scope.chatViewModel.sendTo
            }
            client.emit('message',_chatMessageBody);
        }
    };
};
realTimeApp.controller('chatViewController',chatViewController);
chatViewController.$inject = ['$scope','$stateParams','$timeout'];