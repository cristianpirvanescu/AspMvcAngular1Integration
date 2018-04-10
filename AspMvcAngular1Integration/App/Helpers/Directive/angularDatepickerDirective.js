mainAppWeb.directive('myDatepicker', function ($parse) {
    return function (scope, element, attrs, controller) {
        var ngModel = $parse(attrs.ngModel);
        $(function () {
            element.datepicker({
                changeYear: true,
                changeMonth: true,     
                yearRange: '2012:2025',
                dateFormat: 'mm-yy',
                onSelect: function (dateText, inst) {
                    scope.$apply(function (scope) {
                        // Change binded variable
                        ngModel.assign(scope, dateText);
                    });
                }
            });
        });


        //var ngModel = $parse(attrs.model);
        //var format = attrs.format;
        //var dateRange = attrs.yearRange;
        //var initialValue = ngModel(scope)
        //element.datepicker({
        //    //showOn: "both",
        //    changeYear: true,
        //    changeMonth: true,

        //    //maxDate: new Date(),
        //    yearRange: dateRange,
        //    dateFormat: format,
        //    onSelect: function (dateText, inst) {
        //        scope.$apply(function (scope) {
        //            // Change binded variable
        //            ngModel.assign(scope, dateText);
        //        });
        //    }
        //}).datepicker("setDate", initialValue);

        //scope.$watch(attrs.model, function () {
        //    element.datepicker("setDate", ngModel(scope))
        //});
    }
});
