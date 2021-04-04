import React, { Component } from "react";
import {NavLink} from 'react-router-dom';
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";
import AppStore from "./NetlifyComponents/AppStore";

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            activeButton : '',
        };
  
        this.handleClick = this.handleActiveButton.bind(this);
  
      };    
     
        
      handleActiveButton(e, id) 
      {
          e.preventDefault();
        
        this.activeButton = id;
        AppStore.setButtonId(id);
        console.log("Setting id to " + id)
       
         
      }
      
  
    render ()
    {
        
        
        
        return (    
            <div >
            {console.log(AppStore.getId())}
                
            <img src="https://www.kisr.edu.kw/static/images/kisr_logo.png" className="float-right"></img>
            <div className="d-flex flex-row" style ={{justifyContent : 'center'}}>
            <b style={{fontSize: '24px'}}>
            Database for the First Spatiotemporal Profile of Marine Microorganisms in Kuwait Bay
            </b>
            
           
            

            </div>


  
            
            
            <div className="d-flex flex-row" style ={{justifyContent : 'center'}}>
            
            <div style={{padding:'5px'}}>

            <button className="btn btn-outline-primary">

            <NavLink to='about' style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>About</NavLink>

            </button>
            </div>
            
            <div style={{padding:'5px'}}>

            <button className="btn btn-outline-primary">

            <NavLink to='tm' style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>Team Members</NavLink>

            </button>
            </div>
            
                        <div style={{padding:'5px'}}>

            <button className="btn btn-outline-primary">

            <NavLink to='view'  style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>View Data</NavLink>

            </button>
            </div>

          
            {AuthStore.username? <a></a> :  
            
                <div style={{padding:'5px'}}>

<button className="btn btn-outline-primary">

<NavLink to='login'  style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>Login</NavLink>

</button>
</div>}
           
           {AuthStore.username?             <div style={{padding:'5px'}}>

<button className="btn btn-outline-primary">

<NavLink to='submit'  style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>Submit Data</NavLink>

</button>
</div> : <a></a>}
           {AuthStore.username ?             <div style={{padding:'5px'}}>

<button className="btn btn-outline-primary">

<NavLink to='update'  style={{color:'black'}} activeClassName="active" activeStyle={{color:'Red', fontWeight:'bold'}}>Update Data</NavLink>

</button>
</div>: <a></a>}
            
                
            
            


          
           
            </div>
          
</div>  
        );
        
    }
}

export default observer (Navbar);