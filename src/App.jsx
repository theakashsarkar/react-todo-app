import { useState, useEffect } from "react";
import TodoItem from "./component/TodoItem";
import TodoForm from "./component/TodoForm";
import TodoEditForm from "./component/TodoEditForm";
import Button from "./component/UI/Button";


export default function Index() {
  const [todos, setTodos] = useState(() => {
    if (typeof window !== 'undefined') {
      const getTodos = localStorage.getItem("todos");
      if (getTodos) {
        return JSON.parse(getTodos);
      } else {
        return [];
      }
    }
  });

  const [todo, setTodo]   = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editTodo, setEditTodo] = useState();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  },[todos]);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo,
          completed: false,
        }
      ])
    }
    setTodo("");
  }

  function taskCompleted(id) {
    const updateTodo = todos?.map((todo) => {
      if (id === todo.id) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    })
    setTodos(updateTodo);
  }

  function todoEdit(todo) {
      setEditing(true);
      setEditTodo({...todo})
  }

  function handleEditInputChange(e) {
        setEditTodo({ 
          ...editTodo,
          text: e.target.value,
        });

  }
  function handleEditFormSubmit(e) {
    e.preventDefault();
    handleUpdateTodo(editTodo.id, editTodo);
  }

  function handleUpdateTodo(id, updateTodo) {

    if (updateTodo.text !== "") {
      const updateTodoItem = todos.map((todo) => {
        return todo.id === id ? updateTodo : todo;
      });
      setTodos(updateTodoItem);
    }
    alert("empty todo not update");
  }

  function todoRemove() {
    
  }

  return (
    <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <div className="mb-4">
              <h1 className="text-grey-darkest">Todo List</h1>
              {isEditing ? (
                <TodoEditForm 
                  handleEditFormSubmit = { handleEditFormSubmit }
                  handleEditInputChange = { handleEditInputChange }
                  editTodo = { editTodo }
                  setEditing = { setEditing }
                />
              ) : (
                  <TodoForm 
                  handleFormSubmit = { handleFormSubmit } 
                  todo = { todo } 
                  handleInputChange = { handleInputChange } 
                />
              )}
           
          </div>
          <div>
            <ul>
              <div className=" mb-4 items-center bg-red ">
                    {todos.map((todo) => (
                      todo.completed === false ? 
                        <TodoItem 
                        key={todo.id}
                        todo={todo}
                        taskCompleted={taskCompleted}
                        todoEdit={todoEdit}
                      />
                       : ''
                    ))}    
              </div>  
            </ul>
          </div>
          <div>
            <ul>
              <div className=" mb-4 items-center">
                    {todos.map((todo) => (
                      todo.completed ?
                      <li className="w-full text-grey-darkes" key={todo.id}>{todo.text}
                        <Button type="button" text="Delete" onClick={todoRemove} />
                      </li>
                      : ''
                  ))}    
              </div>  
            </ul>
          </div>       
      </div>
    </div>
  );
}