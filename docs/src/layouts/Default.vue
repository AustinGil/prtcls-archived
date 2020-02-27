<template>
  <div>
    <header class="flex justify-between p-4 border-b-1 border-gray-2">
      <g-link to="/">
        <img
          src="/img/icon.svg"
          :alt="$static.metadata.siteName"
          width="32"
          height="40"
        />
        <span class="visually-hidden">Particles CSS</span>
      </g-link>

      <a href="https://github.com/stegosource/prtcls">
        <PSvg icon="icon-github" class="size-6" />
        <span class="visually-hidden">GitHub</span>
      </a>
    </header>

    <div class="my-10 grid columns-12 gap-4 items-start mx-auto px-4">
      <aside
        class="column-span-2 sticky top-0 border-1 border-gray-2 p-4 bg-white"
      >
        <nav>
          <h3>Rules</h3>
          <ul class="nav">
            <li v-for="(link, i) in $options.links" :key="i">
              <g-link :to="link.to">{{ link.text }}</g-link>
            </li>
          </ul>
        </nav>
      </aside>

      <main class="column-span-8">
        <div class="c-3">
          <slot />

          <section
            v-for="slot of slotKeys"
            :key="slot"
            :id="`${slot}`"
            class="mt-12 first:mt-0"
          >
            <slot :name="slot" />
          </section>
        </div>
      </main>

      <aside
        v-if="slotKeys.length"
        class="column-span-2 sticky top-0 border-1 border-gray-2 p-4 bg-white"
      >
        <h4>On this page</h4>
        <ul class="capitalize">
          <li v-for="slot of slotKeys" :key="slot">
            <a :href="`#${slot}`">{{ slot }}</a>
          </li>
        </ul>
      </aside>
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
      to: "/display/"
    },
    {
      text: "Opacity",
      to: "/opacity/"
    },
    {
      text: "Visibility",
      to: "/visibility/"
    },
    {
      text: "Position",
      to: "/position/"
    },
    {
      text: "Overflow",
      to: "/overflow/"
    },
    {
      text: "Align",
      to: "/align/"
    },
    {
      text: "Justify",
      to: "/justify/"
    },
    {
      text: "Grid Columns Rows",
      to: "/grid-columns-rows/"
    },
    {
      text: "Grid Gap",
      to: "/grid-gap/"
    },
    {
      text: "Grid Span",
      to: "/grid-span/"
    },
    {
      text: "Flex Direction",
      to: "/flex-direction/"
    },
    {
      text: "Flex Wrap",
      to: "/flex-wrap/"
    },
    {
      text: "Width & Height",
      to: "/width-height/"
    },
    {
      text: "Margin & Padding",
      to: "/margin-padding/"
    },
    {
      text: "Border",
      to: "/border/"
    },
    {
      text: "Border Radius",
      to: "/border-radius/"
    },
    {
      text: "Color",
      to: "/color/"
    },
    {
      text: "Font Family",
      to: "/font-family/"
    },
    {
      text: "Font Size",
      to: "/font-size/"
    },
    {
      text: "Font Weight",
      to: "/font-weight/"
    },
    {
      text: "Line Height",
      to: "/line-height/"
    },
    {
      text: "Letter Spacing",
      to: "/letter-spacing/"
    },
    {
      text: "Text Styling",
      to: "/text-styling/"
    },
    {
      text: "Background Color",
      to: "/background-color/"
    }
  ],

  computed: {
    slotKeys() {
      return Object.keys(this.$slots).filter(key => key !== "default");
    }
  }
};
</script>

