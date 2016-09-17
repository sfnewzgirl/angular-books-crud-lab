angular.module('booksApp')
       .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  // var vm.NewBook = {};
  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function indexCallback(response) {
    console.log(response);
  }, function errorCallback(response) {
    console.log(response);
  });

}
