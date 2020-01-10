<template>
  <Layout>
    <h2>Flex Direction</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.flex-row': 'flex-direction: row;',
        '.flex-row-reverse': 'flex-direction: row-reverse;',
        '.flex-column': 'flex-direction: column;',
        '.flex-column-reverse': 'flex-direction: column-reverse;'
      }"
      class="mb-5"
    />

    <h3>Examples:</h3>
    <p>Row</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-row&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
      "
    />

    <p>Row reverse</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-row-reverse&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
      "
    />

    <p>Column</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-column&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
      "
      class="mb-4"
    />

    <p>Column reverse</p>
    <PExample
      :html="
        `<div class=&quot;flex flex-column-reverse&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>1</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>2</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>3</div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;>4</div>
</div>`
      "
    />
  </Layout>
</template>

