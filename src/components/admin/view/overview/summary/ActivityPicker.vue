<template>
  <div class="flex flex-col items-center">
    <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
        <div class="w-full">
          <div
            v-click-away="close"
            class="p-1 bg-white flex border border-gray-200 rounded"
          >
            <input
              v-model="filter"
              @mousedown="open()"
              placeholder="Select activity"
              @keydown.enter.stop.prevent="selectOption()"
              class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
            <div class="text-gray-300 w-8 py-1 pl-2 pr-1 flex items-center">
              <button
                @click="toggle()"
                class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline
                    v-if="!isOpen()"
                    points="18 15 12 20 6 15"
                  ></polyline>
                  <polyline v-if="isOpen()" points="18 15 12 9 6 15"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          v-if="isOpen()"
          class="absolute shadow bg-white top-100 z-40 md:w-full w-fit min-w-fit left-0 rounded max-h-select overflow-y-auto"
        >
          <div class="flex flex-col w-full">
            <template v-for="(option, index) in filteredOptions()" :key="index">
              <div
                @click="onOptionClick(index)"
                :class="classOption(option.login.uuid, index)"
                :aria-selected="focusedOptionIndex === index"
              >
                <div
                  class="flex w-fit items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-teal-100"
                >
                  <div class="w-8 flex flex-col items-center">
                    <div
                      class="flex relative w-8 h-8 justify-center items-center m-1 mr-2 w-4 h-4 mt-1 rounded-full"
                    >
                      <img
                        alt="option.email"
                        src="https://via.placeholder.com/150x100"
                      />
                    </div>
                  </div>
                  <div class="w-fit items-center flex">
                    <div class="mx-2 -mt-1">
                      <span v-text="option.email"></span>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mixin as VueClickAway } from "vue3-click-away";

export default defineComponent({
  name: "ActivityPicker",

  data() {
    return {
      filter: "",
      show: false,
      selected: null,
      focusedOptionIndex: null,
      options: null,
    };
  },
  mixins: [VueClickAway],
  mounted() {
    this.fetchOptions();
  },
  methods: {
    close() {
      this.show = false;
      this.filter = this.selectedName();
      this.focusedOptionIndex = this.selected ? this.focusedOptionIndex : null;
    },
    open() {
      this.show = true;
      this.filter = "";
    },
    toggle() {
      if (this.show) {
        this.close();
      } else {
        this.open();
      }
    },
    isOpen() {
      return this.show === true;
    },
    selectedName() {
      return this.selected
        ? this.selected.name.first + " " + this.selected.name.last
        : this.filter;
    },
    classOption(id, index) {
      const isSelected = this.selected
        ? id === this.selected.login.uuid
        : false;
      return {
        "cursor-pointer w-full border-gray-100 border-b hover:bg-gray-200 hover:opacity-70": true,
        "bg-gray-200": isSelected,
      };
    },
    fetchOptions() {
      fetch("https://randomuser.me/api/?results=8")
        .then((response) => response.json())
        .then((data) => (this.options = data));
    },
    filteredOptions() {
      return this.options
        ? this.options.results.filter((option) => {
            return (
              option.name.first.toLowerCase().indexOf(this.filter) > -1 ||
              option.name.last.toLowerCase().indexOf(this.filter) > -1 ||
              option.email.toLowerCase().indexOf(this.filter) > -1
            );
          })
        : {};
    },
    onOptionClick(index) {
      this.focusedOptionIndex = index;
      this.selectOption();
    },
    selectOption() {
      if (!this.isOpen()) {
        return;
      }
      this.focusedOptionIndex = this.focusedOptionIndex ?? 0;
      const selected = this.filteredOptions()[this.focusedOptionIndex];
      if (this.selected && this.selected.login.uuid === selected.login.uuid) {
        this.filter = "";
        this.selected = null;
      } else {
        this.selected = selected;
        this.filter = this.selectedName();
      }
      this.close();
    },
  },
});
</script>

<style scoped>
.top-100 {
  top: 100%;
}
.max-h-select {
  max-height: 300px;
}
</style>
