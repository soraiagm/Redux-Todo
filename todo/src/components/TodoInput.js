      
  import React, { Component } from 'react';
    import { toggleComplete } from '../actions';
    import { connect } from 'react-redux';
    
    class TodoInput extends Component {
    
      toggleComplete(event) {
        this.props.toggleComplete(this.props.index);
      }
    
      render() {
        return (
          <li>
            <input className="Input"
              type="checkbox"
              onChange={this.toggleComplete.bind(this)}
              />
            {this.props.todo.value}
          </li>
        );
      }
    }
    
    export default connect(null, { toggleComplete })(TodoInput);
    