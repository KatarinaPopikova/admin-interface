<template>
  <div>
    <button
      class="px-6 py-2 mt-4 text-white bg-main-color-500 rounded-lg hover:bg-main-color-700"
      @click="loggedIn()"
    >
      Over oprávnenie
    </button>
    <h2 v-if="authorization">{{ authorization }}!</h2>
  </div>
</template>

<script lang="ts">
import { getAPI } from "@/axios";
import { defineComponent } from "vue";
import { mapState } from "vuex";

export default defineComponent({
  name: "AdminView",
  data() {
    return {
      authorization: "",
    };
  },
  computed: mapState(["APIData"]),
  created() {
    getAPI
      .get("/posts/", {
        headers: { Authorization: `Bearer ${this.$store.state.accessToken}` },
      })
      .then((response) => {
        this.$store.state.APIData = response.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  // methods: {
  //   async loggedIn() {
  //     await axios
  //       .get("posts/")
  //       .then((response) => {
  //         console.log(response);
  //         this.authorization = "Máš oprávnenie";
  //       })
  //       .catch((err) => {
  //         this.authorization = "Nemáš oprávnenie";
  //         console.log(err);
  //       });
  //   },
  // },
});
</script>

<style scoped></style>
