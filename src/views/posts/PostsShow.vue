<template>
  <div class="posts-show">
    <h1>
      <u>Title: {{ post.title }}</u>
    </h1>

    <router-link v-bind:to="`/employers/${post.employer_id}`">
      <h2>Employer: {{ post.employer.company_name }}</h2>
    </router-link>
    <p>Dance Genre: {{ post.genre.style }}</p>
    <img v-bind:src="post.image_url" alt="" />
    <h3>Description: {{ post.description }}</h3>
    <p>Created: {{ post.created }}</p>
    <div v-if="post.employer_id == $parent.getEmployerId()">
      <router-link v-bind:to="`/posts/${post.id}/edit`"
        ><button>Edit Post</button></router-link
      >
    </div>
    <br />
    <router-link to="/posts"><button>Back to all posts</button></router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {},
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log("posts show", response);
      this.post = response.data;
    });
  },
  methods: {},
};
</script>
