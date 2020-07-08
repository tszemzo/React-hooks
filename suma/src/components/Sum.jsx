import React, { useState, Fragment } from 'react';

export const Sum = () => {
    const [first, setFirst] = useState(0);
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState();
    const [history, setHistory] = useState([]);

    const handleSum = () => {
        let newResult = Number(first) + Number(second);
        const separator = ', ';
        const parsedResult = newResult + separator;
        setResult(newResult);
        setHistory([...history, parsedResult]);
    };

    const handleRestart = () => {
        setResult();
        setHistory([]);
    };

    return (
        <Fragment>
            <input value={first} onChange={(event) => setFirst(event.target.value)} />
            <input value={second} onChange={(event) => setSecond(event.target.value)} />
            <button onClick={handleSum}>
                Suma
            </button>
            <button onClick={handleRestart}>
                Restart
            </button><br></br>
            <p> Resultado: {result}</p>
            <p> Historial: {history}</p>
        </Fragment>
    );
};
