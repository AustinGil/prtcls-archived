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
  </Layout>
</template>

