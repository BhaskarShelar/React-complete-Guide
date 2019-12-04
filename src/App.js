import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [
      { id:'1', name: 'bhaskar', age: 28 },
      { id:'2', name: 'pranita', age: 27 },
      { id:'3', name: 'Prafulla', age: 29 },
      { id:'4', name: 'vaibhav', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //Don't Use this this.state.person[0].name="suresh";
    this.setState({
      persons: [
        {  name: newName, age: 34 },
        {  name: 'pama', age: 35 },
        {  name: 'Amol', age: 30 },
        {  name: 'vaibhav', age: 27 }
      ]
    })

  }
  nameChangedHandler = (event,id) => {
    const personIndex=this.state.persons.findIndex(p =>{
      return p.id==id;
    });
    const person={
    ...this.state.persons[personIndex]
    };
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;
    this.setState({persons:persons})
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons=[...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  

  render() {
    const style = {
      backgroundColor: 'green',
      color:'white',
      font: 'inherit',
      broder: '1px solid blue',
      padding: '8px'      
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) =>{
            return   <Person  click={()=>this.deletePersonHandler(index)}
             name={person.name} age={person.age} 
             key={person.id}
             changed={(event)=>this.nameChangedHandler(event,person.id)}/>
          })}
          
        </div>
      );
      style.backgroundColor='red';
      
    }
    const classes=[];
      if(this.state.persons.length<=3)
      {
        classes.push('red'); //classes=red
      }
      if(this.state.persons.length<=2)
      {
        classes.push('bold'); //classe=bold
      }

    return (
      
      <div className="App">
        <h1> This Is React learning Course</ h1>
        <h3 className={classes.join(' ')}>Aplication inside React</h3>
        <button style={style} onClick={this.togglePersonHandler}>Toggle Persons</button>

        {persons}

      </div>
       
    );
  }
}

export default App;
