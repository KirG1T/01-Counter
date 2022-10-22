import { useState } from 'react';
import cl from './Counter.module.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    console.log('render');
    return (
        <>
            <h1>Counter</h1>
            <div className={cl.counter}>{counter}</div>
            <div
                style={{
                    display: 'flex',
                    width: '400px',
                    justifyContent: 'center',
                    margin: '0 auto',
                    paddingTop: '15px',
                }}
            >
                <button onClick={() => setCounter(counter < 50 ? counter + 1 : counter)}>+</button>
                <button onClick={() => setCounter(counter > -50 ? counter - 1 : counter)}>-</button>
                <button onClick={() => setCounter(counter < 50 ? counter + 5 : counter)}>+5</button>
                <button onClick={() => setCounter(counter > -50 ? counter - 5 : counter)}>
                    -5
                </button>
            </div>
            <button className={cl.resetButton} onClick={() => setCounter(0)}>
                Reset
            </button>
        </>
    );
};

export default Counter;
