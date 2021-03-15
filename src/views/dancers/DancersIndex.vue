<template>
  <div class="dancers-index">
    <h1>Dancers</h1>
    <label for="genre-id">Search By Genre:</label>
    <select name="genre" v-model="filter">
      <option>Ballet</option>
      <option>Modern</option>
      <option>Contemporary</option>
      <option>Tap</option>
      <option>Hip-Hop</option>
    </select>
    <div
      v-for="dancer in filterBy(dancers, filter, 'genre')"
      v-bind:key="dancer.id"
    >
      <router-link :to="`/dancers/${dancer.id}`">
        <h2>{{ dancer.first_name }} {{ dancer.last_name }}</h2>
        <h3>{{ dancer.email }}</h3>
        <p v-if="dancer.genre">Dance Style: {{ dancer.genre.style }}</p>
        <img v-bind:src="dancer.image_url" alt="" />
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      dancers: [],
      filter: "",
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
