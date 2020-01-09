<template>
  <div>
    <!-- <h1>My Name is {{ name }}</h1>
    <form @submit.prevent="submitForm">
      <input :type="setType()" v-model="name" />
    </form>
    <button type="button" @click="changeName('Shreyans')">
      Change Name
    </button>

    <p v-if="name === 'Shreyans'">
      Shreyans
    </p>
    <p v-else-if="name === 'Ansh'">
      Ansh
    </p>
    <p v-else>
      Kapil
    </p>

    <p v-show="name === 'Ansh'">
      Ansh
    </p> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",

  beforeCreate: function() {
    console.log("Before Create");
  },

  created: function() {
    console.log("Created");
  },

  beforeMount: function() {
    console.log("Before Mount");
    // this.$router.push({
    //   name: "dashboard",
    //   params: {
    //     courseId: 123
    //   }
    // });
  },

  mounted: function() {
    console.log("Mounted");
  },

  beforeDestroy: function() {
    console.log("Before Destroy");
  },

  destroyed: function() {
    console.log("Destroyed");
  },

  beforeUpdate: function() {
    console.log("Before Update");
  },

  updated: function() {
    console.log("Updated");
  },

  data: () => ({
    name: "hg"
  }),

  methods: {
    changeName(name) {
      this.name = name;
    },
    submitForm() {
      console.log(this.name);
    },
    setType() {
      // if (this.name) {
      //   return "text";
      // }
      return "text";
    }
  }
};
</script>

<style scoped lang="scss">
input {
  display: block;
  outline: 0;
  padding: 10px 20px;
  margin: 20px;
}
</style>
