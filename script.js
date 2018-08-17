//    grtting the div to place the random number
let randomNumberSelector = document.querySelectorAll('.number');
// let randomNumberKey = Object.keys(randomNumbers);


var randomNumbers = {
    num1: {
        number: 0,
        state: ''
    },
    num2: {
        number: 0,
        state: ''
    },
    num3: {
        number: 0,
        state: ''
    }
};
let randomNumberKey = Object.keys(randomNumbers);




// function that creates a random number between 1 and 9
function makeRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 9) + 1;
    return randomNumber
};

// function that returns the random number

function displayRandomNumbers() {

    for (i = 0; i < randomNumberSelector.length; i++) {
        let tmpRandomNumber = makeRandomNumber();
        let num = randomNumberKey[i];
        randomNumbers[num].number = tmpRandomNumber;
        randomNumberSelector[i].innerHTML = tmpRandomNumber;
    };

}

// find matches

function findMatch(numbersoMatch) {
    if (numbersoMatch.num1.number == numbersoMatch.num2.number) {
        numbersoMatch.num1.state = 'match';
        numbersoMatch.num2.state = 'match';
        messageBox.innerHTML = 'Matching numbers : ' + numbersoMatch.num1.number;


    } else if (numbersoMatch.num2.number == numbersoMatch.num3.number) {
        numbersoMatch.num2.state = 'match';
        numbersoMatch.num3.state = 'match';
        messageBox.innerHTML = 'Matching numbers : ' + numbersoMatch.num3.number;

    } else if (numbersoMatch.num1.number == numbersoMatch.num3.number) {
        numbersoMatch.num1.state = 'match';
        numbersoMatch.num3.state = 'match';
        messageBox.innerHTML = 'Matching numbers : ' + numbersoMatch.num1.number;

    } else if (numbersoMatch.num1.number == numbersoMatch.num2.number && numbersoMatch.num1.number == numbersoMatch.num3.number) {
        numbersoMatch.num1.state = 'match';
        numbersoMatch.num2.state = 'match';
        numbersoMatch.num3.state = 'match';
        messageBox.innerHTML = 'Matching numbers : ' + num1;
    };
    addClass(randomNumbers);

};



function addClass(numbers) {
    for (i = 0; i < randomNumberKey.length; i++) {
        let num = randomNumberKey[i];
        console.log(numbers[num].state);
        if (numbers[num].state == 'match') {
            randomNumberSelector[i].classList.add('match');
        }
    }


}
displayRandomNumbers();
findMatch(randomNumbers);