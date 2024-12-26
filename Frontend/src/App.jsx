/*
import { useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"


function App(){

  const[todos, setTodos] = useState([]);


  // update it using use effect 
  fetch("https://localhost:3000/todos").then(async function (res){
    const json = await res.json();
    setTodos(json.todos);
  })

  return (
    <div>
        <CreateTodo></CreateTodo>
        <Todos todos={todos}></Todos>
    </div>
  )
}

export default App
*/

import { useState, useEffect } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from the API when the component mounts
    fetch("http://localhost:3000/todos") // Use HTTP for local development
      .then(async function (res) {
        if (!res.ok) {
          throw new Error('Failed to fetch todos');
        }
        const json = await res.json();
        setTodos(json.todos); // Assuming your API returns { todos: [...] }
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
        // Handle error (e.g., show an error message to the user)
      });
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;


