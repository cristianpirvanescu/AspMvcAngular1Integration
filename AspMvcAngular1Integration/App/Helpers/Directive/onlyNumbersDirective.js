mainAppWeb.directive('onlyNumbers', [
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

                    var transformedValue = value.replace(/[^-0-9\.]/g, '');

                    var negativeCheck = transformedValue.split('-');
                    if (negativeCheck[1] != null) {
                        negativeCheck[1] = negativeCheck[1].slice(0, negativeCheck[1].length);
                        transformedValue = negativeCheck[0] + '-' + negativeCheck[1];
                        if (negativeCheck[0].length > 0) {
                            transformedValue = negativeCheck[0];
                        }
                    }

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