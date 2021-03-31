import React from "react";
import "./App.css";
import SubmissionForm from "./NetlifyComponents/SubmissionForm";
import UpdateForm from "./NetlifyComponents/UpdateForm";
import LoginCred from "./NetlifyComponents/LoginCred";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";
import { Route, Switch } from "react-router";
import MainPage from "./MainPage";
import Navbar from "./Navbar";
import Footbar from "./Footbar"
import AboutSection from "./AboutSection"
import TeamSection from "./TeamSection"
import ViewDataSection from "./ViewDataSection"

function App() 
{
  

    return(



      
<div style={{marginLeft: '10px', marginRight: '10px'}}>

<Navbar></Navbar>
<Switch>
  <Route path="/about">
  
  <div className="d-flex flex-row" style ={{justifyContent : 'center', border: '2px solid black', height: '100', overflow:'auto'}}>
    <AboutSection></AboutSection>
    </div>
    
  </Route>
  <Route path="/tm">
  <div className="d-flex flex-row" style ={{justifyContent : 'center', border: '2px solid black', height: '100', overflow:'auto'}}>
    <TeamSection></TeamSection>
    </div>
  </Route>
      <Route path="/login">
      <LoginCred></LoginCred>
      </Route>
      <Route path="/submit">
      <SubmissionForm></SubmissionForm>

      </Route>
      <Route path="/update">
      <UpdateForm></UpdateForm>
      </Route>
       <Route path="/view">
      <ViewDataSection></ViewDataSection>
      </Route>
</Switch>
<Footbar></Footbar>
</div>


  
    );
}


export default observer(App);
