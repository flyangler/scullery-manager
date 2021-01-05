<template>
  <div class="fullscreen bg-white text-center q-pa-md flex flex-center">
    <img class="bg" alt="page not found" src="~assets/octo-naut-wide.png" />
    <div>
      <div>
        <!--  -->
        <div style="font-size: 25vh; font-weight: bolder; color: #00FFFF; opacity: 0.5;" class="">404</div>
        <div class="text-h2 text-grey-4 q-mb-xl" style="opacity: 0.4">Oops. Nothing here...</div>
      </div>

      <q-btn
        class="q-mt-xl"
        color="dark"
        text-color="white"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
<style>
img.bg {
  /* Set rules to fill background */
  min-height: 100%;
  min-width: 1024px;

  /* Set up proportionate scaling */
  width: 100%;
  height: auto;

  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
}

@media screen and (max-width: 1024px) {
  /* Specific to this particular image */
  img.bg {
    left: 50%;
    margin-left: -512px; /* 50% */
  }
}
</style>
