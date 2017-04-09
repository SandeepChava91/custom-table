var app = angular.module('CustomTable', []);
app.directive('customTable', function () {
    return {
        restrict: 'A',
        link: function () {
            $('tbody').scroll(function (e) { //detect a scroll event on the tbody
                $('thead').css("left", -$("tbody").scrollLeft()); //fix the thead relative to the body scrolling
                $('thead th:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first cell of the header
                $('tbody td:nth-child(1)').css("left", $("tbody").scrollLeft()); //fix the first column of tdbody
            });
        }
    }
});
app.factory('CustomTableDataService', function () {
    return {
        getData: function () {

            var tableData = [];

            for (i = 0; i < 20; i++) {
                var tempData = [];
                for (j = 0; j < 20; j++) {
                    tempData.push('item-' + i + '-' + j);
                }
                tableData.push(tempData);
            }

            return tableData;

        }
    }
});

app.controller('CustomTableController', ['$scope', 'CustomTableDataService', function ($scope, CustomTableDataService) {

    $scope.tableData = CustomTableDataService.getData();

}])