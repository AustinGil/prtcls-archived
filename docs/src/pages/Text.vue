<template>
  <Layout>
    <h1>Text</h1>

    <template #classes>
      <h2>Classes</h2>
      <PTable
        :headers="['Class', 'Properties']"
        :values="{
          '.text-{left|center|right|justify}':
            'text-algin: {left|center|right|justify};',
          '.uppercase': 'text-transform: uppercase;',
          '.lowercase': 'text-transform: lowercase;',
          '.capitalize': 'text-transform: capitalize;',
          '.normal-case': 'text-transform: none;',
          '.line-h-{1-length($lineHeights)}': 'line-height: {$lineHeights[i]};',
          '.spacing-{1-length($letterSpacers)}':
            'letter-spacing: {$letterSpacers[i]};',
          '.underline': 'text-decoration: underline;',
          '.overline': 'text-decoration: overline;',
          '.line-through': 'text-decoration: line-through;',
          '.no-line': 'text-decoration: no-line;'
        }"
      />
    </template>

    <template #variables>
      <h2>Variables</h2>
      <PTable
        :headers="['Variable', 'Default Value']"
        :values="{
          $lineHeights: '1, 1.25, 1.375, 1.5, 1.625, 2',
          $letterSpacers: '-0.05em, -0.025em, 0, 0.025em, 0.05em, 0.1em'
        }"
      />
    </template>

    <template #text-align>
      <h2>Text Align</h2>

      <PExample
        :html="
          `<div class=&quot;text-left mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;text-center mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;text-right mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;text-justify&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>`
        "
      />
    </template>

    <template #text-transform>
      <h2>Text Transform</h2>

      <PExample
        :html="
          `<div class=&quot;uppercase mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;lowercase mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;capitalize mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;normal-case&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>

    <template #text-decoration>
      <h2>Text Decoration</h2>

      <PExample
        :html="
          `<div class=&quot;underline mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;overline mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;line-through mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;no-line&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>

    <template #line-height>
      <h2>Line Height</h2>

      <PExample
        :html="
          `<div class=&quot;line-h-1 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;line-h-2 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;line-h-3 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;line-h-4 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;line-h-5 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>
<div class=&quot;line-h-6 mb-4&quot;>Somewhere, something incredible is waiting to be known inconspicuous motes of rock and gas kindling the energy hidden in matter worldlets the carbon in our apple pies network of wormholes.</div>`
        "
      />
    </template>

    <template #letter-spacing>
      <h2>Letter Spacing</h2>

      <PExample
        :html="
          `<div class=&quot;spacing-1 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;spacing-2 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;spacing-3 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;spacing-4 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;spacing-5 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>
<div class=&quot;spacing-6 mb-4&quot;>Somewhere, something incredible is waiting to be known.</div>`
        "
      />
    </template>
  </Layout>
</template>

