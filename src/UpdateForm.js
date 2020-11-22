import React, { Component } from "react";
import "./App.css";
import SampleStore from "./SampleStore";

class UpdateForm extends Component 
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
      barromPressure: 0,
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
  }

  clearSample() {
    window.location.reload(false);
    
  }

  onTextChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    
  }
  addSample(event) {
    event.preventDefault();
    SampleStore.findSample(this.state);
  }

  render() {
    return (
      <div>
        <form onChange={this.onTextChange} onSubmit={this.findSample}>
        <div className="form-group">
          <label>Sample Number</label>
          <input
            type="text"
            className="form-control"
            name="sampleNumber"
            placeholder="Sample Number"
          ></input>
        </div>
       
      </form>
      <button onClick={SampleStore.findSample()}>
              Find Sample
            </button>
      </div>
      
    );
  }
}

export default UpdateForm;
