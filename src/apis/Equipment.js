import BaseApi from './BaseApi';

export default class User extends BaseApi {
  getCategories() {
    const url = '/getCategories';
    return this.get(url);
  }

  getModelInstrumentByCid(data) {
    const url = '/getModelInstrumentByCid';
    return this.get(url, data);
  }

  createInstrument(data){
    const url = '/createInstrument';
    return this.post(url, data);
  }

  getUserInstrument(data){
     const url = '/getUserInstrument';
     return this.get(url, data);
  }

  getInstrumentByCid(data){
    const url = '/getInstrumentByCid';
    return this.get(url,data);
  }
}
