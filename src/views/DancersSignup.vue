<template>
  <div class="dancer-signup">
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
          <h1 class="page-header-title">Dancer Signup</h1>
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
                    placeholder="enter password"
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
          <div class=" col-md-6">
            <div>
              <img
                src="https://media.npr.org/assets/img/2018/02/11/aaadt-s-glenn-allen-sims-and-linda-celeste-sims-in-alvin-ailey-s-revelations.-photo-by-nan-melville_wide-f2bb852021b702a976e2c63d2ee547e9e22dc2db.jpg"
                alt=""
                class="margin-top-80"
              />
              <div class="text-right">
                <small>photo - alvin ailey</small>
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
    <!-- End register section -->
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Dancer Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
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
    </form> -->
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
