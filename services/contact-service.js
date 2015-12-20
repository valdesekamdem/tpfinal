var app = angular.module('contactModuleService', []);
app.factory('ContactService', function(){
    var contact = {};
    var uid = 1;
    var contacts = [
        {
            "id": uid,
            "name": 'KKV',
            "phone": 111111111,
            "email": 'kkv@localhost.cm'
        },
        {
            "id": ++uid,
            "name": 'Father',
            "phone": 222222222,
            "email": "father@localhost.cm"
        }
    ];
    
    contact.add = function(contact) {
        contact.id = ++uid;
        contacts.push(contact);
    }
    
    contact.update = function(contact) {
        for(index in contacts) {
            if(contacts[index].id == contact.id){
                contacts[index] = contact;
            }
        }
    }
    
    contact.delete = function(id) {
        for(index in contacts) {
            if(contacts[index].id == id){
                contacts.splice(index, 1);
            }
        }
    }
    
    contact.getAll = function() {
        return contacts;
    }
    
    contact.get = function(id) {
        for(index in contacts) {
            if(contacts[index].id == id) {
                return contacts[index];
            }
        }
    }
    
    contact.searchContacts = function(value) {
        var contactResult = [];
        for(index in contacts) {
            /*if(contacts[index].name.contains(value)){
                contactResult.push(contacts[index]);
            }*/
        }
        return contactResult;
    }
    
    return contact;
});
