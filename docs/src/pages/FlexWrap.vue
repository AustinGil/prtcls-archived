<template>
  <Layout>
    <h2>Flex Wrap</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.flex-{wrap|nowrap|wrap-reverse}':
          'flex-wrap: {wrap|nowrap|wrap-reverse};'
      }"
      class="mb-5"
    />

    <p>Wrap</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-wrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
      "
    />

    <p>Nowrap</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-nowrap&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
      "
    />

    <p>Wrap-reverse</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-wrap-reverse&quot;>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;min-w-2/3 border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
</div>`
      "
    />
  </Layout>
</template>

