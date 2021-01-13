<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions('auth', ['handleAuthStateChanges'])
  },
  mounted () {
    this.handleAuthStateChanges()
  }
}
</script>
<style>
img.vortex-logo {

}
img.vortex-logo:hover {
    transform: rotate(360deg);
    transition: transform 1.5s ease-in-out;
}
</style>
