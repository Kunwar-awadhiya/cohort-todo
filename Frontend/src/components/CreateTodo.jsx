import React, { useState } from 'react';

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                onChange={function (e) {
                    const value = e.target.value;
                    setTitle(value); 
                }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Description"
                onChange={function (e) {
                    setDescription(e.target.value); 
                }}
            />
            <br />
            <br />
            <button
                onClick={() => {
                    fetch("http://localhost:3000/todo", {
                        method: "POST",
                        body: JSON.stringify({
                          title: title,
                          description: description,
                        }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      })
                      .then(async function (res) {
                        const json = await res.json();
                        alert("Todo added");
                      })
                      .catch(function (error) {
                        console.error("Error adding todo:", error);
                        alert("Failed to add todo");
                      });
                      
                }}
            >
                Add a Todo
            </button>
        </div>
    );
}
