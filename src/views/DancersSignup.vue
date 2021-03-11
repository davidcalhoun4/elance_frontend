<template>
  <div class="dancer-signup">
    <form v-on:submit.prevent="submit()">
      <h1>Dancer Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <!-- <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="first_name" />
      </div> -->
      <!-- <div class="form-group">
        <label>Genre:</label>
        <input type="text" class="form-control" v-model="genre_id" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="last_name" />
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
      // first_name: "",
      // last_name: "",
      // genre_id: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        // first_name: this.first_name,
        // last_name: this.last_name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation,
        // genre_id: this.genre_id,
      };
      axios
        .post("/api/dancers", params)
        .then((response) => {
          console.log(response.data);
          axios
            .post("/api/dancer/sessions", params)
            .then((response) => {
              axios.defaults.headers.common["Authorization"] =
                "Bearer " + response.data.jwt;
              localStorage.setItem("jwt", response.data.jwt);
              localStorage.setItem("dancer_id", response.data.dancer_id);
              console.log("dancer has logged in");
              this.$router.push(`/dancers/${response.data.dancer_id}/edit`);
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
