import React,{Component} from 'react';
import { exportDefaultDeclaration } from '@babel/types';
class ErrorBoundary extends Component{

    state={
        hasError:false,
        errorMesage:'' 
    }
    componentDidCatch=(error,inof)=>{
        this.setState({hasError:true,errorMesage:error});

    }   
render()
{
    if(this.state.hasError)
    {
        return <h1>{this.state.errorMesage}</h1>
    }
    else
    {
    return this.props.children;
    }

}

}
export default ErrorBoundary;