<template>
  <div class="employer-login">
    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/fuzzy.jpeg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-5-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">Employer Login</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <!-- ==========================
			///// Begin login section /////
			=========================== -->
    <section id="login-section">
      <div class="section-inner bg-transparent no-padding max-width-1200">
        <div class="row">
          <!-- Left column -->
          <div class="col-md-6 margin-bottom-30">
            <div class="login-wrapper">
              <h3>Employer Login</h3>

              <!-- Begin login form -->
              <form id="login-form" v-on:submit.prevent="submit()">
                <div class="form-group">
                  <ul>
                    <li
                      class="text-danger"
                      v-for="error in errors"
                      v-bind:key="error"
                    >
                      {{ error }}
                    </li>
                  </ul>
                  <label for="username">email:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username"
                    name="username"
                    placeholder="enter your email"
                    required
                    v-model="email"
                  />
                </div>
                <div class="form-group no-margin-bottom">
                  <label for="password">password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    required
                    v-model="password"
                  />
                </div>
                <br />
                <button type="submit" class="btn btn-primary margin-top-15">
                  login
                </button>
              </form>
              <!-- End login form -->
            </div>
            <!-- /.login-wrapper -->
          </div>
          <!-- /.col -->

          <!-- Right column -->
          <div class="col-md-6">
            <div>
              <img
                src="https://www.selbyartistsmgmt.com/images/images/Alonzo%20King/F15%20by%20RJ%20Muna,%20Adji%20Cissoko%20&%20Robb%20Beresford%20-%20C_Alonzo_King_150708_Queen-King.jpg"
                alt=""
                class="margin-top-50"
              />
              <br />
              <div class="text-right">
                <small>photo - lines ballet</small>
              </div>
            </div>
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End login section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/api/employer/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("employer_id", response.data.employer_id);
          console.log("employer has logged in");
          this.$router.push(`/employers/${response.data.employer_id}`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
