import React,{ Component } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1> This Is React learning Course</h1>
      <h2>APP inside React</h2>
      <button>Swicth Name</button>
      <Person name ="bhaskar" age="28"/>
      <Person name ="vaibhav" age="27">My Hobbied:Racing </Person>
      <Person name ="prafulla" age="28"/>
    </div>
  );
}

export default App;
