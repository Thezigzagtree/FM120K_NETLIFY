import React, { Component, } from "react";
import { observer } from "mobx-react";
import AuthStore from "./NetlifyComponents/AuthStore";

class TeamSection extends Component {

    
  
    render ()
    {


              
        return (
          
          <div className="flex-row" >
            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Saja Fakhraldeen</b></p>
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                Project Leader
                </p>
    
                </div>
            </div>

            <div>
                <div style={{ width: '18rem' }}>
                    <img src="" />
                    <div>
                    <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Sabeena F. Habeebullah</b></p>
                    <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                    Data analysis and reporting
                    </p>
    
                </div>
            

            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Surrendraraj Alagarsamy</b></p>
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                    16s rRNA PCR
                    </p>
                    <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                        Data analysis and reporting
                    </p>
    
                </div>
            </div>
            
            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Abdulmuhsen Ali</b></p>
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                    Database Development
                    </p>
    
                </div>
            </div>

            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Sakinah Al-Haddad</b></p>
                    <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                        Sample processing 
                        </p>
                        <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                        Nucliec acid extraction
                        </p>
                    
                    
    
                </div>
            </div>

            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Fathima Thaslim</b></p>
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                    Administrative assistance
                    </p>
                    
                </div>
            </div>
            
            <div style={{ width: '18rem' }}>
                <img src="" />
                <div >
                <p className="flex-row d-flex" style ={{justifyContent:'center'}}><b>Walid Al-Zikri</b></p>
                    <p className="flex-row d-flex" style ={{justifyContent:'center'}}>
                        Boat Captain
                    </p>
    
                </div>
            </div>
            

            </div>
            
            </div>
            </div>
        );
        
    }
}

export default observer (TeamSection);