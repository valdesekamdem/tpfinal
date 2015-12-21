var app = angular.module('contactModule', ["contactModuleService"]);
app.controller('ContactsController', function($scope, ContactService){
    
    $scope.contacts = [];
    $scope.new = true;
    $scope.old = false;
    console.info($scope.contacts)
    
    $scope.findAll = function() {
        ContactService.getAll().success(function(response){
            $scope.contacts = response;
        });
    }
    
    $scope.findAll();
    
    $scope.addContact = function() {
        ContactService.add($scope.contact).success(function(){
            $scope.findAll();
        });
        $scope.contact = {};
    }
    
    $scope.updateContact = function() {
       
        $scope.clear();
    }
    
    $scope.deleteContact = function(id) {
        
    }
    
    $scope.editContact = function (id) {
       
        $scope.new = false;
        $scope.old = true;   
    }
    
    $scope.search = function() {
       
        console.info($scope.searchWord);
    };
    
    $scope.clear = function() {
        $scope.contact = {};
        $scope.new = true;
        $scope.old = false;
    }

});