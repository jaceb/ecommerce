angular.module('datApp').service('datService', function($http){
  this.getProduct = function(){
    return $http({
      method:'GET',
      url: "localhost:4000/api/products"
    }).then(function(response){
      console.log(response);
      return response.products;
    })
  }
})
