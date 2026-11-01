import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Todo List</h1>

        <TodoForm />

        <TodoList />
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;