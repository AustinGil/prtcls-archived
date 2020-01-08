<template>
  <div class="max-w-4 my-10 mx-auto px-4">
    <ClientOnly>
      <button
        @click="drawer = !drawer"
        class="fixed z-1 right-0 mr-3 radius-1 p-4 size-3 color-white bg-purple-5"
      >
        Menu
      </button>

      <VDrawer v-model="drawer">
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
    // {
    //   text: "Display",
    //   to: "/display"
    // },
    // {
    //   text: "Opacity",
    //   to: "/opacity"
    // },
    {
      text: "Color",
      to: "/color"
    },
    {
      text: "Font Weight",
      to: "/font-weight"
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
  ]
};
</script>
