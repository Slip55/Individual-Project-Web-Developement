/*
    Created by: Scott Lipchitz
    Date: 2/12/2020
*/

// Creates error message based on inputs in form
function checkForm(fn, ln, email, message) {
    if(email == "") //Email Errors
        document.getElementById("emailLabel").innerHTML = " Please Enter an Email";
    else{ //If email is not empty
        if(email.includes('@')){ //If email has the @ sign
            let emailsplit = email.split('@');
            let emailsplit2 = emailsplit[1].split('.');
            if(!email.includes('.')) //if email has no .
                document.getElementById("emailLabel").innerHTML = " Please Enter a Valid Email";
            else if(emailsplit[0] == "" || emailsplit2[0] == "" || emailsplit2[1] == "") //If email is empty before and after @ and .
                document.getElementById("emailLabel").innerHTML = " Please Enter a Valid Email";
            else //Email has no errors
                document.getElementById("emailLabel").innerHTML = "";
        }
        else
            document.getElementById("emailLabel").innerHTML = " Please Enter a Valid Email";
    }
    if(fn == "") //First Name Errors
        document.getElementById("fnameLabel").innerHTML = " Please Enter a First Name";
    else
        document.getElementById("fnameLabel").innerHTML = "";
    if(ln == "") //Last Name Errors
        document.getElementById("lnameLabel").innerHTML = " Please Enter a Last Name";
    else
        document.getElementById("lnameLabel").innerHTML = "";
    if(message == "") //Message Errors
        document.getElementById("messageLabel").innerHTML = " Please Enter a Message";
    else
        document.getElementById("messageLabel").innerHTML = "";
}