var myApp = angular.module('myApp', ['ngSanitize']);

myApp.controller('mainController', ['$scope', '$timeout', function($scope, $timeout) {

    $scope.greeting = 'Hello ';
    $scope.name = 'Vistor 😏';
    $scope.message = '';
    $scope.emailbutton = '';
    $scope.githublink = '';

    $timeout(function() {

        $scope.name = '';
        $scope.greeting = '';
        $scope.message = 'How are you?';


        $timeout(function() {

            $scope.message = 'Hope your doing fine...';

            $timeout(function() {

                $scope.message = 'Please drop me a line...';

                $timeout(function() {
                    $scope.message = '...and let me know what you think...';

                    $timeout(function() {
                        $scope.message = '...of my first app in AngularJS?';

                        $timeout(function() {
                            $scope.message = "It's easy just send me an e-mail?";
                            $timeout(function() {
                                $scope.message = "Go ahead don't be shy! 🙊";
                                $timeout(function() {

                                    $scope.emailbutton = '<a href="mailto:khalilgharbaoui@hotmail.com?Subject=My%20toughts%20about%20your%20first%20AngularJS%20app" target="_top"><div class="btn btn-lg btn-success btn-block">send e-mail!</div></a>';
                                    $timeout(function() {

                                        $scope.githublink = '<br><p>Created with AngularJS 1.5.7 & Angular Sanitize</p><br><a href="https://github.com/khalilgharbaoui/angular-timeout-text" target="_top">GitHub Project</a>';

                                    }, 1500);
                                }, 1400);

                            }, 2200);
                        }, 2200);
                    }, 2500);
                }, 2500);

            }, 1900);

        }, 1500);

    }, 2000);
}]);
