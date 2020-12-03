import React from "react";
import "./App.css";
import SubmissionForm from "./NetlifyComponents/SubmissionForm";
import UpdateForm from "./NetlifyComponents/UpdateForm";
import LoginCred from "./NetlifyComponents/LoginCred";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";
import { Route, Switch } from "react-router";


function App() 
{
  
  //console.log(AuthStore.username)
  if(AuthStore.username != null)
  {
    
    return (
   
   
      <div className="App">



      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="submit">FM120K</a>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
        <a className="nav-link" href="submit">Submit Sample <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="update">Update Sample</a>
      </li>
     
      
    </ul>
  </div>
</nav>
<Switch>
<Route path="/submit">
<header className="App-header">
          <p>FM120K Submission Page</p>
          <SubmissionForm></SubmissionForm> 
        </header>
        
      
</Route>
<Route path="/update">
<header className="App-header">
  
          <p>FM120 UPDATE PAGE</p>
          
          <UpdateForm></UpdateForm>
        
        </header>
</Route>
</Switch>
</div>
      
    );
  }

  else
  {
    return (
      <div className="App">
         <header className="App-header">
           <p>FM120K Submission Page</p>
           
           <LoginCred></LoginCred>
   
   
         </header>
       </div>
   )
   
  }
  
}

export default observer(App);
