function rollDices(dices) { 
    let sum = 0;
    let diceValue = 0;

    for(dice of dices) {
        diceValue = rollDice(dice);        
        sum = sum + diceValue;        
    }
    return sum;
}

function rollDice(dice) {
    const min = Math.ceil(1);
    const max = Math.floor(dice.value);
    const diceValue = Math.floor(Math.random() * (max - min + 1)) + min;
    document.querySelector(`#${dice.id}-result`).innerHTML = diceValue;
    return diceValue;
}

function getDiceValues(items) {    
    let dices = [];    
    
    for (item of items) {
        if (item.querySelector('input:first-child').checked === true) {
            let input = item.querySelector('input:last-of-type');
            if (isNaN(input.value) !== true && input.value !== '') {
                dices.push({id: input.id, value: input.value});            
            } 
            
            
            // if (typeof parseInt(input.value) == 'number'){
            // }

        }
    }   
    return dices; 
}

function clearResults() {
    [...document.querySelectorAll('.item')].map(item =>{
        item.querySelector('div').innerHTML = '';
    });
}

// program start
console.log('Dice Simulator');
const button = document.getElementById('roll-dice');
const totalsum = document.getElementById('totalsum');

button.addEventListener('click', function (event) {    
    clearResults();
    const dices = getDiceValues(document.querySelectorAll('.item'));
    
    totalsum.innerHTML = rollDices(dices); 
});


