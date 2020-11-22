import React from "react";
import "./App.css";
import SubmissionForm from "./SubmissionForm";
import UpdateForm from "./UpdateForm";
import LoginCred from "./LoginCred";
import { observer } from "mobx-react";
import AuthStore from "./AuthStore";
import { Route, Switch } from "react-router";


function App() 
{
  
  //console.log(AuthStore.username)
  if(AuthStore.username != null)
  {
    
    return (
   
   
      <div className="App">



      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="submit">FM120K</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="submit">Submit Sample <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="update">Update Sample</a>
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
