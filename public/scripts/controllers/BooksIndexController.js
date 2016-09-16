angular.module('booksApp', [])
       .controller('BooksIndexController');

BooksIndexController.$inject = ['$http'];

function BooksIndexController ($http) {
  var vm = this;
  var vm.NewBook = {};
  $http({
    method: 'GET',
    url: '/books'
  }).then(function indexCallback(response) {
    console.log(response);
  }function errorCallback(response) {
    console.log(response);
  });

}
