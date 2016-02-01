var app = angular.module('omdbApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('movies', {
      templateUrl: 'partials/movies.html',
      controller: 'MoviesController'
    })
    .state('cats', {
      templateUrl: 'partials/cats.html',
      controller: 'CatsController'
    });
  });
