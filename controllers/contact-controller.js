var app = angular.module('contactModule', ["contactModuleService"]);
app.controller('ContactsController', function($scope, ContactService){
    
    $scope.contacts = ContactService.getAll();
    $scope.new = true;
    $scope.old = false;
    console.info($scope.contacts)
    
    $scope.addContact = function() {
        ContactService.add($scope.contact);
        $scope.contact = {};
    }
    
    $scope.updateContact = function() {
        ContactService.update($scope.contact);
        $scope.contact = {};
        $scope.new = true;
        $scope.old = false;
    }
    
    $scope.deleteContact = function(id) {
        ContactService.delete(id);
    }
    
    $scope.editContact = function (id) {
        $scope.contact = angular.copy(ContactService.get(id));
        $scope.new = false;
        $scope.old = true;   
    }
    
    /*$scope.search = function() {
        $scope.contacts = ContactService.searchContacts($scope.searchWord);
        console.info($scope.searchWord);
    };*/

});