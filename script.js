//    grtting the div to place the random number

// function that creates a random number between 1 and 9

function makeRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber

};

// function that returns the random number

function displayRandomNumbers() {
    let num1 = makeRandomNumber();
    let num2 = makeRandomNumber();
    let num3 = makeRandomNumber();

    let randomNumberSelector = document.querySelectorAll('.number');


    randomNumberSelector[0].innerHTML = num1;
    randomNumberSelector[1].innerHTML = num2;
    randomNumberSelector[2].innerHTML = num3;
};

// call the displayRandomNumberFunction

displayRandomNumbers();