import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    person: [
      { name: 'bhaskar', age: 28 },
      { name: 'Prafulla', age: 29 },
      { name: 'pranita', age: 27 },
      { name: 'vaibhav', age: 27 }
    ]
  };

  switchNameHandler = (newName) => {
    //Don't Use this this.state.person[0].name="suresh";
    this.setState({
      person: [
        { name: newName, age: 34 },
        { name: 'pama', age: 35 },
        { name: 'Amol', age: 30 },
        { name: 'vaibhav', age: 27 }
      ]
    })

  }
  nameChangedHandler=(event) => {
    this.setState({
      person: [
        { name: 'max', age: 34 },
        { name: event.target.value, age: 35 },
        { name: 'Amol', age: 30 },
        { name: 'vaibhav', age: 27 }
      ]
    })
  }



  render() {
    const style={
      backgroundColor:'Red  ',
      font:'inherit',
      broder:'1px solid blue',
      padding:'8px'
    }
    return (
      <div className="App">
        <h1> This Is React learning Course</h1>
        <h2>APlication inside React</h2>
        <button  style={style} onClick={() => this.switchNameHandler('Shiva')}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
          click={this.switchNameHandler.bind(this, 'Mummy')}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, 'Daddy')}
          changed={this.nameChangedHandler}
            >My Hobbied:Racing </Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}
        />
        <Person
          name={this.state.person[3].name}
          age={this.state.person[3].age} />

      </div>
    );
  }
}

export default App;
