import { Component } from "react";

class ThirdMethod extends Component{
    constructor(){
        super()
        console.log("Constructor call");
        this.state ={
        count : 0 
        }
    }
    componentDidMount(){
        console.log("Component Mounted");
        
    }
    componentDidUpdate(){
console.log("Component Update");

    }
    render(){
        console.log("Render call");
        
        return(
            <div>
                <p>{this.state.count}</p>
                 <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
            </div>
            
            
        )
    }
} 

export default ThirdMethod