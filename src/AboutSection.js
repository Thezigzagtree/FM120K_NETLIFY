import React, { Component } from "react";
import { observer } from "mobx-react";
import map from './Map.jpg';


class AboutSection extends Component {

    
  
    render ()
    {
        var text = "This database displays information collected from a KISR project entitled \"Generating the First Metagenomic Profile of Marine Microorganisms in Kuwait Bay\"\nThe project was conducted between April 2019 and April 2021.\nIn that period, a total of six months-worth of samples were collected on a monthly basis (September 2019-February 2020).\nSamples were collected from three sites distributed throughout Kuwait Bay (see map to the right; Stations K6, 18 and A were used for sample collection).\nFrom those sites, samples were collected both from the surface of the Bay as well as from the bottom of the Bay, amounting to two samples per site per month.\n Thus, a total of 36 samples were collected and analyzed."
        var text2 = "All samples were processed by first passing through 0.2uM filters using a vacuum pump-based approach.\nFilter membranes were then used as the starting material for DNA extraction using the MO BIO PowerSoil® DNA Isolation Kit.\nExtracted DNA was then sent to Admera Health to perform the library preparation and metagenomic sequencing."
        var text3 = "This database contains all the data associated with all 36 samples, including DNA quantity and quality values along with links to the sequence data themselves.\nAdditionally, physiochemical parameters (e.g. temperature, salinity, turbidity, etc.) of the water and surrounding environment\n at the time of sampling were assessed and the values curated in the database."
        ;
        
        
        return (
            <div className="flex-row">
                  
            <div>
            <img src={map} className="float-right" style={{width: '360px', height: '360px'}}></img>
                <p className="flex-row d-flex" style ={{justifyContent:'center', fontSize:'24px'}}><b>Background</b></p>
                {text.split("\n").map((i, key) => {
                    return <p className="d-flex flex-row" style ={{justifyContent : 'center'}}key={key}>{i}</p>;
                })}
            </div>  
            
            
             <div className="flex-row">
            <div></div>
             <p className="flex-row d-flex" style ={{justifyContent:'center', fontSize:'24px'}}><b>Sample Processing</b></p>
                {text2.split("\n").map((i, key) => {
                    return <p className="d-flex flex-row" style ={{justifyContent : 'center'}}key={key}>{i}</p>;
                })}
            </div>
                    
            <div>
            <p className="flex-row d-flex" style ={{justifyContent:'center', fontSize:'24px'}}><b>Database Content</b></p>
                {text3.split("\n").map((i, key) => {
                    return <p className="d-flex flex-row" style ={{justifyContent : 'center'}}key={key}>{i}</p>;
                })}
            </div>  
                
            </div>
            
            
        );
        
    }
}

export default observer (AboutSection);