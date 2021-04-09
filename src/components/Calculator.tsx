import React, {useState} from 'react';

export const sum = (firstValue: number, secondValue: number) => firstValue + secondValue;
export const difference = (firstValue: number, secondValue: number) => firstValue - secondValue;
export const division = (firstValue: number, secondValue: number) => firstValue/secondValue;
export const multiply = (firstValue: number, secondValue: number) => firstValue*secondValue;

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
