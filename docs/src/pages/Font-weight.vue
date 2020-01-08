<template>
  <Layout>
    <h1>Font Weight</h1>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.weight-{1-9}': 'font-weight: {100-900};'
      }"
    />

    <h3>Examples:</h3>
    <PExample
      :html="
        `<div class=&quot;weight-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-3&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-4&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-6&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-7&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-8&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;weight-9&quot;>The spectacle before us was indeed sublime.</div>`
      "
    />
  </Layout>
</template>

