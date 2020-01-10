<template>
  <Layout>
    <h2>Visibility</h2>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.visible': 'visibility: visible;',
        '.hidden': 'visibility: hidden;',
        '.visually-hidden': `border: 0;\nclip: rect(0 0 0 0);\nheight: 1px;\nmargin: -1px;\noverflow: hidden;\npadding: 0;\nposition: absolute;\nwidth: 1px;`
      }"
    />
  </Layout>
</template>

