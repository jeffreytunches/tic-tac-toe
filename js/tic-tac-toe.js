
/*
  // NOTE: this is an example from the working calculator

var one = document.getElementById('one');
*/
/*
var move = " " // code will go here;
*/

// var tiles = document.getElementsByClassName

var sq0 = document.getElementById('sq0'); // check this code
var sq1 = document.getElementById('sq1'); // check this code
var sq2 = document.getElementById('sq2'); // check this code
var sq3 = document.getElementById('sq3'); // check this code
var sq4 = document.getElementById('sq4'); // check this code
var sq5 = document.getElementById('sq5'); // check this code
var sq6 = document.getElementById('sq6'); // check this code
var sq7 = document.getElementById('sq7'); // check this code
var sq8 = document.getElementById('sq8'); // check this code

var player1 = 'X' //
var player2 = 'O' //
var move = " " // code will go here;
var move1 = "player1"
var move2 = "player2" // code will go here;
/*
var moveCheck = // code will go here;
var resetGame =  // code will go here;
var win = // code will go here;
*/

//we add a click function that will fire when a user clicks on the element

/*
  one.addEventListener('click',function(){
       display.innerHTML += "1";

    });
*/

/*
function checkPlayer1(0, 1, 2, 3, 4, 5, 6, 7,8)
function checkPlayer2(0, 1, 2, 3, 4, 5, 6, 7,8)
*/

function winLogic() {
  winCombos=[[sq0, sq1, sq2], [sq3, sq4, sq5], [sq6, sq7, sq8],[sq0, sq3, sq6], [sq1, sq4, sq7], [sq2, sq5, sq8], [sq6, sq6, sq2], [sq0, sq4, sq8]]
}

function playerMove() {
 // move callBack
}
/*sq0.addEventListener('click',function(){

       sq0.innerHTML= "X";
   });

*/

sq0.addEventListener('click',function(){

       sq0.setAttribute('value', sq0.innerHTML="x");
   });




//
sq1.addEventListener('click',function() {
  // code will go here;
 if (sq1 === 'X') {
    console.log(player1);
 } else if (sq1 === 'O') {
    console.log(player2);
  }
 });


sq2.addEventListener('click',function() {
  // code will go here;
 if (sq2 === 'X') {
    console.log(player1);
 } else if (sq2 === 'O') {
    console.log(player2);
  }
 });

sq3.addEventListener('click',function() {
  // code will go here;
 if (sq3 === 'X') {
    console.log(player1);
 } else if (sq3 === 'O') {
    console.log(player2);
  }
 });


sq4.addEventListener('click',function() {
  // code will go here;
 if (sq4 === 'X') {
    console.log(player1);
 } else if (sq4 === 'O') {
    console.log(player2player2);
  }
 });

sq5.addEventListener('click',function() {
  // code will go here;
 if (sq5 === 'X') {
    console.log(player1);
 } else if (sq5 === 'O') {
    console.log(cplayer2);
  }
 })


sq6.addEventListener('click',function() {
  // code will go here;
 if (sq6 === 'X') {
    console.log(player1);
 } else if (sq6 === 'O') {
    console.log(player2);
  }
 })


sq7.addEventListener('click',function() {
  // code will go here;
 if (sq7 === 'X') {
    console.log(player1);
 } else if (sq7 === 'O') {
    console.log(player2);
  }
 })


sq8.addEventListener('click',function() {
  // code will go here;
 if (sq8 === X) {
    console.log(player1);
 } else if (sq8 === O) {
    console.log(player2);
  }
 })


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

// disregard logic below from other surce NOT RELATED


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

 /*
wins = [7, 56, 448, 73, 146, 292, 273, 84],

/*
 * Returns whether the given score is a winning score.
 */

 /*
win = function (score) {
    for (var i = 0; i < wins.length; i += 1) {
        if ((wins[i] & score) === wins[i]) {
            return true;
        }
    }
    return false;
},
*/

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







