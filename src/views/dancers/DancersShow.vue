<template>
  <div class="dancers-show">
    <h1>{{ dancer.first_name }} {{ dancer.last_name }}</h1>
    <img v-bind:src="dancer.image_url" alt="" />
    <h3><u>About</u>: {{ dancer.about }}</h3>
    <h3><u>Resume</u>: {{ dancer.resume }}</h3>
    <h3><u>Dance Reel</u>: {{ dancer.video }}</h3>
    <h3><u>Style</u>: {{ dancer.genre }}</h3>
    <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
      >Edit Dancer</router-link
    >
    <br />
    <router-link to="/dancers"><b>Back to all dancers</b></router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dancer: {},
    };
  },
  created: function() {
    axios.get(`/api/dancers/${this.$route.params.id}`).then((response) => {
      console.log("dancers show", response);
      this.dancer = response.data;
    });
  },
  methods: {},
};
</script>
