import React, {useState} from 'react';
import "./App.css";
import "./styles.css";

function FunctionForm () {
    const [text, setText] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const handleTextChange = (event) => {
    setText(event.target.value);
}

const handleEmailChange = (event) => {
    setEmail(event.target.value);
}

const handlePasswordChange = (event) => {
    setPassword(event.target.value);
}

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, email, password);
}
    return (
        <div className="App">
             <h1>USING FUNCTION COMPONENT</h1>
               <form onSubmit={handleSubmit}>
                  <label>Name: </label> 
                  <input type= "text" value={text} onChange={handleTextChange}/>
                  <br />
                  <label>Email: </label> 
                   <input type= "email" value={email} onChange={handleEmailChange}/>
                   <br />
                   <label>Password: </label> 
                   <input type= "password" value={password} onChange={handlePasswordChange}/>
                   <br />
                   <button type= "submit">Submit</button>
                </form>
        </div>
    );
}

export default FunctionForm;
