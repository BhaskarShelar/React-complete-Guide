import React, { Component } from 'react';
import CssStyle from './App.module.css';
import Persons from "../components/Persons/Persons";
import Cockpit from '../components/cockpit/cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'bhaskar', age: 28 },
      { id: '2', name: 'pranita', age: 27 },
      { id: '3', name: 'Prafulla', age: 29 },
      { id: '4', name: 'vaibhav', age: 27 }
    ],
    otherState: 'some other value',
    showPersons: false
  };

  switchNameHandler = (newName) => {
    //Don't Use this this.state.person[0].name="suresh";
    this.setState({
      persons: [
        { name: newName, age: 34 },
        { name: 'pama', age: 35 },
        { name: 'Amol', age: 30 },
        { name: 'vaibhav', age: 27 }
      ]
    })

  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id == id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }


  render() {


    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;

    }


    return (

      <div className={CssStyle.App}>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          togglePersonHandler={this.togglePersonHandler}/>
        {persons}

      </div>

    );
  }
}

export default App;
