import BaseApi from './BaseApi';

export default class User extends BaseApi {
  getMessages(data) {
    const url = '/getMessages';
    return this.get(url, data);
  }

  setMessageRead(data) {
    const url = '/readMessage';
    return this.post(url, data);
  }

  setAllMessageRead(data) {
    const url = '/readAllMessage';
    return this.post(url, data);l
  }
}
