
// import ToggleButton from './ToggleButton'

// import TodoList from './To-do list';

import { useState,useEffect } from 'react';



function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Mouse X: {coords.x}</p>
      <p>Mouse Y: {coords.y}</p>
    </div>
  );
}

export default App;