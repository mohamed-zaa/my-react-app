import { useState } from "react";

const ToggleButton= ()=>{

    const [isOn , setIson] = useState(false)

const toggle = () =>setIson(!isOn)



return (
<div>
<p>the button is {isOn ? 'ON' : 'OFF'} </p>
<button onClick={toggle}>{isOn ? 'turn of': 'turn on'}</button>


</div>



)
}


export default ToggleButton