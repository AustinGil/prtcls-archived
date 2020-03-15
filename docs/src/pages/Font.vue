<template>
  <Layout>
    <h1>Font</h1>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.font-{1-length($fontStacks)}': 'font-family: {$fontStacks[i]}',
          '.font-sans': `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';`,
          '.font-serif': `font-family: Georgia, Cambria, 'Times New Roman', Times, serif;`,
          '.font-mono': `font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;`,
          '.size-{1-length($fontSizes)}': 'font-size: {$fontSizes[i]}',
          '.weight-{1-9}': 'font-weight: {100-900};'
        }"
      />
    </template>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $fontStacks: '$fontSans, $fontSerif, $fontMono',
          $fontSans: $options.fontSans,
          $fontSerif: $options.fontSerif,
          $fontMono: $options.fontMono,
          $fontSizes:
            '0.75rem, 1rem, 1.25rem, 1.5rem, 2rem, 2.5rem, 3rem, 4rem, 5rem, 6rem'
        }"
      />
    </template>

    <template #family>
      <h2>Family</h2>
      <h3>.font-sans</h3>
      <PExample
        :html="
          `<div class=&quot;font-sans&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
        class="mb-4"
      />

      <h3>.font-serif</h3>
      <PExample
        :html="
          `<div class=&quot;font-serif&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
        class="mb-4"
      />

      <h3>.font-mono</h3>
      <PExample
        :html="
          `<div class=&quot;font-mono&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
        class="mb-4"
      />

      <h3>.font-{1-3}</h3>
      <PExample
        :html="
          `<div class=&quot;font-1&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;font-2&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;font-3&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>

    <template #size>
      <h2>Size</h2>
      <h3>.size-{1-9}</h3>
      <PExample
        :html="
          `<div class=&quot;size-1&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-2&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-3&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-5&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-6&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-7&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-8&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-9&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;size-10&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>

    <template #weight>
      <h2>Weight</h2>
      <h3>.weight-{1-9}</h3>
      <PExample
        :html="
          `<div class=&quot;weight-1&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-2&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-3&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-5&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-6&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-7&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-8&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;weight-9&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>
  </Layout>
</template>

<script>
export default {
  fontSans:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
  fontSerif: 'Georgia, Cambria, "Times New Roman", Times, serif;',
  fontMono:
    'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
};
</script>
