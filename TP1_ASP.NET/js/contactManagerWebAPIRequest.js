/*
    Méthodes d'accès aux services Web API ContactsManager
 */

// Adresse temporaire du service API, une autre adresse sera fournie sous peu
const apiBaseURL= "https://stages.clg.qc.ca/Contacts/api/Contacts";
//const apiBaseURL= "http://localhost:54561/api/Contacts";

function webAPI_getContacts( successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'GET',
        data:{},
        success: contacts => {  successCallBack(contacts);
                                console.log("webAPI_getContacts - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContacts - error");
        }
    });
}

function webAPI_getContact( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + id,
        type: 'GET',
        data:{},
        success: contact => { successCallBack(contact); console.log("webAPI_getContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_getContact - error");
        }
    });
}

function webAPI_addContact( contact, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL,
        type: 'POST',
        data: contact,
        success: () => {successCallBack();  console.log("webAPI_addContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_addContact - error");
        }
    });
}

function webAPI_modifyContact( contact, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL + "/" + contact.Id,
        type: 'PUT',
        data: contact,
        success:() => {successCallBack();  console.log("webAPI_modifyContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_modifyContact - error");
        }
    });
}

function webAPI_deleteContact( id, successCallBack, errorCallBack) {
    $.ajax({
        url: apiBaseURL+"/" + id,
        type: 'DELETE',
        success:() => {successCallBack();  console.log("webAPI_deleteContact - success");},
        error: function(jqXHR, textStatus, errorThrown) {
            errorCallBack(errorThrown);
            console.log("webAPI_deleteContact - error");
        }
    });
}
