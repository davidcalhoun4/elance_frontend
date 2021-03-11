<template>
  <div class="employer-signup">
    <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <!-- <div class="form-group">
        <label>Company Name:</label>
        <input type="text" class="form-control" v-model="company_name" />
      </div> -->
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="password" />
      </div>
      <div class="form-group">
        <label>Password confirmation:</label>
        <input
          type="password"
          class="form-control"
          v-model="passwordConfirmation"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      // company_name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        // company_name: this.company_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
      };
      axios
        .post("/api/employers", params)
        .then((response) => {
          console.log(response.data);
          axios
            .post("/api/employer/sessions", params)
            .then((response) => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.jwt;
              localStorage.setItem("jwt", response.data.jwt);
              localStorage.setItem("employer_id", response.data.employer_id);
              console.log("employer has logged in");
              this.$router.push(`/employers/${response.data.employer_id}/edit`);
            })
            .catch((error) => {
              console.log(error.response);
              this.errors = ["Invalid email or password."];
              this.email = "";
              this.password = "";
            });
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
