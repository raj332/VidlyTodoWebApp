import React from 'react';
import { TodoItem } from './TodoItem';
export const Todos= (props) => {
  let mystyle={
    minHeight:"50rem",
  }
  return(
      <div className='container my-3' style={mystyle} >
      <h3 className='text-center my-4'>Todos List </h3>
      {
      props.todos.length===0 ?"No todo to Display":
       props.todos.map((todo)=>{
        return(<><TodoItem todo={todo} key={todo.sno}onDelete={props.onDelete}/><hr></hr></>) 
      })}
      
      
      </div>
  );
};
