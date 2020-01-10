<template>
  <Layout>
    <h2>Position</h2>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.static': 'position: static;',
        '.fixed': 'position: fixed;',
        '.absolute': 'position: absolute;',
        '.relative': 'position: relative;',
        '.sticky': 'position: sticky;'
      }"
    />
  </Layout>
</template>

