import Button from "./UI/Button"
export default function todoItem({ taskCompleted, todoEdit, todo}) {
    return (
        <li className="w-full text-grey-darkes" key={todo.id}>{todo.text}
        <Button type="button" value={todo.completed} onClick={() => taskCompleted(todo.id)} text="Done" />
        <Button type="button" onClick={() => todoEdit(todo)} text="Edit" />
      </li>
    )
}