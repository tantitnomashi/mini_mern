import './App.css';
import Todos from './components/demo/Todos'
import React from 'react';
import LoginComponent from './components/client/LoginComponent';
class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { 
     todos : [
       {
         title : 'first mission, we gonna do',
         done : true,
         mark : 3
       },
       {
        title : '2nd mission, we gonna do',
        done : false,
        mark : 5
      },
      {
        title : '3rd mission, we gonna do',
        done : true,
        mark : 1
      },
     ]
    };
  }
  render() {
    console.log(this.state.todos);

  return (
    <div className="App">
      {/* <h1>Todo List  </h1>
      <Todos todos={this.state.todos}></Todos> */}
      <LoginComponent />
    </div>
  );
  }
}


export default App;
