angular.module('booksApp', ['ngRoute'])
       .config(config);

config.$inject = ['$routeProvider', '$locationProvider'];
function config ($routeProvider, $locationProvider) {
  // console.log('config-enter');
  $routeProvider
  .when('/', {
    templateUrl: '/views/templates/books.html',
    controller: 'BooksIndexController',
    controllerAs: 'booksIndexCtrl'
  });
  // console.log('config-middle');
  /*
  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false
  });
  */
  // console.log('config-exit');
}
