/* public/Scripts/app.js - Chloe Baker - 301062067 - October 22, 2020 */
// IIFE - Immediately Invoked Function Expression
(function(){
    
    function Start()
    {
        console.log("App started...");

        //Deletion safeguard
        let delButtons = document.querySelectorAll('.btn-danger'); //find all of the delete buttons by their btn class
        for(button of delButtons) //foreach
        {
            button.addEventListener('click', (event) => { //on click, do the confirm event
                if (!confirm("Are you sure?")) //if they say no to are you sure
                {
                    event.preventDefault();
                    window.location.assign('/contacts-list'); //reload
                }
            }); 
        }
    }
    
    window.addEventListener("load", Start); //when the window finishes loading it will call the Start function
})();

// Sort the table showing the business_contacts database files
function sortTable() 
{
    let table, rows, switching, i, x, y, shouldSwitch; // declare variables
    table = document.getElementById("toSort"); // find the table
    switching = true;
    // Continues until no switch occurs
    while (switching) 
    {
        switching = false; // no switching done yet
        rows = table.rows; // list of rows
        // Loop through tr (except headers)
        for (i = 1; i < (rows.length - 1); i++) 
        {
            shouldSwitch = false; //assume you shouldn't switch
            x = rows[i].getElementsByTagName("TD")[0]; // get the first row to compare
            y = rows[i + 1].getElementsByTagName("TD")[0]; // get the second row to compare
            // Check if switching should be done
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) 
            {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) 
        {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); // make switch
            switching = true; // did switch
        }
    }
}