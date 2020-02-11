<template>
  <Layout>
    <h1>Display</h1>
    <p>Apply display properties of an element</p>

    <template slot="classes">
      <h2 class="mt-8">Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.inline': 'display: inline;',
          '.block': 'display: block;',
          '.inline-block': 'display: inline-block;',
          '.grid': 'display: grid;',
          '.inline-grid': 'display: inline-grid;',
          '.flex': 'display: flex;',
          '.inline-flex': 'display: inline-flex;',
          '.table': 'display: table;',
          '.table-row': 'display: table-row;',
          '.table-cell': 'display: table-cell;',
          '.display-none': 'display: none;'
        }"
      />
    </template>

    <template slot="inline">
      <h2>.inline</h2>
      <p>Sets the display property to <code>inline</code>.</p>
      <PExample
        :html="
          `<div class=&quot;bg-gray-1&quot;>
  <div class=&quot;inline p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;inline p-4 bg-gray-2&quot;>2</div>
  <div class=&quot;inline p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;inline p-4 bg-gray-2&quot;>4</div>
</div>`
        "
      />
    </template>

    <template slot="block">
      <h2>.block</h2>
      <p>Sets the display property to <code>block</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <span class=&quot;block p-4 bg-gray-2&quot;>1</span>
  <span class=&quot;block p-4 bg-gray-3&quot;>2</span>
  <span class=&quot;block p-4 bg-gray-4&quot;>3</span>
  <span class=&quot;block p-4 bg-gray-5&quot;>4</span>
</div>`
        "
      />
    </template>

    <template slot="inline-block">
      <h2>.inline-block</h2>
      <p>Sets the display property to <code>inline-block</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <div class=&quot;inline-block p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;inline-block p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;inline-block p-4 bg-gray-4&quot;>3</div>
  <div class=&quot;inline-block p-4 bg-gray-5&quot;>4</div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

