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
  })
  .when('/books/:id', {
    templateUrl: '/views/templates/book-show.html',
    controller: 'BookShowController',
    controllerAs: 'bookShowCtrl'
  });
  console.log('config-middle');
  $locationProvider
  .html5Mode({
    enabled: true,
    requireBase: false,
    rewriteLinks: true
  });
  console.log('config-exit');
}
