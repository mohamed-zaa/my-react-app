import { useState } from "react";

const Counter = ()=> {

    const [count , setCount] = useState(0)
    const increment = ()=>setCount (count +1)

    const decrement = ()=> {

if(count > 0) setCount(count -1)

    }
return (
<div>
<h2>count: {count} </h2>
<button onClick={decrement} disabled={count === 0}>decrement</button>
<button onClick={increment}>increment</button>


</div>

)

}
export default Counter