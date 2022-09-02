import { createStore } from "vuex";
import { getAPI } from "@/axios";

export default createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: "",
    activeLanguage: "sk",
  },
  mutations: {
    updateStorage(state, { access, refresh }) {
      state.accessToken = access;
      state.refreshToken = refresh;
    },
    destroyToken(state) {
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken != null;
    },
    activeLanguage(state) {
      return state.activeLanguage;
    },
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
        localStorage.removeItem("access");
        context.commit("destroyToken");
      }
    },
    async userLogin(context, userCredentials): Promise<void> {
      await getAPI
        .post("api-token/", {
          username: userCredentials.username,
          password: userCredentials.password,
        })
        .then((response) => {
          console.log("userLogin-then");
          console.log(response);
          localStorage.setItem("access", response.data.access);
          getAPI.defaults.headers[
            "Authorization"
          ] = `Bearer ${localStorage.getItem("access")}`;
          context.commit("updateStorage", {
            access: response.data.access,
            refresh: response.data.refresh,
          });
        })
        .catch((err) => {
          context.dispatch("userLogout");
          console.log("userLogin-err");
          console.log(err);
        });
    },
    autoLogin(context) {
      console.log("autologin");
      const userDataString = localStorage.getItem("access");
      console.log(localStorage.getItem("access"));
      if (userDataString) {
        context.commit("updateStorage", {
          access: userDataString,
          refresh: null,
        });
      }
    },
  },
  modules: {},
});
