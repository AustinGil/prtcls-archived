<template>
  <Layout>
    <h1>Color</h1>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.color-white': 'color: #fff;',
        '.color-black': 'color: #000;',
        '.color-transparent': 'color: transparent;',
        '.color-gray-{1-9}': 'color: {hsl value};',
        '.color-{name}-{1-9}': 'color: {hsl value};'
      }"
    />
    <p>
      Default color names: red, orange, yellow, green, cyan, blue, purple, pink
    </p>

    <h3>Examples:</h3>
    <p>Different colors</p>
    <PExample
      :html="
        `<div class=&quot;color-white bg-black&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-black&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-transparent&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-gray-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-red-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-orange-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-yellow-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-green-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-cyan-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-blue-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-pink-5&quot;>The spectacle before us was indeed sublime.</div>`
      "
    />

    <p>Different lightness</p>
    <PExample
      :html="
        `<div class=&quot;color-purple-1&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-2&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-3&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-4&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-5&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-6&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-7&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-8&quot;>The spectacle before us was indeed sublime.</div>
<div class=&quot;color-purple-9&quot;>The spectacle before us was indeed sublime.</div>`
      "
    />
  </Layout>
</template>

