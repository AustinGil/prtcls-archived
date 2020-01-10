<template>
  <Layout>
    <h2>Align</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.align-{start|center|end|baseline|stretch}':
          'align-items: {start|center|end|baseline|stretch};\nalign-content: {start|center|end|baseline|stretch};',
        '.align-items-{start|center|end|baseline|stretch}':
          'align-items: {start|center|end|baseline|stretch};',
        '.align-content-{start|center|end|baseline|stretch}':
          'align-content: {start|center|end|baseline|stretch};',
        '.justify-{start|center|end|around|between|evenly|normal}':
          'justify-items: {start|center|end|around|between|evenly|normal};\njustify-content: {start|center|end|space-around|space-between|space-evenly|normal};',
        '.justify-items-{start|center|end|around|between|evenly|normal}':
          'justify-items: {start|center|end|space-around|space-between|space-evenly|normal};',
        '.justify-content-{start|center|end|around|between|evenly|normal}':
          'justify-content: {start|center|end|space-around|space-between|space-evenly|normal};'
      }"
      class="mb-5"
    />

    <p>Align start</p>
    <PExample
      :html="
        `<div class=&quot;flex align-start&quot;>
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
        `<div class=&quot;flex align-center&quot;>
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
        `<div class=&quot;flex align-end&quot;>
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
        `<div class=&quot;flex align-baseline&quot;>
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
        `<div class=&quot;flex align-stretch&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
      "
    />
  </Layout>
</template>

