<template>
  <div class="employers-show">
    <h1>
      <u>{{ employer.company_name }}</u>
    </h1>
    <p>Type: {{ employer.employer_type }}</p>
    <img v-bind:src="employer.image_url" alt="" />
    <h3>{{ employer.description }}</h3>
    <!-- <router-link v-bind:to="`/posts/${post.id}/edit`">Edit Post</router-link>
    <br />
    <router-link to="/posts"><b>Back to all posts</b></router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      employer: {},
    };
  },
  created: function() {
    axios.get(`/api/employers/${this.$route.params.id}`).then((response) => {
      console.log("employers show", response);
      this.employer = response.data;
    });
  },
  methods: {},
};
</script>
