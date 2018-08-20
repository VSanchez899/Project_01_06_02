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

function zeroPlaceHolder() {
    var addressBox = document.getElementById("addrinput");
    addressBox.style.color = "black";
    if (addressBox.value === "") {
        addressBox.value = "";
    }
}
/* restore placeholder text if box contains no user entry*/
function checkPlaceholder() {
    var addressBox = document.getElementById("addrinput");
    if (addressBox.value === "") {
        addressBox.style.color = "rgb(178,184,183)";
        addressBox.value = addressBox.placeholder;
    }
}
/*add placeholder text for browsers that dont suport placeholder attribute
*/
function generatePlaceholder() {
    if (!Modernizer.input.placeholder) {
        var addressBox = document.getElementById("addrinput");
        addressBox.value = addressBox.placeholder;
        addressBox.style.color = "rgb(178,184,183)";
        if (addressBox.addEventListener) {
            addressBox.addEventListener("focus", zeroPlaceHolder,false);

        }
        else if (addressBox.attachEvent){
            addressBox.attachEvent("onfocus", zeroPlaceHolder);
            addressBox.attachEvent("onblur", checkPlaceholder)
        }
    }
}

function setUpPage() {
    if (window.addEventListener) {
        window.addEventListener("submit", validateForm, false);
        } else if (window.attachEvent) {
        window.attachEvent("onsubmit", validateForm, false);
        }
        createEventListener();
        generatePlaceholder()

}
   
   //page load event handlers
if (window.addEventListener) {
    window.addEventListener("load", setUpPage);
  } else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
  }