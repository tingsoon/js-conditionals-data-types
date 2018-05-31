// ========================== Exercise 1 ==============================
// Prompt the user for 2 numbers, then console.log their difference.
// For example, if the user gives the numbers 2 and 3, the result should
// be 1. If the user gives the numbers 3 and 2, the result should still
// be 1.
//
// Hint: To get the user input and store it in a variable, we can do 
// `var someVar = prompt("Give me a high five");`. Consider asking for 1
// number at a time first.
// ====================================================================
// Write your solution below.
// ====================================================================
var numberOne = prompt("What is the first number?");

var numberTwo = prompt("What is the second number?");
 
numberOne = parseInt(numberOne);
numberTwo = parseInt(numberTwo);

var numberTotal = Math.abs(numberOne - numberTwo)

console.log ("The difference is " + numberTotal + ".")




// ========================== Exercise 2 ==============================
// Prompt the user for a number, then console.log its ordinal version.
// For example, if the user inputs 1, the result should be '1st'.
// If the user inputs 10, the result should be '10th'.
// If the user inputs 421, the result should be '421st'.
//
// Hint: There is a function that can return the character at a
// specified position in a string. Search Google / MDN for 'javascript
// string methods' if you need to.
// ====================================================================
// Write your solution below
// ====================================================================


var number = prompt("Please enter a number.")

for (i=0; i < number.length; i++) {
	if (number.charAt(i) === true); {
		continue;
	}
}

var lastChar = number.charAt(i-1);

var secondLastChar = number.charAt(i-2);

// if secondLastChar = 1, must put th.

number = parseInt(number);

if (secondLastChar == "1") {
	finalNumber = number + "th";
	console.log ("The result is " + finalNumber);
}

//if 2nd last char is not equals to 1, can continue.


 else if (lastChar == "1") {
	finalNumber = number + "st";
} else if (lastChar == "2") {
	finalNumber = number + "nd"
} else if (lastChar == "3") {
	finalNumber = number + "rd"
} else {
	finalNumber = number + "th"
}

console.log ("The result is " + finalNumber);








// ========================== Exercise 3 =================================
// Generate a random integer (hint: search Google or MDN) between 1 to 10.
// Prompt the user for an integer between 1 to 10, then let the user know
// whether his/her number matched the randomly generated one.
// =======================================================================
// Write your solution below.
// =======================================================================

var number = Math.floor((Math.random() * 10) + 1);

var numberGuess = prompt ("Pick a number from 1 to 10.");

numberGuess = parseInt(numberGuess);

if (number === numberGuess) {
	console.log("The numbers match!");
} else {
	console.log ("Please try again.")
}













// ========================== Exercise 4 ===============================
// Generate a random string of length 6 alphanumeric characters.
// E.g. a result might be "a5bxt1". Running it again might give "2bhdr3"
// Hint: Pseudocode this first, possibly starting from the end result.
// What information do you need to construct the string? How would you
// get that information? Can you store fixed information in a convenient
// place first?
//
// Bonus: Generate a random alphanumeric string of any specified length.
// =====================================================================
// Write your solution below.
// =====================================================================

var stringLength = 6;

function generateRandomString1(l) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charsLength = chars.length;
    var string = '';

  	for(var i=0; i<l; i++)
  		string += chars.charAt(Math.floor(Math.random() * charsLength));

  	return string;
}

generateRandomString1(stringLength)















// ========================== Exercise 5 ==============================
// Shuffle the elements of the given array below.
// E.g. running your code might produce [4, 1, 16, 8, 128, 2, 32, 64]
// once, and [128, 1, 2, 64, 16, 4, 8, 32] the next time.
// ====================================================================
// Write your solution below.
// ====================================================================

var testArray = [1, 2, 4, 8, 16, 32, 64, 128];




















// ========================== Exercise 6 ==============================
// Examine the phonebook below.
// 
// 1. Prompt the user for a name, and show
// (in any way, e.g. console.log) the phone number corresponding to 
// the given name. 
//
// 2. Prompt the user for a name and a number. Update the number
// corresponding to the name if the name exists in the phonebook.
//
// 3. Prompt the user for a name and a number. If the name and number
// do not already exist in the phonebook, insert it into the phonebook.
//
// 4. Prompt the user for a name. If the name exists in the phonebook,
// erase its record.
//
// Bonus: Prompt the user for a number. If the number exists in the
// phonebook, show the name corresponding to it.
// Hint: The phonebook is a JS Object. Search Google / MDN for 
// 'Javascript Object methods' to see if there might be something useful.
// ====================================================================
// Write your solution below.
// ====================================================================

var Phonebook = {
    "Jason"         :   91216599,
    "Amelie"        :   64239839,
    "Sing An"       :   85404834,
    "Ong Tng Kai"   :   94547788,
    "Nelson Tan"    :   63396565
};























// ====================== Bonus Exercise 7 =============================
// JS Array / Object Handling - References vs Values
// =====================================================================
// A common class of bugs that programmers face occurs when they change
// an object that they didn't mean to.
// 
// Examine the array below.
// Prompt the user for 2 integers. Swap the elements in the 2 positions
// of the array corresponding to the user input, and display the result.
// E.g. if the user enters 3 and 1, then display [3, 2, 1, 4, 5].
//
// Bonus: Do the same, but without changing the below array, i.e. if the
// user enters 3 and 1, display [3, 2, 1, 4, 5], but
// console.log(MutateMeNot) should still produce [1, 2, 3, 4, 5].
// =====================================================================
// Write your solution below.
// =====================================================================

var MutateMeNot = [1, 2, 3, 4, 5];












// console.log("The value of MutateMeNot is", MutateMeNot);
