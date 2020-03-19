<template>
  <Layout>
    <h1>Grid</h1>
    <p class="mb-8">Control CSS grid layout.</p>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default']"
        :values="{
          $maxColumns:
            'Sets the max number of grid columns and rows. Default: 12',
          $gaps:
            'List of options for grid-gaps. Default: .25rem, .5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem'
        }"
      />
    </template>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.grid': 'display: grid;',
          '.inline-grid': 'display: inline-grid;',
          '.columns-auto':
            'grid-template-columns: repeat(auto-fit, minmax(0, 1fr))',
          '.columns-{1-12}': 'grid-template-columns: {1-12};',
          '.rows-{1-12}': 'grid-template-rows: {1-12};',
          '.gap-0': 'grid-gap: 0;',
          '.column-gap-0': 'grid-column-gap: 0;',
          '.row-gap-0': 'grid-row-gap: 0;',
          '.gap-{1-8}': 'grid-gap: {$gaps[1-8]};',
          '.column-gap-{1-8}': 'grid-column-gap: {$gaps[1-8]};',
          '.row-gap-{1-8}': 'grid-row-gap: {$gaps[1-8]};',
          '.column-span-full': 'grid-column: 1/-1;',
          '.column-span-{1-12}': 'grid-column: span {1-12};',
          '.row-span-full': 'grid-row: 1/-1;',
          '.row-span-{1-12}': 'grid-row: span {1-12};',
          '.flow-column': 'grid-auto-flow: column;',
          '.flow-row': 'grid-auto-flow: row;'
        }"
      />
    </template>

    <template #grid>
      <h2>.grid</h2>
      <p>Sets the display property to <code>grid</code>.</p>
    </template>

    <template #flow>
      <h2>.flow-{row|column}</h2>
      <p>Sets the <code>grid-auto-flow</code> property.</p>
      <PExample
        :html="
          `<small>.grid.flow-column</small>
<div class=&quot;grid flow-column mb-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.grid.flow-row</small>
<div class=&quot;grid flow-row&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </template>

    <template #columns>
      <h2>Columns</h2>
      <h3>.columns-auto</h3>
      <p>Creates a grid container with columns that automatically size.</p>
      <PExample
        :html="
          `<small>.grid.columns-auto</small>
<div class=&quot;grid columns-auto&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <h3 class="mt-8">.grid.columns-{1-12}</h3>
      <p>Creates a grid container with 1-12 columns.</p>
      <PExample
        :html="
          `<small>.grid.columns-2</small>
<div class=&quot;grid columns-2 mb-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #rows>
      <h2>Rows</h2>
      <h3>.grid.rows-auto</h3>
      <p>Creates a grid container with auto rows.</p>
      <PExample
        :html="
          `<small>.grid.flow-column.rows-auto</small>
<div class=&quot;grid flow-column rows-auto mb-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>4</div>
</div>`
        "
      />
      <h3 class="mt-8">.grid.rows-{1-12}</h3>
      <p>Creates a grid container with 1-12 rows.</p>
      <PExample
        :html="
          `<small>.grid.flow-column.rows-2</small>
<div class=&quot;grid flow-column rows-2 mb-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #gaps>
      <h2>Gaps</h2>
      <h3>.grid.gap-0</h3>
      <p>
        Sets the <code>grid-gap</code> property to <code>0</code>. You can also
        use <code>grid-column-gap</code> or <code>grid-row-gap</code> to set
        their respecitve properties.
      </p>
      <h3>.grid.gap-{1-8}</h3>
      <p>
        Sets the <code>grid-gap</code> property to the corresponding value in
        <code>$gaps</code>. You can also use <code>grid-column-gap</code> or
        <code>grid-row-gap</code> to set their respecitve properties.
      </p>
      <PExample
        :html="
          `<div class=&quot;grid columns-2 gap-4&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #spans>
      <h2>Spans</h2>
      <h3>.column-span-full</h3>
      <p>
        Sets the <code>grid-column</code> property to <code>1/-1</code> so it
        spans the full width of the grid.
      </p>
      <h3>.column-span-{1-12}</h3>
      <p>
        Sets the <code>grid-column</code> property to <code>span {1-12}</code>.
      </p>
      <h3>.row-span-full</h3>
      <p>
        Sets the <code>grid-row</code> property to <code>1/-1</code> so it spans
        the full width of the grid.
      </p>
      <h3>.row-span-{1-12}</h3>
      <p>
        Sets the <code>grid-row</code> property to <code>span {1-12}</code>.
      </p>
      <PExample
        :html="
          `<div class=&quot;grid columns-3 gap-4&quot;>
  <div class=&quot;column-span-full border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>1</div>
  <div class=&quot;row-span-2 border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>2</div>
  <div class=&quot;column-span-2 border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1 text-center&quot;>4</div>
</div>`
        "
      />
    </template>

    <!-- TODO: Add responsive example -->
  </Layout>
</template>

