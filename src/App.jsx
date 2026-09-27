
// import ToggleButton from './ToggleButton'

// import TodoList from './To-do list';
import ShoppingCart from './ShoppingCart';
import { useState,useEffect } from 'react';


function App() {

  const [greeting, setGreeting] = useState ("hello ")
  const [name ,setName] = useState ("")

  useEffect(()=>{
  if (!name) {
      document.title = 'hello!';
    } else {
      document.title = `${greeting}, ${name}`;
}
  }, [name,greeting])










  
  return (
    
  <div>
    <h1>enter your name :</h1>
    <input type="text" value={name}
   
   onChange={(e)=> setName(e.target.value)}    
   />
   
      <h2>Choose a Greeting:</h2>
      <input
        type="text"
        value={greeting}
        onChange={(e) => setGreeting(e.target.value)}
      />



  </div>

  );
}

export default App


