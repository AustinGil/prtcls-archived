<template>
  <Layout>
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
  </Layout>
</template>

