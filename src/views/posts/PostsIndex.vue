<template>
  <div class="posts-index">
    <h1>Posts</h1>
    <div v-for="post in posts" v-bind:key="post.id">
      <router-link :to="`/posts/${post.id}`">
        <h2>Title: {{ post.title }}</h2>
        <h3>Employer: {{ post.employer_id }}</h3>
        <p>Dance Genre: {{ post.genre }}</p>

        <img v-bind:src="post.image_url" alt="" />
        <h1>______________________________________________</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      posts: [],
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
