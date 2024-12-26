/*
import React, { useState } from 'react'

export function CreateTodo(){

    const [title , setTitle] = useState("");
    const [dessciption  , setdescription] = useState("");


    return <div>
        <input type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}/><input/>
        <br />
        <br />
        <input type="text" placeholder="description"onChange={function(e){
            const value = e.target.value;
            setdescription(e.dessciption.value);
        }}/><input/>
        <br />
        <br /> 
        <button onClick={()={
              fetch("https://localhost:3000/todo" ,{
                method : "POST",
                body : JSON.stringify ({
                    title : title,
                    description : description
                }),
                headers : {
                    "content-type" : "application/json</div>"
                }
              }).then(async function (res){
                const json = await res.json();
               alert("todo added");
              })
        }}>Add a Todo</button>
</div>
}

*/


import React, { useState } from 'react';

export function CreateTodo() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(""); // Corrected the spelling of 'description'

    return (
        <div>
            <input
                type="text"
                placeholder="Title"
                onChange={function (e) {
                    const value = e.target.value;
                    setTitle(value); // Use the 'value' variable instead of accessing e.target.value directly
                }}
            />
            <br />
            <br />
            <input
                type="text"
                placeholder="Description"
                onChange={function (e) {
                    setDescription(e.target.value); // Corrected access to e.target.value
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
