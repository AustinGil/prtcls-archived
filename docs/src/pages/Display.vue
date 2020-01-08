<template>
  <Layout>
    <section class="mb-12">
      <h2>Display</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.inline': 'display: inline;',
          '.block': 'display: block;',
          '.inline-block': 'display: inline-block;',
          '.grid': 'display: grid;',
          '.inline-grid': 'display: inline-grid;',
          '.flex': 'display: flex;',
          '.inline-flex': 'display: inline-flex;',
          '.table': 'display: table;',
          '.table-row': 'display: table-row;',
          '.table-cell': 'display: table-cell;',
          '.display-none': 'display: none;'
        }"
      />
    </section>
  </Layout>
</template>

