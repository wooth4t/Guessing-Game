$(document).ready(function() {


  // Challenge 1: Creating a random number.
  // Requirement:
    // how to write a function
    // how to write a return statement
    // finding randomization equation

    // Write your code here
      function generateRandomNumber() {
        return Math.floor((Math.random()*100)+1)
      }





  // Challenge 2: Assigning a variable.
  //Requirements:
    // how to write and define a variable

    // Write your code here
      let randomNumber = generateRandomNumber()
  

  // Challenge 3: Using if/else and value comparison
  // Requirements:
    // how to write a function
    // how to write if/else statements
    // how to write equations that compare vlaues

    function checkGuess(guess) {
      // Write your code here
      if (guess == randomNumber) {
        alert("you got it")
      } else {
        alert ("try again, the number was " + randomNumber)
      }
    }


  // This code uses jQuery, a javascript library, to run.
  // you don't need to know how this works,
  // just that it makes the submit button function.

  $(`.guessingForm`).submit(function(event) {
    event.preventDefault();
    var guess = $(`#js-user-guess`).val();
    $(`#js-user-guess`).val(``);
    checkGuess(guess);
  });


}