mainAppWeb.directive('templateSelector', function ($compile, $http) {

    var testTemplate1 = '<h1>Test1a</h1>';
    var testTemplate2 = '<h1>Test2a</h1>';
    var testTemplate3 = '<h1>Test3a</h1>';

    var getTemplate = function (contentType) {
        var template = '';

        switch (contentType) {
            case 'test1':
                //template = testTemplate1;
                template = '/Home/template/test1.tmp.cshtml'
                break;
            case 'test2':
                //template = testTemplate2;
                template = '/App/Home/templates/test2.tmp.html'
                break;
            case 'test3':
                //mplate = testTemplate3;
                template = '/App/Home/templates/test3.tmp.html'
                break;
        }

        return template;
    };

    var linker = function (scope, element, attrs) {
        console.dir(attrs.modell);
        console.dir(attrs.content);
        $http.get(getTemplate(attrs.content)) // immediately call to retrieve partial
       .success(function (data) {
           element.html(data);  // replace insides of this element with response
           $compile(element.contents())(scope);
       });

        //element.html(getTemplate(attrs.content));
        //$compile(element.contents())(scope);

    };

    return {
        restrict: "E",
        replace: true,
        link: linker,
        scope: {
            modell: '='
        }
    };
});
