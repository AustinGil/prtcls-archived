<template>
  <div class="font-sans max-w-4 mx-auto px-4">
    <!-- <header class="flex justify-between align-center mb-5 py-7">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
    </header> -->
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
