<template>
  <div class="dancer-index">
    <h1>Dancers</h1>
    <div v-for="dancer in dancers" v-bind:key="dancer">
      <h2>{{ dancer.first_name }} {{ dancer.last_name }}</h2>
      <!-- <img v-bind:src=".url" v-bind:alt="" /> -->
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
