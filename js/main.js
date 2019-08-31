///////////////////////////////////////////Declaration//////////////////////////////////////
// tableau qui stock les info cookie
let arrayContact = [];

// declare les variable du Dom
let buttonDisplayElt = $("#display");
let buttonRemoveElt = $("#remove");
let saveButtonElt = $("#button");
let listeUlElt = $("ul");
let liElts = $("li");

///////////////////////////////////////////function//////////////////////////////////////
// function clean les champs form
function removeContact() {
	$("#civis").val("");
	$("#firstName").val("");
	$("#lastName").val("");
	$("#phoneNumber").val("");
}

// ajoute l'élèment dans le formulaire
function addContact() {
	$("#civis").val() = arrayContact[this].civis;
	$("#firstName").val() = arrayContact[this].firstName;
	$("#lastName").val() = arrayContact[this].lastName;
	$("#phoneNumber").val() = arrayContact[this].phoneNumber;
}

// function qui crée et injecte des elements
function injectIt(lastName, firstName) {
	let aElt = $("<a>").text(`${lastName} ${firstName}`);
	aElt.attr("href", "#");
	aElt.on("click", editContact);
	let liElt = $("<li>");
	liElt.append(aElt);
	listeUlElt.append(liElt);
}

// édite l'élèment sélectionner 
function editContact() {
	for (liElts of li) {
		li.on("click", addContact());
	}
}

/////////////////////////////////////////// Code Principale ////////////////////////////////////
// au chargement de la page
$(document).on("DOMContentLoaded", () => {
	$("#formulaire").fadeOut();
	let contactCookie = window.localStorage.getItem("contact");
	if (contactCookie == null ) {
		return;
	}
	arrayContact = JSON.parse(contactCookie);
	for (let i = 0; i < arrayContact.length; i++) {
		injectIt(arrayContact[i].lastName, arrayContact[i].firstName);
	}

});

// action hiden formulaire
buttonDisplayElt.on("click", () => {
	$("#formulaire").fadeIn("slow");
});

// action efface les contact enregister
buttonRemoveElt.on("click", () => {
	listeUlElt.empty();
	removeContact();
	window.localStorage.removeItem("contact");
});

// action enregistre et save cookie
saveButtonElt.on("click", () => {
	let contact = {};
	contact.civis = $("#civis").val();
	contact.firstName = $("#firstName").val();
	contact.lastName = $("#lastName").val();
	contact.phoneNumber = $("#phoneNumber").val();
	arrayContact.push(contact);
	window.localStorage.setItem("contact", JSON.stringify(arrayContact));
	$("#formulaire").hide();
	injectIt(contact.lastName, contact.firstName);
	removeContact();
});





// let mynum = 30;
// let variable = $("<li></li>").text(`ceci est un test ${mynum}`);
// $("ul").append(variable);