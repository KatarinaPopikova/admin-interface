<template>
  <section
    id="modal-body"
    class="px-4 py-6 mr-3 overflow-y-auto flex justify-center"
  >
    <div CLASS="flex flex-wrap w-full max-w-screen-2xl justify-center">
      <img
        src="https://via.placeholder.com/150x100"
        alt="Post image"
        class="w-80 h-80 object-cover mt-4 mr-3"
      />
      <div class="w-fit flex flex-col grow min-w-[50%] mt-4">
        <textarea
          :readonly="!editable"
          v-bind:class="{
            'outline-none text-gray-500': !editable,
            'border-2 border-black': editable,
          }"
          class="text-left w-full resize-none flex-grow p-2"
        >
 Lorem ipsum dolor sit amet, simul tantas oportere est eu. Cu sed tempor tritani intellegam, euismod necessitatibus mei cu, populo democritum definiebas pri id. Mea quas mollis omittam ut. Vis etiam petentium argumentum et, vel cu zril eirmod. Quis suas nihil no est, qui nibh commune cu, duo utinam labores sadipscing at. Nam quando tritani eu, eruditi interesset in eos.
Id pri dico nostrud menandri, hinc soluta conclusionemque at sed. Eam in qualisque percipitur, delectus sadipscing at has. Sed purto necessitatibus ut, at tritani blandit eam. In ius lucilius intellegebat. Reque offendit theophrastus in mei.
        </textarea>
        <font-awesome-icon
          v-if="!editable"
          class="self-end pt-2 h-6 w-6 text-main-color-400"
          icon="fa-regular fa-pen-to-square"
          @click="handleTextarea"
        />
        <font-awesome-icon
          v-if="editable"
          class="self-end pt-2 h-6 w-6 text-main-color-400"
          icon="fa-solid fa-check"
          @click="handleTextarea"
        />
      </div>
    </div>
    <!--    <div class="p-4">-->
    <!--      <div class="flex items-center mb-4">-->
    <!--        <input-->
    <!--          id="checkbox-1"-->
    <!--          type="checkbox"-->
    <!--          value=""-->
    <!--          class="checkbox-input"-->
    <!--        />-->
    <!--        <label for="checkbox-1" class="checkbox-label">Checkbox 1</label>-->
    <!--      </div>-->
    <!--      <div class="flex items-center mb-4">-->
    <!--        <input-->
    <!--          checked-->
    <!--          id="checkbox-2"-->
    <!--          type="checkbox"-->
    <!--          value=""-->
    <!--          class="checkbox-input"-->
    <!--        />-->
    <!--        <label for="checkbox-2" class="checkbox-label">Checkbox 2</label>-->
    <!--      </div>-->
    <!--      <div class="flex items-center mb-4">-->
    <!--        <input-->
    <!--          id="checkbox-3"-->
    <!--          type="checkbox"-->
    <!--          value=""-->
    <!--          class="checkbox-input"-->
    <!--        />-->
    <!--        <label for="checkbox-3" class="checkbox-label">Checkbox 3</label>-->
    <!--      </div>-->
    <!--      <div class="flex items-center mb-4">-->
    <!--        <input-->
    <!--          checked-->
    <!--          id="checkbox-4"-->
    <!--          type="checkbox"-->
    <!--          value=""-->
    <!--          class="checkbox-input"-->
    <!--        />-->
    <!--        <label for="checkbox-4" class="checkbox-label">Checkbox 4</label>-->
    <!--      </div>-->
    <!--    </div>-->
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ActivityDetailInfo",
  data() {
    return {
      editable: false,
    };
  },
  methods: {
    handleTextarea() {
      this.editable = !this.editable;
    },
  },
});
</script>

<style scoped>
/*.checkbox-input {*/
/*  @apply w-4 h-4 text-blue-600 rounded border-gray-300;*/
/*}*/

/*.checkbox-label {*/
/*  @apply ml-2 text-sm font-medium text-black;*/
/*}*/
textarea {
  min-height: 210px;
}
</style>
