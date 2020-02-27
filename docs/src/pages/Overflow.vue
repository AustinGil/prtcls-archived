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

    <template #overflow>
      <h2>.overflow</h2>
      <p>Sets the general overflow property.</p>
      <PExample
        :html="
          `<div class=&quot;max-h-4 p-3 bg-gray-2&quot;>
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
