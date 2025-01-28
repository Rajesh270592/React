import { Component } from "react";

export class FifthMethod extends Component {
    constructor() {
        super()
         this.state = {
            count : 0
         }
    }
    shouldComponentUpdate(){
       return false
    }

    componentDidUpdate(){
      return  console.log("Component did update calls");
        
    }
    render(){
        console.log("Render calls");
        return(
            <>
              <h1>{this.state.count}</h1>
              <button onClick={()=>{this.setState({count:this.state.count+1})}}>Update</button>
               
            </>
        )
    }
}