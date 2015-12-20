var app = angular.module("mainApp", ["ngRoute", "contactModule"]);
app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/favoris', {
        templateUrl: 'views/favoris.html',
        controller: 'FavorisController'
    }).when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'ContactsController'
    }).when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsController'
    }).otherwise({redirectTo: '/contacts'})
}]);