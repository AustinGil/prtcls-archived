<template>
  <Layout>
    <h2>Grid Spans</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.span-{0-8}': 'grid-column: {1-8};\ngrid-row: {1-8};',
        '.column-span-{0-8}': 'grid-column: {1-8};',
        '.row-span-{0-8}': 'grid-row: {1-8};'
      }"
      class="mb-5"
    />

    <h3>Examples:</h3>
    <p>Column span</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-4 gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;column-span-2 border-1 border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Row span</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-3 gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;row-span-2 border-1 border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Row & Column span</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-4 gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;column-span-2 row-span-2 border-1 border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />
  </Layout>
</template>

