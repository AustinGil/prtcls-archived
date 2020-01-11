<template>
  <Layout>
    <h2>Align</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.items-{start|center|end|baseline|stretch}':
          'align-items: {flex-start|center|flex-end|baseline|stretch};',
        '.content-{start|center|end|stretch|around|between|evenly}':
          'align-content: {flex-start|center|flex-end|stretch|space-around|space-between|space-evenly};',
        '.self-{auto|start|center|end|stretch}':
          'align-self: {auto|start|center|end|stretch};'
      }"
      class="mb-5"
    />

    <p>Align start</p>
    <PExample
      :html="
        `<div class=&quot;flex items-start&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Align center</p>
    <PExample
      :html="
        `<div class=&quot;flex items-center&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Align end</p>
    <PExample
      :html="
        `<div class=&quot;flex items-end&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Align baselinee</p>
    <PExample
      :html="
        `<div class=&quot;flex items-baseline&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />

    <p>Align stretch</p>
    <PExample
      :html="
        `<div class=&quot;flex items-stretch&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />
  </Layout>
</template>

