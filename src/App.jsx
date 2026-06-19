import { useState } from "react";
import { Todolist } from "./Component/Todolist";
import { Header } from "./Component/Header";

export const App = () => {

  const [input, setinput] = useState("");
  const [todos, setTodos] = useState([]);
  const [msg, setmsg] = useState("");

  function handlechange(e){
    setinput(e.target.value);
  }

  function handleclick(){
    if(input.trim() === ""){
      setmsg("No Input Add Task");
      return;
    }

    let newTodo = {
      id: Date.now(),
      text: input,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setinput("");
    setmsg("");
  }

  function deleteTodo(id){
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function editTodo(id, newText){
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  }

  function toggleTodo(id){
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">

      <Header />

      <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-md">

        <div className="flex gap-2">
          <input 
            value={input} 
            onChange={handlechange} 
            type="text" 
            placeholder="Enter Your Task" 
            className="flex-1 border p-2 rounded"
          />

          <button 
            onClick={handleclick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <p className="text-red-500 mt-2">{msg}</p>

        <Todolist 
          todos={todos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
};