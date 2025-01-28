import React, { Component } from "react";

class MyForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
    this.handleName = this.handleName.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleName(e){
    this.setState({ name: e.target.value })
  }
handleEmail(e){
  this.setState({ email: e.target.value })
}

  handleSubmit (event){
    event.preventDefault()
    console.log(this.state.name,this.state.email);
    
   }

  render() {

    return (
       <div>
               <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleName} placeholder="Enter Name "></input> <br></br>
                <input onChange={this.handleEmail} placeholder="Enter Email"></input> <br></br>
                <button type="submit">Submit</button>
                </form>                                                                                                                                                                      

       </div>
   )
   }
     

}

export default MyForm;