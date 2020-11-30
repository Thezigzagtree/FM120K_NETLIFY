import React, { Component } from "react";
import "./App.css";
import SampleStore from "./SampleStore";
import { observer } from "mobx-react";

class UpdateForm extends Component 
{
  constructor() {
    super();
    this.state = {
      sampleToFind: "",
      editSample: "",
      sampleNumber: "",
      depth: "",
      sampleLabel: "",
      sampleStation: "",

      sampleGPS_N: "",
      sampleGPS_E: "",
      sampleDate: Date.now,
      sampleTime: Date.now,
      sampleVolume: 0,
      processed: "",

      storage: "",
      processedVolume: 0,
      remainingVolume: 0,

      extractionKit: "",
      sampleDepth: 0,
      sampleO2Level: 0,
      sampleTemp: 0,
      sampleSalinity: 0,
      airTempInShade: 0,
      cloudCover: "",
      windSpeed: 0,
      seaColor: "",
      tide: "",
      RH: 0,
      windDirection: "",
      baromPressure: 0,
      waveHeight: 0,
      secchiDisk: 0,
      TotalDepth: 0,
      elutionVolume: 0,
      Concentration: 0,
      DNA_Concentration: 0,
      Carb_Concentration: 0,
      TotalYield: 0,
      F_readfile: "",
      R_readfile: "",
      Notes: "",
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.findSample = this.findSample.bind(this);
    this.clearSample = this.clearSample.bind(this);
  }

  

  clearSample() {
    window.location.reload(false); 
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    
  }
  findSample(event) {
    event.preventDefault();

    SampleStore.findSample(this.state,this);
  }

  render() {
    if(!SampleStore.editSample)
    {    
    return (

      <div>
        <form onChange={this.onTextChange} onSubmit={this.findSample}>
        <div className="form-group">
          <label>Sample Number</label>
          <input
            type="text"
            className="form-control"
            name="sampleNumber"
            placeholder="Find Sample"
          ></input>
        </div>
        <button type="Submit" className="btn btn-primary">
              Find Sample
            </button> 
      </form>
      
      </div>
      
    );}

    else
    {
      
      return (
      <div>
      <label style = {{color:'yellow'}}>Editting Sample {this.state["sampleNumber"]}</label>        
        <form onChange={this.onTextChange} onSubmit={this.addSample}>
        <div className="form-group">
        </div>
        <div className="form-group">
          <label>Sample Label</label>
          <input
            type="text"
            className="form-control"
            name="sampleLabel"
            placeholder={this.state["sampleLabel"]}
          ></input>
        </div>
        
        <div className="form-group">
          <label>Sample Station</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleStation"]}</div>
          <select multiple className="form-control" name="sampleStation">
            <option>18</option>
            <option>A</option>
            <option>K6</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <div>{this.state['depth']}</div>
          <label>Depth (m)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["depth"]}</div>
          <select multiple className="form-control" name="depth" defaultValue={[this.state["depth"]]}>
            <option>Surface</option>
            <option>Bottom</option>
          </select>
        </div>

        <div className="form-group">
          <label>Sample GPS N</label>
          <input
            type="text"
            className="form-control"
            name="sampleGPS_N"
            placeholder={this.state['sampleGPS_N']}
          ></input>
        </div>

        <div className="form-group">
          <label>Sample GPS E</label>
          <input
            type="text"
            className="form-control"
            name="sampleGPS_E"
            placeholder={this.state['sampleGPS_E']}
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Date and Time</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleDate"]}</div>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleTime"]}</div>
          <input type="date" className="form-control" name="sampleDate"></input>
          <input type="time" className="form-control" name="sampleTime"></input>
        </div>

        <div className="form-group">
          <label>Sample Volume (L)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleVolume"]}</div>
          <input
            type="text"
            className="form-control"
            name="sampleVolume"
            placeholder={this.state["sampleVolume"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Processed Status</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["processed"]}</div>
          <select multiple className="form-control" name="processed">
            <option>Processed</option>
            <option>Sent for Analysis</option>
            <option>Analysis Received</option>
          </select>
        </div>

        <div className="form-group">
          <label>Storage Condition</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["storage"]}</div>
          <select multiple className="form-control" name="storage">
            <option>Room Temperature</option>
            <option>4 Degrees Celsius</option>
            <option>Minus 20 Celsius</option>
            <option>Minus 80 Celsius</option>
          </select>
        </div>

        <div className="form-group">
          
          <label>Processed Volume (L)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["processedVolume"]}</div>
          <input
            type="text"
            className="form-control"
            name="processedVolume"
            placeholder={this.state["processedVolume"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Remaning Volume (L)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["remainingVolume"]}</div>
          <input
            type="text"
            className="form-control"
            name="remainingVolume"
            placeholder={this.state["remainingVolume"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Extraction Kit</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["extractionKit"]}</div>
          <select multiple className="form-control" name="extractionKit">
            <option>Qiagen DNeasy Animal and Tissue Kit</option>
            <option>Macherey-Nagel Nucleospin Kit</option>
            <option>MO BIO Powersoil DNA Isolation Kit</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Collection Depth (m)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleDepth"]}</div>
          <input
            type="text"
            className="form-control"
            name="sampleDepth"
            placeholder={this.state["sampleDepth"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Sample O2 Level</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleO2Level"]}</div>
          <input
            type="text"
            className="form-control"
            name="sampleO2Level"
            placeholder={this.state["sampleO2Level"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Temperature (℃)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleTemp"]}</div>
          <input
            type="text"
            className="form-control"
            name="sampleTemp"
            placeholder={this.state["sampleTemp"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Salinity (psu)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["sampleSalinity"]}</div>
          <input
            type="text"
            className="form-control"
            name="sampleSalinity"
            placeholder={this.state["sampleSalinity"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Air Temperature in Shade (℃)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["airTempInShade"]}</div>
          <input
            type="number"
            className="form-control"
            name="airTempInShade"
            placeholder={this.state["airTempInShade"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Cloud Cover</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["cloudCover"]}</div>
          <input
            type="number"
            className="form-control"
            name="cloudCover"
            placeholder={this.state["cloudCover"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Sea Color</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["seaColor"]}</div>
          <input
            type="number"
            className="form-control"
            name="seaColor"
            placeholder={this.state["seaColor"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Tide </label>
          <div style = {{color:'yellow'}}>Previous value {this.state["tide"]}</div>
          <select multiple className="form-control" name="tide">
            <option>High Tide</option>
            <option>Mid Tide</option>
            <option>Low tide</option>
          </select>
        </div>

        <div className="form-group">
          <label>RH</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["RH"]}</div>
          <input
            type="text"
            className="form-control"
            name="RH"
            placeholder={this.state["RH"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Wind Direction (Two Letter))</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["windDirection"]}</div>
          <input
            type="text"
            className="form-control"
            name="windDirection"
            placeholder={this.state["windDirection"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Wind Speed (Km/h)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["windSpeed"]}</div>
          <input
            type="text"
            className="form-control"
            name="windSpeed"
            placeholder={this.state["windSpeed"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Barom Pressure</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["baromPressure"]}</div>
          <input
            type="text"
            className="form-control"
            name="baromPressure"
            placeholder={this.state["baromPressure"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Wave Height (m)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["waveHeight"]}</div>
          <input
            type="text"
            className="form-control"
            name="waveHeight"
            placeholder={this.state["waveHeight"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Secchi Disk</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["secchiDisk"]}</div>
          <input
            type="text"
            className="form-control"
            name="secchiDisk"
            placeholder={this.state["secchiDisk"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Total Depth (m)</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["TotalDepth"]}</div>
          <input
            type="text"
            className="form-control"
            name="TotalDepth"
            placeholder={this.state["TotalDepth"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Elution Volume</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["elutionVolume"]}</div>
          <input
            type="number"
            className="form-control"
            name="elutionVolume"
            placeholder={this.state["elutionVolume"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Concentration</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["Concentration"]}</div>
          <input
            type="number"
            className="form-control"
            name="Concentration"
            placeholder={this.state["Concentration"]}
          ></input>
        </div>

        <div className="form-group">
          <label>260/280</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["DNA_Concentration"]}</div>
          <input
            type="number"
            className="form-control"
            name="DNA_Concentration"
            placeholder={this.state["DNA_Concentration"]}
          ></input>
        </div>

        <div className="form-group">
          <label>260/230</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["Carb_Concentration"]}</div>
          <input
            type="number"
            className="form-control"
            name="Carb_Concentration"
            placeholder={this.state["Carb_Concentration"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Total Yield</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["TotalYield"]}</div>
          <input
            type="number"
            className="form-control"
            name="TotalYield"
            placeholder={this.state["TotalYield"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["Notes"]}</div>
          <input
            type="text"
            className="form-control lg"
            name="Notes"
            placeholder={this.state["Notes"]}
          ></input>
        </div>

        <div className="form-group">
          <label>Forward Readfile</label>
          <div style = {{color:'yellow'}}>Previous value {this.state["F_readfile"]}</div>
          <input
            type="text"
            className="form-control lg"
            name="F_readfile"
            placeholder={this.state["F_readfile"]}
          ></input>

          <div className="form-group">
            <label>Reverse Readfile</label>
            <div style = {{color:'yellow'}}>Previous value {this.state["R_readfile"]}</div>
            <input
              type="text"
              className="form-control lg"
              name="R_readfile"
              placeholder={this.state["R_readfile"]}
            ></input>

            <br></br>
            
            <button style = {{position: "fixed", right:5, bottom:100  }} type="Submit" className="btn btn-primary">
              Update Sample {this.state['sampleNumber']}
            </button>
          </div>
        
          
        </div>
      </form>
      <button style = {{position: "fixed", right:5, bottom:50  }}onClick={this.clearSample}>
              Clear Sample
            </button>
        
      </div>
      )
    }
  }
}

export default observer(UpdateForm);
