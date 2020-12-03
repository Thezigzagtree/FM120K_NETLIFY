import React, { Component } from "react";
import "../App.css";
import SampleStore from "./SampleStore";


class SubmissionForm extends Component 
{
  constructor() {
    super();
    this.state = {
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
    this.addSample = this.addSample.bind(this);
    this.clearSample = this.clearSample.bind(this);
    this.findSample = this.findSample.bind(this);
    
  }

  clearSample() {
    window.location.reload(false);
    
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
      
  }
  addSample(event) {
    event.preventDefault();
    SampleStore.addSample(this.state);

  }

  findSample(event) {
    event.preventDefault();
    SampleStore.findSample(this.state);
  }
  

  render() {
    return (
      <div>
        <form onChange={this.onTextChange} onSubmit={this.addSample}>
        <div className="form-group">
          <label>Sample Number</label>
          <input
            type="text"
            className="form-control"
            name="sampleNumber"
            placeholder="Sample Number"
          ></input>
        </div>
        <div className="form-group">
          <label>Sample Label</label>
          <input
            type="text"
            className="form-control"
            name="sampleLabel"
            placeholder="Sample Label"
          ></input>
        </div>
        <div className="form-group">
          <label>Sample Station</label>
          <select multiple className="form-control" name="sampleStation">
            <option>18</option>
            <option>A</option>
            <option>K6</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Depth (m)</label>
          <select multiple className="form-control" name="depth">
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
            placeholder="Sample GPS N"
          ></input>
        </div>

        <div className="form-group">
          <label>Sample GPS E</label>
          <input
            type="text"
            className="form-control"
            name="sampleGPS_E"
            placeholder="Sample GPS E"
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Date and Time</label>
          <input type="date" className="form-control" name="sampleDate"></input>
          <input type="time" className="form-control" name="sampleTime"></input>
        </div>

        <div className="form-group">
          <label>Sample Volume (L)</label>
          <input
            type="text"
            className="form-control"
            name="sampleVolume"
            placeholder="Sample Volume"
          ></input>
        </div>

        <div className="form-group">
          <label>Processed Status</label>
          <select multiple className="form-control" name="processed">
            <option>Processed</option>
            <option>Sent for Analysis</option>
            <option>Analysis Received</option>
          </select>
        </div>

        <div className="form-group">
          <label>Storage Condition</label>
          <select multiple className="form-control" name="storage">
            <option>Room Temperature</option>
            <option>4 Degrees Celsius</option>
            <option>Minus 20 Celsius</option>
            <option>Minus 80 Celsius</option>
          </select>
        </div>

        <div className="form-group">
          <label>Processed Volume (L)</label>
          <input
            type="text"
            className="form-control"
            name="processedVolume"
            placeholder="Processed Volume"
          ></input>
        </div>

        <div className="form-group">
          <label>Remaning Volume (L)</label>
          <input
            type="text"
            className="form-control"
            name="remainingVolume"
            placeholder="Remaining Volume"
          ></input>
        </div>

        <div className="form-group">
          <label>Extraction Kit</label>
          <select multiple className="form-control" name="extractionKit">
            <option>Qiagen DNeasy Animal and Tissue Kit</option>
            <option>Macherey-Nagel Nucleospin Kit</option>
            <option>MO BIO Powersoil DNA Isolation Kit</option>
            <option>Other</option>
          </select>
        </div>

        <div className="form-group">
          <label>Collection Depth (m)</label>
          <input
            type="text"
            className="form-control"
            name="sampleDepth"
            placeholder="Sample Depth"
          ></input>
        </div>

        <div className="form-group">
          <label>Sample O2 Level</label>
          <input
            type="text"
            className="form-control"
            name="sampleO2Level"
            placeholder="Sample O2 Level"
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Temperature (℃)</label>
          <input
            type="text"
            className="form-control"
            name="sampleTemp"
            placeholder="Sample Temperature in Celsius"
          ></input>
        </div>

        <div className="form-group">
          <label>Sample Salinity (psu)</label>
          <input
            type="text"
            className="form-control"
            name="sampleSalinity"
            placeholder="Sample Salinity"
          ></input>
        </div>

        <div className="form-group">
          <label>Air Temperature in Shade (℃)</label>
          <input
            type="number"
            className="form-control"
            name="airTempInShade"
            placeholder="Air Temperature in Shade"
          ></input>
        </div>

        <div className="form-group">
          <label>Cloud Cover</label>
          <input
            type="number"
            className="form-control"
            name="cloudCover"
            placeholder="Cloud Cover"
          ></input>
        </div>

        <div className="form-group">
          <label>Sea Color</label>
          <input
            type="number"
            className="form-control"
            name="seaColor"
            placeholder="Sea Color"
          ></input>
        </div>

        <div className="form-group">
          <label>Tide </label>
          <select multiple className="form-control" name="tide">
            <option>High Tide</option>
            <option>Mid Tide</option>
            <option>Low tide</option>
          </select>
        </div>

        <div className="form-group">
          <label>RH</label>
          <input
            type="text"
            className="form-control"
            name="RH"
            placeholder="RH"
          ></input>
        </div>

        <div className="form-group">
          <label>Wind Direction (Two Letter))</label>
          <input
            type="text"
            className="form-control"
            name="windDirection"
            placeholder="NW"
          ></input>
        </div>

        <div className="form-group">
          <label>Wind Speed (Km/h)</label>
          <input
            type="text"
            className="form-control"
            name="windSpeed"
            placeholder="Wind Direction"
          ></input>
        </div>

        <div className="form-group">
          <label>Barom Pressure</label>
          <input
            type="text"
            className="form-control"
            name="baromPressure"
            placeholder="Barom Pressure"
          ></input>
        </div>

        <div className="form-group">
          <label>Wave Height (m)</label>
          <input
            type="text"
            className="form-control"
            name="waveHeight"
            placeholder="Wave Height"
          ></input>
        </div>

        <div className="form-group">
          <label>Secchi Disk</label>
          <input
            type="text"
            className="form-control"
            name="secchiDisk"
            placeholder="Secchi Disk"
          ></input>
        </div>

        <div className="form-group">
          <label>Total Depth (m)</label>
          <input
            type="text"
            className="form-control"
            name="TotalDepth"
            placeholder="Total Depth"
          ></input>
        </div>

        <div className="form-group">
          <label>Elution Volume</label>
          <input
            type="number"
            className="form-control"
            name="elutionVolume"
            placeholder="Elution Volume"
          ></input>
        </div>

        <div className="form-group">
          <label>Concentration</label>
          <input
            type="number"
            className="form-control"
            name="Concentration"
            placeholder="Concentration"
          ></input>
        </div>

        <div className="form-group">
          <label>260/280</label>
          <input
            type="number"
            className="form-control"
            name="DNA_Concentration"
            placeholder="DNA Concentration"
          ></input>
        </div>

        <div className="form-group">
          <label>260/230</label>
          <input
            type="number"
            className="form-control"
            name="Carb_Concentration"
            placeholder="Carbohydrate Concentration"
          ></input>
        </div>

        <div className="form-group">
          <label>Total Yield</label>
          <input
            type="number"
            className="form-control"
            name="TotalYield"
            placeholder="Total Yield"
          ></input>
        </div>

        <div className="form-group">
          <label>Notes</label>
          <input
            type="text"
            className="form-control lg"
            name="Notes"
            placeholder="Notes"
          ></input>
        </div>

        <div className="form-group">
          <label>Forward Readfile</label>
          <input
            type="text"
            className="form-control lg"
            name="F_readfile"
            placeholder="Forward Readfile"
          ></input>

          <div className="form-group">
            <label>Reverse Readfile</label>
            <input
              type="text"
              className="form-control lg"
              name="R_readfile"
              placeholder="Reverse Readfile"
            ></input>

            <br></br>
            <button style = {{position: "fixed", right:5, bottom:100  }} type="Submit" className="btn btn-primary">
              Submit Sample
            </button>
          </div>
        
          
        </div>
      </form>
      <button style = {{position: "fixed", right:5, bottom:50  }} onClick={this.clearSample}>
              Clear Sample
            </button>
        
      </div>
      
    );
  }
}

export default SubmissionForm;
