<template>
  <div class="posts-index">
    <h1>Posts</h1>
    <label for="genre-id">Search By Genre:</label>
    <input
      type="text"
      v-model="filter"
      placeholder="Ballet, Modern, Contemporary, Tap, Hip-Hop"
    />
    <!-- <select name="genre" v-model="filter" >
      <option>Ballet</option>
      <option>Modern</option>
      <option>Contemporary</option>
      <option>Tap</option>
      <option>Hip-Hop</option>
    </select> -->
    <div v-for="post in filterBy(posts, filter, 'genre')" v-bind:key="post.id">
      <router-link :to="`/posts/${post.id}`">
        <h2>Title: {{ post.title }}</h2>
        <h3>Employer: {{ post.employer.company_name }}</h3>
        <p>Dance Genre: {{ post.genre.style }}</p>

        <img v-bind:src="post.image_url" alt="" />
        <h1>______________________________________________</h1>
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
      posts: [],
      filter: "",
    };
  },
  created: function() {
    axios.get("/api/posts").then((response) => {
      console.log("post index", response);
      this.posts = response.data;
    });
  },
  methods: {},
};
</script>
