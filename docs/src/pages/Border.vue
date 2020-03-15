<template>
  <Layout>
    <h1>Border</h1>
    <p class="mb-8">Control the border and border-radius properties.</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.border-0': 'border: 0;',
          '.border-{1-4}': 'border: {0.0625rem|0.125rem|0.25rem|0.5rem} solid;',
          '.border-{solid|dashed|dotted|none}':
            'border-style: {solid|dashed|dotted|none};',
          '.border-{color}-{number}': 'border-color: {color};',
          '.radius-0': 'border-radius: 0;',
          '.radius-full': 'border-radius: 9999px;',
          '.radius-{1-4}': 'border-radius: {0.25rem|0.5rem|0.75rem|1rem};'
        }"
      />
    </template>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $borderWidths:
            '0.0625rem (1px), 0.125rem (2px), 0.25rem (4px), 0.5rem (8px)',
          $radii: '0.25rem (4px), 0.5rem (8px), 0.75rem (12px), 1rem (16px)'
        }"
      />
    </template>

    <template #border-width>
      <h2>Border Width</h2>
      <PExample
        :html="
          `<div class=&quot;border-0 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-1 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-2 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-4 border-purple-2 p-4 bg-gray-1&quot;></div>`
        "
      />
    </template>

    <template #border-style>
      <h2>Border Style</h2>
      <PExample
        :html="
          `<div class=&quot;border-solid border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-dashed border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-dotted border-3 border-purple-2 p-4 bg-gray-1&quot;></div>`
        "
      />
    </template>

    <template #border-color>
      <h2>Border Color</h2>
      <PExample
        :html="
          `<div class=&quot;border-purple-2 border-3 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-green-4 border-3 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-red-6 border-3 p-4 bg-gray-1&quot;></div>`
        "
      />
      <p>
        See the <g-link to="/color">colors section</g-link> for more information
        about colors.
      </p>
    </template>

    <template #border-radius>
      <h2>Border Radius</h2>
      <PExample
        :html="
          `<div class=&quot;radius-0 border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;radius-1 border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;radius-2 border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;radius-3 border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;radius-4 border-3 border-purple-2 mb-4 p-6 bg-gray-1&quot;></div>
<div class=&quot;radius-full border-3 border-purple-2 p-6 bg-gray-1&quot;></div>`
        "
      />
    </template>

    <template #sides>
      <h2>Specific Sides</h2>
      <p>
        You can specify each border property for a specific side by prefixing
        the border property in the classname with one of the following:
        <code
          >t (top), b (bottom), l (left), r (right), y (top & bottom), x (left &
          right)</code
        >.
      </p>
      <PExample
        :html="
          `<div class=&quot;border-t-3 border-t-purple-2 border-t-dashed mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-b-3 border-b-green-4 border-b-dotted mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;border-x-3 border-x-red-6 p-4 bg-gray-1&quot;></div>`
        "
        class="mb-6"
      />

      <p>
        For border radius, you can also specify the specific corner with
        <code
          >tl (top-left), tr (top-right), bl (bottom-left), br
          (bottom-right)</code
        >.
      </p>
      <PExample
        :html="
          `<div class=&quot;radius-tl-full border-3 border-purple-2 mb-4 p-4 bg-gray-1&quot;></div>
<div class=&quot;radius-b-2 mb-4 p-4 border-3 border-purple-2 bg-gray-1&quot;></div>
<div class=&quot;radius-br-4 mb-4 p-4 border-3 border-purple-2 bg-gray-1&quot;></div>`
        "
      />
    </template>
  </Layout>
</template>

