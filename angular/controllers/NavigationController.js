function NavigationController($scope, $location) {

    var navigation = [
        {
            url: '/',
            text: 'Main'
        },
        {
            url: '/test',
            text: 'Text'
        }
    ]

    var path = function() {
       return $location.path();
    };

    $scope.$watch(path, function(newVal, oldVal) {
        $scope.active = newVal;
    });

    $scope.navigation = navigation;

}
