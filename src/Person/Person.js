import React from 'react';
import PersonStyle from './Person.module.css';

const person = (props) => {
   
    return (
        <div className={PersonStyle.Person}  >
            <p onClick={props.click}> I'm in {props.name} and i {props.age} X Years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )    
};

export default person;