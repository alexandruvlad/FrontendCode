/**
 * Created by Alexandru.Vlad on 7/3/2017.
 */
hrApp.controller('MainController', ['$scope', function ($scope) {

    $scope.title = 'HR Application';
    $scope.description = "Application for managing employees";

    $scope.descriptionShow = false;
    $scope.toggleDescriptionShow = function() {
        $scope.descriptionShow = !$scope.descriptionShow;
    };
}]);
