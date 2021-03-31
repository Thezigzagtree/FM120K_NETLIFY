import React, { Component } from "react";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";

class Footbar extends Component {


  
    render ()
    {
        
        
        return (    

<div>


  
            <div className="d-flex flex-row" style ={{justifyContent : 'center'}}>
          
          
            <a href="https://www.kisr.edu.kw/" style={{padding:'5px'}}>
            <button type="Submit" className="btn btn-primary">KISR</button>
            </a>
            
            <a href="https://genohub.com/" style={{padding:'5px'}}>
            <button type="Submit" className="btn btn-primary">Genohub</button>
            </a>
            <a href="https://www.admerahealth.com/" style={{padding:'5px'}}>
            <button type="Submit" className="btn btn-primary">Admera Health</button>
            </a>
          
            
                
            
            


          
           
            </div>
          
</div>  
        );
        
    }
}

export default observer (Footbar);