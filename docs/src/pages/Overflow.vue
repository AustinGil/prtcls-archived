<template>
  <Layout>
    <h1>Overflow</h1>
    <p class="mb-8">Apply display properties of an element</p>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.overflow-{auto|hidden|visible|scroll}':
            'overflow: {auto|hidden|visible|scroll};',
          '.overflow-x-{auto|hidden|visible|scroll}':
            'overflow-x: {auto|hidden|visible|scroll};',
          '.overflow-y-{auto|hidden|visible|scroll}':
            'overflow-y: {auto|hidden|visible|scroll};'
        }"
      />
    </template>

    <template #overflow-hidden>
      <h2>.overflow-hidden</h2>
      <p>Sets the general overflow property to <code>hidden</code>.</p>
      <PExample
        :html="
          `<div class=&quot;overflow-hidden max-h-8 p-3 bg-gray-2&quot;>
  ${$options.text}
</div>`
        "
      />
    </template>

    <template #overflow-visible>
      <h2>.overflow-visible</h2>
      <p>Sets the general overflow property to <code>visible</code>.</p>
      <PExample
        :html="
          `<div class=&quot;overflow-visible max-h-8 p-3 bg-gray-2&quot;>
  ${$options.text}
</div>`
        "
      />
    </template>

    <template #overflow-scroll>
      <h2>.overflow-scroll</h2>
      <p>Sets the general overflow property to <code>scroll</code>.</p>
      <PExample
        :html="
          `<div class=&quot;overflow-scroll h-3 p-3 bg-gray-2&quot;>
  Not nearly enough content...
</div>`
        "
      />
    </template>

    <template #overflow-auto>
      <h2>.overflow-auto</h2>
      <p>Sets the general overflow property to <code>auto</code>.</p>
      <PExample
        :html="
          `<div class=&quot;overflow-auto max-h-8 p-3 bg-gray-2&quot;>
  ${$options.text}
</div>`
        "
      />
    </template>
  </Layout>
</template>

<script>
export default {
  text:
    "A very small stage in a vast cosmic arena rogue rich in mystery encyclopaedia galactica Orion's sword rings of Uranus. Hundreds of thousands tendrils of gossamer clouds of brilliant syntheses extraordinary claims require extraordinary evidence from which we spring dream of the mind's eye. Descended from astronomers dispassionate extraterrestrial observer globular star cluster intelligent beings hundreds of thousands courage of our questions? The carbon in our apple pies dream of the mind's eye citizens of distant epochs extraordinary claims require extraordinary evidence concept of the number one the carbon in our apple pies and billions upon billions upon billions upon billions upon billions upon billions upon billions."
};
</script>
