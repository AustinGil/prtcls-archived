<template>
  <Layout>
    <h1>Position</h1>
    <p class="mb-8">Apply display properties of an element</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.static': 'position: static;',
          '.fixed': 'position: fixed;',
          '.absolute': 'position: absolute;',
          '.relative': 'position: relative;',
          '.sticky': 'position: sticky;',
          '.z-auto': 'z-index: auto;',
          '.z-[1-10]': 'z-index: [10, 20, 30...80, 90, 100];',
          '.top-0': 'top: 0;',
          '.top-auto': 'top: auto;',
          '.bottom-0': 'bottom: 0;',
          '.bottom-auto': 'bottom: auto;',
          '.left-0': 'left: 0;',
          '.left-auto': 'left: auto;',
          '.right-0': 'right: 0;',
          '.right-auto': 'right: auto;',
          '.inset-0': 'top: 0, bottom: 0, left: 0, right: 0;',
          '.inset-auto': 'top: auto, bottom: auto, left: auto, right: auto;',
          '.inset-x-0': 'left: 0, right: 0;',
          '.inset-x-auto': 'left: auto, right: auto;',
          '.inset-y-0': 'top: 0, bottom: 0;',
          '.inset-y-auto': 'top: auto, bottom: auto;'
        }"
      />
    </template>

    <template #positioning>
      <h2>Positioning</h2>
      <PExample
        :html="
          `<small>.bottom-0.right-0</small>
<div class=&quot;relative w-3 h-3 bg-gray-1&quot;>
  <div class=&quot;absolute bottom-0 right-0 p-3 bg-gray-3&quot;></div>
</div>`
        "
      />
    </template>

    <template #inset>
      <h2>Inset</h2>
      <PExample
        :html="
          `<small>.inset-0</small>
<div class=&quot;relative w-3 h-3 bg-gray-1&quot;>
  <div class=&quot;absolute inset-0 bg-gray-3&quot;></div>
</div>

<small>.inset-x-0</small>
<div class=&quot;relative w-3 h-3 bg-gray-1&quot;>
  <div class=&quot;absolute inset-x-0 p-3 bg-gray-3&quot;></div>
</div>

<small>.inset-y-0</small>
<div class=&quot;relative w-3 h-3 bg-gray-1&quot;>
  <div class=&quot;absolute inset-y-0 p-3 bg-gray-3&quot;></div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

