import React,{Component} from 'react';
import PersonStyle from './Person.module.css';


class Person extends Component{
    render(){
        return(
        <div className={PersonStyle.Person}  >
            <p onClick={this.props.click}> I'm in {this.props.name} and i {this.props.age} X Years old!</p>
            <p>{this.props.children}</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
        )
    }
}
 
export default Person;