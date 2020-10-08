/* app.js - Chloe Baker - 301062067 - October 8, 2020 */

// IIFE - Immediately Invoked Function Expression
(function(){
    function Start()
    {
        console.log("App started...");
    }
    window.addEventListener("load", Start); //when the window finishes loading it will call the Start function
})();

//Called when the form submit button is clicked
function getFormInfo() {
    //Get the form information
    let formInfo = document.getElementById("contactForm");
    
    //Display it to make sure it worked
    let text = "";
    let i;
    for (i = 0; i < formInfo.length; i++) 
    {
      text += formInfo.elements[i].value + "\n";
    }
    window.alert(text);
}