import React from 'react';


interface TodoItemProps {
    text: string;
    onDelete: () => void;
}

const TodoItem: React.FC<TodoItemProps> = (props: TodoItemProps) => {
    const { text, onDelete } = props;
    
    return (
        <tr>
            <td><span>{text}</span></td>
            <td><button onClick={onDelete}>Delete</button></td>
        </tr>
    );
}

// export default React.memo(TodoItem);
export default TodoItem;
