
/*
  // NOTE: this is an example from the working calculator

var one = document.getElementById('one');
*/

var one = document.getElementById('one').onclick = function(){code}; // check this code
var two = document.getElementById('two').onclick = function(){code}; // check this code
var four = document.getElementById('four').onclick = function(){code}; // check this code
var eight = document.getElementById('eight').onclick = function(){code}; // check this code
var sixteen = document.getElementById('sixteen').onclick = function(){code}; // check this code
var thirty_two = document.getElementById('thirty_two').onclick = function(){code}; // check this code
var sixty_four = document.getElementById('sixty_four').onclick = function(){code}; // check this code
var one_twenty_eight = document.getElementById('one_twenty_eight').onclick = function(){code}; // check this code
var two_ninty_six = document.getElementById('two_ninty_six').onclick = function(){code}; // check this code

var userEntry = X // code will go here;
var computerEntry = O // code will go here;
var resetGame =  // code will go here;


//we add a click function that will fire when a user clicks on the element

/*
  one.addEventListener('click',function(){
       display.innerHTML += "1";

    });
*/


one.addEventListener('click',function()) {
  // code will go here;
 if (one === X) {
    console.log(userEntry);
 } else (one === O) {
    console.log(computerEntry);
 }

two.addEventListener('click',function()) {
  // code will go here;
 if (two === X) {
    console.log(userEntry);
 } else (two === O) {
    console.log(computerEntry);
 }


four.addEventListener('click',function()) {
  // code will go here;
 if (four === X) {
    console.log(userEntry);
 } else (four === O) {
    console.log(computerEntry);
 }

eight.addEventListener('click',function()) {
  // code will go here;
 if (eight === X) {
    console.log(userEntry);
 } else (eight === O) {
    console.log(computerEntry);
 }


sixteen.addEventListener('click',function()) {
  // code will go here;
 if (sixteen === X) {
    console.log(userEntry);
 } else (sixteen === O) {
    console.log(computerEntry);
 }

thirty_two.addEventListener('click',function()) {
  // code will go here;
 if (thirty_two === X) {
    console.log(userEntry);
 } else (thirty_two === O) {
    console.log(computerEntry);
 }


sixty_four.addEventListener('click',function()) {
  // code will go here;
 if (sixty_four === X) {
    console.log(userEntry);
 } else (sixty_four === O) {
    console.log(computerEntry);
 }


one_twenty_eight.addEventListener('click',function()) {
  // code will go here;
 if (one_twenty_eight === X) {
    console.log(userEntry);
 } else (one_twenty_eight === O) {
    console.log(computerEntry);
 }


two_ninty_six.addEventListener('click',function()) {
  // code will go here;
 if (two_ninty_six === X) {
    console.log(userEntry);
 } else (two_ninty_six === O) {
    console.log(computerEntry);
 }


/*

EXAMPLE OF CALCULATOR EQUAL EVENT LISTENER

    equal.addEventListener('click',function(){
      if (display.innerHTML.indexOf('+') !==-1) {
       userEntry = display.innerHTML.split('+')
       outputTotal = parseInt(userEntry[0]) + parseInt(userEntry[1])
       display.innerHTML = outputTotal.toString()
      }
      else if (display.innerHTML.indexOf('-') !==-1) {
       userEntry = display.innerHTML.split('-')
       outputTotal = parseInt(userEntry[0]) - parseInt(userEntry[1])
       display.innerHTML = outputTotal.toString()
      }
      else if (display.innerHTML.indexOf('*') !==-1) {
       userEntry = display.innerHTML.split('*')
       outputTotal = parseInt(userEntry[0]) * parseInt(userEntry[1])
       display.innerHTML = outputTotal.toString()
      }
       else if (display.innerHTML.indexOf('/') !==-1) {
       userEntry = display.innerHTML.split('/')
       outputTotal = parseInt(userEntry[0]) / parseInt(userEntry[1])
       display.innerHTML = outputTotal.toString()
      }
    });
*/




/*
WIN LOGIC


/*

Current logic works fine with 3x3 board because it is static. How can I convert it into NxN logic?

Win logic works by adding the row and column squares.


 * To determine a win condition, each square is "tagged" from left
 * to right, top to bottom, with successive powers of 2.  Each cell
 * thus represents an individual bit in a 9-bit string, and a
 * player's squares at any given time can be represented as a
 * unique 9-bit value. A winner can thus be easily determined by
 * checking whether the player's current 9 bits have covered any
 * of the eight "three-in-a-row" combinations.
 *
 *     273                 84
 *        \               /
 *          1 |   2 |   4  = 7
 *       -----+-----+-----
 *          8 |  16 |  32  = 56
 *       -----+-----+-----
 *         64 | 128 | 256  = 448
 *       =================
 *         73   146   292
 *
 */
wins = [7, 56, 448, 73, 146, 292, 273, 84],

/*
 * Returns whether the given score is a winning score.
 */
win = function (score) {
    for (var i = 0; i < wins.length; i += 1) {
        if ((wins[i] & score) === wins[i]) {
            return true;
        }
    }
    return false;
},

/*
So, to do it programatically, you can use classes to keep track of what "set" each cell is in, i.e. "row1" or "col1":

In i/j creation loops:

*/


/*
one.addClass('col' + j); // The cell is in column j
one.addClass('row' + i); // The cell is in row i
if (i == j) {
    one.addClass('dia0'); // The cell is in the down/right diagonal
}
if (j == SIZE - i - 1) {
    one.addClass('dia1'); // The cell is in the up/right diagonal
}
Then, in win(), pass in the last cell clicked. For each class the cell belongs to, check if the number of cells with that class containing X (or O) is equal to the table size:

win = function (clicked) {
    // Get all of the classes this cell belongs to
    var memberOf = clicked[0].className.split(/\s+/);

    // Check elements with the same class, and see if they contain "turn", i.e. X or O
    for (var i=0; i<memberOf.length; i++) {
        var testClass = '.'+memberOf[i];
        // If the number of elements containing "turn" == SIZE,
        // we have a winning condition
        if( $('#tictactoe').find(testClass+':contains('+turn+')').length == SIZE) {
             return true;
        }
    }

    return false;
},

*/






/*
// from another resource UNRELATED

function check()
function check2()
function player1Check()
function player2Check()
function drawCheck()
function winCheck()
function computer()
function AI()
function reset()
function resetter()
*/







