import { useState } from 'react';


export const Counter = () => {

    const [counter, setCounter] = useState(0);

    const incrementar = (num: number = 1): void => {
        setCounter(counter + num);
    }
    const decrementar = () => {
        setCounter(counter - 1);
    }

  return (
    <div>
        <h3>Counter: useState</h3>
        <span>Valor: {counter} </span>
        <br />
        <button 
            className='btn btn-outline-primary mt-2'
            onClick={() => incrementar()}
        > +1 </button>

        <button 
            className='btn btn-outline-primary mt-2'
            onClick={() => incrementar(2)}
        > +2 </button>
        
        <button 
            className='btn btn-outline-secondary mt-2'
            onClick={decrementar}
        > -1 </button>
    </div>
  )
}
