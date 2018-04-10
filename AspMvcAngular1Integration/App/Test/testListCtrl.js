mainAppWeb.controller('testListCtrl', ["$scope", 'testService', 'toasterService', '$window', '$filter',
    function ($scope, testService, toasterService, $window, filter) {
    "use strict";

    var ctrl = this;
    ctrl.status = {};
    ctrl.data = {};
    ctrl.actions = {};

   
    ctrl.data.current = {};
    ctrl.actions.init = init;
    ctrl.actions.getTestList = getTestList;
    

    function init(model) {
        ctrl.data.current = model;
    }

    function getTestList() {
        return serviceDCIService.getTestList().then(function (data) {
            ctrl.data.products = data;
        }, function (data) {
            console.dir("Error: " + data);
        });
    }
    function onSuccessSaving(result) {
        if (ctrl.data.isNew) {
            toasterService.success(NotificationMessages.successOnAdd);
        }
        else {
            toasterService.success(NotificationMessages.successOnModify);
        }
        window.location.href = ctrl.data.toList;
    }

    function onErrorSaving(data) {
        toasterService.showErrorFromResponse(data);
    }
}]);