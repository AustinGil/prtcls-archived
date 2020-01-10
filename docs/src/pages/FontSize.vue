<template>
  <Layout>
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
  </Layout>
</template>

