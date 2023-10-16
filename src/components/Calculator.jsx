import { useState } from 'react';
import React from 'react';
import BeautifulScreen from './BeautifulScreen';
import NumberButton from './NumberButton';
import OperatorButton from './OperatorButton';
import EqualButton from './EqualButton';

function Calculator() {
    const [currentOperation, setCurrentOperation] = useState('');
    const [result, setResult] = useState('');

    function handleNumberClick(value) {
        setCurrentOperation(prev => prev + value);
    }

    function handleOperatorClick(value) {
        setCurrentOperation(prev => prev + value);
    }

    function handleEqualClick() {
        try {
            setResult(eval(currentOperation));
            setCurrentOperation('');
        } catch(e) {
            setResult('Error');
        }
    }

    return (
        <div className="calculator">
            <BeautifulScreen currentOperation={currentOperation} result={result} />
            <div className="buttons w3">
                {['1','2','3','4','5','6','7','8','9'].map(num => (
                    <NumberButton key={num} value={num} onClick={handleNumberClick} />
                ))}
            </div>
            <div className="buttons w1">
                <NumberButton key={'0'} value={'0'} onClick={handleNumberClick} />
            </div>
            <div className="operators">
                {['+','-','*','/'].map(op => (
                    <OperatorButton key={op} value={op} onClick={handleOperatorClick} />
                ))}
            </div>
            <div className="equal">
                <EqualButton onClick={handleEqualClick} />
            </div>
        </div>
    );
}

export default Calculator;