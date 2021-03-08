<template>
  <div class="posts-new">
    <h1>New Post</h1>
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>

      Title:
      <input type="text" v-model="title" /><br />
      Description:
      <input type="text" v-model="description" /><br />
      Image:
      <input type="text" v-model="image_url" /><br />
      Genre:
      <input type="text" v-model="genre_id" /><br />

      <input type="submit" value="Create Post" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "",
      description: "",
      image_url: "",
      genre_id: "",
      employer_id: "",
      errors: [],
      status: "",
    };
  },
  created: function() {},
  methods: {
    createPost: function() {
      var params = {
        title: this.title,
        description: this.description,
        image: this.image_url,
        genre: this.genre_id,
        employer_id: localStorage.employer_id,
      };
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log("post create", response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log("post create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
