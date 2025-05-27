import { useEffect, useState } from "react";

export function Timer() {
    const [seconds, setSeconds] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h2>Timer: {seconds} seconds</h2>
        </div>
    );
}