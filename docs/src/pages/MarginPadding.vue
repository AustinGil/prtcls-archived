<template>
  <Layout>
    <h1>Margin & Padding</h1>
    <p class="mb-8">Control the margin and padding properties.</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.m-auto': 'margin: auto;',
          '.my-auto': 'margin-top: auto;\nmargin-bottom: auto;',
          '.mx-auto': 'margin-left: auto;\nmargin-right: auto;',
          '.m{t|b|l|r}-auto': 'margin-{top|bottom|left|right}: auto;',
          '.m-0': 'margin: 0;',
          '.my-0': 'margin-top: 0;\nmargin-bottom: 0;',
          '.mx-0': 'margin-left: 0;\nmargin-right: 0;',
          '.m{t|b|l|r}-0': 'margin-{top|bottom|left|right}: 0;',
          '.m-{1-length($spacers)}': 'margin: {$spacers[i]};',
          '.my-{1-length($spacers)}':
            'margin-top: {$spacers[i]};\nmargin-bottom: {$spacers[i]};',
          '.mx-{1-length($spacers)}':
            'margin-left: {$spacers[i]};\nmargin-right: {$spacers[i]};',
          '.m{t|b|l|r}-{1-length($spacers)}':
            'margin-{top|bottom|left|right}: {$spacers[i]};',
          '.p-auto': 'padding: auto;',
          '.py-auto': 'padding-top: auto;\npadding-bottom: auto;',
          '.px-auto': 'padding-left: auto;\npadding-right: auto;',
          '.p{t|b|l|r}-auto': 'padding-{top|bottom|left|right}: auto;',
          '.p-0': 'padding: 0;',
          '.py-0': 'padding-top: 0;\npadding-bottom: 0;',
          '.px-0': 'padding-left: 0;\npadding-right: 0;',
          '.p{t|b|l|r}-0': 'padding-{top|bottom|left|right}: 0;',
          '.p-{1-length($spacers)}': 'padding: {$spacers[i]};',
          '.py-{1-length($spacers)}':
            'padding-top: {$spacers[i]};\npadding-bottom: {$spacers[i]};',
          '.px-{1-length($spacers)}':
            'padding-left: {$spacers[i]};\npadding-right: {$spacers[i]};',
          '.p{t|b|l|r}-{1-length($spacers)}':
            'padding-{top|bottom|left|right}: {$spacers[i]};'
        }"
      />
    </template>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $spacers: $options.spacers.join(', ')
        }"
      />
    </template>

    <template #spacers>
      <h2>Spacers Examples</h2>
      <table class="overflow-auto">
        <tbody>
          <tr v-for="(item, index) in $options.spacers" :key="item">
            <td class="font-mono">{{ index + 1 }}: {{ item }}</td>
            <td><small :class="`pl-${index + 1} h-3 bg-purple-2`"></small></td>
          </tr>
        </tbody>
      </table>
    </template>

    <template #margin>
      <h2>Margin</h2>
      <PExample
        :html="
          `<div class=&quot;mb-4 border-1 border-gray-3 bg-purple-2&quot;>
  <div class=&quot;m-3 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<div class=&quot;border-1 border-gray-3 bg-purple-2&quot;>
  <div class=&quot;mx-auto w-1/2 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </template>

    <template #padding>
      <h2>Padding</h2>
      <PExample
        :html="
          `<div class=&quot;p-4 mb-4 border-1 border-gray-3 bg-purple-2&quot;>
  <div class=&quot;p-4 border-1 border-gray-3 bg-gray-1&quot;></div>
</div>
<div class=&quot;px-5 border-1 border-gray-3 bg-purple-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

<script>
export default {
  spacers: [
    ".25rem",
    ".5rem",
    ".75rem",
    "1rem",
    "1.25rem",
    "1.5rem",
    "2rem",
    "2.5rem",
    "3rem",
    "4rem",
    "5rem",
    "6rem",
    "8rem",
    "16rem",
    "32rem"
  ]
};
</script>
