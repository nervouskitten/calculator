const add = function(a,b) {
    return a + b;
};

const subtract = function(a,b) {
    return a - b;
};
  
const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b){
    return a / b;
};
  
const operate = function(operator,a,b){
    if(operator=="+"){
        return add(a,b);
    }else if(operator=="-"){
        return subtract(a,b);
    }else if(operator=="X"){
        return multiply(a,b);
    }else if(operator=="÷"){
        return divide(a,b);
    };
};

function changeLargeDisplay(number){
    if(operatorPressedLast==true){
        displayValue = number;
    }else{
        displayValue += number;
    }
    document.querySelector('.largeNumber').innerHTML = displayValue;
    return displayValue;
};

let secondOperand = false;
let operatorPressedLast = true;
let firstValue = 0;
let operator = '';
let secondValue = 0;
let displayValue = 0;

document.addEventListener('click', e => {
    if(e.target.className == 'number'){
        let number = e.target.innerHTML;
        displayValue = Number(changeLargeDisplay(number));
        operatorPressedLast = false;
    } else if (e.target.className == 'operator'){
        if(secondOperand == true){
            secondOperandTrue(e);
        } else if(secondOperand == false){
            secondOperandFalse(e);
        }
    } else if(e.target.className == 'large-btn'){
        if(operator!=''){
            secondValue = displayValue;
            displayValue = operate(operator,firstValue,secondValue);
            document.querySelector('.largeNumber').innerHTML = displayValue;
            firstValue = displayValue;
            secondOperand = true;
        } else{
            document.querySelector('.largeNumber').innerHTML = displayValue;
        }
    } else if(e.target.className == 'backspace'){
        let stringValue = displayValue.toString();
        let edited = stringValue.slice(0,-1);
        displayValue = Number(edited);// if all numbers are deleted this needs to equal zero
        operator = '';
        secondOperand = false;
        document.querySelector('.largeNumber').innerHTML = displayValue;
    } else if(e.target.className == 'clear'){
        displayValue = 0;
        firstValue = 0;
        operator = '';
        operatorPressedLast = true;
        secondOperand = false;
        document.querySelector('.largeNumber').innerHTML = displayValue;
    } else if(e.target.className == 'negPos'){
        displayValue = displayValue/-1
        document.querySelector('.largeNumber').innerHTML = displayValue;
    } else if(e.target.className == 'decimal'){
        if(displayValue.toString().includes(".")){
        }else{
            displayValue = displayValue.toString() + ".";
            console.log(displayValue)
            document.querySelector('.largeNumber').innerHTML = displayValue;          
        }
    }
});

function secondOperandTrue(e){
    secondValue = displayValue;
    displayValue = operate(operator,firstValue,secondValue);
    document.querySelector('.largeNumber').innerHTML = displayValue;
    firstValue = displayValue;
    operator = e.target.innerHTML;
    secondValue = ''
    operatorPressedLast = true;
}

function secondOperandFalse(e){
    firstValue = displayValue;
    operator = e.target.innerHTML;
    secondOperand = true;
    displayValue = 0;
    operatorPressedLast = true;
}


/*


*/

