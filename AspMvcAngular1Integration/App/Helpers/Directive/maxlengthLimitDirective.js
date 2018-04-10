mainAppWeb.directive('maxlengthLimit', [
    function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attributes, ngModelCtrl) {
                attributes.$set('ngTrim', 'false');
                var limitLength = parseInt(attributes.maxlengthLimit, 10);

                ngModelCtrl.$parsers.push(function (value) {
                    if (value.length > limitLength) {
                        value = value.substring(0, limitLength);
                        ngModelCtrl.$setViewValue(value);
                        ngModelCtrl.$render();
                    }
                    return value;
                });
            }
        };
    }
]);