<template>
  <div class="font-sans mx-12">
    <header class="flex justify-between align-center mb-5 py-7">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
