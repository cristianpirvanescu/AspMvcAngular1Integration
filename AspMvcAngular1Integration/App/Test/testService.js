mainAppWeb.service('testService',
    ["$http", "$q",
        function ($http, $q) {
            var _service = {};

            _service.getTestList = function () {
                var deferred = $q.defer();

                $http.get(URLs.apiGetTestList)
                    .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (data) {
                        deferred.reject(data);
                    });

                return deferred.promise;
            };



            _service.modify = function (entity) {
                var deferred = $q.defer();
                $http.defaults.headers.common['RequestVerificationToken'] = angular.element("ng-form").attr('ncg-request-verification-token');
                $http.post(URLs.apiTestModify, entity)
                    .then(function (result) {
                        deferred.resolve(result.data);
                    }, function (data) {
                        deferred.reject(data);
                    });

                return deferred.promise;
            };
            return _service;
        }]);