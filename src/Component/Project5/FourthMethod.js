import { Component } from "react";
import FourthPart2 from "./FourthPart2";

class FouthMethod extends Component{
    constructor()
    {
      super();
      this.state={
        show:true
      }
    }
    
    render() {
      return (
        <div className="App">
          {
            this.state.show? <FourthPart2 /> : <h4>Component is removed</h4>
          }
          <button onClick={()=>this.setState({show:false})}> Toogle</button>
        </div>
      )
    }
} 

export default FouthMethod