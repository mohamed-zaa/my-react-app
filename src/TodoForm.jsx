import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

import styles from './TodoForm.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };

      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoForm;