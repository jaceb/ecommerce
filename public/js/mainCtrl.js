angular.module('datApp').controller('mainCtrl', function($scope, service){
  var getProducts = function() {

      service.getProducts().then(function(response){
        $scope.productData = response;
      })

  }
  getProducts();
});
