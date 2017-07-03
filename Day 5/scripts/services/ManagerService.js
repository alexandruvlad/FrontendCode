/**
 * Created by Alexandru.Vlad on 7/3/2017.
 */
hrApp.service('ManagerService',['$http','CommonResourcesFactory', function ($http, CommonResourcesFactory) {
    return {
        findAllManagers: function () {
            return $http.get(CommonResourcesFactory.findAllEmployeesUrl)
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}
    }
}]);