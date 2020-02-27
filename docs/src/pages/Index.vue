<template>
  <Layout>
    <section class="mb-12 text-center">
      <h1 class="size-8">
        <img
          src="/img/logo.svg"
          :alt="$static.metadata.siteName"
          width="480"
          height="75"
        />
      </h1>
      <p>A customizable SCSS library for utility-first CSS</p>
    </section>

    <template #about>
      <h2>About</h2>
      <p>Particles CSS is utility-first CSS library focused on a few things:</p>
      <h4>Semantic</h4>
      <p>
        Class names follow a very close naming convention to the CSS spec. Learn
        Particles, and you learn CSS. Know CSS, then you know Particles.
      </p>
      <h4>Intuitive</h4>
      <p>
        Class names should be easy to understand, learn, and even guess. There's
        no arbitrary names, units, or scales to learn.
      </p>
      <h4>Efficient</h4>
      <p>
        It should take away as much energy and time spent thinking about
        options. Other libraries are not flexible enough, and custom CSS is too
        flexible.
      </p>
      <h4>Customizable</h4>
      <p>
        The library should be customizable to your brand. It uses SCSS variables
        and CSS custom properties (variables).
      </p>
    </template>

    <template #installation>
      <h2>Getting Started</h2>
      <h3>Installation</h3>
      <p>Install the project with:</p>
      <pre>npm install prtcls</pre>
      <p>
        Import the library into one of you SCSS files:
      </p>
      <pre>
// main.scss
@import "~prtcls";</pre
      >
      <h3>Customization</h3>
      <p>
        You can customize Particles' SCSS variables above the import statement.
      </p>
      <pre>
// main.scss
// customize variables here
@import "~prtcls";</pre
      >
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
      <h3>Optimize for production with PurgeCSS</h3>
      <p>
        You will most likely want to remove unused CSS with something like
        <a href="https://www.purgecss.com/">PurgeCSS</a>. If you're using
        Webpack, it might look like this:
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
    </template>

    <template #defaults>
      <h2>Default Styles</h2>
      <p>
        There is a very conservative style reset that affects a few base HTML
        elements:
      </p>
      <ul>
        <li>Everything uses <code>box-sizing: border-box;</code></li>
        <li>Default margin is removed from <code>&lt;body&gt;</code></li>
        <li>
          The default top and bottom margins are removed. Top margin is added to
          sibling selectors such as <code>p + p</code>
        </li>
        <li>
          Any <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> element with a
          class defined gets the padding and disc-style-type removed
        </li>
        <li>Buttons inherit font attributes</li>
      </ul>
    </template>

    <template #prefixes>
      <h2>Prefixes</h2>
      <h3>Responsive</h3>
      <p>
        Add these prefixes to any Particles CSS class to apply the rules only at
        certain the respective breakpoints.
      </p>
      <PTable
        :headers="['Prefix', 'Breakpoint']"
        :values="{
          bp1: '40rem (640px)',
          bp2: '48rem (768px)',
          bp3: '64rem (1024px)',
          bp4: '80rem (1280px)'
        }"
      />
      <PResponsive
        class="mt-4"
        :classes="['flex', 'block', 'inline-block', 'grid', 'flex']"
      >
        <template #default="{ activeClass}">
          <div :class="['p-2 bg-gray-1', activeClass]">
            <div class="m-2 p-4 bg-gray-2">1</div>
            <div class="m-2 p-4 bg-gray-2">2</div>
            <div class="m-2 p-4 bg-gray-2">3</div>
          </div>
        </template>
      </PResponsive>

      <h3>Pseudo-Classes</h3>
      <p>
        Add these prefixes to any Particles CSS class to apply the rules only
        for the respective pseudo-classes.
      </p>
      <PTable
        :headers="['Prefix', 'Breakpoint']"
        :values="{
          hover: ':hover',
          focus: ':focus',
          within: ':focus-within',
          first: ':first-child',
          last: ':last-child',
          even: ':nth-child(even)',
          odd: ':nth-child(odd)',
          active: ':active',
          visited: ':visited',
          required: ':required',
          invalid: ':invalid',
          empty: ':empty'
        }"
      />
      <p>
        For more general information on what pseudo-classes are and how to use
        them, please see the
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes"
          >MDN article about them</a
        >.
      </p>
    </template>

    <!-- <template #sizes>
      <h2>Sizes</h2>
      <p>Having a limited number of sizes makes it much easier to create a consistent design, and also reduces the time and energy that goes into making a decision or pushing pixels around.</p>
      <p>Many CSS rules that implement size (width, height, margin, padding) make use of the same scale.</p>
      <div v-for="(num, i) in [32, 64, 128, 256, 384, 512, 640, 768, 1024, 1280]"
      :key="i" class="mb-4">
        <div
        :class="`w-${i + 1} h-1 bg-gray-2`"></div>
        <div>Unit: <code>{{ i + 1 }}</code> = {{ num / 16 }}rem ({{ num }}px)</div>
      </div>
    </template> -->

    <template #colors>
      <h2>Colors</h2>
      <p>
        Particles CSS provides a default color palette that you can use for any
        of the CSS properties that apply a color (color, background-color,
        border-color, etc).
      </p>
      <p>
        The classes will change between CSS properties, but the format for the
        colors will be the same: [class]-[color]-[variant 1-9].
      </p>
      <p>For example: <code>color-purple-5</code></p>
      <p>Here's all the colors generated by default.</p>
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
        <h5 :key="`${color}-title`" class="span-full m-0 capitalize">
          {{ color }}
        </h5>
        <div :key="`${color}-swatch`" class="grid columns-3 gap-4 mb-2">
          <div
            v-for="num in 9"
            :key="num"
            :class="[`bg-${color}-${num} p-2`, { 'color-white': num > 5 }]"
          >
            {{ `${color}-${num}` }}
          </div>
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
    </template>
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

