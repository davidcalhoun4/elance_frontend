<template>
  <div class="employers-show">
    <h1>
      <u>{{ employer.company_name }}</u>
    </h1>
    <p>Type: {{ employer.employer_type }}</p>
    <img v-bind:src="employer.image_url" alt="" />
    <h3>{{ employer.description }}</h3>
    <a v-bind:href="'mailto:' + employer.email">
      <h4><button>Contact Employer</button></h4>
    </a>
    <div v-if="employer.id == $parent.getEmployerId()">
      <router-link v-bind:to="`/employers/${employer.id}/edit`">
        <button>Edit Employer</button></router-link
      >
    </div>
    <br />
    <h2><u>Employers Postings</u></h2>
    <div v-for="post in employer.posts" v-bind:key="post">
      <router-link :to="`/posts/${post.id}`">
        <h3>Title: {{ post.title }}</h3>
      </router-link>
    </div>

    <router-link to="/employers"
      ><b><button>Back to all employers</button></b></router-link
    >
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
