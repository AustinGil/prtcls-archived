<template>
  <Layout>
    <h1>Width & Height</h1>
    <p class="mb-8">
      Control the width and height properties of an element.
    </p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.w-screen': 'width: 100vw;',
          '.w-full': 'width: 100%;',
          '.w-auto': 'width: auto;',
          '.w-{1/2...11/12}': 'width: {1/2...11/12}%;',
          '.w-{1-length($sizes)}': 'width: {$sizes[i]};',
          '.w-bp{1-length($beakpoints)}': 'width: {$beakpoints[i]};',
          '.h-screen': 'height: 100vh;',
          '.h-full': 'height: 100%;',
          '.h-auto': 'height: auto;',
          '.h-{1/2...11/12}': 'height: {1/2...11/12}%;',
          '.h-{1-length($sizes)}': 'height: {$sizes[i]};'
        }"
        class="mb-5"
      />
    </template>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $sizes:
            '0.5rem, 1rem, 1.5rem, 2rem, 3rem, 4rem, 6rem, 8rem, 16rem, 24rem, 32rem, 40rem, 48rem, 64rem, 80rem',
          $maxDenominator: '$maxColumns (12)'
        }"
      />
    </template>

    <template #min-max>
      <h2>Min & Max</h2>
      <p>
        You can also prefix any class name with <code>min-</code> or
        <code>max-</code> to achieve the same value applied for
        <code>min-{width|height}</code> or
        <code>max-{width|height}</code> respectively. For example:
        <code>.min-w-1/2</code> would render <code>min-width: 50%;</code>
      </p>
    </template>

    <template #width>
      <h2>.w-{fraction}</h2>
      <p>Sets the width of an item to the fractional percentage.</p>

      <PExample :html="`<div class=&quot;w-1/2 h-3 bg-purple-1&quot;></div>`" />
    </template>
  </Layout>
</template>

