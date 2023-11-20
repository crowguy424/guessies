var msg1 = document.getElementById('message1');
var msg2 = document.getElementById('message2');
var msg3 = document.getElementById('message3');
var msg4 = document.getElementById('message4');

var remainingGuessesElement = document.getElementById('remainingGuesses');

var answer = Math.floor(Math.random()*100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];
maxGuesses = 10;

function play(){
    var user_guess = document.getElementById("guess").value;
    if(user_guess < 1 || user_guess > 100){
        alert("Please enter a number between 1 and 100.");
    } else {
        guessed_nums.push(user_guess);
        no_of_guesses += 1;

        if(user_guess < answer){
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
            maxGuesses--;
            if (maxGuesses === 0) {
                msg4.textContent = `Sorry, you've run out of guesses. The correct number was ${answer}.`;
                msg4.style.color = 'red';
                document.getElementById("my_btn").disabled = true;
            } else {
                const hint = user_guess < answer ? 'higher' : 'lower';
                msg4.textContent = `Incorrect! Try a ${hint} number.`;
                msg4.style.color = 'orange';
                remainingGuessesElement.textContent = maxGuesses;
            }
        }

        else if(user_guess > answer){
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No. of guesses: " + no_of_guesses;
            msg3.textContent = "Guessed numbers are: " + guessed_nums;
            maxGuesses--;
            if (maxGuesses === 0) {
                msg4.textContent = `Sorry, you've run out of guesses. The correct number was ${answer}.`;
                msg4.style.color = 'red';
                document.getElementById("my_btn").disabled = true;
            } else {
                const hint = user_guess < answer ? 'higher' : 'lower';
                msg4.textContent = `Incorrect! Try a ${hint} number.`;
                msg4.style.color = 'orange';
                remainingGuessesElement.textContent = maxGuesses;
            }
        }

        else if(user_guess == answer){
            msg1.textContent = "Hurray you win!!!!";
            msg2.textContent = "The number was: " + answer;
            msg4.textContent = "You guessed it in " + no_of_guesses + " guesses";
            document.getElementById("my_btn").disabled = true;
        }
        
    }
}
