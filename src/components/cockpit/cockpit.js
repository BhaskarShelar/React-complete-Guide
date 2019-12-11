import React from "react";
import Classes from "./cockpit.module.css";




const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass = '';
    if (props.showPerson) {
        btnClass = Classes.red;
    }
    if (props.persons.length <= 3) {
        assignedClasses.push(Classes.red); //classes=red
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(Classes.bold); //classe=bold
    }

    return (
        <div className={Classes.Cockpit}>
            <h1> {props.appTitle}</ h1>
            <h3 className={assignedClasses.join(' ')}>Aplication inside React</h3>
            <button className={btnClass} onClick={props.togglePersonHandler}>Toggle Persons</button>
        </div>

    );
};

export default cockpit;