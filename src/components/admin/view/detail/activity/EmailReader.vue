<template>
  <div class="flex flex-col md:flex-row">
    <textarea
      class="basis-1 md:basis-1/2"
      name="html"
      id="1"
      cols="100"
      rows="10"
      v-model="rawHtml"
    >
    </textarea>
    <p class="basis-1 md:basis-1/2">
      Using v-html directive: <span v-html="rawHtml"></span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailReader",

  data() {
    return {
      rawHtml: `<body>

<h2>Responsive\n Four \nColumn\n Layout with Flex</h2>\n
<p><strong>Resize the browser window to see the responsive effect.</strong> On screens that are 992px wide or less, the columns will resize from four columns to two columns. On screens that are 600px wide or less, the columns will stack on top of each other instead of next to eachother.</p>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Column 1</h2>
    <p>Some text..</p>
  </div>

  <div class="column" style="background-color:#bbb;">
    <h2>Column 2</h2>
    <p>Some text..</p>
  </div>

  <div class="column" style="background-color:#ccc;">
    <h2>Column 3</h2>
    <p>Some text..</p>
  </div>

  <div class="column" style="background-color:#ddd;">
    <h2>Column 4</h2>
    <p>Some text..</p>
  </div>
</div>

</body>

<style>
* {
  box-sizing: border-box;
}

/* Container for flexboxes */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create four equal columns */
.column {
  flex: 25%;
  padding: 20px;
}

/* On screens that are 992px wide or less, go from four columns to two columns */
@media screen and (max-width: 992px) {
  .column {
    flex: 50%;
  }
}

/* On screens that are 600px wide or less, make the columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .row {
    flex-direction: column;
  }
}
</style>`,
    };
  },
});
</script>

<style scoped></style>
