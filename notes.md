Player Score:
create a variable to assign the button choice to

create a function to set up the buttons
	create a variable to assign the button type to (document.querySelectorAll)
	
	loop through all buttons
		add the event listener for a mouse click to the button
		assign the button's id to the button choice variable
		call the function that logs the button selection to console and pass it the button choice variable
		
	create a function to log the button selection to console
	
call the main function that sets up the buttons


Example:
let buttonChoice;

function buttonSetup() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttonChoice = button.id;
            logButton(buttonChoice);
        });
    });

    function logButton() {
        console.log(buttonChoice);
    }
};

buttonSetup();


gameplay loop:
player score variable
computer score variable
player selection variable

Press messages button to start
	reset scores to 0
	display message telling player to choose
	
player selects a button
	attach an event listener to all buttons for a mouse click
	start the round when the user makes a selection
	store the user's selection
	
get the comp's selection (function should still work?)