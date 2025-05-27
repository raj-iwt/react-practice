import { useState } from 'react';
import type { Todo } from '../types/Todo';



export const useTodo = (initialTodos: Todo[]) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  return { todos , setTodos };
}

