<template>
  <div class="posts-show">
    <h1>
      <u>{{ post.title }}</u>
    </h1>
    <img v-bind:src="post.image_url" alt="" />
    <router-link v-bind:to="`/employers/${employer.id}`">
      <h3><u>Employer</u>: {{ post.employer_id }}</h3>
    </router-link>
    <h3>{{ post.description }}</h3>
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
      employer: [],
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
