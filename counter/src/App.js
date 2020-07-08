import React, { useState, Fragment } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Fragment>
      <p>{count}</p>
      <button onClick={() => { setCount(count + 1)}}>
        Suma
      </button>
			<button onClick={() => { setCount(count - 1)}}>
        Resta
      </button>
      <button onClick={() => { setCount(0)}}>
			  Restart
			</button>
    </Fragment>
  );
}

export default App;
