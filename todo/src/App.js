// import React, { Component } from 'react';
// // // // import logo from './logo.svg';
// import { connect } from 'react-redux';
// import { addTodo } from './actions';
// import TodoList from './components/TodoList';
// import './App.css';


// class App extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         newTodo: ''
//       };
//     }


// addTodo = text => {
//   let newTodo = {
//     todo: text,
//     complete: false
//   };
//   this.setState(prev => {
//     return { todos: [...prev.todos, newTodo] };
//   });
// };

// render() {
//   return (
//     <div className="App">
//         <TodoList />
//     </div>
//     );
//   }
// }

// function mapStateToProps(state){
//   return { todos: state.todos };
// }

// export default connect(mapStateToProps, { addTodo })(App);

import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/TodoList';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
    this.addTodo = this.addTodo.bind(this);
    this.updateNewTodo = this.updateNewTodo.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodo,
      complete: false
    });
    this.setState({
      newTodo: ''
    });
  }

  updateNewTodo(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.updateNewTodo}
            placeholder="new todo"
            value={this.state.newTodo}
          />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, { addTodo })(App);
