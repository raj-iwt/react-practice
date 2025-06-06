import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { TodosContainer } from './components/TodosContainer';

import { useEffect } from 'react';
function App() {
  
  useEffect(() => {
    console.log('Component mounted');

    return () => {
      console.log('Component unmounted');
    };
  }, []);


  return (
    <div>
      <h1> React + Typescript Practice</h1>
      <BrowserRouter>
        <nav>
          <Link to="/"><h2>Home Page</h2></Link> | <Link to="/todos"><h2>About Page</h2></Link>
        </nav>
        <Routes>
          <Route index element={<div>Home</div>} />
          <Route path='todos' element={<TodosContainer />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
