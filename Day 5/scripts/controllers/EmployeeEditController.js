hrApp.controller('EmployeeEditController', ['$scope', '$http', '$routeParams', '$location', 'CommonResourcesFactory',
    'ManagerService','JobService','DepartmentService','EmployeeService',
    function ($scope, $http, $routeParams, $location, CommonResourcesFactory,ManagerService,JobService,DepartmentService,EmployeeService) {
        $scope.requiredErrorMessage = "Please fill out this form!";
        $scope.patternDateNotRespectedMessage = "The date format should be yyyy-mm-dd";
        $scope.patternCommisionNotRespectedMessage = "Commission should be in the format 0.XX";

        //TODO #HR5

        $scope.managers = [];
        $scope.jobs = [];
        $scope.departments = [];
        ManagerService.findAllManagers().then(
            function (response) {
                $scope.managers = response.data;

            },
            function (error) {

            }
        )

        JobService.findAllJobs().then(
            function (response) {
                $scope.jobs = response.data;

            },
            function (error) {

            }
        )

        DepartmentService.findAllDepartments().then(
            function (response) {
                $scope.departments = response.data;

            },
            function (error) {

            }
        )

        EmployeeService.findById($routeParams.employeeId).then(
            function (response) {
                $scope.employee = response.data;

            },
            function (error) {

            }
        )

        /**
         * Reset form
         */
        $scope.reset = function () {
            $scope.employee = {};
        };

        /**
         * Persist an employee
         * @param addEmployee - employee to be persisted
         */



        $scope.create = function () {
            $http({url: CommonResourcesFactory.editEmployeeUrl, method: 'PUT', data: $scope.employee})
                .success(function (data) {
                    $scope.employee = data;
                    $location.url('/employeeView/' + $scope.employee.employeeId);
                });
        };

        $scope.datePattern = /^\d{4}-\d{2}-\d{2}$/;
        $scope.commissionPattern =  /^[0]\.\d{1}(\d)?$/;

    }]);