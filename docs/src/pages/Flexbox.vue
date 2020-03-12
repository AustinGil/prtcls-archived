<template>
  <Layout>
    <h1>Flexbox</h1>
    <p class="mb-8">Control CSS flexbox layout.</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.flex': 'display: flex;',
          '.inline-flex': 'display: inline-flex;',
          '.flex-row': 'flex-direction: row;',
          '.flex-row-reverse': 'flex-direction: row-reverse;',
          '.flex-column': 'flex-direction: column;',
          '.flex-column-reverse': 'flex-direction: column-reverse;',
          '.flex-wrap': 'flex-wrap: wrap;',
          '.flex-wrap-reverse': 'flex-wrap: wrap-reverse;',
          '.flex-nowrap': 'flex-wrap: nowrap;',
          '.flex-initial': 'flex: 0 1 auto',
          '.flex-1': 'flex: 1 1 0%',
          '.flex-auto': 'flex: 1 1 auto',
          '.flex-none': 'flex: none',
          '.flex-grow': 'flex-grow: 1',
          '.flex-shrink': 'flex-shrink: 1'
        }"
      />
    </template>

    <template #flex-row>
      <h2>.flex-row</h2>
      <p>Sets the flex-direction property to <code>row</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-row&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #flex-row-reverse>
      <h2>.flex-row-reverse</h2>
      <p>Sets the flex-direction property to <code>row-reverse</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-row-reverse&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #flex-column>
      <h2>.flex-column</h2>
      <p>Sets the flex-direction property to <code>column</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-column&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #flex-column-reverse>
      <h2>.flex-column-reverse</h2>
      <p>Sets the flex-direction property to <code>column-reverse</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-column-reverse&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #flex-wrap>
      <h2>.flex-wrap</h2>
      <p>Sets the flex-wrap property to <code>wrap</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-wrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />
    </template>

    <template #flex-nowrap>
      <h2>.flex-nowrap</h2>
      <p>Sets the flex-wrap property to <code>nowrap</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-nowrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />
    </template>

    <template #flex-wrap-reverse>
      <h2>.flex-wrap-reverse</h2>
      <p>Sets the flex-wrap property to <code>wrap-reverse</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-wrap-reverse&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

