<template>
  <div class="flex mx-12 justify-between">
    <div class="flex flex-col items-center my-3">
      <div class="flex text-gray-700">
        <div
          v-if="hasPrev()"
          @click.prevent="changePage(prevPage)"
          class="pagination-element"
        >
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </div>

        <div class="flex h-12 font-medium rounded-full bg-gray-100">
          <div
            v-if="hasFirst()"
            @click.prevent="changePage(1)"
            class="pagination-element"
          >
            <span>1</span>
          </div>
          <div class="pagination-element" v-if="hasFirst()">...</div>
          <div
            v-for="page in pages"
            :key="page"
            class="pagination-element"
            @click.prevent="changePage(page)"
            :class="{
              'bg-main-color-600 text-white': current === page,
            }"
          >
            <span>{{ page }}</span>
          </div>
          <div class="pagination-element" v-if="hasLast()">...</div>
          <div
            v-if="hasLast()"
            @click.prevent="changePage(totalPages)"
            class="pagination-element"
          >
            <span>{{ totalPages }}</span>
          </div>
        </div>
        <div
          v-if="hasNext()"
          @click.prevent="changePage(nextPage)"
          class="pagination-element"
        >
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <div class="pr-2 text-gray-400 font-medium">
        <span>{{ $t("textBeforeInput") }}</span>
      </div>
      <div class="w-14 rounded-md border border-main-color-700 px-1 py-1">
        <input
          v-model.number="input"
          class="w-12 focus:outline-none px-2"
          type="text"
        />
      </div>
      <div
        @click.prevent="changePage(input)"
        class="flex items-center pl-4 font-medium cursor-pointer"
      >
        <span id="text-after-input">{{ $t("textAfterInput") }}</span>
        <font-awesome-icon icon="fa-solid fa-angle-right" class="pl-0.5" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "TablePagination",
  props: {
    current: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 10,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    pageRange: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      input: "",
    };
  },
  methods: {
    hasFirst: function () {
      return this.rangeStart !== 1;
    },
    hasLast: function () {
      return this.rangeEnd < this.totalPages;
    },
    hasPrev: function () {
      return this.current > 1;
    },
    hasNext: function () {
      return this.current < this.totalPages;
    },
    changePage: function (page) {
      if (page > 0 && page <= this.totalPages) {
        this.$parent.$emit("page-changed", page);
      }
    },
  },
  computed: {
    pages: function () {
      let pages: number[] = [];
      for (let i = this.rangeStart; i <= this.rangeEnd; i++) {
        pages.push(i);
      }
      return pages;
    },
    rangeStart: function () {
      let start = this.current - this.pageRange;
      return start > 0 ? start : 1;
    },
    rangeEnd: function () {
      let end = this.current + this.pageRange;
      return end < this.totalPages ? end : this.totalPages;
    },
    totalPages: function () {
      return Math.ceil(this.total / this.perPage);
    },
    nextPage: function () {
      return this.current + 1;
    },
    prevPage: function () {
      return this.current - 1;
    },
  },
});
</script>

<style scoped>
.pagination-element {
  @apply w-12 md:flex justify-center items-center hidden cursor-pointer leading-5 transition duration-150 ease-in rounded-full;
}
</style>
