
interface TodoItemProps {
    text: string;
    onDelete: () => void;
}

export function TodoItem(props: TodoItemProps) {
    const { text, onDelete } = props;
    
    return (
        <tr>
            <td><span>{text}</span></td>
            <td><button onClick={onDelete}>Delete</button></td>
        </tr>
    );
}

