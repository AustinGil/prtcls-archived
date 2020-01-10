<template>
  <Layout>
    <h2>Text Styling</h2>
    <PTable
      :headers="['Class', 'Properties']"
      :values="{
        '.text-{left|center|right|justify}':
          'text-algin: {left|center|right|justify};',
        '.uppercase': 'text-transform: uppercase;',
        '.lowercase': 'text-transform: lowercase;',
        '.capitalize': 'text-transform: capitalize;',
        '.normal-case': 'text-transform: none;',
        '.underline': 'text-decoration: underline;',
        '.overline': 'text-decoration: overline;',
        '.line-through': 'text-decoration: line-through;',
        '.no-line': 'text-decoration: no-line;'
      }"
    />
  </Layout>
</template>

