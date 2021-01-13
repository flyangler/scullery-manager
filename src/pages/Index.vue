<template>
  <q-page class="flex flex-center">
<h3>Index.vue content.....</h3>
    <img class="vortex-logo"
      alt="Quasar logo"
      src="~assets/pngtree-vortex.jpg"
    >
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style>
img.vortex-logo {
    size: 360px;
}
img.vortex-logo:hover {
    transform: rotate(720deg);
    transition: transform 0.8s ease-in-out;
}
</style>
