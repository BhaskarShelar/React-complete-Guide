import React from 'react';

const person = (props) => {
    return (
        <div>
            <p> I'm in {props.name} and i {props.age} X Years old!</p>
            <p>{props.children}</p>
        </div>
    )    
};

export default person;