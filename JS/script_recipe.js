
/**                 ---- RECIPE_POP-UP_MODAL_SECTION ----
 * Setting up the variables that target the recipe 
 * and the close buttons (close-btn)
 */

// Sets up the button that will open the recipe-modal
var btns = document.querySelectorAll( "input.modal-button" );

/**
 * Defines all modals for each recipe: The modals variable will contain
 * any HTML element that contains the modal-recipe class
 */
var modals = document.querySelectorAll( ".recipe-modal" );

// The "<span>" element that closes the "modal"
var closeBtn = document.getElementsByClassName( "close-btn" );

// When the user clicks the recipe button. Open the modal.
for ( var i = 0; i < btns.length; i++ )
{
    btns[ i ].onclick = function ( )
    {
        for ( var index in modals )
        {
            if ( modals[ index ].style )
            {
                modals[ index ].style.display = "block";
            }
        }
    }
}

// TIME_OUT
/*setTimeout(function () {
    for (var index in modals) {
        if (modals[index].style) {
            modals[index].style.display = "none";
        }
    }
}, 10000);*/



/**                 ---- <SPAN> ----
 * When the user clicks on <span> (x), close the modal
 */
for ( var i = 0; i < closeBtn.length; i++ )
{
    closeBtn[ i ].onclick = function ()
    {
        for ( var index in modals )
        {
            if ( modals[ index ].style )
            {
                modals[ index ].style.display = "none";
            }
        }
    }
}



/**                 ---- EMAIL_VALIDATION ----
 * This tagets the elemnt that contains the ID "contactForm"
 * 
 *              ---- EVENT ----
 * NOTE: The "event" argument being passed to the function is an 
 * object that contains information about the event trigger. Here
 * the trigger would be the user clicking the "submit" button                  
 */            
document.getElementById( 'contactForm' ).addEventListener( 'submit', 
    function ( event ) 
        {
            /**
             * Overrides the default browser refresh when the submit 
             * button is pressed
             */
            event.preventDefault();

            // Variables validate that each field is filled-out
            const firstName = document.getElementById( 'firstName' ).value;
            const lastName = document.getElementById( 'lastName' ).value;
            const email = document.getElementById( 'email' ).value;
            const phone = document.getElementById( 'phone' ).value;
            const message = document.getElementById( 'message' ).value;


            /**
             * Email pattern checks for all the symbols that would be 
             * needed for an email address such as the "@", the ".", and
             * the "text", that would come before, between, and after
             */
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{ 2,4 }$/;
        

            /**
             * This variable is used to display messages if the 
             * corresponding fields are filled-out and a "Thank
             * You", message is displayed
             */
            const valMsg = document.getElementById( 'validateMsg' );
            
            /**
             * This conditional statement (if). Checks if all the "form"
             * fields have been filled-out. If they haven't the message
             * within the "curly brackets" will display
             */
            if ( !firstName || !lastName || !phone || !message )
            {
                valMsg.innerHTML = '<p style="color: red;">Please Fill-out all Empty Fields!</p>';
            }
            /**
             * The "else if", conditional statement checks if the "email address"
             * provided follows the email address pattern by using the "test" 
             * method. The "test" method checks for a match in the String. The 
             * "Not" operator is applied before the email pattern variable meaning
             * that if the email input does not match the pattern. The message 
             * within the "else if" curly brackets will display: Prompting to 
             * enter a valid email.
             */
            else if ( !emailPattern.test( email ) )
            {
            // Check if there is a valid email
                valMsg.innerHTML = '<p style="color: red;">Please Enter a Valid Email!</p>';
            }
            /**
             * Finaly. If both conditions have been satisfied, and the of code
             * executes successfully. Then, the "thank you" within the "else"
             * curly brace will display.
             */
            else
            {
                /**
                 * If all required fields are displayed correctly a "Thank you" 
                 * message will display
                 */
                valMsg.innerHTML = '<p style="color: red;">Thank You for Submitting!</p>';
            }

            /**
             * Here I am using the variables I crated earlier to capture the form
             * input field values to create an object literal to hold all of the 
             * data. 
             * Subscribe is added with hte element id "subscription".
             * The "checked" property is used to verify if the checked box has been
             * clicked. This will return a "true" or "false" value.
             */
            const formData = 
            {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                message: message,
                subscribe: document.getElementById( 'subcription' ).checked
            };


            /**                 ---- CONSOLE.LOG() ----
             * The "console.log" method will allow me to dispay the user's input 
             * from the form in the console.
             * NOTE: JSON, is short for "JavaScript Object Notation" 
             */
            console.log( JSON.stringify( formData ) );

        }
)