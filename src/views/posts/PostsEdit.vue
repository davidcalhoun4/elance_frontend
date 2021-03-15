<template>
  <div class="posts-edit">
    <h1>Edit Post</h1>
    <form v-on:submit.prevent="updatePost(post)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="post.title" /><br />
      Description:
      <input type="text" v-model="post.description" /><br />
      Image:
      <input type="text" v-model="post.image_url" /><br />

      <label for="genre-id">Choose a Genre:</label>
      <select name="genres" v-model="post.genre_id">
        <option value="1">Ballet</option>
        <option value="2">Modern</option>
        <option value="3">Contemporary</option>
        <option value="4">Tap</option>
        <option value="5">Hip-Hop</option>
      </select>
      <br />

      <input type="submit" value="Update Post" />
    </form>
    <button v-on:click="destroyPost()">Destroy</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log("post show", response);
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function() {
      var params = {
        title: this.post.title,
        description: this.post.description,
        image_url: this.post.image_url,
        genre_id: this.post.genre_id,
      };
      axios
        .patch(`/api/posts/${this.post.id}`, params)
        .then((response) => {
          console.log("post update", response);
          this.$router.push(`/posts/${this.post.id}`);
        })
        .catch((error) => {
          console.log("post update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyPost: function() {
      if (confirm("Are you 100% certain you want to delete this post?")) {
        axios.delete(`/api/posts/${this.post.id}`).then((response) => {
          console.log(response.data);
          console.log("post deleted");
          this.$router.push("/posts");
        });
      }
    },
  },
};
</script>
