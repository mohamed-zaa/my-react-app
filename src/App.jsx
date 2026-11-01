import TodoApp from './TodoApp';
import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <button className={styles.active}>Todo App</button>
        <button className={styles.navButton}>Study Timer</button>
      </nav>

      <main className={styles.main}>
        <TodoApp />
      </main>
    </div>
  );
};

export default App;