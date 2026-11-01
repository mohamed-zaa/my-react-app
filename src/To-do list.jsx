import { useState } from "react"

const TodoList = ()=>{


const [todos , setTodos] =useState([])
const [inputValue , setInputValue]=useState ("")





return (

<div>


<h2>To-do list</h2>
<input type="text" 
value={inputValue}
onChange={(e)=>setInputValue(e.target.value)}
placeholder="enter a task"
/>
<button onClick={HandleAddTodo}>add</button>



</div>



)



}
export default TodoList