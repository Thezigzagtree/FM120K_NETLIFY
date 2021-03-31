import { decorate, observable } from "mobx";

class AppStore {
  constructor() {
    this.selectedButtonId = '';
  }

  
    setButtonId(id)
    {
      this.setState('selectedButtonId', id);
      console.log(this.state('selectedButtonid'))
    }
      
}

decorate(AppStore, {
  selectedButtonId: observable
});

export default new AppStore();