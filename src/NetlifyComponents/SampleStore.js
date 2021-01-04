import { decorate, observable } from "mobx";
import axios from "axios";
import errorStore from "./ErrorStore";



const instance = axios.create({
  baseURL: "",
});

class SampleStore {
  constructor() {
    this.sampleNumber = "";
    this.depth = "";
    this.sampleLabel = "";
    this.sampleStation = "";
    this.sampleGPS_N = "";
    this.sampleGPS_E = "";
    this.sampleDate = Date.now;
    this.sampleTime = Date.now;
    this.sampleVolume = 0;
    this.processed = "";
    this.storage = "";
    this.processedVolume = 0;
    this.remainingVolume = 0;
    this.extractionKit = "";
    this.sampleDepth = 0;
    this.sampleO2Level = 0;
    this.sampleTemp = 0;
    this.sampleSalinity = 0;
    this.airTempInShade = 0;
    this.cloudCover = "";
    this.windSpeed = 0;
    this.seaColor = "";
    this.tide = "";
    this.RH = 0;
    this.windDirection = "";
    this.baromPressure = 0;
    this.waveHeight = 0;
    this.secchiDisk = 0;
    this.TotalDepth = 0;
    this.elutionVolume = 0;
    this.Concentration = 0;
    this.DNA_Concentration = 0;
    this.Carb_Concentration = 0;
    this.TotalYield = 0;
    this.F_readfile = "";
    this.R_readfile = "";
    this.Notes = "";
    this.editSample = false;
  }

  putSample (Sample) {
    console.log(Sample);
    axios
      .put(`https://fm120k.com/update/${Sample.sampleNumber}`, Sample)
      .then((res) => res.data)
      .then(() => alert("Successfully put Sample"))
      .catch(err => {
        errorStore.CopyErrors(err.response.data);
       // console.log(err.response.data);
        
    }) 
     
    }

  addSample(Sample) {
    console.log(Sample);
    axios
      .post("https://fm120k.com/create/", Sample)
      .then((res) => res.data)
      .then(() => alert("Successfully added Sample"))
      .catch(err => {
        errorStore.CopyErrors(err.response.data);
       // console.log(err.response.data);
        
    }) 
     
    }

    findSample(Sample, state) {
      console.log(Sample.sampleNumber);
      console.log(state);
      axios.get(`https://fm120k.com/detail/${Sample.sampleNumber}`)
      .then((res) => {
        console.log(res.data);
        this.editSample = true;
        state.setState(res.data);
        })
      .then(() => alert("Sample Found"))
      .then(() => console.log())
      .catch(err => {
        console.log(err.response);
      })
    }
  
}

decorate(SampleStore, {
  sampleNumber: observable,
  depth: observable,
  sampleLabel: observable,
  sampleStation: observable,

  sampleGPS_N: observable,
  sampleGPS_E: observable,
  sampleDate: observable,
  sampleTime: observable,
  sampleVolume: observable,
  processed: observable,
  storage: observable,
  processedVolume: observable,
  remainingVolume: observable,

  extractionKit: observable,
  sampleDepth: observable,
  sampleO2Level: observable,
  sampleTemp: observable,
  sampleSalinity: observable,
  airTempInShade: observable,
  cloudCover: observable,
  windSpeed: observable,
  seaColor: observable,
  tide: observable,
  RH: observable,
  windDirection: observable,
  baromPressure: observable,
  waveHeight: observable,
  secchiDisk: observable,
  TotalDepth: observable,
  elutionVolume: observable,
  Concentration: observable,
  DNA_Concentration: observable,
  Carb_Concentration: observable,
  TotalYield: observable,
  F_readfile: observable,
  R_readfile: observable,
  Notes: observable,
  editSample : observable,
});

export default new SampleStore();