import React from 'react';
import PersonStyle from './Person.module.css';

const person = (props) => {
   const rnd=Math.random();
   if(rnd >0.7){
       throw new Error('sothing is not working');
   }
    return (
        <div className={PersonStyle.Person}  >
            <p onClick={props.click}> I'm in {props.name} and i {props.age} X Years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )    
};

export default person;