app.controller('MainController', function($scope, $http){

  function Movie(poster, title, year){
    this.image = poster;
    this.title = title;
    this.year = year;
  }

  $scope.movieSearch = function(){
    $scope.movies = [];
    var movie;
    var response = $http.get('http://www.omdbapi.com/?s=' + $scope.search)
      .then(function successCallback(response){
        console.log(response);
        var movieData = response.data.Search;
        for (var i = 0; i < movieData.length; i++) {
          movie = new Movie(movieData[i].Poster, movieData[i].Title, movieData[i].Year);
          $scope.movies.push(movie);
        }
        console.log($scope.movies);
      }, function errorCallback(response) {
        console.error(response);
      });
  };
});
