<template>
  <Layout>
    <h1>Letter Spacing</h1>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.spacing-{1-6}':
          'letter-spacing: {-0.05em|-0.025em|0|0.025em|0.05em|0.1em};'
      }"
    />

    <h3>Examples:</h3>
    <PExample
      :html="
        `<div class=&quot;spacing-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;spacing-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;spacing-3&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;spacing-4&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;spacing-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;spacing-6&quot;>The spectacle before us was indeed sublime.</div>`
      "
    />

    <h3>Customization:</h3>
    <PTable
      :headers="['Variable', 'Default Value']"
      :values="{
        $letterSpacers: '-0.05em, -0.025em, 0, 0.025em, 0.05em, 0.1em'
      }"
    />
  </Layout>
</template>

