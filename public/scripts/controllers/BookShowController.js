angular.module('booksApp')
       .controller('BookShowController', BookShowController);

BookShowController.$inject = ['$http', '$routeParams', '$location'];

function BookShowController ($http, $routeParams, $location) {
  console.log('book-show-controller start');
  var vm = this;
  bookId = $routeParams.id;
  vm.book = {};
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books/' + bookId
  }).then(
    function indexCallback(response) {
      console.log('book-show get success', response);
      vm.book = response.data;
    },
    function errorCallback(response) {
      console.log('book-show get error', response);
  });
}
