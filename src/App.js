import Header from "./components/Header";
import { Todos } from "./components/Todos";
import { Footer } from "./components/Footer";
import React, { useState } from "react";
import { Addtodo } from "./components/Addtodo";
export default function App() {
  let initTodo=null;
  
  if(localStorage.getItem("todos")===null){
  initTodo=[];
  }else{
    initTodo=JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("Iam ondelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      }));
      localStorage.getItem("todos");
  };
 
  const addTodo = (title, desc) => {
  let sno;
    if(todos.length===0){
      sno=0;
    }else{ sno = todos[todos.length - 1].sno + 1;}
   
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos,myTodo]);
    console.log(myTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);

  return (
    <>
      <Header title="To-dos" searchbar={false} />
      <Addtodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}
