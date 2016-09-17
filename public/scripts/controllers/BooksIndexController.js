angular.module('booksApp')
       .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  console.log('controller start');
  var vm = this;
  vm.books = [];
  // var vm.NewBook = {};
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(
    function indexCallback(response) {
      console.log('GET-success-cb', response);
      vm.books = response.data.books;
    },
    function errorCallback(response) {
      console.log('GET-error-cb', response);
  });
}
