
import React from 'react';
import TodoItem from './TodoItem'
class Todos extends React.Component{
    render() {
    /**  return this.props.todos.map(
        (item) => (
            <h1>{item.title}</h1> 
        )
    );
    } */
    return this.props.todos.map(
        (item) => (
            <TodoItem mission={item}></TodoItem>
        )
    );
    }
  }

export default Todos;
