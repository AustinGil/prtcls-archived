<template>
  <div class="max-w-4 my-10 mx-auto px-4">
    <ClientOnly>
      <button
        @click="drawer = !drawer"
        class="fixed z-1 right-0 mr-3 radius-1 p-4 size-3 color-white bg-purple-5"
      >
        Menu
      </button>

      <VDrawer v-model="drawer" bg-transition="fade-slide-right">
        <nav class="p-5">
          <h3 class="text-center">
            <g-link to="/" class="no-line">Particles CSS</g-link>
          </h3>
          <h3>Rules</h3>
          <ul class="nav">
            <li v-for="(link, i) in $options.links" :key="i">
              <g-link :to="link.to">{{ link.text }}</g-link>
            </li>
          </ul>
        </nav>
      </VDrawer>
    </ClientOnly>

    <slot />

    <div v-if="slotKeys.length" class="grid columns-5 gap-4 items-start">
      <div class="column-span-4">
        <section
          v-for="slot of slotKeys"
          :key="slot"
          :id="`${slot}`"
          class="mt-12 first:mt-0"
        >
          <slot :name="slot" />
        </section>
      </div>

      <nav class="sticky top-0 pt-4">
        <h4>On this page</h4>
        <ul class="capitalize">
          <li v-for="slot of slotKeys" :key="slot">
            <a :href="`#${slot}`">{{ slot }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data: () => ({
    drawer: false
  }),

  links: [
    {
      text: "Display",
      to: "/display"
    },
    {
      text: "Opacity",
      to: "/opacity"
    },
    {
      text: "Visibility",
      to: "/visibility"
    },
    {
      text: "Position",
      to: "/position"
    },
    {
      text: "Overflow",
      to: "/overflow"
    },
    {
      text: "Align",
      to: "/align"
    },
    {
      text: "Justify",
      to: "/justify"
    },
    {
      text: "Grid Columns Rows",
      to: "/grid-columns-rows"
    },
    {
      text: "Grid Gap",
      to: "/grid-gap"
    },
    {
      text: "Grid Span",
      to: "/grid-span"
    },
    {
      text: "Flex Direction",
      to: "/flex-direction"
    },
    {
      text: "Flex Wrap",
      to: "/flex-wrap"
    },
    {
      text: "Width & Height",
      to: "/width-height"
    },
    {
      text: "Margin & Padding",
      to: "/margin-padding"
    },
    {
      text: "Border",
      to: "/border"
    },
    {
      text: "Border Radius",
      to: "/border-radius"
    },
    {
      text: "Color",
      to: "/color"
    },
    {
      text: "Font Family",
      to: "/font-family"
    },
    {
      text: "Font Size",
      to: "/font-size"
    },
    {
      text: "Font Weight",
      to: "/font-weight"
    },
    {
      text: "Line Height",
      to: "/line-height"
    },
    {
      text: "Letter Spacing",
      to: "/letter-spacing"
    },
    {
      text: "Text Styling",
      to: "/text-styling"
    },
    {
      text: "Background Color",
      to: "/background-color"
    }
  ],

  computed: {
    slotKeys() {
      return Object.keys(this.$slots).filter(key => key !== "default");
    }
  }
};
</script>
