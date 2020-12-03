import React, { Component } from "react";
import "../App.css";
import AuthStore from "./AuthStore";
import { observer } from "mobx-react";

class LoginCred extends Component {
    constructor() {
      super();
      this.state = {
          username: null,
          password: "",
      }

      this.onTextChange = this.onTextChange.bind(this);
         this.login = this.login.bind(this);

    };    
    
    login(event) {
        event.preventDefault();
        AuthStore.AttemptLogin(this.state);
      }

    onTextChange(event) {
        this.setState({ [event.target.name]: event.target.value });
      }

    
    render ()
    {
        return(
            
            <form onChange={this.onTextChange} onSubmit={this.login}>            
                <div className="form-group">
                <label>Username</label>
        <input
            type="text"
            className="form-control"
            name="username"
            placeholder="username"
          ></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="password"
          ></input>
        </div>

        <button type="Submit" className="btn btn-primary">
              Login
            </button> 
            <div style = {{color:'red'}}>
            {AuthStore.loginError}
          </div>
          
        
        </form>
        
        );
        
    }
}

export default observer(LoginCred);
