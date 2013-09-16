function DeveloperController($scope, $http, $location) {

    $http.get('/developer/list', { cache: 'true' }).success(function(data) {
        $scope.developers = data;
    });

}
