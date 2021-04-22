import React, { Component } from "react";
import { observer } from "mobx-react";
import SampleStore from "./NetlifyComponents/SampleStore";
import AuthStore from "./NetlifyComponents/AuthStore";

class ViewDataSection extends Component {
  
    render ()
    {   
        if (AuthStore.samplesLoaded)
        {
        return (
        <div>
            <table className="table table-hover table-bordererd">
            
                <thead>
                    
                    <tr>
                        <th scope="col"><center>Sample Number</center></th>
                        <th scope="col"><center>Depth</center></th>
                        <th scope="col"><center>Station</center></th>
                        <th scope="col"><center>Date</center></th>
                        <th scope="col"><center>Time</center></th>
                        <th scope="col"><center>N GPS Coordinates</center></th>
                        <th scope="col"><center>E GPS Coordinates</center></th>
                        
                        <th scope="col"><center>Volume(L)</center></th>
                        <th scope="col"><center>Storage</center></th>
                        <th scope="col"><center>Processed</center></th>
                        <th scope="col"><center>Depth (m)</center></th>
                        <th scope="col"><center>O2 Levels</center></th>
                        <th scope="col"><center>Temp (oC)</center></th>
                        <th scope="col"><center>Salinity</center></th>
                        <th scope="col"><center>Air temp in Shade (oC)</center></th>
                        <th scope="col"><center>Cloud cover</center></th>
                        <th scope="col"><center>Wind Speed (kph)</center></th>
                        <th scope="col"><center>Sea color</center></th>
                        <th scope="col"><center>Tide</center></th>
                        <th scope="col"><center>RH%</center></th>
                        <th scope="col"><center>Wind direction</center></th>
                         <th scope="col"><center>Barom Pressure</center></th>
                         <th scope="col"><center>Wave height</center></th>
                         <th scope="col"><center>Succhi disc</center></th>
                         <th scope="col"><center>Total depth (m)</center></th>
                    </tr>
                </thead>
                <tbody id="cursorPointer">
                    {/*rendering data*/}
                    
                    {AuthStore.allSamples.map(item =>
                    <tr>
                    <td><center>{item.sampleNumber}</center></td>

                    <td><center>{item.depth}</center></td>
                    <td><center>{item.sampleStation}</center></td>
                    <td><center>{item.sampleDate}</center></td>
                    <td><center>{item.sampleTime}</center></td>
                    <td><center>{item.sampleGPS_N}</center></td>
                    <td><center>{item.sampleGPS_E}</center></td>
                    <td><center>{item.sampleVolume}</center></td>
                    <td><center>{item.storage}</center></td>
                    <td><center>{item.processed}</center></td>

                    <td><center>{item.sampleDepth}</center></td>
                    <td><center>{item.sampleO2Level}</center></td>
                    <td><center>{item.sampleTemp}</center></td>
                    <td><center>{item.sampleSalinity}</center></td>
                    <td><center>{item.airTempInShade}</center></td>
                    <td><center>{item.cloudCover}</center></td>
                    <td><center>{item.windSpeed}</center></td>
                    <td><center>{item.seaColor}</center></td>
                    <td><center>{item.tide}</center></td>
                    <td><center>{item.RH}</center></td>
                    <td><center>{item.windDirection}</center></td>
                    <td><center>{item.baromPressure}</center></td>
                    <td><center>{item.waveHeight}</center></td>
                    <td><center>{item.secchiDisk}</center></td>
                    <td><center>{item.TotalDepth}</center></td>
                    </tr>
            )}
                 
               
                </tbody>
            </table>

        </div>
        
            
        );
        }
        else
        return (
            <div>
                LOADING SAMPLES
            </div>
        )
        
    }
}

export default observer (ViewDataSection);