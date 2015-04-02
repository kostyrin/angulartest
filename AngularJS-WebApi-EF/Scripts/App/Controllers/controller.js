'use strict';
var storeApp = angular.module('storeApp', []);

storeApp.controller('ProductListCtrl', function ($scope, $http) {
    $scope.title = 'Products';

    $http.get('Products/products.json').success(function(data, status, headers, config) {
        console.log('data:', data, '\n status:', status, '\n headers:', headers, '\n config:', config);
    });

    var date = new Date();
    $scope.today = date;

    $scope.doneAndFilter = function(productItem) {
        return productItem.name && productItem.priority > 1 ;
    }

    $scope.sortField = 'name';
});