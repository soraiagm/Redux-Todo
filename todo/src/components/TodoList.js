import React from "react";
// import { connect } from 'react-redux';
import TodoInput from './TodoInput';

// // export default function Todolist(props) {
// //     const todos = props.todos.map((todo, index) => 
// //     <TodoInput todo={todo} key={index} />);
// //         return (
// //             <ul>
// //                 { todos }
// //             </ul>
// //     );
// // }



export default (props) => {
  const todos = props.todos.map((todo, i) => <TodoInput todo={todo} key={i} index={i} />);
  return (
    <ul className="Bullet">
      { todos }
    </ul>
  );
};

  