<template>
  <Layout>
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
  </Layout>
</template>

