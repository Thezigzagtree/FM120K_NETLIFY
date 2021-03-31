import React, { Component } from "react";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";
import AppStore from "./NetlifyComponents/AppStore";

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            activeButton : ''
        };
  
        this.handleClick = this.handleActiveButton.bind(this);
  
      };    
     
        
      handleActiveButton(id) 
      {
         AppStore.setButtonId(id); 
      }
      
  
    render ()
    {
        
        
        
        return (    
            <div >
                
            <img src="https://www.kisr.edu.kw/static/images/kisr_logo.png" className="float-right"></img>
            <div className="d-flex flex-row" style ={{justifyContent : 'center'}}>
            <b style={{fontSize: '24px'}}>
            Database for the First Spatiotemporal Profile of Marine Microorganisms in Kuwait Bay
            </b>
            
           
            

            </div>


  
            <div className="d-flex flex-row" style ={{justifyContent : 'center'}}>
          
            <a href="about" style={{padding:'5px'}}>
            <button  type="Submit" className="btn btn-primary"  style={{backgroundColor:'red'} }>About</button>
            </a>
            
            <a href="tm" style={{padding:'5px'}}>
            <button className="btn btn-primary">Team Members</button>
            </a>
            
            <a href="view" style={{padding:'5px'}}>
            <button className="btn btn-primary"  >View Data</button>
            </a>
            
          
            {AuthStore.username? <a></a> :  <a href= "login" style={{padding:'5px'}}>
            <button type="Submit" className="btn btn-primary">Login</button>
            </a>}
           
           {AuthStore.username? <a href= "submit" style={{padding:'5px'}}>
                <button type="Submit" className="btn btn-primary">Submit</button>
            </a> : <a></a>}
           {AuthStore.username ? <a href= "Update" style={{padding:'5px'}}>
            <button type="Submit" className="btn btn-primary">Update</button>
            </a>: <a></a>}
            
                
            
            


          
           
            </div>
          
</div>  
        );
        
    }
}

export default observer (Navbar);