import './App.css';

import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  const [isListCreated, setIsListCreated] = useState(false);

  function createList() {
    setIsListCreated(true);
  }

  return (
    <div>
      <h1>Todo List</h1>
      {isListCreated ? <TodoList /> : <button onClick={createList}>Start List</button>}
    </div>
  );
}

export default App;
