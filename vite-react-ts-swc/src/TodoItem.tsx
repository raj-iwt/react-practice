interface TodoItemProps {
    text: string;
    onDelete: () => void;
}

export function TodoItem(props: TodoItemProps) {
    const { text, onDelete } = props;
    
    return (
        <li>
            <span>{text}</span>
            <button onClick={onDelete}>Delete</button>
        </li>
    );
}