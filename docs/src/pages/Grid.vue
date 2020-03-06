<template>
  <Layout>
    <h1>Grid</h1>
    <p class="mb-8">Control CSS grid layout.</p>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default']"
        :values="{
          $gridMax: 'Sets the max number of grid columns and rows. Defualt: 12',
          $gaps:
            'List of options for grid-gaps. Defualt: .25rem, .5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem'
        }"
      />
    </template>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.grid': 'display: grid;',
          '.columns-auto':
            'grid-template-columns: repeat(auto-fit, minmax(0, 1fr))',
          '.columns-{1-12}': 'grid-template-columns: {1-12};',
          '.rows-{1-12}': 'grid-template-rows: {1-12};',
          '.gap-0': 'grid-column-gap: 0;\ngrid-row-gap: 0;',
          '.column-gap-0': 'grid-column-gap: 0;',
          '.row-gap-0': 'grid-row-gap: 0;',
          '.gap-{1-8}':
            'grid-column-gap: {$gaps[1-8]};\ngrid-row-gap: {$gaps[1-8]};',
          '.column-gap-{1-8}': 'grid-column-gap: {$gaps[1-8]};',
          '.row-gap-{1-8}': 'grid-row-gap: {$gaps[1-8]};',
          '.column-span-full': 'grid-column: 1/-1;',
          '.row-span-full': 'grid-row: 1/-1;',
          '.column-span-{1-12}': 'grid-column: {1-12};',
          '.row-span-{1-12}': 'grid-row: {1-12};'
        }"
      />
    </template>

    <template #grid>
      <h2>.grid</h2>
      <p>Sets the display property to <code>grid</code>.</p>
    </template>

    <template #columns-auto>
      <h2>.grid.columns-auto</h2>
      <p>Sets a grid container to create rows that automatically size.</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-auto&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </template>

    <!-- <template>
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
    </template> -->
  </Layout>
</template>

