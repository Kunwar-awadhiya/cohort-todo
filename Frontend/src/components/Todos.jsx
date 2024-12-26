/*
import React from 'react';

export function Todos({ Todos }) {
  return (
    <div>
      {
        Todos.map(function(todo) {
          return (
            <div>
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button onClick={}>{todo.completed === true ? "Completed" : "Mark as complete"}</button>
            </div>
          );
        })
      }
    </div>
  );
}
  */



import React from 'react';

export function Todos({ todos }) {
  return (
    <div>
      {
        todos.map(function(todo) {
          return (
            <div key={todo.title}>  {/* Added key prop */}
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button 
                onClick={() => {
                  // Add functionality for marking todo as complete
                  console.log(`Todo ${todo.title} clicked!`);
                  // You can replace this with actual logic to mark as complete
                }}
              >
                {todo.completed === true ? "Completed" : "Mark as complete"}
              </button>
            </div>
          );
        })
      }
    </div>
  );
}
