import axios from "axios";

class UserInfo {
  constructor() {
    this.id = "";
    this.name = "";
    this.phone = "";
    this.email = "";
    this.password = "";
    this.type = "";
    this.message = "";
  }
}
export const state = () => ({
  userInfo: new UserInfo()
});
export const mutations = {
  setUserInfo(state, payload) {
    state.userInfo = {
      ...state.userInfo,
      ...payload
    };
  },
  userLogin(state, payload) {
    state.userInfo = {
      ...state.userInfo,
      ...payload
    };
    localStorage.setItem('userInfo', JSON.stringify(payload));
  },
  userLogout(state) {
    localStorage.removeItem('userInfo');
    state.userInfo = new UserInfo()
  }
};
