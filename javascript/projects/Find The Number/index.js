/*  1- Create a random number and declare it to a variable
    2- get a guess from the user
    3- check the number
        3.1- if it is higher say it is higher
        3.2- if it is lower say it is lower
        3.3- if it is equal to random number end the game

*/

let guess_count = 0;

let random_number = Math.floor(Math.random() * 100 + 1); 

document.querySelector('#check_it').addEventListener('click', checkNumber);

document.querySelector('#nr_game').addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("check_it").click(checkNumber);
    }
  });


function checkNumber(){

    // input elementine tekrar tekrar erisim saglamak icin buradavalue sunu almadik.
    let userInputElement = document.querySelector('#nr_game');
    let answerLabelElement = document.querySelector('#answer');
    let guessLabelElement = document.querySelector('#count_it');

    if(userInputElement.value == random_number){
        alert('You are the winner! Guess number: ' + ++guess_count);
        guess_count = 0;

        const choice = confirm('Do you want to play again?');

        if (choice){
            guess_count = 0;
            random_number = Math.floor(Math.random() * 100 + 1);
            answerLabelElement.innerText = '';
            guessLabelElement.innerText = '';
        }else{
            alert('Thanks for playing!');
            answerLabelElement.innerText = 'Best guess time: ' + guess_count;
            guessLabelElement.innerText = '';
            answerLabelElement.innerText = '';
            userInputElement.style.visibility = 'hidden';
            document.querySelector('#check_it').style.visibility = 'hidden';
        }
    }
    else if(userInputElement.value == ''){
        answerLabelElement.innerText = 'Enter a number please';
    }
    else if(userInputElement.value > random_number){
        guess_count++;
        guessLabelElement.innerText = `Guess count is ${guess_count}`;
        answerLabelElement.innerText = 'Try a smaller number!';
    }
    else if(userInputElement.value < random_number){
        guess_count++;
        guessLabelElement.innerText = `Guess count is ${guess_count}`;
        answerLabelElement.innerText = 'Try a higher number!';
    }
    else if(isNaN(userInputElement.value)){
        answerLabelElement.innerText = 'It is not a number';
    }
    userInputElement.focus();
    userInputElement.value = ''
}

console.log(random_number);