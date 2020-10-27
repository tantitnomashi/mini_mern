import React from 'react';

class TodoItem extends React.Component{
    render() {
    return(
    <h1>{this.props.mission.title}, mark: {this.props.mission.mark}</h1> 
    );
  }
}
export default TodoItem;
