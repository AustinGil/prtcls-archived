<template>
  <div class="prtcls-table overflow-auto">
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
  </div>
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
.prtcls-table {
  max-height: 500px;

  // http://lea.verou.me/2012/04/background-attachment-local/
  background: linear-gradient(#fff 30%, transparent),
    linear-gradient(transparent, #fff 70%) 0 100%,
    radial-gradient(farthest-side at 50% 0, rgba(0, 0, 0, 0.2), transparent),
    radial-gradient(farthest-side at 50% 100%, rgba(0, 0, 0, 0.2), transparent)
      0 100%;
  background-repeat: no-repeat;
  background-color: #fff;
  background-size: 100% 40px, 100% 40px, 100% 14px, 100% 14px;
  background-attachment: local, local, scroll, scroll;
}
</style>
