<template>
  <main>
    <div class="flex items-center justify-center min-h-full">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg rounded-3xl w-96">
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-regular fa-user" size="5x" />
        </div>
        <h3 class="text-2xl font-bold text-center mt-4">Prihlásenie</h3>
        <form v-on:submit.prevent="doLogin">
          <div class="mt-4">
            <div>
              <span class="danger-message" v-if="incorrectAuth">
                Nesprávne prihlasovacie údaje
              </span>
              <label class="block" for="email">E-mail*</label>
              <input
                type="text"
                placeholder="email@example.com"
                v-model="username"
                aria-describedby="usernameHelp"
                class="login-input"
              />
              <span class="danger-message" v-if="!username">
                Povinné vyplniť
              </span>
            </div>
            <div class="mt-4">
              <label class="block">Heslo*</label>
              <input
                type="password"
                placeholder="**********"
                v-model="password"
                class="login-input"
              />
              <span class="danger-message" v-if="!password">
                Povinné vyplniť
              </span>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-main-color-500 rounded-lg hover:bg-main-color-700"
              >
                Prihlásiť
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheLoginForm",
  data() {
    return {
      username: "" as string,
      password: "" as string,
      incorrectAuth: false,
    };
  },
  methods: {
    async doLogin(): Promise<void> {
      this.$store
        .dispatch("userLogin", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.incorrectAuth = false;
          this.$router.push({ name: "admin" });
        })
        .catch((err) => {
          console.log(err);
          this.incorrectAuth = true;
        });
    },
  },
  created() {
    this.$store.dispatch(`autoLogin`);
  },
});
</script>

<style scoped lang="scss">
.login-input {
  @apply w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-main-color-500;
}
.danger-message {
  @apply text-xs text-danger-color-700;
}
</style>
