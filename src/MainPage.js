import React, { Component } from "react";
import "./App.css";
import SubmissionForm from "./NetlifyComponents/SubmissionForm";
import UpdateForm from "./NetlifyComponents/UpdateForm";
import LoginCred from "./NetlifyComponents/LoginCred";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";
import { Route, Switch } from "react-router";

class MainPage extends Component {

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
            return
    }
}
    
    export default observer(MainPage);
      