var registrationController = function($scope,$state,$mdToast){
    $scope.regModel = {
       username :''
    };
    $scope.loginUser = function(){
       if($scope.regModel.username !== ''){
          $state.go('chatView',{username:$scope.regModel.username});
       }else{
        $mdToast.show($mdToast.simple().textContent('Please Enter Name'));
       }
    };
};
realTimeApp.controller('registrationController',registrationController);
registrationController.$inject = ['$scope','$state','$mdToast'];