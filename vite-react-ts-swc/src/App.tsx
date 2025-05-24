import { useState } from 'react';
import './App.css'
import { Counter } from './Counter'
import { Timer } from './Timer'
import { Form } from './Form';
import { Todos } from './Todos';

function App() {
  const [showTimer, setShowTimer] = useState<boolean>(false);
  return (
    <div>
      <h1> React + Typescript Practice</h1>
      {/* <Counter />
      <button onClick={() => setShowTimer((s: boolean) => !s)}>
        {showTimer ? 'Hide' : 'Show'} Timer
      </button>
      {showTimer && <Timer />} */}

      {/* <Form /> */}

      <Todos />
    </div>
  )
}

export default App
