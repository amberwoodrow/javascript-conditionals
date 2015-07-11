// Lots of comments for you and me!
// I made global variables so I could present a message at the bottom with the stored info.
var phoneNumber;
var birthDay;
var postalCode;
var stateAbbrev;
var married;

// I chose 'do while loops' because I used them in C++ and really liked them they allow you
// to run code at least once before breaking out of the while loop.

// I used regexes because it is the best way I've found to validate info in a specific way
// and get it how you want without a giant line of code. I also got to use them in Rails to
// validate emails before allowing them to go to the database.
// resources I used:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
// and
// https://regex101.com/
// For each one I just broke down get piece of info to get pieces of a regex that worked then
// stuck the regex together.

// PHONE NUMBER REGEX:
// I just broke down the phone number into pieces to create the regex starting with
// the 3 numbers, then the dash, then repeated the pattern for the rest of the number.
// I realized after matching the phone number though that
// I could add numbers and letters to the end of the string so I found ^ and $ to fix the issue.
// /regex/ start and end regexes.
// ^ starts at the beginning of the string
// \d is for digit
// {n} how many times to check for digit.
// - matches the dash
// $ ends the match
do {
  phoneNumber = prompt("Please enter a valid ten digit phone number in this format 234-567-1234.");
} while (!phoneNumber.match(/^\d{3}-\d{3}-\d{4}$/));
alert("The phone number you entered was correct!");

// "\/" matches "/". Unlike "-" you can't just put a forward slash in a regex
// to match it so I googled regex match forward slash and found "\/".
do {
  birthDay = prompt("Please enter your date of birth so that it matches this format 01/23/4567.");
} while (!birthDay.match(/^\d{2}\/\d{2}\/\d{4}$/));
alert("the birthday you entered was correct!");

// | is like the ||/or operator
do {
  postalCode = prompt("Please enter your postal code");
  console.log(postalCode);
} while (!postalCode.match(/^\d{5}$|^\d{5}-\d{4}$/));
alert("You entered the correct postal code!");

// [A-Za-z] capitol and lowercase letters
// {2} matches 2 chars
do {
  stateAbbrev = prompt ("Please enter your state's abbreviation");
} while (!stateAbbrev.match(/^[A-Za-z]{2}$/));
alert("You entered the correct state abbreviation!");

// toLowerCase method allows me to do exactly what it says and just validate against a
// lowercase 'yes' or 'no'. I probably could use a regex here but this is fancy enough for now. :)
do {
  married = prompt("Are you married? Please type either yes or no.");
} while (married.toLowerCase() !== "yes" && married.toLowerCase() !== "no");
alert("All your answers were correct! Here is your info. Phone number: " + phoneNumber +
", birth day: " + birthDay + ", postal code: " + postalCode + ", state: " + stateAbbrev +
", married: " + married.toLowerCase());
