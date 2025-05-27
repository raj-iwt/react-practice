import { use, useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import { useTodo } from './hooks/useTodo';
import type { Todo } from './types/Todo';

interface TodosProps {
    onTodoSelect: (todo: Todo | null) => void;
}

const storedTodos = fetch('todos')
    .then((res) => res.json())
    .catch(() => {
        const todos = localStorage.getItem('todos');
        return todos ? JSON.parse(todos) : [];
    });

export function Todos (prop: TodosProps) {
    const initialTodos = use(storedTodos) as Todo[];
    const { todos, setTodos } = useTodo(initialTodos);
    const [newTodo, setNewTodo] = useState<string>('');
    const [ selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        const newTodoItem: Todo = {
            id: Date.now(),
            text: newTodo,
        };
        setTodos((prev) => [...prev, newTodoItem]);
        setNewTodo('');
        localStorage.setItem('todos', JSON.stringify([...todos, newTodoItem]));
    };

    const handleDeleteTodo = (id: number) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
        localStorage.setItem(
            'todos',
            JSON.stringify(todos.filter((todo) => todo.id !== id))
        );
    };

    const onTodoSelected = (todo: Todo) => {
        setSelectedTodo(todo);
        prop.onTodoSelect(todo);
    }

    // useEffect(() => {
    //     const storedTodos = localStorage.getItem('todos');
    //     if (storedTodos) {
    //         setTodos(JSON.parse(storedTodos));
    //     }
    // }, []);

    return (
        <div>
            <h2>Todos</h2>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo}>Add</button>
            <table className="todo-table">
                <caption>Todo List</caption>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Todo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {todos.map((todo) => (
                    <tbody key={todo.id}>
                            <TodoItem onTodoSelect={onTodoSelected}
                                id={todo.id}
                                text={todo.text}
                                onDelete={() => handleDeleteTodo(todo.id)}
                            />
                    </tbody>
                ))}
            </table>
        </div>
    );
}


