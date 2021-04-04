import { decorate, observable } from "mobx";

class AppStore {
  constructor() {
    this.id = '';
  }
  
    getId()
    {
      return this.id;
    }

    setButtonId(id)
    {
     this.id = id;  
     console.log("new Id is " + id)    
    }
      
}

decorate(AppStore, {
  selectedButtonId: observable
});

export default new AppStore();