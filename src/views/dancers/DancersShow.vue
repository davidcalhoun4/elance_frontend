<template>
  <div class="dancers-show">
    <h1>{{ dancer.first_name }} {{ dancer.last_name }}</h1>
    <h3><u>Genre</u>: {{ dancer.genre.style }}</h3>
    <img v-bind:src="dancer.image_url" alt="" />
    <h3><u>About</u>: {{ dancer.about }}</h3>
    <h3><u>Resume</u>: {{ dancer.resume }}</h3>
    <a v-bind:href="dancer.video"><h3>Dance Reel</h3></a>
    <a v-bind:href="'mailto:' + dancer.email">
      <h4>Contact Dancer:</h4>
      {{ dancer.email }}</a
    >
    <div v-if="dancer.id == $parent.getDancerId()">
      <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
        >Edit Profile</router-link
      >
    </div>
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
