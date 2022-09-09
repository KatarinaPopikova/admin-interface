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
        localStorage.removeItem("refresh");
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
          localStorage.setItem("refresh", response.data.refresh);
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
      const accessToken = localStorage.getItem("access");
      const refreshToken = localStorage.getItem("refresh");
      if (accessToken) {
        context.commit("updateStorage", {
          access: accessToken,
          refresh: refreshToken,
        });
      }
    },
    async refreshToken(context) {
      return new Promise((resolve, reject) => {
        console.log("refresh-token");
        getAPI
          .post("/api-token-refresh/", {
            refresh: localStorage.getItem("refresh"),
          })
          .then((response) => {
            console.log(response);
            console.log(`Bearer ${response.data.access}`);
            localStorage.setItem("access", response.data.access);
            getAPI.defaults.headers[
              "Authorization"
            ] = `Bearer ${response.data.access}`;
            context.dispatch("autoLogin").then(() => resolve(response));
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },

  modules: {},
});
