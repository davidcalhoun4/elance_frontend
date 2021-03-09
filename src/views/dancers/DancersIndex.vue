<template>
  <div class="dancers-index">
    <h1>Dancers</h1>
    <div v-for="dancer in dancers" v-bind:key="dancer.id">
      <router-link :to="`/dancers/${dancer.id}`">
        <h2>{{ dancer.first_name }} {{ dancer.last_name }}</h2>
        <img v-bind:src="dancer.image_url" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dancers: [],
    };
  },
  created: function() {
    axios.get("/api/dancers").then((response) => {
      console.log("dancer index", response);
      this.dancers = response.data;
    });
  },
  methods: {},
};
</script>
