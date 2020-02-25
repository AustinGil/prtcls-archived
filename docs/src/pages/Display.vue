<template>
  <Layout>
    <h1>Display</h1>
    <p class="mb-8">Apply display properties of an element</p>

    <template #classes>
      <h2>Classes</h2>
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
          '.table-caption': 'display: table-caption;',
          '.table-column': 'display: table-column;',
          '.table-column-group': 'display: table-column-group;',
          '.table-footer-group': 'display: table-footer-group;',
          '.table-header-group': 'display: table-header-group;',
          '.table-row-group': 'display: table-row-group;',
          '.display-none': 'display: none;'
        }"
      />
    </template>

    <template #inline>
      <h2>.inline</h2>
      <p>Sets the display property to <code>inline</code>.</p>
      <PExample
        :html="
          `<div class=&quot;bg-gray-1&quot;>
  <div class=&quot;inline p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;inline p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;inline p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;inline p-4 bg-gray-3&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #block>
      <h2>.block</h2>
      <p>Sets the display property to <code>block</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 text-center bg-gray-1&quot;>
  <span class=&quot;block p-4 bg-gray-2&quot;>1</span>
  <span class=&quot;block p-4 bg-gray-3&quot;>2</span>
  <span class=&quot;block p-4 bg-gray-2&quot;>3</span>
  <span class=&quot;block p-4 bg-gray-3&quot;>4</span>
</div>`
        "
      />
    </template>

    <template #inline-block>
      <h2>.inline-block</h2>
      <p>Sets the display property to <code>inline-block</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <div class=&quot;inline-block p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;inline-block p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;inline-block p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;inline-block p-4 bg-gray-3&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #flex>
      <h2>.flex</h2>
      <p>Sets the display property to <code>flex</code>.</p>
      <PExample
        :html="
          `<div class=&quot;flex p-4 text-center bg-gray-1&quot;>
  <span class=&quot;flex-grow m-2 p-4 bg-gray-2&quot;>1</span>
  <span class=&quot;flex-grow m-2 p-4 bg-gray-3&quot;>2</span>
  <span class=&quot;flex-grow m-2 p-4 bg-gray-2&quot;>3</span>
  <span class=&quot;flex-grow m-2 p-4 bg-gray-3&quot;>4</span>
</div>`
        "
      />
    </template>

    <template #inline-flex>
      <h2>.inline-flex</h2>
      <p>Sets the display property to <code>inline-flex</code>.</p>
      <PExample
        :html="
          `<div class=&quot;inline-flex p-4 bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;p-4 bg-gray-3&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #grid>
      <h2>.grid</h2>
      <p>Sets the display property to <code>grid</code>.</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-3 p-4 text-center bg-gray-1&quot;>
  <span class=&quot;p-4 bg-gray-2&quot;>1</span>
  <span class=&quot;p-4 bg-gray-3&quot;>2</span>
  <span class=&quot;p-4 bg-gray-2&quot;>3</span>
  <span class=&quot;p-4 bg-gray-3&quot;>4</span>
  <span class=&quot;p-4 bg-gray-2&quot;>5</span>
  <span class=&quot;p-4 bg-gray-3&quot;>6</span>
</div>`
        "
      />
    </template>

    <template #inline-grid>
      <h2>.inline-grid</h2>
      <p>Sets the display property to <code>inline-grid</code>.</p>
      <PExample
        :html="
          `<div class=&quot;inline-grid columns-3 p-4 bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;p-4 bg-gray-3&quot;>4</div>
  <span class=&quot;p-4 bg-gray-2&quot;>5</span>
  <span class=&quot;p-4 bg-gray-3&quot;>6</span>
</div>`
        "
      />
    </template>

    <template #display-none>
      <h2>.display-none</h2>
      <p>Sets the display property to <code>none</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 text-center bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;>1</div>
  <div class=&quot;display-none p-4 bg-gray-3&quot;>2</div>
  <div class=&quot;display-none p-4 bg-gray-2&quot;>3</div>
  <div class=&quot;p-4 bg-gray-3&quot;>4</div>
</div>`
        "
      />
    </template>

    <template #responsive>
      <h2>Responsive</h2>
      <PResponsive
        class="mt-4"
        :classes="['flex', 'block', 'inline-block', 'grid', 'flex']"
      >
        <template #default="{ activeClass}">
          <div :class="['p-2 bg-gray-1', activeClass]">
            <div class="m-2 p-4 bg-gray-2">1</div>
            <div class="m-2 p-4 bg-gray-2">2</div>
            <div class="m-2 p-4 bg-gray-2">3</div>
          </div>
        </template>
      </PResponsive>
    </template>
  </Layout>
</template>

