import React, { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1)
      }
    
      function decrement() {
        setCount(count - 1)
      }

    return (
        <div> в Компоненте всегда должен быть 1 родительский элемент(div)
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <br/>
            можно использовать сколько угодно счетчиков
        </div>
    )
}

export default Counter;