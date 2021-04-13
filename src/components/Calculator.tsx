import React, {useState} from 'react';

export const sum = (firstValue: number, secondValue: number) => firstValue + secondValue;
export const difference = (firstValue: number, secondValue: number) => firstValue - secondValue;
export const division = (firstValue: number, secondValue: number) => firstValue/secondValue;
export const multiply = (firstValue: number, secondValue: number) => firstValue*secondValue;

export const interpretateExpression = (expression: string) => {
    let expressionCopy = expression;

    const copy = expressionCopy;

    expressionCopy = expressionCopy.replace(/[0-9]+/g, '#').replace(/[(|)]/g, '');

    const numbers = copy.split(/[^0-9.]+/);

    const operators = expressionCopy.split('#').filter(function(n){return n;});
    const result = [];

    for(let i = 0; i < numbers.length; i++){
        result.push(numbers[i].trim());
        if (i < operators.length)
            result.push(operators[i].trim());
    }
    return result;
};

const Calculator = () => {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operation, setOperation] = useState('+');

    return (
        <div>
            <div>
                Calculator
            </div>
            <div>
                <input type="text"
                    placeholder="Enter here" 
                    value={`${firstValue} ${operation} ${secondValue}`}
                />
            </div>
        </div>
    );  
};

export default Calculator;
