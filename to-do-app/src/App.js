/* eslint-disable default-case */
import React, { useState, useEffect } from "react";
import "./App.css";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
   // State
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");
   const [filteredTodos, setFilteredTodos] = useState([]);

   // Use Effect     *takes two arguments*
   // RUN ONCE when the app starts
   useEffect(() => {
      getLocalTodos();
   }, []);

   useEffect(() => {
      filterHandler();
      saveLocalTodos();
   }, [todos, status]); //Everytime todos or status changes, run filterHandler()

   //  Functions
   const filterHandler = () => {
      switch (status) {
         case "completed":
            setFilteredTodos(todos.filter((item) => item.completed === true));
            break;
         case "uncompleted":
            setFilteredTodos(todos.filter((item) => !item.completed));
            break;
         default:
            setFilteredTodos(todos);
            break;
      }
   };

   //  Save to local storage
   const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
   };

   const getLocalTodos = () => {
      if (localStorage.getItem("todos") === null) {
         localStorage.setItem("todos", JSON.stringify([]));
      } else {
         let todoLocal = JSON.parse(localStorage.getItem("todos"));
         setTodos(todoLocal);
      }
   };

   return (
      <div className="App">
         <header>
            <h1>Rabie's To-Do-List</h1>
         </header>
         <Form
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setInputText={setInputText}
            setStatus={setStatus}
         />
         <TodoList
            todos={todos}
            setTodos={setTodos}
            filteredTodos={filteredTodos}
         />
      </div>
   );
}

export default App;
