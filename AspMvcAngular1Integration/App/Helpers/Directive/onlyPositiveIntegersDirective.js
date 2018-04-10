mainAppWeb.directive('onlyPositiveIntegers', [
    function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attributes, ngModelCtrl) {
                attributes.$set('ngTrim', 'false');
                ngModelCtrl.$parsers.push(function (value) {
                    if (value == null || value === '') {
                        return '';
                    }
                    var transformedValue = value.replace(/[^0-9]/g, '');
                    var transformedValueInt = transformedValue;
                    if (transformedValueInt !== '') {
                        transformedValueInt = parseInt(transformedValue).toString();
                    }
                   
                    if (transformedValueInt !== value) {
                        ngModelCtrl.$setViewValue(transformedValueInt);
                        ngModelCtrl.$render();
                    }

                    return transformedValueInt;
                });
            }
        };
    }
]);