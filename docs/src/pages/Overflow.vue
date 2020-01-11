<template>
  <Layout>
    <h2>Overflow</h2>

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
      class="mb-5"
    />
  </Layout>
</template>

