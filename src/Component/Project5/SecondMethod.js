import { Component } from "react";

class SecondMethod extends Component{
    constructor(){
        super()
        console.log("Constructor call");
        
    }
    componentDidMount(){
        console.log("Component Mounted");
        
    }
    render(){
        console.log("Render call");
        
        return(
            <div>
                 
            </div>
            
            
        )
    }
} 

export default SecondMethod