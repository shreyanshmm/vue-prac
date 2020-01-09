<template>
  <div class="home">
    <!-- <p>{{ value }}</p> -->
  </div>
</template>

<script>
export default {
  name: "home",
  props: ["value"],

  beforeMount: function() {
    // this.value();
  },

  data: () => ({
    v: null
  })
};
</script>
