<template>
  <Layout>
    <section class="mb-12">
      <h2>Opacity</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.opacity-0': 'opacity: 0;',
          '.opacity-{1-9}': 'opacity: {.1-.9};',
          '.opacity-10': 'opacity: 1;'
        }"
      />
      <h3>Examples</h3>
      <PExample
        :html="
          `<div class=&quot;opacity-0 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-1 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-2 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-3 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-4 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-5 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-6 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-7 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-8 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-9 p-4 bg-gray-9&quot;></div>
<div class=&quot;opacity-10 p-4 bg-gray-9&quot;></div>`
        "
      />
    </section>
  </Layout>
</template>
