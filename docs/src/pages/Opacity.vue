<template>
  <Layout>
    <h1>Opacity</h1>
    <p class="mb-8">Apply opacity properties of an element</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.opacity-0': 'opacity: 0;',
          '.opacity-{1-9}': 'opacity: {.1-.9};',
          '.opacity-10': 'opacity: 1;'
        }"
      />
    </template>

    <template #opacity>
      <h2>.opacity-[0-10]</h2>
      <p>Sets the opacity property to a value between 0 and 1.</p>
      <PExample
        :html="
          `<div class=&quot;opacity-0 p-4 bg-black&quot;></div>
<div class=&quot;opacity-1 p-4 bg-black&quot;></div>
<div class=&quot;opacity-2 p-4 bg-black&quot;></div>
<div class=&quot;opacity-3 p-4 bg-black&quot;></div>
<div class=&quot;opacity-4 p-4 bg-black&quot;></div>
<div class=&quot;opacity-5 p-4 bg-black&quot;></div>
<div class=&quot;opacity-6 p-4 bg-black&quot;></div>
<div class=&quot;opacity-7 p-4 bg-black&quot;></div>
<div class=&quot;opacity-8 p-4 bg-black&quot;></div>
<div class=&quot;opacity-9 p-4 bg-black&quot;></div>
<div class=&quot;opacity-10 p-4 bg-black&quot;></div>`
        "
      />
    </template>

    <template #responsive>
      <h2>Responsive</h2>
      <PResponsive
        class="mt-4"
        :classes="[
          'opacity-10',
          'opacity-3',
          'opacity-7',
          'opacity-0',
          'opacity-5'
        ]"
      >
        <template #default="{ activeClass}">
          <img
            src="https://www.fillmurray.com/700/450"
            :class="`${activeClass} block m-auto`"
          />
        </template>
      </PResponsive>
    </template>
  </Layout>
</template>
