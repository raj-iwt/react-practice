import { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import './App.css'
import { Todos } from './components/Todos';
import { ErrorBoundary } from './components/ErrorBoundary';
import navValues from "./navigation/navValues";
import navigationContext from './navigation/navigationContext';
import ComponentPicker from './components/ComponentPicker';

function App() {

  const navigate = useCallback(
    (navTo: any) => setNav({current: navTo, navigate}),
    []
  );

  const [nav, setNav ] = useState({
    current: navValues.home,
    navigate
  });
  const [selectedTodo, setSelectedTodo] = useState<any>(null);
  const onTodoSelected = (todo: any) => {
    setSelectedTodo(todo);
  }

  return (
    <div>
      <h1> React + Typescript Practice</h1>
      <navigationContext.Provider  value={nav}>
        <ComponentPicker currentNavLocation={nav}></ComponentPicker>
      </navigationContext.Provider>
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
