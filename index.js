function rollDices(dices) { 
    let sum = 0;
    let diceValue = 0;

    for(dice of dices) {
        diceValue = rollDice(dice);
        console.log(diceValue);
        sum = sum + diceValue;
    }
    return sum;
}

function rollDice(dice) {
    const min = Math.ceil(1);
    const max = Math.floor(dice);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDiceValues(items) {    
    let dices = [];    
            
    for (item of items) {
        if (item.querySelector('input:last-child').checked === true) {
            let tmp  = parseInt(item.querySelector('input:first-child').value);
            if (Number.isNaN(tmp) !== true) {
                dices.push(tmp);
            } 
        }
    }   
    return dices; 
}

// program start
console.log('Dice Simulator');
const button = document.getElementById('roll-dice');
const totalsum = document.getElementById('totalsum');

button.addEventListener('click', function (event) {
    const dices = getDiceValues(document.querySelectorAll('.item'));
    
    totalsum.innerHTML = rollDices(dices); 
});


