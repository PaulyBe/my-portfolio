const btn = document.getElementById('btn'); //* Variable conected to button
const output = document.getElementById('output'); //* Variable connected to output
const reset = document.getElementById('resetbtn');

const number = [Math.floor(Math.random() * 100)] // Generate random number

btn.addEventListener('click', function(){ //* Connect button click to new function
    const input = document.getElementById('userInput').value; //* Connect the value of the user input to if statement
    if (input == number){
        output.innerHTML = `Correct! The number is ${number}`
    } else if (input < number) {
        output.innerHTML = `You guessed too low!`
    } else if (input > number) {
        output.innerHTML = `You guessed too high!`
    }
});

reset.addEventListener('click', function () {
    location.reload();
});