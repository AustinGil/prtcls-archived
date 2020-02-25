<template>
  <Layout>
    <h1>Visibility</h1>
    <p class="mb-8">Apply visibility properties of an element</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.visible': 'visibility: visible;',
          '.hidden': 'visibility: hidden;',
          '.visually-hidden': `border: 0;\nclip: rect(0 0 0 0);\nheight: 1px;\nmargin: -1px;\noverflow: hidden;\npadding: 0;\nposition: absolute;\nwidth: 1px;`
        }"
      />
    </template>

    <template #visible>
      <h2>.visible</h2>
      <p>Sets the visibility property to <code>visible</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
  <div class=&quot;visible p-4 bg-gray-3&quot;></div>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
</div>`
        "
      />
    </template>

    <template #hidden>
      <h2>.hidden</h2>
      <p>Sets the visibility property to <code>hidden</code>.</p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
  <div class=&quot;hidden p-4 bg-gray-3&quot;></div>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
</div>`
        "
      />
    </template>

    <template #visually-hidden>
      <h2>.visually-hidden</h2>
      <p>
        An accessibility utility class to visually remove an element from the
        page, while maintaining the content for screen-readers. You can read
        more about this on
        <a href="https://a11yproject.com/posts/how-to-hide-content/">
          a11yproject.com </a
        >.
      </p>
      <PExample
        :html="
          `<div class=&quot;p-4 bg-gray-1&quot;>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
  <div class=&quot;visually-hidden p-4 bg-gray-3&quot;></div>
  <div class=&quot;p-4 bg-gray-2&quot;></div>
</div>`
        "
      />
    </template>
  </Layout>
</template>

