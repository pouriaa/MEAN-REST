angular.module('ItemCtrl', []).controller('ItemController', function($scope, $http) {

	$http.get('/api/items').success(function(items) {
        $scope.items = items;
    });

});