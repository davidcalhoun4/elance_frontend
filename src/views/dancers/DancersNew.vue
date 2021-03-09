<template>
  <div class="dancers-new">
    <h1>New Dancer</h1>
    <form v-on:submit.prevent="createDancer()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Name: <input type="text" v-model="newPhotoName" /> Width:
      <input type="text" v-model="newPhotoWidth" /> Height:
      <input type="text" v-model="newPhotoHeight" /> Url:
      <input type="text" v-model="newPhotoUrl" />
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      newPhotoName: "",
      newPhotoWidth: "",
      newPhotoHeight: "",
      newPhotoUrl: "",
      errors: [],
    };
  },
  created: function() {},
  methods: {
    createDancer: function() {
      var params = {
        name: this.newPhotoName,
        width: this.newPhotoWidth,
        height: this.newPhotoHeight,
        url: this.newPhotoUrl,
      };
      axios
        .post("/api/dancers", params)
        .then((response) => {
          console.log("photos create", response);
          this.$router.push("/photos");
        })
        .catch((error) => {
          console.log("photos create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
