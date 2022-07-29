<template>
  <the-navigation />
  <LoginForm />
</template>

<script lang="ts">
import LoginForm from "@/components/LogInForm.vue";
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  name: "LogInView",
  components: {
    TheNavigation,
    LoginForm,
  },
};
</script>
