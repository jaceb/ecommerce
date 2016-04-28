angular.module('datApp', ['ui-router']).config(function($urlRouterProvider, $stateProvider){

  $stateProvider
  .state('user', {
    url:'/',
    controller: 'mainCtrl',
    templateUrl: '../routes/user.html'
  })
  $stateProvider
  .state('admin', {
    url:'/admin',
    controller: 'mainCtrl',
    templateUrl: '../routes/admin.html'
  })

});
