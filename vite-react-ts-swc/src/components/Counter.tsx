import { useState } from 'react';


export function Counter() {
    const [count, setCount] = useState<number>(0);

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={() => setCount((c) => c + 1)}>
                Increment
            </button>
            <button onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}