<template>
  <Layout>
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
  </Layout>
</template>

