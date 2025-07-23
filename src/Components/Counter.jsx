import { useState } from "react";

export default function Counter() { 

 const [count, setCount] = useState(0);

 const handleIncrement = () => {
    setCount(count + 1);
 };

 const handleDecreasing = () => {
    setCount(count - 1);
 };

 return (
    <div>
        <p>Contador con useState: {count}</p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecreasing}>-</button>
    </div>
 );
}