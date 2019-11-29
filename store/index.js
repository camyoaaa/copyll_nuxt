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
      ...state,
      ...payload
    };
  }
};

export const actions = {
  async userRegistAction({
    commit
  }, data) {
    try {
      let res = await axios.post("/users/regist", data);
      commit("userRegist", res.data);
    } catch (error) {}
  }
};
