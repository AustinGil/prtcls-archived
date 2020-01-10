<template>
  <Layout>
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
  </Layout>
</template>

