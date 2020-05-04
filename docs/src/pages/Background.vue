<template>
  <Layout>
    <h1>Background Color</h1>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.bg-white': 'background-color: #fff;',
          '.bg-black': 'background-color: #000;',
          '.bg-transparent': 'background-color: transparent;',
          '.bg-gray-{1-9}': 'background-color: {hsl value};',
          '.bg-{name}-{1-9}': 'background-color: {hsl value};'
        }"
      />
    </template>

    <template #colors>
      <h2>Colors</h2>
      <PExample
        :html="
          `<div class=&quot;bg-white border-1 p-4&quot;></div>
<div class=&quot;bg-black p-4&quot;></div>
<div class=&quot;bg-transparent border-1 p-4&quot;></div>
<div class=&quot;bg-gray-5 p-4&quot;></div>
<div class=&quot;bg-red-5 p-4&quot;></div>
<div class=&quot;bg-orange-5 p-4&quot;></div>
<div class=&quot;bg-yellow-5 p-4&quot;></div>
<div class=&quot;bg-green-5 p-4&quot;></div>
<div class=&quot;bg-cyan-5 p-4&quot;></div>
<div class=&quot;bg-blue-5 p-4&quot;></div>
<div class=&quot;bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-pink-5 p-4&quot;></div>`
        "
      />
      <p>
        See the <g-link to="/color">colors section</g-link> for more information
        about colors.
      </p>
    </template>

    <template #lightness>
      <h2>Lightness</h2>
      <PExample
        :html="
          `<div class=&quot;bg-purple-1 p-4&quot;></div>
<div class=&quot;bg-purple-2 p-4&quot;></div>
<div class=&quot;bg-purple-3 p-4&quot;></div>
<div class=&quot;bg-purple-4 p-4&quot;></div>
<div class=&quot;bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-purple-6 p-4&quot;></div>
<div class=&quot;bg-purple-7 p-4&quot;></div>
<div class=&quot;bg-purple-8 p-4&quot;></div>
<div class=&quot;bg-purple-9 p-4&quot;></div>`
        "
      />
    </template>

    <template #opacity-alpha>
      <h2>Opacity/Alpha</h2>
      <PExample
        :html="
          `<div class='bg-png'>
<div class=&quot;bg-opacity-0 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-1 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-2 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-3 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-4 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-5 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-6 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-7 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-8 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-9 bg-purple-5 p-4&quot;></div>
<div class=&quot;bg-opacity-10 bg-purple-5 p-4&quot;></div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

<style lang="scss">
.bg-png {
  background-image: linear-gradient(45deg, lightgrey 25%, transparent 25%),
    linear-gradient(-45deg, lightgrey 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, lightgrey 75%),
    linear-gradient(-45deg, transparent 75%, lightgrey 75%);
  background-size: 1rem 1rem;
  background-position: 0 0, 0 0.5rem, 0.5rem -0.5rem, -0.5rem 0px;
}
</style>
