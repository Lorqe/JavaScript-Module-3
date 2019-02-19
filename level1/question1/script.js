//Use RegEx to validate form

function checkEmpty() {
    
    // Grab form variables
    var nameEmp = document.forms["form1"]["firstName"].value.length;
    var lastNameEmp = document.forms["form1"]["lastName"].value.length;
    var phoneNumber = document.forms["form1"]["tel"].value;
    var email = document.forms["form1"]["email"].value;
    
    // Validators - email and phone
    var checkEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var checkNumber = /^\d+$/;
    
    // Check name fields
    if ( nameEmp == 0 && lastNameEmp == 0){
        alert("First Name and Last Name is empty, please enter your full name");
    } else if(nameEmp == 0) {
        alert("First Name is empty, please enter your name.");
        return false;
    } else if(lastNameEmp == 0) {
        alert("Last Name is empty, please enter your last name.");
        return false;
    }
    
    // Check phone number
    if(checkNumber.test(phoneNumber) === false) {
        alert("Your phone number is incorrect, please only enter digits");
        return false;
    }
    
    // Check email
    if(checkEmail.test(email) === false) {
        alert("Your email is incorrect. Please enter a new one.");
        return false;
    }
    
    return true;
}