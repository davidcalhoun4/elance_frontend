<template>
  <div class="dancer-login">
    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/bg-blank.jpg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-5-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">Dancer Login</h1>
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
              <h3>Dancer Login</h3>

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
            <!-- <div class="register-wrapper">
              <h3><i class="fa fa-plug"></i> don't have an account yet?</h3>
              <p class="margin-top-15">
                Fuga laboriosam, quisquam quam saepe, magnam neque vel itaque,
                consequuntur distinctio odit doloremque non dolor totam. Quidem
                laudantium magnam quae, quisquam quam saepe, magnam neque vel
                itaque.
              </p>
              <form>
                <div class="form-group margin-top-20">
                  <label for="username-2">choose your username:</label>
                  <input
                    type="text"
                    class="form-control"
                    id="username-2"
                    name="username"
                    placeholder="choose your username"
                    required
                  />
                </div>
                <div class="form-group margin-top-20">
                  <label for="password-2"
                    >choose your password and continue:</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password-2"
                    name="password"
                    placeholder="choose your password"
                    required
                  />
                </div>
              </form>
              <a
                href="pages-register.html"
                type="submit"
                class="btn btn-primary margin-top-15"
                >continue registration</a
              >
            </div> -->
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End login section -->
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Dancer Login</h1>
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
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
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
        .post("/api/dancer/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] =
            "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("dancer_id", response.data.dancer_id);
          console.log("dancer has logged in");
          this.$router.push(`/dancers/${response.data.dancer_id}`);
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
