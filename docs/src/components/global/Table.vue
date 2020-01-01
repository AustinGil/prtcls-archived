<template>
  <table class="ptable w-full text-left">
    <thead v-if="headers.length">
      <tr>
        <th
          v-for="(header, i) in headers"
          :key="i"
          class="color-gray-7 p-2 bg-gray-1"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-for="(value, key) in values">
        <tr :key="key">
          <td
            class="p-2 border-t border-gray-2 font-mono color-purple-7 whitespace-no-wrap"
          >
            {{ key }}
          </td>
          <td
            class="p-2 border-t border-gray-2 font-mono color-blue-7 whitespace-pre"
          >
            {{ value }}
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "PTable",

  props: {
    headers: {
      type: Array,
      default: () => []
    },

    values: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>

<style lang="scss">
.ptable {
  white-space: pre-line;
}
</style>
