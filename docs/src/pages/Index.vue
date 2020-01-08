<template>
  <Layout>
    <section class="mb-12">
      <h1 class="size-8">{{ $static.metadata.siteName }}</h1>
      <p>A customizable SCSS library for utility-first CSS</p>
    </section>

    <section class="mb-12">
      <h2>Getting Started</h2>
      <p>Install the project with <code>npm install prtcls</code>.</p>
      <p>Create a SCSS file. For example, <code>main.scss</code>.</p>
      <p>In that SCSS file, import the library:</p>
      <pre>
// main.scss

// Customize options here

@import "~prtcls";

// Add more styles here</pre
      >
      <p>(You can customize Particles' SCSS variables above the import.)</p>
      <p>
        If you want to use Particles to extend your own styles, you can use
        SCSS's
        <a href="https://sass-lang.com/documentation/at-rules/extend"
          >@extend</a
        >
        feature:
      </p>
      <pre>
code,
pre {
  @extend .py-1, .px-2, .radius-2, .color-gray-1, .bg-gray-8;
}</pre
      >
      <p>
        Finally, you will most likely want to implement something like
        <a href="https://www.purgecss.com/">PurgeCSS</a> to remove unused CSS.
        If you're using Webpack, it might look like this:
      </p>
      <pre>
// webpack.config.js
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const purgecss = new PurgecssPlugin({
  paths: glob.sync(`./src/**/*.html`)
});

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};</pre
      >
      <p>Be sure to <code>npm install purgecss-webpack-plugin</code> first.</p>
    </section>

    <section class="mb-12">
      <h2>Base Styles</h2>
      <p>There are very few styles affecting base HTML elements:</p>
      <ul>
        <li>Everything uses <code>box-sizing: border-box;</code></li>
        <li>Default margin is removed from <code>&lt;body&gt;</code></li>
        <li>
          Any <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> element with a
          class defined gets the padding and disc-style-type removed
        </li>
      </ul>
    </section>
    <section class="mb-12">
      <h2>Display</h2>
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
    </section>

    <section class="mb-12">
      <h2>Opacity</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.opacity-0': 'opacity: 0;',
          '.opacity-{1-9}': 'opacity: {.1-.9};',
          '.opacity-10': 'opacity: 1;'
        }"
      />
      <h3>Examples</h3>
      <PExample
        :html="
          `<div class=&quot;opacity-0 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-1 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-2 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-3 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-4 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-5 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-6 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-7 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-8 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-9 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-10 p-4 bg-gray-9&quot;></div>`
        "
      />
    </section>

    <section class="mb-12">
      <h2>Visibility</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.visible': 'visibility: visible;',
          '.hidden': 'visibility: hidden;',
          '.visually-hidden': `border: 0;\nclip: rect(0 0 0 0);\nheight: 1px;\nmargin: -1px;\noverflow: hidden;\npadding: 0;\nposition: absolute;\nwidth: 1px;`
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Position</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.static': 'position: static;',
          '.fixed': 'position: fixed;',
          '.absolute': 'position: absolute;',
          '.relative': 'position: relative;',
          '.sticky': 'position: sticky;'
        }"
      />
    </section>

    <section class="mb-12">
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
    </section>

    <section class="mb-12">
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
    </section>

    <section class="mb-12">
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
    </section>

    <section class="mb-12">
      <h2>Flex Direction</h2>

      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.flex-row': 'flex-direction: row;',
          '.flex-row-reverse': 'flex-direction: row-reverse;',
          '.flex-column': 'flex-direction: column;',
          '.flex-column-reverse': 'flex-direction: column-reverse;'
        }"
        class="mb-5"
      />

      <h3>Examples:</h3>
      <p>Row</p>
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

      <p>Row reverse</p>
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

      <p>Column</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-column&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
        class="mb-4"
      />

      <p>Column reverse</p>
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
    </section>

    <section class="mb-12">
      <h2>Flex Wrap</h2>

      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.flex-{wrap|nowrap|wrap-reverse}':
            'flex-wrap: {wrap|nowrap|wrap-reverse};'
        }"
        class="mb-5"
      />

      <p>Wrap</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-wrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />

      <p>Nowrap</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-nowrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />

      <p>Wrap-reverse</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-wrap-reverse&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />
    </section>

    <section class="mb-12">
      <h2>Align & Justify</h2>

      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.align-{start|center|end|baseline|stretch}':
            'align-items: {start|center|end|baseline|stretch};\nalign-content: {start|center|end|baseline|stretch};',
          '.align-items-{start|center|end|baseline|stretch}':
            'align-items: {start|center|end|baseline|stretch};',
          '.align-content-{start|center|end|baseline|stretch}':
            'align-content: {start|center|end|baseline|stretch};',
          '.justify-{start|center|end|around|between|evenly|normal}':
            'justify-items: {start|center|end|around|between|evenly|normal};\njustify-content: {start|center|end|space-around|space-between|space-evenly|normal};',
          '.justify-items-{start|center|end|around|between|evenly|normal}':
            'justify-items: {start|center|end|space-around|space-between|space-evenly|normal};',
          '.justify-content-{start|center|end|around|between|evenly|normal}':
            'justify-content: {start|center|end|space-around|space-between|space-evenly|normal};'
        }"
        class="mb-5"
      />

      <p>Align start</p>
      <PExample
        :html="
          `<div class=&quot;flex align-start&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align center</p>
      <PExample
        :html="
          `<div class=&quot;flex align-center&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align end</p>
      <PExample
        :html="
          `<div class=&quot;flex align-end&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align baselinee</p>
      <PExample
        :html="
          `<div class=&quot;flex align-baseline&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align stretch</p>
      <PExample
        :html="
          `<div class=&quot;flex align-stretch&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </section>

    <section class="mb-12">
      <h2>Justify</h2>

      <p>Justify start</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-start&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify center</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-center&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify end</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-end&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify around</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-around&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify between</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-between&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify evenly</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-evenly&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify normal</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-normal&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />
    </section>

    <section class="mb-12">
      <h2>Width & Height</h2>

      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.w-screen': 'width: 100vw;',
          '.w-full': 'width: 100%;',
          '.w-auto': 'width: auto;',
          '.w-{1/2...11/12}': 'width: {1/2...11/12}%;',
          '.w-{1|2|3|4}': 'width: {40rem|48rem|64rem|80rem}%;',
          '.h-screen': 'height: 100vh;',
          '.h-full': 'height: 100%;',
          '.h-auto': 'height: auto;',
          '.h-{1/2...11/12}': 'height: {1/2...11/12}%;'
        }"
        class="mb-5"
      />

      <h3>Min & Max</h3>
      <p>
        You can also prefix any class name with <code>min-</code> or
        <code>max-</code> to achieve the same value applied for
        <code>min-{width|height}</code> or
        <code>max-{width|height}</code> respectively. For example:
        <code>.min-w-1/2</code> would render <code>min-width: 50%;</code>
      </p>

      <h3>Customization</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $widths: '40rem, 48rem, 64rem, 80rem'
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Margin & Padding</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.m-auto': 'margin: auto;',
          '.m-0': 'margin: 0;',
          '.my-0': 'margin-top: 0;\nmargin-bottom: 0;',
          '.mx-0': 'margin-left: 0;\nmargin-right: 0;',
          '.m{t|b|l|r}-0': 'margin-{top|bottom|left|right}: 0;',
          '.m-{1-12}':
            'margin: {.25rem|.5rem|.75rem|1rem|1.25rem|1.5rem|2rem|2.5rem|3rem|4rem|5rem|6rem};',
          '.p-auto': 'margin: auto;',
          '.p-0': 'margin: 0;',
          '.py-0': 'margin-top: 0;\nmargin-bottom: 0;',
          '.px-0': 'margin-left: 0;\nmargin-right: 0;',
          '.p{t|b|l|r}-0': 'margin-{top|bottom|left|right}: 0;',
          '.p-{1-12}':
            'margin: {.25rem|.5rem|.75rem|1rem|1.25rem|1.5rem|2rem|2.5rem|3rem|4rem|5rem|6rem};'
        }"
      />

      <h3>Examples:</h3>
      <p>Margin bottom</p>
      <PExample
        :html="
          `<div class=&quot;mb-3 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />
      <p>Margin x-axis auto</p>
      <PExample
        :html="
          `<div class=&quot;mx-auto w-1/2 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $spacers:
            '.25rem, .5rem, .75rem, 1rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 5rem, 6rem'
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Border</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.border-0': 'border: 0;',
          '.border-{1-4}': 'border: {1px|2px|4px|8px} solid;',
          '.border-{solid|dashed|dotted|none}':
            'border-style: {solid|dashed|dotted|none};',
          '.border-{color}-{variant}': 'border-color: {hsl color};',
          '.border-{t|b|l|r|}-{width|style|color}':
            'border-{top|bottom|left|right}-{width|style|color}: {value};'
        }"
      />

      <h3>Examples:</h3>
      <PExample
        :html="
          `<div class=&quot;border-4 border-purple-5 border-dotted p-4 bg-gray-1&quot;></div>`
        "
      />

      <p>Specifying one side</p>
      <PExample
        :html="
          `<div class=&quot;border-b-4 border-b-purple-5 border-b-dotted border-t-3 border-t-dashed border-t-green-7 p-4 bg-gray-1&quot;></div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $borderWidths: '1px, 2px, 0.25rem, 0.5rem'
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Border Radius</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.radius-0': 'border-radius: 0;',
          '.radius-full': 'border-radius: 9999px;',
          '.radius-{1-4}': 'border-radius: {0.25rem|0.5rem|0.75rem|1rem};'
        }"
      />

      <h3>Examples:</h3>
      <p>Basic radius</p>
      <PExample
        :html="
          `<div class=&quot;radius-2 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />

      <p>Radius full</p>
      <PExample
        :html="
          `<div class=&quot;radius-full border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />

      <p>Only one side</p>
      <PExample
        :html="
          `<div class=&quot;radius-t-3 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />

      <p>Only one corner</p>
      <PExample
        :html="
          `<div class=&quot;radius-br-3 border-1 border-gray-3 p-4 bg-gray-1&quot;></div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $radii: '0.25rem, 0.5rem, 0.75rem, 1rem'
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Font Family</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.font-sans': `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';`,
          '.font-serif': `font-family: Georgia, Cambria, 'Times New Roman', Times, serif;`,
          '.font-mono': `font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;`
        }"
      />

      <h3>Examples:</h3>
      <p>Sans-serif</p>
      <PExample
        :html="
          `<div class=&quot;font-sans&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />
      <p>Serif</p>
      <PExample
        :html="
          `<div class=&quot;font-serif&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />
      <p>Monospace</p>
      <PExample
        :html="
          `<div class=&quot;font-mono&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $fontSans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
          $fontSerif: `Georgia, Cambria, 'Times New Roman', Times, serif`,
          $fontMono: `Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Font Size</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.size-{1-10}':
            'font-size: {0.75rem|1rem|1.25rem|1.5rem|1.75rem|2rem|2.5rem|3rem|4rem};'
        }"
      />

      <h3>Examples:</h3>
      <PExample
        :html="
          `<div class=&quot;size-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-3&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-4&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-6&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-7&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-8&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-9&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;size-10&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $fontSizes:
            '0.75rem, 1rem, 1.25rem, 1.5rem, 1.75rem, 2rem, 2.5rem, 3rem, 4rem, 6rem'
        }"
      />
    </section>

    <section class="mb-12">
      <h2>Line Height</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.line-h-{1-6}': 'line-height: {1|1.25|1.375|1.5|1.625|2};'
        }"
      />

      <h3>Examples:</h3>
      <PExample
        :html="
          `<div class=&quot;line-h-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;line-h-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;line-h-3&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;line-h-4&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;line-h-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;line-h-6&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />

      <h3>Customization:</h3>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $lineHeights: '1, 1.25, 1.375, 1.5, 1.625, 2'
        }"
      />
    </section>

    <section>
      <h2>Theme</h2>
      <h3>Colors</h3>
      <div
        v-for="color in [
          'red',
          'orange',
          'yellow',
          'green',
          'cyan',
          'blue',
          'purple',
          'pink',
          'gray'
        ]"
        :key="color"
        class="grid columns-3 gap-4 mb-8"
      >
        <h5 class="span-full m-0 capitalize">{{ color }}</h5>
        <div
          v-for="num in 9"
          :key="num"
          :class="`bg-${color}-${num} p-4`"
        ></div>
      </div>

      <h4>Customization:</h4>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $saturation: '70%',
          $colors: `('red', 0[, $saturation]), ('orange', 25[, $saturation]), ('yellow', 55[, $saturation]), ('green', 110[, $saturation]), ('cyan', 170[, $saturation]), ('blue', 210[, $saturation]), ('purple', 270[, $saturation]), ('pink', 300[, $saturation])`
        }"
      />
      <p>
        Colors use HSL values to dynamically generate variants based on their
        lightness. To accomplish this, you must provide a list of colors. Each
        item in the list must be itself, a lit with the name you want to give
        the color, and it's hue. Optionally, you may provide a third value to
        the color list for it's saturation.
      </p>
      <p>
        To find the right hue from a different color format, try
        <a href="https://convertacolor.com/">this tool</a>.
      </p>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

