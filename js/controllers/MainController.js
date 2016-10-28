app.controller('MyController', ['$scope', 'MyService', function ($scope, $MyService) {
    $scope.x = 999;
    $scope.data = $MyService;

}]);