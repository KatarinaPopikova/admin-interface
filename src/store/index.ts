import { createStore } from "vuex";
import { getAPI } from "@/axios";

export default createStore({
  state: {
    accessToken: null,
    refreshToken: null,
    APIData: "",
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
  },
  actions: {
    userLogout(context) {
      if (context.getters.loggedIn) {
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
          console.log(response);
          localStorage.setItem("access", response.data.access);
          context.commit("updateStorage", {
            access: response.data.access,
            refresh: response.data.refresh,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    autoLogin(context) {
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