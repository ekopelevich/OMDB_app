var app = angular.module('omdbApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('search', {
      url: '/',
      templateUrl: 'partials/search.html'
    })
    .state('details', {
      url: '/movies',
      templateUrl: 'partials/details.html'
    })
    .state('cats', {
      url: '/cats',
      templateUrl: 'partials/cats.html'
    });
  });
