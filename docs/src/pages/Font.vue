<template>
  <Layout>
    <h1>Font</h1>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.font-sans': `font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';`,
          '.font-serif': `font-family: Georgia, Cambria, 'Times New Roman', Times, serif;`,
          '.font-mono': `font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;`
        }"
      />
    </template>

    <!-- <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $spacers: $options.spacers.join(', ')
        }"
      />
    </template> -->

    <template #family>
      <h2>Family</h2>
      <h3>.font-sans</h3>
      <PExample
        :html="
          `<div class=&quot;font-sans&quot;>The spectacle before us was indeed sublime.</div>`
        "
        class="mb-4"
      />

      <h3>.font-serif</h3>
      <PExample
        :html="
          `<div class=&quot;font-serif&quot;>The spectacle before us was indeed sublime.</div>`
        "
        class="mb-4"
      />

      <h3>.font-mono</h3>
      <PExample
        :html="
          `<div class=&quot;font-mono&quot;>The spectacle before us was indeed sublime.</div>`
        "
        class="mb-4"
      />

      <h3>.font-{1-3}</h3>
      <PExample
        :html="
          `<div class=&quot;font-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;font-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;font-3&quot;>The spectacle before us was indeed sublime.</div>`
        "
      />
    </template>

    <!-- <h3>Examples:</h3>


    <h3>Customization:</h3>
    <PTable
      :headers="['Variable', 'Default Value']"
      :values="{
        $fontSans: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
        $fontSerif: `Georgia, Cambria, 'Times New Roman', Times, serif`,
        $fontMono: `Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`
      }"
    /> -->
  </Layout>
</template>

