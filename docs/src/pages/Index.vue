<template>
  <Layout>
    <section class="mb-12">
      <h1 class="size-8">{{ $static.metadata.siteName }}</h1>
      <p>A customizable SCSS library for utility-first CSS</p>
    </section>

    <section class="mb-12">
      <h2>Getting Started</h2>
      <p>Install the project with <code>npm install prtcls</code>.</p>
      <p>Create a SCSS file. For example, <code>main.scss</code>.</p>
      <p>In that SCSS file, import the library:</p>
      <pre>
// main.scss

// Customize options here

@import "~prtcls";

// Add more styles here</pre
      >
      <p>(You can customize Particles' SCSS variables above the import.)</p>
      <p>
        If you want to use Particles to extend your own styles, you can use
        SCSS's
        <a href="https://sass-lang.com/documentation/at-rules/extend"
          >@extend</a
        >
        feature:
      </p>
      <pre>
code,
pre {
  @extend .py-1, .px-2, .radius-2, .color-gray-1, .bg-gray-8;
}</pre
      >
      <p>
        Finally, you will most likely want to implement something like
        <a href="https://www.purgecss.com/">PurgeCSS</a> to remove unused CSS.
        If you're using Webpack, it might look like this:
      </p>
      <pre>
// webpack.config.js
const glob = require("glob");
const PurgecssPlugin = require("purgecss-webpack-plugin");

const purgecss = new PurgecssPlugin({
  paths: glob.sync(`./src/**/*.html`)
});

module.exports = {
  plugins: [
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};</pre
      >
      <p>Be sure to <code>npm install purgecss-webpack-plugin</code> first.</p>
    </section>

    <section class="mb-12">
      <h2>Base Styles</h2>
      <p>There are very few styles affecting base HTML elements:</p>
      <ul>
        <li>Everything uses <code>box-sizing: border-box;</code></li>
        <li>Default margin is removed from <code>&lt;body&gt;</code></li>
        <li>
          Any <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> element with a
          class defined gets the padding and disc-style-type removed
        </li>
      </ul>
    </section>

    <section>
      <h2>Theme</h2>
      <h3>Colors</h3>
      <template
        v-for="color in [
          'red',
          'orange',
          'yellow',
          'green',
          'cyan',
          'blue',
          'purple',
          'pink',
          'gray'
        ]"
      >
        <h5 :key="color" class="span-full m-0 capitalize">{{ color }}</h5>
        <div :key="color" class="grid columns-3 gap-4 mb-8">
          <div
            v-for="num in 9"
            :key="num"
            :class="`bg-${color}-${num} p-4`"
          ></div>
        </div>
      </template>

      <h4>Customization:</h4>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $saturation: '70%',
          $colors: `('red', 0[, $saturation]), ('orange', 25[, $saturation]), ('yellow', 55[, $saturation]), ('green', 110[, $saturation]), ('cyan', 170[, $saturation]), ('blue', 210[, $saturation]), ('purple', 270[, $saturation]), ('pink', 300[, $saturation])`
        }"
      />
      <p>
        Colors use HSL values to dynamically generate variants based on their
        lightness. To accomplish this, you must provide a list of colors. Each
        item in the list must be itself, a lit with the name you want to give
        the color, and it's hue. Optionally, you may provide a third value to
        the color list for it's saturation.
      </p>
      <p>
        To find the right hue from a different color format, try
        <a href="https://convertacolor.com/">this tool</a>.
      </p>
    </section>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

