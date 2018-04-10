var mainAppWeb = angular.module('mainAppWeb', [
    //"ui.bootstrap",
    "angular-loading-bar",
    "ngAnimate",
    "ngMessages",
    "toastr",
    'ui.select',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap'
    //'locationProvider'
]);

mainAppWeb.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);