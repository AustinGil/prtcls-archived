<template>
  <Layout>
    <h2>Width & Height</h2>

    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.w-screen': 'width: 100vw;',
        '.w-full': 'width: 100%;',
        '.w-auto': 'width: auto;',
        '.w-{1/2...11/12}': 'width: {1/2...11/12}%;',
        '.w-{1|2|3|4}': 'width: {40rem|48rem|64rem|80rem}%;',
        '.h-screen': 'height: 100vh;',
        '.h-full': 'height: 100%;',
        '.h-auto': 'height: auto;',
        '.h-{1/2...11/12}': 'height: {1/2...11/12}%;'
      }"
      class="mb-5"
    />

    <h3>Min & Max</h3>
    <p>
      You can also prefix any class name with <code>min-</code> or
      <code>max-</code> to achieve the same value applied for
      <code>min-{width|height}</code> or
      <code>max-{width|height}</code> respectively. For example:
      <code>.min-w-1/2</code> would render <code>min-width: 50%;</code>
    </p>

    <h3>Customization</h3>
    <PTable
      :headers="['Variable', 'Default Value']"
      :values="{
        $widths: '40rem, 48rem, 64rem, 80rem'
      }"
    />
  </Layout>
</template>

