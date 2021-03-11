<template>
  <div class="employers-edit">
    <h1>Edit Employer</h1>
    <form v-on:submit.prevent="updateEmployer(employer)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Company Name:
      <input type="text" v-model="employer.company_name" /><br />
      Description:
      <input type="text" v-model="employer.description" /><br />
      Employer Type:
      <input type="text" v-model="employer.employer_type" /><br />
      Email:
      <input type="text" v-model="employer.email" /><br />
      Password:
      <input type="text" v-model="employer.password" /><br />
      Password Confirmation:
      <input type="text" v-model="employer.password_confirmation" /><br />

      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyEmployer()">Destroy</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      employer: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/employers/${this.$route.params.id}`).then((response) => {
      console.log("employer show", response);
      this.employer = response.data;
    });
  },
  methods: {
    updateEmployer: function(employer) {
      var params = {
        email: employer.name,
        password: employer.password,
        password_confirmation: employer.password_confirmation,
        company_name: employer.company_name,
        description: employer.description,
        employer_type: employer.employer_type,
      };
      axios
        .patch(`/api/employers/${this.employer.id}`, params)
        .then((response) => {
          console.log("employer update", response);
          this.$router.push(`/employers/${this.employer.id}`);
        })
        .catch((error) => {
          console.log("employer update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyEmployer: function() {
      if (confirm("Are you 100% certain you want to delete this employer?")) {
        axios.delete(`/api/employers/${this.employer.id}`).then((response) => {
          console.log(response.data);
          console.log("employer deleted");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
