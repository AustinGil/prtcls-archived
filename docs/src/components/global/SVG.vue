<template>
  <svg
    class="prtcls-svg"
    :class="{ 'prtcls-svg--icon': !!icon }"
    :style="{ fontSize: size && `${parseInt(size)}px` }"
  >
    <use :xlink:href="`#${href}`" />
  </svg>
</template>

<script>
export default {
  name: "PSvg",

  props: {
    name: {
      type: String,
      default: ""
    },

    icon: {
      type: [Boolean, String],
      default: ""
    },

    size: {
      type: [Number, String],
      default: ""
    }
  },

  computed: {
    href() {
      return this.name || this.icon;
    }
  }
};
</script>

<style lang="scss">
.prtcls-svg {
  &--icon {
    display: inline-block;
    width: 1em;
    height: 1em;
  }
}
</style>
