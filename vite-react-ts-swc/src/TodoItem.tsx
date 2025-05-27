import React, { useEffect, useRef } from 'react';


interface TodoItemProps {
    id: number;
    text: string;
    onDelete: () => void;
    onTodoSelect: (todo: TodoItemProps) => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
    const { text, onDelete, onTodoSelect } = props;
    // const inputEl = useRef<HTMLInputElement>(null);
    // const onButtonClick = () => inputEl.current?.focus();
    const onItemSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            onTodoSelect(props);
        }
    };
    return (
        <tr>
            <input onChange={onItemSelected} type="checkbox"></input>
            <td><span>{text}</span></td>
            <td><button onClick={onDelete}>Delete</button></td>
        </tr>
    );
}

// export default React.memo(TodoItem);
export default TodoItem;
