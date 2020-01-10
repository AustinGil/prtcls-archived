<template>
  <Layout>
    <h2>Grid Gaps</h2>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.gap-{0-8}': 'grid-column-gap: {1-8};\ngrid-row-gap: {1-8};',
        '.column-gap-{0-8}': 'grid-column-gap: {1-8};',
        '.row-gap-{0-8}': 'grid-row-gap: {1-8};'
      }"
      class="mb-5"
    />

    <h3>Examples:</h3>
    <p>Even space all around</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-2 gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Only column gap</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-2 column-gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Only row gap</p>
    <PExample
      :html="
        `<div class=&quot;grid columns-2 row-gap-2&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <h3>Customization</h3>
    <PTable
      :headers="['Variable', 'Default Value']"
      :values="{
        $gaps: '0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem'
      }"
      class="mb-5"
    />
  </Layout>
</template>

