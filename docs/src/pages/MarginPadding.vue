<template>
  <Layout>
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
        '.p-auto': 'padding: auto;',
        '.p-0': 'padding: 0;',
        '.py-0': 'padding-top: 0;\npadding-bottom: 0;',
        '.px-0': 'padding-left: 0;\npadding-right: 0;',
        '.p{t|b|l|r}-0': 'padding-{top|bottom|left|right}: 0;',
        '.p-{1-12}':
          'padding: {.25rem|.5rem|.75rem|1rem|1.25rem|1.5rem|2rem|2.5rem|3rem|4rem|5rem|6rem};'
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
  </Layout>
</template>

