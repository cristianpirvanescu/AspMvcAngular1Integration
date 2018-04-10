mainAppWeb.directive('onlyPhoneNumbers', [
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

                    var transformedValue = value.replace(/[^+0-9]/g, '');

                    var plusCheck = transformedValue.split('+');
                    if (plusCheck[1] != null) {
                        plusCheck[1] = plusCheck[1].slice(0, plusCheck[1].length);
                        transformedValue = plusCheck[0] + '+' + plusCheck[1];
                        if (plusCheck[0].length > 0) {
                            transformedValue = plusCheck[0];
                        }
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