<template>
  <div>
    <slot />

    <!-- <pre>
      {{ slotString }}
    </pre> -->
  </div>
</template>

<script>
export default {
  name: "PExample"

  // data: () => ({
  //   slotString: ""
  // }),

  // mounted() {
  //   this.slotString = this.$slots.default[0].elm.outerHTML;
  // }
};
</script>
