import React from 'react';
import Todo from './Todo';


const TodoList = ({todos,setTodos,filterTodos}) => {
    return ( 
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo=>(
                    <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text}></Todo>
                ))}
            </ul>
        </div>
     );
}
 
export default TodoList;