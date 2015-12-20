var app = angular.module('contactModuleService', []);
app.factory('ContactService', function(){
    var contact = {};
    var uid = 1;
    var contacts = [];
    
    contact.add = function(contact) {
        // TODO communiquer avec le endpoint afin de créer un contact au backend.
        
        
        /*contact.id = ++uid;
        contacts.push(contact);*/
    }
    
    contact.update = function(contact) {
        // TODO envoyer le contact au endpoint afin de le mettre à jour.
        
        
        /*for(index in contacts) {
            if(contacts[index].id == contact.id){
                contacts[index] = contact;
            }
        }*/
    }
    
    contact.delete = function(id) {
        // TODO supprimer dans la base données "phone" le contact dont l'id correspond à celui passé en paramètre.
        
        
        /*for(index in contacts) {
            if(contacts[index].id == id){
                contacts.splice(index, 1);
            }
        }*/
    }
    
    contact.getAll = function() {
        // TODO: Lister tout les contacts de la BD.
        
        
        /*return contacts;*/
    }
    
    contact.get = function(id) {
        // TODO: récupérer le contact dont l'id correspond à celui passé en paramètre.
        
        
        /*for(index in contacts) {
            if(contacts[index].id == id) {
                return contacts[index];
            }
        }*/
    }
    
    
    /*Cette méthode est appelée à chaque fois que l'utilisateur change la valeur du formulaire de recherche*/
    contact.searchContacts = function(value) {
        // TODO: Retourner la liste des contacts dont le nom "est comme (like)" la valeur passée en paramètre. 
        
        
        /*var contactResult = [];
        for(index in contacts) {
            if(contacts[index].name.contains(value)){
                contactResult.push(contacts[index]);
            }
        }
        return contactResult;*/
    }
    
    return contact;
});
