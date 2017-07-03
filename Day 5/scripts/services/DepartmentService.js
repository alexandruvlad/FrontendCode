/**
 * Created by Alexandru.Vlad on 7/3/2017.
 */
hrApp.service('DepartmentService', ['$http', 'CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        findAllDepartments: function () {
            return $http.get(CommonResourcesFactory.findAllDepartmentsUrl)
                .success(function (data) {
                    return data;
                })
                .error(function (err) {
                    return err;
                });
        }
    }
}]);