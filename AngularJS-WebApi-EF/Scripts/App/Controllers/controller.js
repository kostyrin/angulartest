'use strict';
var storeApp = angular.module('storeApp', []);

storeApp.controller('ProductListCtrl', function ($scope) {
    $scope.title = 'Products';
    $scope.products = [
        { 'name': 'aromana a', 'descr': 'descr1', 'status':'true', 'priority': 1 },
        { 'name': 'bromana b', 'descr': 'descr2', 'status': 'true', 'priority': 2 },
        { 'name': 'cromana c', 'descr': 'descr3', 'status': 'true', 'priority': 3 }
    ];
    var date = new Date();
    $scope.today = date;

    $scope.doneAndFilter = function(productItem) {
        return productItem.name && productItem.priority > 1 ;
    }

    $scope.sortField = 'name';
});