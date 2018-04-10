mainAppWeb.directive('onlyPositiveNumbers', [
    function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function postLink(scope, element, attributes, ngModelCtrl) {
                attributes.$set('ngTrim', 'false');
                ngModelCtrl.$parsers.push(function (value) {
                    if (value == null) {
                        return '';
                    }

                    var transformedValue = value.replace(/[^0-9\.]/g, '');

                    var decimalCheck = transformedValue.split('.');
                    if (decimalCheck[1] != null) {
                        decimalCheck[1] = decimalCheck[1].slice(0, decimalCheck[1].length);
                        transformedValue = decimalCheck[0] + '.' + decimalCheck[1];
                    }

                    if (transformedValue !== value) {
                        ngModelCtrl.$setViewValue(transformedValue);
                        ngModelCtrl.$render();
                    }

                    return transformedValue;
                });
            }
        };
    }
]);