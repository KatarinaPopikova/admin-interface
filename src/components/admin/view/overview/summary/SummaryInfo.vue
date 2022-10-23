<template>
  <section id="modal-body" class="overflow-y-auto flex justify-center">
    <div
      class="flex flex-wrap w-full max-w-screen-2xl justify-center px-4 py-6 m-3 shadow-md rounded-md bg-gray-50"
    >
      <div class="w-fit flex flex-col grow min-w-[50%] mt-4">
        <header class="m-3 font-bold text-2xl">
          <h2>Summary detail</h2>
        </header>

        <div>
          <button
            class="text-sm px-3 py-1 m-3 has-radius rounded-md bg-gray-200 hover:bg-gray-300 shadow-sm"
          >
            Activity picker
          </button>
          <button
            class="text-sm px-3 py-1 m-3 has-radius rounded-md bg-gray-200 hover:bg-gray-300 shadow-sm"
          >
            Date picker
          </button>
        </div>
        <div
          class="text-left w-full resize-none flex-grow p-2 bg-white rounded-md"
        >
          Lorem ipsum dolor sit amet, simul tantas oportere est eu. Cu sed
          tempor tritani intellegam, euismod necessitatibus mei cu, populo
          democritum definiebas pri id. Mea quas mollis omittam ut. Vis etiam
          petentium argumentum et, vel cu zril eirmod. Quis suas nihil no est,
          qui nibh commune cu, duo utinam labores sadipscing at. Nam quando
          tritani eu, eruditi interesset in eos. Id pri dico nostrud menandri,
          hinc soluta conclusionemque at sed. Eam in qualisque percipitur,
          delectus sadipscing at has. Sed purto necessitatibus ut, at tritani
          blandit eam. In ius lucilius intellegebat. Reque offendit theophrastus
          in mei. Lorem ipsum dolor sit amet, simul tantas oportere est eu. Cu
          sed tempor tritani intellegam, euismod necessitatibus mei cu, populo
          democritum definiebas pri id. Mea quas mollis omittam ut. Vis etiam
          petentium argumentum et, vel cu zril eirmod. Quis suas nihil no est,
          qui nibh commune cu, duo utinam labores sadipscing at. Nam quando
          tritani eu, eruditi interesset in eos. Id pri dico nostrud menandri,
          hinc soluta conclusionemque at sed. Eam in qualisque percipitur,
          delectus sadipscing at has. Sed purto necessitatibus ut, at tritani
          blandit eam. In ius lucilius intellegebat. Reque offendit theophrastus
          in mei.
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SummaryInfo",
});
</script>

<style scoped></style>
