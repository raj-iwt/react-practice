import { Suspense, useEffect, useRef, useState } from 'react';
import './App.css'
import { Todos } from './components/Todos';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const [selectedTodo, setSelectedTodo] = useState<any>(null);
  const onTodoSelected = (todo: any) => {
    setSelectedTodo(todo);
  }

  return (
    <div>
      <h1> React + Typescript Practice</h1>
      <ErrorBoundary fallback="Something went wrong!">
        <Suspense fallback={<div>Loading...</div>}>
          <h2>Selected Todo</h2>
          {selectedTodo ? (
            <div>
              <h3>{selectedTodo.text}</h3>
              <p>ID: {selectedTodo.id}</p>
            </div>
          ) : (
            <p>No todo selected</p>
          )}
          <h2>Todo List</h2>
          <Todos onTodoSelect={onTodoSelected} />
          <p>
            <small>Note: Todos are stored in localStorage.</small>
          </p>
        </Suspense>
      </ErrorBoundary>
    </div>
  )
}

export default App
