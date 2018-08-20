    /*
      Project 01_06_01

      Author: 
      Date:   

      Filename: index.html
   */

   "use strict"
   var formValidity = true;



//function for form validation
function validateForm(evt) {
    //prevent from default behavior
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    validateRequired();

    if (formValidity === true) { // form is valid
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    
      } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated problems and then resubmit.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
      }
}
//this checks the validation of the required fields
function validateRequired() {
    var inputElements = document.querySelectorAll("#contactinfo" + " input");
    var fieldsetValidity = true;
    var currentElement;

//this will loop through the input fields to check validation
    try {
        for (var i = 0; i < inputElements.length; i++) {
            currentElement = inputElements[i];
            if (currentElement.value === "") {
                currentElement.style.background = "rgb(255,233,233)";
                formValidity = false;
            }
            else{
                currentElement.style.background = "white";
            }
        }
    } catch (error) {

    }
}

function setUpPage() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
        } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm, false);
        }
}
   
   //page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage);
  } else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
  }