import React from 'react';

export function Todos({ todos }) {
  return (
    <div>
      {
        todos.map(function(todo) {
          return (
            <div key={todo.title}> 
              <h1>{todo.title}</h1>
              <h2>{todo.description}</h2>
              <button 
                onClick={() => {
                  // Add functionality for marking todo as complete
                  console.log(`Todo ${todo.title} clicked!`);
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
