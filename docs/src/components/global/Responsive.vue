<template>
  <div>
    <fieldset>
      <div
        class="grid columns-auto gap-4 items-end justify-center mb-2 text-center bg-white"
      >
        <label
          v-for="num in classes.length"
          :key="num"
          :class="activeIndex === num - 1 ? 'color-purple-5' : ''"
        >
          <input
            v-model="activeIndex"
            :value="num - 1"
            name="responsive"
            type="radio"
            class="visually-hidden"
          />
          <PSvg :icon="`mq${num - 1}`" size="60" tabindex="-1" />
          <p>{{ num - 1 === 0 ? "all" : `mq${num - 1}` }}</p>
        </label>
      </div>
    </fieldset>
    <div class="overflow-hidden mb-8">
      <div
        class="rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"
      >
        <pre
          class="radius-b-0"
        ><code class="block" v-html="sampleCode"></code></pre>
      </div>
      <div
        class="radius-b-2 border-l-1 border-r-1 border-b-1 border-gray-3 bg-white p-4"
      >
        <slot v-bind="{ classes, activeClass: classes[activeIndex] }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PResponsive",

  mqs: ["all", "40rem", "48rem", "64rem", "80rem"],

  props: {
    classes: {
      type: Array,
      required: true
    }
  },

  data: () => {
    return {
      activeIndex: 0
    };
  },

  computed: {
    sampleCode() {
      const { classes, activeIndex } = this;

      const classList = classes
        .map((cls, idx) => {
          if (idx === 0) return cls;
          return `mq${idx}:${cls}`;
        })
        .map((cls, idx) => {
          if (idx !== activeIndex) return cls;
          return `<span class="color-pink-5">${cls}</span>`;
        })
        .join(" ");

      return `&lt;div class="${classList} ..."&gt;
  &lt;!-- ... --&gt;
&lt;/div&gt;`;
    }
  }
};
</script>
