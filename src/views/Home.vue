<template>
  <div class="home">
    <p>{{ v }}</p>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["value"],

  beforeMount: function() {
    this.v = "Anmol Jain";
  },

  data: () => ({
    v: null
  })
};
</script>
