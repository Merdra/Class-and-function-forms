import React from 'react';
import "./App.css";
import "./styles.css";

class ClassForm extends React.Component {
    constructor() {
        super()
        this.state ={text: "", email: "", password: ""};
    }

    handleTextChange = (event) => {
        this.setState({text: event.target.value})
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    
    handleSubmit = (event) => {
        event.preventDefault ();
        console.log(this.state.text, this.state.email, this.state.password);
    }
    render() {
        return (
            <div className="App">
                <h1>USING CLASS COMPONENT</h1>
               <form onSubmit={this.handleSubmit}>
                  <label>Name: </label> 
                  <input type= "text" value={this.state.text} onChange={this.handleTextChange}/>
                  <br />
                  <label>Email: </label> 
                   <input type= "email" value={this.state.email} onChange={this.handleEmailChange}/>
                   <br />
                   <label>Password: </label> 
                   <input type= "password" value={this.state.password} onChange={this.handlePasswordChange}/>
                   <br />
                   <button type= "submit">Submit</button>
                </form> 
            </div>
        )
    }
}

export default ClassForm;