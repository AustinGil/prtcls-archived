<template>
  <Layout>
    <h2>Grid Columns & Rows</h2>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.grid': 'display: grid;',
        '.columns-{1-8}': 'grid-template-columns: {1-8};',
        '.rows-{1-8}': 'grid-template-rows: {1-8};'
      }"
      class="mb-5"
    />
    <h3>Examples:</h3>
    <p>A grid with auto sized columns</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-auto&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Grid with strictly defined columns (supports 1-8 columns)</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Grid with strictly defined rows (supports 1-8 rows)</p>
    <PExample
      :html="
        `<div class=&quot;grid rows-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />
  </Layout>
</template>

