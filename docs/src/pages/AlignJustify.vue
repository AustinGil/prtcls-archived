<template>
  <Layout>
    <h1>Align & Justify</h1>
    <p class="mb-8">
      Apply align & justify properties for grid and flexbox layouts.
    </p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.align-{start, center, end, baseline, stretch}':
            'align-items: {flex-start, center, flex-end, baseline, stretch};',
          '.align-items-{start, center, end, baseline, stretch}':
            'align-items: {flex-start, center, flex-end, baseline, stretch};',
          '.align-content-{start, center, end, around, between, evenly, stretch}':
            'align-content: {flex-start, center, flex-end, space-around, space-between, space-evenly, stretch};',
          '.align-self-{auto, start, center, end, stretch}':
            'align-self: {auto, start, center, end, stretch};',
          '.jusitfy-{start, center, end, around, between, evenly, stretch}':
            'jusitfy-content: {flex-start, center, flex-end, space-around, space-between, space-evenly, stretch};',
          '.jusitfy-content-{start, center, end, around, between, evenly, stretch}':
            'jusitfy-content: {flex-start, center, flex-end, space-around, space-between, space-evenly, stretch};',
          '.jusitfy-items-{start, center, end, stretch}':
            'jusitfy-items: {flex-start, center, flex-end, stretch};',
          '.jusitfy-self-{start, center, end, stretch}':
            'jusitfy-self: {flex-start, center, flex-end, stretch};'
        }"
      />
    </template>

    <template #align-items>
      <h2>.align-{position}</h2>
      <p>Aligns grid items along block axis or flex items along cross axis.</p>

      <template
        v-for="item in ['start', 'center', 'end', 'baseline', 'stretch']"
      >
        <h3 :key="`${item}-header`">.align-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<small>.grid.align-${item}</small>
<div class=&quot;grid columns-auto align-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.flex.align-${item}</small>
<div class=&quot;flex align-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>

    <template #align-content>
      <h2>.align-content-{position}</h2>
      <p>
        Sets the align-content property of a grid or flexbox container. It's a
        less common property becuase it requires that the container is
        explicityly larger than it's contents. Works similar to the
        justify-content property.
      </p>

      <template
        v-for="item in [
          'start',
          'center',
          'end',
          'around',
          'between',
          'evenly',
          'stretch'
        ]"
      >
        <h3 :key="`${item}-header`">.align-content-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<small>.grid.align-content-${item}</small>
<div class=&quot;grid columns-auto align-content-${item} h-8 border-1&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.flex.align-content-${item}</small>
<div class=&quot;flex align-content-${item} h-8 border-1&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>

    <template #align-self>
      <h2>.align-self-{position}</h2>
      <p>
        Aligns grid or flex item, regardless what the container align setting
        is.
      </p>

      <template v-for="item in ['auto', 'start', 'center', 'end', 'stretch']">
        <h3 :key="`${item}-header`">.align-self-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<div class=&quot;grid columns-auto h-8 border-1&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;align-self-${item} border-1 border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<div class=&quot;flex h-8 border-1&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;align-self-${item} border-1 border-gray-3 p-4 bg-purple-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>

    <template #justify-content>
      <h2>.justify-{position}</h2>
      <p>Aligns grid items along block axis or flex items along cross axis.</p>

      <template
        v-for="item in [
          'start',
          'center',
          'end',
          'around',
          'between',
          'evenly',
          'stretch'
        ]"
      >
        <h3 :key="`${item}-header`">.justify-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<small>.grid.justify-${item}</small>
<div class=&quot;grid columns-auto justify-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.flex.justify-${item}</small>
<div class=&quot;flex justify-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>

    <template #justify-items>
      <h2>.justify-items-{position}</h2>
      <p>Justify grid items along block axis or flex items along cross axis.</p>

      <template
        v-for="item in ['start', 'center', 'end', 'baseline', 'stretch']"
      >
        <h3 :key="`${item}-header`">.justify-items-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<small>.grid.justify-items-${item}</small>
<div class=&quot;grid columns-auto justify-items-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.flex.justify-items-${item}</small>
<div class=&quot;flex justify-items-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>

    <template #justify-self>
      <h2>.justify-self-{position}</h2>
      <p>Justify grid self along block axis or flex self along cross axis.</p>

      <template
        v-for="item in ['start', 'center', 'end', 'baseline', 'stretch']"
      >
        <h3 :key="`${item}-header`">.justify-self-{{ item }}</h3>
        <PExample
          :key="`${item}-example`"
          :html="
            `<small>.grid.justify-self-${item}</small>
<div class=&quot;grid columns-auto justify-self-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>
<small>.flex.justify-self-${item}</small>
<div class=&quot;flex justify-self-${item}&quot;>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-8 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-6 bg-gray-1&quot;></div>
  <div class=&quot;border-1 border-gray-3 p-4 bg-gray-1&quot;></div>
</div>`
          "
        />
      </template>
    </template>
  </Layout>
</template>

