<template>
  <table class="w-full text-left whitespace-pre-line word-break-word">
    <thead v-if="headers.length">
      <tr>
        <th
          v-for="(header, i) in headers"
          :key="i"
          class="color-gray-7 p-2 bg-gray-1"
        >
          <span>{{ header }}</span>
        </th>
      </tr>
    </thead>
    <tbody class="font-mono">
      <template v-for="(value, key) in values">
        <tr :key="key">
          <td class="p-2 border-b-1 border-gray-2 color-purple-7 w-1/3">
            <span>{{ key }}</span>
          </td>
          <td class="p-2 border-b-1 border-gray-2 color-blue-7">
            <span>{{ value }}</span>
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
