import { decorate, observable } from "mobx";

class ErrorStore {
  constructor(  ) {
    this.error = null;
  }

  
  CopyErrors(ErrorObj)
  {
    this.error = ErrorObj;
    console.log(this.error.sampleNumber);    
    for (const property in this.error)
    {
      console.log(property);
    }
  }

  ClearErrors()
  {
    this.error = null;
  }

}

decorate(ErrorStore, {
  error : observable,
});
const errorStore = new ErrorStore();
export default errorStore;