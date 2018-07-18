var realTimeApp = angular.module('rtc',['ui.router','ngMaterial']);
realTimeApp.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/registration');
    $stateProvider.state('registration',{
        url: '/registration',
        templateUrl: 'registration/registration.html',
        controller: 'registrationController',
    })
    .state('chatView',{
        url: '/chatView',
        templateUrl: 'chatView/chatView.html',
        controller: 'chatViewController',
        params: {
            username: ''
        }
    })
    .state('mapView',{
        url: '/mapView',
        templateUrl: 'mapview/mapView.html',
        controller: 'opportunityAddController',
    })
});
realTimeApp.$inject = ['$stateProvider', '$urlRouterProvider'];