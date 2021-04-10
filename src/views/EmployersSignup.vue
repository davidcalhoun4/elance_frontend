<template>
  <div class="employer-signup">
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
          <h1 class="page-header-title">Employer Signup</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <!-- =============================
			///// Begin register section /////
			============================== -->
    <section id="register-section">
      <div class="section-inner bg-transparent no-padding max-width-1200">
        <div class="row">
          <!-- Left column -->
          <div class=" col-md-6 margin-bottom-30">
            <div class="register-wrapper">
              <h2>Create Your Account</h2>

              <hr />

              <!-- Begin register form -->
              <form id="register-form" v-on:submit.prevent="submit()">
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
                  <label for="email">your email:</label>
                  <input
                    type="email"
                    class="form-control"
                    id="email"
                    name="email"
                    placeholder="enter your email"
                    required
                    v-model="email"
                  />
                </div>

                <div class="form-group">
                  <label for="password">password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="password"
                    name="password"
                    placeholder="choose password"
                    required
                    v-model="password"
                  />
                </div>
                <div class="form-group">
                  <label for="re-enter-password">re-enter password:</label>
                  <input
                    type="password"
                    class="form-control"
                    id="re-enter-password"
                    name="re-enter-password"
                    placeholder="re-enter your password"
                    required
                    v-model="passwordConfirmation"
                  />
                </div>

                <button type="submit" class="btn btn-primary margin-top-15">
                  register now
                </button>
              </form>
              <!-- End register form -->
            </div>
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->

          <!-- Right column -->
          <div class="col-md-6">
            <img
              src="https://www.tourismvictoria.com/sites/default/files/styles/event_details_mobile_2x/public/dv_performances_2017_odc_dead_reckoning_031_andrew_weeks_a_635px_435px.jpg?itok=2qIjNNCn"
              alt=""
              class="margin-top-40"
            />
            <div class="text-right">
              <small>photo - odc/dance</small>
            </div>
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End register section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
    };
  },
  methods: {
    submit: function() {
      var params = {
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
