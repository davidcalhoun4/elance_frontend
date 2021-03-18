<template>
  <div class="dancers-show">
    <h1>{{ dancer.first_name }} {{ dancer.last_name }}</h1>
    <h3 v-if="dancer.genre"><u>Genre</u>: {{ dancer.genre.style }}</h3>
    <img v-bind:src="dancer.image_url" alt="" />
    <h3><u>About</u>: {{ dancer.about }}</h3>

    <a :href="dancer.resume">Dancer Resume</a>
    <br />
    <iframe
      v-if="dancer.youtube_embed"
      width="560"
      height="315"
      :src="dancer.youtube_embed"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
    <br />
    <br />

    <a v-bind:href="'mailto:' + dancer.email">
      <button>
        <h4>Contact Dancer</h4>
        <!-- {{ dancer.email }} -->
      </button></a
    >
    <div v-if="dancer.id == $parent.getDancerId()">
      <router-link v-bind:to="`/dancers/${dancer.id}/edit`"
        ><button>Edit Profile</button></router-link
      >
    </div>
    <br />
    <br />
    <router-link to="/dancers"
      ><b><button>Back to all dancers</button></b></router-link
    >
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
