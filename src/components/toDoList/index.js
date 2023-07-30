import React, {useEffect, useState} from "react";
import { FetchTodos, createTodo, deleteTodo } from "../../api";
import SearchFunc from "../../state/inputRelay";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [message, setMessage] = useState('');

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await FetchTodos();

    //         setTodos(data)
    //     };
    //     fetchData();
    // }, [])
const handleChange = (e) => {
           setMessage(e.target.value)
        }
    const handleCreateTodo = async () => {
       
        const newTodo = { title: message, completed:false};
        
        const createdTodo = await createTodo(newTodo)
        console.log(todos);
        setTodos([...todos, createdTodo])
    }

    const handleDeleteTodo = async (id) => {
        const deletedTodo = await deleteTodo()
     const todoRemover = todos.filter((todo) => {
        return todo.id!==id;
     })

     setTodos(todoRemover)



    }

    return(
        <div>
            <button onClick={handleCreateTodo}>Add Todo</button>
            <input type="text" onChange={handleChange} />
            <ul>
                {todos.map((todo) => (

                    <li key={todo.id}>{todo.title}<button onClick={() => handleDeleteTodo(todo.id)}>deleteTodo</button></li>
      
                ))}
            </ul>
        </div>
    
)
}
export default Todo
// REACT CRUD TUTORIAL TEORETSKI DOMACI //
// kviz da se napravi london berlin pariz madrid



