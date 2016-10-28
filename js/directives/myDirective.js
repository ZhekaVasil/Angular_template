app.directive('myDirective', function(){
    return {
        restrict : 'E',
        scope : {
            test : '='
        },
        templateUrl : 'js/directives/myDirective.html'
    };
});
