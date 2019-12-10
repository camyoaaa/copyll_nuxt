import axios from "axios";
export const state = () => ({
  userInfo: {
    id: "",
    name: "",
    phone: "",
    email: "",
    password: "",
    type: "",
    message: ""
  }
});
export const mutations = {
  userRegist(state, payload) {
    state.userInfo = {
      ...state.userInfo,
      ...payload
    };
  }
};
