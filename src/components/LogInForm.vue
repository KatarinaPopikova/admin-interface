<template>
  <main>
    <div class="flex items-center justify-center min-h-screen">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <div class="flex justify-center">
          <font-awesome-icon icon="fa-regular fa-user" size="5x" />
        </div>
        <h3 class="text-2xl font-bold text-center">Prihlásenie</h3>
        <form action="">
          <div class="mt-4">
            <div>
              <label class="block" for="email">E-mail</label>
              <input
                type="text"
                placeholder="email@example.com"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              <span class="text-xs tracking-wide text-red-600">
                Povinné vyplniť
              </span>
            </div>
            <div class="mt-4">
              <label class="block">Heslo</label>
              <input
                type="password"
                placeholder="Heslo"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-main-color"
              />
              <span class="text-xs tracking-wide text-red-600">
                Povinné vyplniť
              </span>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
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

<script>
export default {
  name: "TheLoginForm",
};
</script>

<style scoped></style>
