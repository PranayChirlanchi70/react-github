import { useState } from "react";
import  "./counter.css"

function Counter (){
    const [counter, setCounter] = useState(0);

    const increment = () =>{
        if(counter >= 0) setCounter(counter + 1)
    }

    const decrement = () =>{
        if (counter > 0 ) setCounter(counter -1)
    }

    return (
        <div className="counter">
          <h1 className="count">{counter}</h1>
         
          <div id="buttons">
            <button className="btn" onClick={increment}>Increment</button>
            <button className="btn" onClick={decrement}>Decremet</button>
          </div>
        </div>
    )

}

export default Counter;