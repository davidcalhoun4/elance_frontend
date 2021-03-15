<template>
  <div class="employers-index">
    <h1>Employers</h1>
    <label for="employer-type">Search By Employer Type:</label>
    <select name="employer-type" v-model="filter">
      <option>Company</option>
      <option>Freelance Choreographer</option>
      <option>Event Hirer</option>
    </select>
    <div
      v-for="employer in filterBy(employers, filter, 'employer_type')"
      v-bind:key="employer.id"
    >
      <router-link :to="`/employers/${employer.id}`">
        <h2>{{ employer.company_name }}</h2>
        <p v-if="employer.employer_type">
          Employer Type: {{ employer.employer_type }}
        </p>
        <img v-bind:src="employer.image_url" alt="" />
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
      employers: [],
      filter: "",
    };
  },
  created: function() {
    axios.get("/api/employers").then((response) => {
      console.log("employer index", response);
      this.employers = response.data;
    });
  },
  methods: {},
};
</script>
