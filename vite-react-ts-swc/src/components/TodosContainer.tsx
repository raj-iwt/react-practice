import { Suspense, useState } from "react";
import { ErrorBoundary } from "./ErrorBoundary";
import { Todos } from "./Todos";

export function TodosContainer() {

    const [selectedTodo, setSelectedTodo] = useState<any>(null);
    const onTodoSelected = (todo: any) => {
        setSelectedTodo(todo);
    }
    return (
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
    )
}