import "./App.css"; 
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState,useEffect } from "react";

function App() {
  //State Stuff
  const [inputText,setInputText]=useState("");
  const [todos, setTodos]=useState(()=>JSON.parse(localStorage.getItem("todos")) || []);           /////Lazy state initialization
  const[status,setStatus]=useState("all");
  const [filterTodos,setFilterTodos]=useState([]);

  //Run once when app starts
  //useEffect

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);
  
  //Function
  const filterHandler=()=>{
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo=>todo.completed===true))
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter(todo=>todo.completed===false))
        break;
      default:
        setFilterTodos(todos);
        break;
    }
  };

  //Save To Local
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  };


  return (
    <div className="App">
      <header>
        <h1>AR7's Todo List</h1>
      </header>
      <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos} status={status} setStatus={setStatus}></Form>
      <TodoList todos={todos} setTodos={setTodos} filterTodos={filterTodos}></TodoList>
    </div>
  );
}

export default App;
