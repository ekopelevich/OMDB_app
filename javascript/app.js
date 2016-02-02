var app = angular.module('omdbApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html'
    })
    .state('movies', {
      url: '/movies',
      templateUrl: 'partials/movies.html'
    })
    .state('cats', {
      url: '/cats',
      templateUrl: 'partials/cats.html'
    });
  });
