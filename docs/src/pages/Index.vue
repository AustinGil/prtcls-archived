<template>
  <Layout>
    <h1>{{ $static.metadata.siteName }}</h1>
    <p>A customizable SCSS library for utility-first CSS</p>

    <!-- <section class="mb-12">
      <h2>Getting Started</h2>
      <p><code>npm install prtcls</code></p>
    </section> -->

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
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Grid with strictly defined columns (supports 1-8 columns)</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-4&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Grid with strictly defined rows (supports 1-8 rows)</p>
      <PExample
        :html="
          `<div class=&quot;grid rows-4&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
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
      <p>
        Default sizes: 0.25rem, 0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem.
      </p>
      <h3>Exxamples:</h3>
      <p>Even space all around</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-2 gap-2&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Only column gap</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-2 column-gap-2&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Only row gap</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-2 row-gap-2&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <h3>Customization</h3>
      <p>
        You can provide your own list of gap values by customizing the
        <code>$gaps</code> variable.
      </p>
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
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;column-span-2 border border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Row span</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-3 gap-2&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;row-span-2 border border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Row & Column span</p>
      <PExample
        :html="
          `<div class=&quot;grid columns-4 gap-2&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;column-span-2 row-span-2 border border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
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
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />

      <p>Row reverse</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-row-reverse&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
      />

      <p>Column</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-column&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
        "
        class="mb-4"
      />

      <p>Column reverse</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-column-reverse&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;>4</div>
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
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />

      <p>Nowrap</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-nowrap&quot;>
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
        "
      />

      <p>Wrap-reverse</p>
      <PExample
        :html="
          `<div class=&quot;flex flex-wrap-reverse&quot;>
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border border-gray-3 p-4 bg-gray-1&quot;>2</div>
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
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align center</p>
      <PExample
        :html="
          `<div class=&quot;flex align-center&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align end</p>
      <PExample
        :html="
          `<div class=&quot;flex align-end&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align baselinee</p>
      <PExample
        :html="
          `<div class=&quot;flex align-baseline&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Align stretch</p>
      <PExample
        :html="
          `<div class=&quot;flex align-stretch&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
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
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify center</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-center&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify end</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-end&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify around</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-around&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify between</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-between&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify evenly</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-evenly&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
        "
      />

      <p>Justify normal</p>
      <PExample
        :html="
          `<div class=&quot;flex justify-normal&quot;>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border border-gray-3 p-4 bg-gray-1&quot;></div>
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
          '.h-{1/2...11/12}': 'height: {1/2...11/12}%;',
          '': ''
        }"
        class="mb-5"
      />

      <p>
        You can also prefix any class name with <code>min-</code> or
        <code>max-</code> to achieve the same value applied for
        <code>min-{width|height}</code> or
        <code>max-{width|height}</code> respectively. For example:
        <code>.min-w-1/2</code> would render <code>min-width: 50%;</code>
      </p>
    </section>

    <section class="mb-12">
      <h2>Margin & Padding</h2>
      <p>
        Variables: $spacers: .25rem, .5rem, .75rem, 1rem, 1.25rem, 1.5rem, 2rem,
        2.5rem, 3rem, 4rem, 5rem, 6rem !default;
      </p>
      <p class="m-auto">
        .m-auto { margin-top: auto; margin-bottom: auto; margin-left: auto;
        margin-right: auto; }
      </p>
      <p class="m-0">
        .m-0 { margin-top: 0; margin-bottom: 0; margin-left: 0; margin-right: 0;
        }
      </p>
      <p class="m-1">
        .m-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; margin-left:
        0.25rem; margin-right: 0.25rem; }
      </p>
      <p class="m-2">
        .m-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; margin-left: 0.5rem;
        margin-right: 0.5rem; }
      </p>
      <p class="m-3">
        .m-3 { margin-top: 0.75rem; margin-bottom: 0.75rem; margin-left:
        0.75rem; margin-right: 0.75rem; }
      </p>
      <p class="m-4">
        .m-4 { margin-top: 1rem; margin-bottom: 1rem; margin-left: 1rem;
        margin-right: 1rem; }
      </p>
      <p class="m-5">
        .m-5 { margin-top: 1.25rem; margin-bottom: 1.25rem; margin-left:
        1.25rem; margin-right: 1.25rem; }
      </p>
      <p class="m-6">
        .m-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; margin-left: 1.5rem;
        margin-right: 1.5rem; }
      </p>
      <p class="m-7">
        .m-7 { margin-top: 2rem; margin-bottom: 2rem; margin-left: 2rem;
        margin-right: 2rem; }
      </p>
      <p class="m-8">
        .m-8 { margin-top: 2.5rem; margin-bottom: 2.5rem; margin-left: 2.5rem;
        margin-right: 2.5rem; }
      </p>
      <p class="m-9">
        .m-9 { margin-top: 3rem; margin-bottom: 3rem; margin-left: 3rem;
        margin-right: 3rem; }
      </p>
      <p class="m-10">
        .m-10 { margin-top: 4rem; margin-bottom: 4rem; margin-left: 4rem;
        margin-right: 4rem; }
      </p>
      <p class="m-11">
        .m-11 { margin-top: 5rem; margin-bottom: 5rem; margin-left: 5rem;
        margin-right: 5rem; }
      </p>
      <p class="m-12">
        .m-12 { margin-top: 6rem; margin-bottom: 6rem; margin-left: 6rem;
        margin-right: 6rem; }
      </p>

      <p class="p-auto">
        .p-auto { padding-top: auto; padding-bottom: auto; padding-left: auto;
        padding-right: auto; }
      </p>
      <p class="p-0">
        .p-0 { padding-top: 0; padding-bottom: 0; padding-left: 0;
        padding-right: 0; }
      </p>
      <p class="p-1">
        .p-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; padding-left:
        0.25rem; padding-right: 0.25rem; }
      </p>
      <p class="p-2">
        .p-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; padding-left:
        0.5rem; padding-right: 0.5rem; }
      </p>
      <p class="p-3">
        .p-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; padding-left:
        0.75rem; padding-right: 0.75rem; }
      </p>
      <p class="p-4">
        .p-4 { padding-top: 1rem; padding-bottom: 1rem; padding-left: 1rem;
        padding-right: 1rem; }
      </p>
      <p class="p-5">
        .p-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; padding-left:
        1.25rem; padding-right: 1.25rem; }
      </p>
      <p class="p-6">
        .p-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; padding-left:
        1.5rem; padding-right: 1.5rem; }
      </p>
      <p class="p-7">
        .p-7 { padding-top: 2rem; padding-bottom: 2rem; padding-left: 2rem;
        padding-right: 2rem; }
      </p>
      <p class="p-8">
        .p-8 { padding-top: 2.5rem; padding-bottom: 2.5rem; padding-left:
        2.5rem; padding-right: 2.5rem; }
      </p>
      <p class="p-9">
        .m-9 { padding-top: 3rem; padding-bottom: 3rem; padding-left: 3rem;
        padding-right: 3rem; }
      </p>
      <p class="p-10">
        .p-10 { padding-top: 4rem; padding-bottom: 4rem; padding-left: 4rem;
        padding-right: 4rem; }
      </p>
      <p class="p-11">
        .p-11 { padding-top: 5rem; padding-bottom: 5rem; padding-left: 5rem;
        padding-right: 5rem; }
      </p>
      <p class="p-12">
        .m-12 { padding-top: 6rem; padding-bottom: 6rem; padding-left: 6rem;
        padding-right: 6rem; }
      </p>
    </section>

    <section class="mb-12">
      <h2>Border</h2>
      <p class="border-0 border-solid">.border-0 { border-width: 0 }</p>
      <p class="border-1 border-solid">.border-1 { border-width: 1px }</p>
      <p class="border-2 border-solid">.border-2 { border-width: 2px }</p>
      <p class="border-3 border-solid">.border-3 { border-width: 4px }</p>
      <p class="border-4 border-solid">.border-4 { border-width: 8px }</p>

      <p class="border-solid">.border-solid { border-style: solid }</p>
      <p class="border-dashed">.border-dashed { border-style: dashed }</p>
      <p class="border-dotted">.border-dotted { border-style: dotted }</p>
      <p class="border-none">.border-none { border-style: none }</p>

      <p class="border-purple-1 border-solid">
        .border-purple-1 { border-color: hsl(270, 70%, 90%); }
      </p>
      <p class="border-purple-2 border-solid">
        .border-purple-2 { border-color: hsl(270, 70%, 80%); }
      </p>
      <p class="border-purple-3 border-solid">
        .border-purple-3 { border-color: hsl(270, 70%, 70%); }
      </p>
      <p class="border-purple-4 border-solid">
        .border-purple-4 { border-color: hsl(270, 70%, 60%); }
      </p>
      <p class="border-purple-5 border-solid">
        .border-purple-5 { border-color: hsl(270, 70%, 50%); }
      </p>
      <p class="border-purple-6 border-solid">
        .border-purple-6 { border-color: hsl(270, 70%, 40%); }
      </p>
      <p class="border-purple-7 border-solid">
        .border-purple-7 { border-color: hsl(270, 70%, 30%); }
      </p>
      <p class="border-purple-8 border-solid">
        .border-purple-8 { border-color: hsl(270, 70%, 20%); }
      </p>
      <p class="border-purple-9 border-solid">
        .border-purple-9 { border-color: hsl(25, 70%, 91%); }
      </p>
    </section>

    <section class="mb-12">
      <h2>Border Radius</h2>
      <p class="radius-0 bg-gray-1 p-6">.radius-0 { border-radius: 0; }</p>
      <p class="radius-1 bg-gray-1 p-6">.radius-1 { border-radius: .25rem; }</p>
      <p class="radius-2 bg-gray-1 p-6">.radius-2 { border-radius: .5rem; }</p>
      <p class="radius-3 bg-gray-1 p-6">.radius-3 { border-radius: .75rem; }</p>
      <p class="radius-4 bg-gray-1 p-6">.radius-4 { border-radius: 1rem; }</p>
      <p class="radius-full bg-gray-1 p-6">
        .radius-full { border-radius: 9999px; }
      </p>
    </section>

    <section class="mb-12">
      <h2>Font Family</h2>
      <p class="font-sans">
        .font-sans { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
        Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color
        Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; }
      </p>
      <p class="font-serif">
        .font-serif { font-family: Georgia, Cambria, "Times New Roman", Times,
        serif; }
      </p>
      <p class="font-mono">
        .font-mono { font-family: Menlo, Monaco, Consolas, "Liberation Mono",
        "Courier New", monospace; }
      </p>
    </section>

    <section class="mb-12">
      <h2>Font Size</h2>
      <p>
        Sass variable: $fontSizes: 0.75rem, 1rem, 1.25rem, 1.5rem, 1.75rem,
        2rem, 2.5rem, 3rem, 4rem !default;
      </p>
      <p class="size-1">.size-1 { font-size: 0.75rem; }</p>
      <p class="size-2">.size-2 { font-size: 1rem; }</p>
      <p class="size-3">.size-3 { font-size: 1.25rem; }</p>
      <p class="size-4">.size-4 { font-size: 1.5rem; }</p>
      <p class="size-5">.size-5 { font-size: 1.75rem; }</p>
      <p class="size-6">.size-6 { font-size: 2rem; }</p>
      <p class="size-7">.size-7 { font-size: 2.5rem; }</p>
      <p class="size-8">.size-8 { font-size: 3rem; }</p>
      <p class="size-9">.size-9 { font-size: 4rem; }</p>
      <p class="size-10">.size-10 { font-size: 6rem; }</p>
    </section>

    <section class="mb-12">
      <h2>Color</h2>
      <p>
        Variable: $colors: ("red", 0), ("orange", 25), ("yellow", 55), ("green",
        110), ("cyan", 170), ("blue", 210), ("purple", 270), ("pink", 300);
      </p>

      <p class="color-white bg-black">.color-white { color: white; }</p>
      <p class="color-black">.color-black { color: black; }</p>
      <p>.color-transparent { color: transparent; }</p>

      <p class="color-red-1">.color-red-1 { color: hsl(0, 70%, 90%); }</p>
      <p class="color-red-2">.color-red-2 { color: hsl(0, 70%, 80%); }</p>
      <p class="color-red-3">.color-red-3 { color: hsl(0, 70%, 70%); }</p>
      <p class="color-red-4">.color-red-4 { color: hsl(0, 70%, 60%); }</p>
      <p class="color-red-5">.color-red-5 { color: hsl(0, 70%, 50%); }</p>
      <p class="color-red-6">.color-red-6 { color: hsl(0, 70%, 40%); }</p>
      <p class="color-red-7">.color-red-7 { color: hsl(0, 70%, 30%); }</p>
      <p class="color-red-8">.color-red-8 { color: hsl(0, 70%, 20%); }</p>
      <p class="color-red-9">.color-red-9 { color: hsl(0, 70%, 10%); }</p>

      <p class="color-orange-1">
        .color-orange-1 { color: hsl(25, 70%, 90%); }
      </p>
      <p class="color-orange-2">
        .color-orange-2 { color: hsl(25, 70%, 80%); }
      </p>
      <p class="color-orange-3">
        .color-orange-3 { color: hsl(25, 70%, 70%); }
      </p>
      <p class="color-orange-4">
        .color-orange-4 { color: hsl(25, 70%, 60%); }
      </p>
      <p class="color-orange-5">
        .color-orange-5 { color: hsl(25, 70%, 50%); }
      </p>
      <p class="color-orange-6">
        .color-orange-6 { color: hsl(25, 70%, 40%); }
      </p>
      <p class="color-orange-7">
        .color-orange-7 { color: hsl(25, 70%, 30%); }
      </p>
      <p class="color-orange-8">
        .color-orange-8 { color: hsl(25, 70%, 20%); }
      </p>
      <p class="color-orange-9">
        .color-orange-9 { color: hsl(25, 70%, 10%); }
      </p>

      <p class="color-yellow-1">
        .color-yellow-1 { color: hsl(55, 70%, 90%); }
      </p>
      <p class="color-yellow-2">
        .color-yellow-2 { color: hsl(55, 70%, 80%); }
      </p>
      <p class="color-yellow-3">
        .color-yellow-3 { color: hsl(55, 70%, 70%); }
      </p>
      <p class="color-yellow-4">
        .color-yellow-4 { color: hsl(55, 70%, 60%); }
      </p>
      <p class="color-yellow-5">
        .color-yellow-5 { color: hsl(55, 70%, 50%); }
      </p>
      <p class="color-yellow-6">
        .color-yellow-6 { color: hsl(55, 70%, 40%); }
      </p>
      <p class="color-yellow-7">
        .color-yellow-7 { color: hsl(55, 70%, 30%); }
      </p>
      <p class="color-yellow-8">
        .color-yellow-8 { color: hsl(55, 70%, 20%); }
      </p>
      <p class="color-yellow-9">
        .color-yellow-9 { color: hsl(55, 70%, 10%); }
      </p>

      <p class="color-green-1">.color-green-1 { color: hsl(110, 70%, 90%); }</p>
      <p class="color-green-2">.color-green-2 { color: hsl(110, 70%, 80%); }</p>
      <p class="color-green-3">.color-green-3 { color: hsl(110, 70%, 70%); }</p>
      <p class="color-green-4">.color-green-4 { color: hsl(110, 70%, 60%); }</p>
      <p class="color-green-5">.color-green-5 { color: hsl(110, 70%, 50%); }</p>
      <p class="color-green-6">.color-green-6 { color: hsl(110, 70%, 40%); }</p>
      <p class="color-green-7">.color-green-7 { color: hsl(110, 70%, 30%); }</p>
      <p class="color-green-8">.color-green-8 { color: hsl(110, 70%, 20%); }</p>
      <p class="color-green-9">.color-green-9 { color: hsl(110, 70%, 10%); }</p>

      <p class="color-cyan-1">.color-cyan-1 { color: hsl(170, 70%, 90%); }</p>
      <p class="color-cyan-2">.color-cyan-2 { color: hsl(170, 70%, 80%); }</p>
      <p class="color-cyan-3">.color-cyan-3 { color: hsl(170, 70%, 70%); }</p>
      <p class="color-cyan-4">.color-cyan-4 { color: hsl(170, 70%, 60%); }</p>
      <p class="color-cyan-5">.color-cyan-5 { color: hsl(170, 70%, 50%); }</p>
      <p class="color-cyan-6">.color-cyan-6 { color: hsl(170, 70%, 40%); }</p>
      <p class="color-cyan-7">.color-cyan-7 { color: hsl(170, 70%, 30%); }</p>
      <p class="color-cyan-8">.color-cyan-8 { color: hsl(170, 70%, 20%); }</p>
      <p class="color-cyan-9">.color-cyan-9 { color: hsl(170, 70%, 10%); }</p>

      <p class="color-blue-1">.color-blue-1 { color: hsl(210, 70%, 90%); }</p>
      <p class="color-blue-2">.color-blue-2 { color: hsl(210, 70%, 80%); }</p>
      <p class="color-blue-3">.color-blue-3 { color: hsl(210, 70%, 70%); }</p>
      <p class="color-blue-4">.color-blue-4 { color: hsl(210, 70%, 60%); }</p>
      <p class="color-blue-5">.color-blue-5 { color: hsl(210, 70%, 50%); }</p>
      <p class="color-blue-6">.color-blue-6 { color: hsl(210, 70%, 40%); }</p>
      <p class="color-blue-7">.color-blue-7 { color: hsl(210, 70%, 30%); }</p>
      <p class="color-blue-8">.color-blue-8 { color: hsl(210, 70%, 20%); }</p>
      <p class="color-blue-9">.color-blue-9 { color: hsl(210, 70%, 10%); }</p>

      <p class="color-purple-1">
        .color-purple-1 { color: hsl(270, 70%, 90%); }
      </p>
      <p class="color-purple-2">
        .color-purple-2 { color: hsl(270, 70%, 80%); }
      </p>
      <p class="color-purple-3">
        .color-purple-3 { color: hsl(270, 70%, 70%); }
      </p>
      <p class="color-purple-4">
        .color-purple-4 { color: hsl(270, 70%, 60%); }
      </p>
      <p class="color-purple-5">
        .color-purple-5 { color: hsl(270, 70%, 50%); }
      </p>
      <p class="color-purple-6">
        .color-purple-6 { color: hsl(270, 70%, 40%); }
      </p>
      <p class="color-purple-7">
        .color-purple-7 { color: hsl(270, 70%, 30%); }
      </p>
      <p class="color-purple-8">
        .color-purple-8 { color: hsl(270, 70%, 20%); }
      </p>
      <p class="color-purple-9">
        .color-purple-9 { color: hsl(25, 70%, 91%); }
      </p>

      <p class="color-pink-1">.color-pink-1 { color: hsl(300, 70%, 90%); }</p>
      <p class="color-pink-2">.color-pink-2 { color: hsl(300, 70%, 80%); }</p>
      <p class="color-pink-3">.color-pink-3 { color: hsl(300, 70%, 70%); }</p>
      <p class="color-pink-4">.color-pink-4 { color: hsl(300, 70%, 60%); }</p>
      <p class="color-pink-5">.color-pink-5 { color: hsl(300, 70%, 50%); }</p>
      <p class="color-pink-6">.color-pink-6 { color: hsl(300, 70%, 40%); }</p>
      <p class="color-pink-7">.color-pink-7 { color: hsl(300, 70%, 30%); }</p>
      <p class="color-pink-8">.color-pink-8 { color: hsl(300, 70%, 20%); }</p>
      <p class="color-pink-9">.color-pink-9 { color: hsl(300, 70%, 10%); }</p>

      <p class="color-gray-1">.color-gray-1 { color: hsl(0, 0, 90%); }</p>
      <p class="color-gray-2">.color-gray-2 { color: hsl(0, 0, 80%); }</p>
      <p class="color-gray-3">.color-gray-3 { color: hsl(0, 0, 70%); }</p>
      <p class="color-gray-4">.color-gray-4 { color: hsl(0, 0, 60%); }</p>
      <p class="color-gray-5">.color-gray-5 { color: hsl(0, 0, 50%); }</p>
      <p class="color-gray-6">.color-gray-6 { color: hsl(0, 0, 40%); }</p>
      <p class="color-gray-7">.color-gray-7 { color: hsl(0, 0, 30%); }</p>
      <p class="color-gray-8">.color-gray-8 { color: hsl(0, 0, 20%); }</p>
      <p class="color-gray-9">.color-gray-9 { color: hsl(0, 0, 10%); }</p>
    </section>

    <section class="mb-12">
      <h2>Font Weight</h2>
      <p class="weight-1">.weight-1 { font-weight: 100; }</p>
      <p class="weight-2">.weight-2 { font-weight: 200; }</p>
      <p class="weight-3">.weight-3 { font-weight: 300; }</p>
      <p class="weight-4">.weight-4 { font-weight: 400; }</p>
      <p class="weight-5">.weight-5 { font-weight: 500; }</p>
      <p class="weight-6">.weight-6 { font-weight: 600; }</p>
      <p class="weight-7">.weight-7 { font-weight: 700; }</p>
      <p class="weight-8">.weight-8 { font-weight: 800; }</p>
      <p class="weight-9">.weight-9 { font-weight: 900; }</p>
    </section>

    <section class="mb-12">
      <h2>Text Styling</h2>
      <p class="text-left">.text-left { text-align: left; }</p>
      <p class="text-right">.text-right { text-align: right; }</p>
      <p class="text-center">.text-center { text-align: center; }</p>
      <p class="text-justify">.text-justify { text-align: justify; }</p>

      <p class="uppercase">.uppercase { text-transform: uppercase; }</p>
      <p class="lowercase">.lowercase { text-transform: lowercase; }</p>
      <p class="capitalize">.capitalize { text-transform: capitalize; }</p>
      <p class="normal-case">.normal-case { text-transform: none; }</p>

      <p class="underline">.underline { text-decoration: underline; }</p>
      <p class="overline">.overline { text-decoration: overline; }</p>
      <p class="line-through">
        .line-through { text-decoration: line-through; }
      </p>
      <p class="no-line">.no-line { text-decoration: none; }</p>
    </section>

    <section class="mb-12">
      <h2>Background Color</h2>
      <p class="bg-white">.bg-white { background-color: white; }</p>
      <p class="bg-black color-white">.bg-black { background-color: black; }</p>
      <p>.bg-transparent { background-color: transparent; }</p>

      <p class="bg-red-1">.bg-red-1 { background-color: hsl(0, 70%, 90%); }</p>
      <p class="bg-red-2">.bg-red-2 { background-color: hsl(0, 70%, 80%); }</p>
      <p class="bg-red-3">.bg-red-3 { background-color: hsl(0, 70%, 70%); }</p>
      <p class="bg-red-4">.bg-red-4 { background-color: hsl(0, 70%, 60%); }</p>
      <p class="bg-red-5">.bg-red-5 { background-color: hsl(0, 70%, 50%); }</p>
      <p class="bg-red-6">.bg-red-6 { background-color: hsl(0, 70%, 40%); }</p>
      <p class="bg-red-7">.bg-red-7 { background-color: hsl(0, 70%, 30%); }</p>
      <p class="bg-red-8">.bg-red-8 { background-color: hsl(0, 70%, 20%); }</p>
      <p class="bg-red-9">.bg-red-9 { background-color: hsl(0, 70%, 10%); }</p>

      <p class="bg-orange-1">
        .bg-orange-1 { background-color: hsl(25, 70%, 90%); }
      </p>
      <p class="bg-orange-2">
        .bg-orange-2 { background-color: hsl(25, 70%, 80%); }
      </p>
      <p class="bg-orange-3">
        .bg-orange-3 { background-color: hsl(25, 70%, 70%); }
      </p>
      <p class="bg-orange-4">
        .bg-orange-4 { background-color: hsl(25, 70%, 60%); }
      </p>
      <p class="bg-orange-5">
        .bg-orange-5 { background-color: hsl(25, 70%, 50%); }
      </p>
      <p class="bg-orange-6">
        .bg-orange-6 { background-color: hsl(25, 70%, 40%); }
      </p>
      <p class="bg-orange-7">
        .bg-orange-7 { background-color: hsl(25, 70%, 30%); }
      </p>
      <p class="bg-orange-8">
        .bg-orange-8 { background-color: hsl(25, 70%, 20%); }
      </p>
      <p class="bg-orange-9">
        .bg-orange-9 { background-color: hsl(25, 70%, 10%); }
      </p>

      <p class="bg-yellow-1">
        .bg-yellow-1 { background-color: hsl(55, 70%, 90%); }
      </p>
      <p class="bg-yellow-2">
        .bg-yellow-2 { background-color: hsl(55, 70%, 80%); }
      </p>
      <p class="bg-yellow-3">
        .bg-yellow-3 { background-color: hsl(55, 70%, 70%); }
      </p>
      <p class="bg-yellow-4">
        .bg-yellow-4 { background-color: hsl(55, 70%, 60%); }
      </p>
      <p class="bg-yellow-5">
        .bg-yellow-5 { background-color: hsl(55, 70%, 50%); }
      </p>
      <p class="bg-yellow-6">
        .bg-yellow-6 { background-color: hsl(55, 70%, 40%); }
      </p>
      <p class="bg-yellow-7">
        .bg-yellow-7 { background-color: hsl(55, 70%, 30%); }
      </p>
      <p class="bg-yellow-8">
        .bg-yellow-8 { background-color: hsl(55, 70%, 20%); }
      </p>
      <p class="bg-yellow-9">
        .bg-yellow-9 { background-color: hsl(55, 70%, 10%); }
      </p>

      <p class="bg-green-1">
        .bg-green-1 { background-color: hsl(110, 70%, 90%); }
      </p>
      <p class="bg-green-2">
        .bg-green-2 { background-color: hsl(110, 70%, 80%); }
      </p>
      <p class="bg-green-3">
        .bg-green-3 { background-color: hsl(110, 70%, 70%); }
      </p>
      <p class="bg-green-4">
        .bg-green-4 { background-color: hsl(110, 70%, 60%); }
      </p>
      <p class="bg-green-5">
        .bg-green-5 { background-color: hsl(110, 70%, 50%); }
      </p>
      <p class="bg-green-6">
        .bg-green-6 { background-color: hsl(110, 70%, 40%); }
      </p>
      <p class="bg-green-7">
        .bg-green-7 { background-color: hsl(110, 70%, 30%); }
      </p>
      <p class="bg-green-8">
        .bg-green-8 { background-color: hsl(110, 70%, 20%); }
      </p>
      <p class="bg-green-9">
        .bg-green-9 { background-color: hsl(110, 70%, 10%); }
      </p>

      <p class="bg-cyan-1">
        .bg-cyan-1 { background-color: hsl(170, 70%, 90%); }
      </p>
      <p class="bg-cyan-2">
        .bg-cyan-2 { background-color: hsl(170, 70%, 80%); }
      </p>
      <p class="bg-cyan-3">
        .bg-cyan-3 { background-color: hsl(170, 70%, 70%); }
      </p>
      <p class="bg-cyan-4">
        .bg-cyan-4 { background-color: hsl(170, 70%, 60%); }
      </p>
      <p class="bg-cyan-5">
        .bg-cyan-5 { background-color: hsl(170, 70%, 50%); }
      </p>
      <p class="bg-cyan-6">
        .bg-cyan-6 { background-color: hsl(170, 70%, 40%); }
      </p>
      <p class="bg-cyan-7">
        .bg-cyan-7 { background-color: hsl(170, 70%, 30%); }
      </p>
      <p class="bg-cyan-8">
        .bg-cyan-8 { background-color: hsl(170, 70%, 20%); }
      </p>
      <p class="bg-cyan-9">
        .bg-cyan-9 { background-color: hsl(170, 70%, 10%); }
      </p>

      <p class="bg-blue-1">
        .bg-blue-1 { background-color: hsl(210, 70%, 90%); }
      </p>
      <p class="bg-blue-2">
        .bg-blue-2 { background-color: hsl(210, 70%, 80%); }
      </p>
      <p class="bg-blue-3">
        .bg-blue-3 { background-color: hsl(210, 70%, 70%); }
      </p>
      <p class="bg-blue-4">
        .bg-blue-4 { background-color: hsl(210, 70%, 60%); }
      </p>
      <p class="bg-blue-5">
        .bg-blue-5 { background-color: hsl(210, 70%, 50%); }
      </p>
      <p class="bg-blue-6">
        .bg-blue-6 { background-color: hsl(210, 70%, 40%); }
      </p>
      <p class="bg-blue-7">
        .bg-blue-7 { background-color: hsl(210, 70%, 30%); }
      </p>
      <p class="bg-blue-8">
        .bg-blue-8 { background-color: hsl(210, 70%, 20%); }
      </p>
      <p class="bg-blue-9">
        .bg-blue-9 { background-color: hsl(210, 70%, 10%); }
      </p>

      <p class="bg-purple-1">
        .bg-purple-1 { background-color: hsl(270, 70%, 90%); }
      </p>
      <p class="bg-purple-2">
        .bg-purple-2 { background-color: hsl(270, 70%, 80%); }
      </p>
      <p class="bg-purple-3">
        .bg-purple-3 { background-color: hsl(270, 70%, 70%); }
      </p>
      <p class="bg-purple-4">
        .bg-purple-4 { background-color: hsl(270, 70%, 60%); }
      </p>
      <p class="bg-purple-5">
        .bg-purple-5 { background-color: hsl(270, 70%, 50%); }
      </p>
      <p class="bg-purple-6">
        .bg-purple-6 { background-color: hsl(270, 70%, 40%); }
      </p>
      <p class="bg-purple-7">
        .bg-purple-7 { background-color: hsl(270, 70%, 30%); }
      </p>
      <p class="bg-purple-8">
        .bg-purple-8 { background-color: hsl(270, 70%, 20%); }
      </p>
      <p class="bg-purple-9">
        .bg-purple-9 { background-color: hsl(25, 70%, 91%); }
      </p>

      <p class="bg-pink-1">
        .bg-pink-1 { background-color: hsl(300, 70%, 90%); }
      </p>
      <p class="bg-pink-2">
        .bg-pink-2 { background-color: hsl(300, 70%, 80%); }
      </p>
      <p class="bg-pink-3">
        .bg-pink-3 { background-color: hsl(300, 70%, 70%); }
      </p>
      <p class="bg-pink-4">
        .bg-pink-4 { background-color: hsl(300, 70%, 60%); }
      </p>
      <p class="bg-pink-5">
        .bg-pink-5 { background-color: hsl(300, 70%, 50%); }
      </p>
      <p class="bg-pink-6">
        .bg-pink-6 { background-color: hsl(300, 70%, 40%); }
      </p>
      <p class="bg-pink-7">
        .bg-pink-7 { background-color: hsl(300, 70%, 30%); }
      </p>
      <p class="bg-pink-8">
        .bg-pink-8 { background-color: hsl(300, 70%, 20%); }
      </p>
      <p class="bg-pink-9">
        .bg-pink-9 { background-color: hsl(300, 70%, 10%); }
      </p>

      <p class="bg-gray-1">.bg-gray-1 { background-color: hsl(0, 0, 90%); }</p>
      <p class="bg-gray-1">.bg-gray-1 { background-color: hsl(0, 0, 80%); }</p>
      <p class="bg-gray-3">.bg-gray-3 { background-color: hsl(0, 0, 70%); }</p>
      <p class="bg-gray-4">.bg-gray-4 { background-color: hsl(0, 0, 60%); }</p>
      <p class="bg-gray-5">.bg-gray-5 { background-color: hsl(0, 0, 50%); }</p>
      <p class="bg-gray-6">.bg-gray-6 { background-color: hsl(0, 0, 40%); }</p>
      <p class="bg-gray-7">.bg-gray-7 { background-color: hsl(0, 0, 30%); }</p>
      <p class="bg-gray-8">.bg-gray-8 { background-color: hsl(0, 0, 20%); }</p>
      <p class="bg-gray-9">.bg-gray-9 { background-color: hsl(0, 0, 10%); }</p>
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

