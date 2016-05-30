angular.module('miniRouting').controller('productsCtrl', function ($scope, $stateParams, productService) {

var productData = $stateParams.id;

  if ($stateParams.id === 'shoes') {
    $scope.productData = productService.shoeData;
  } else if ($stateParams.id === 'socks') {
    $scope.productData = productService.sockData;
  }
});
