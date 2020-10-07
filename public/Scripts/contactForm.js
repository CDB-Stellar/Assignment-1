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