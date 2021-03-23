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
            <img
              src="https://i0.wp.com/fjordreview.com/wp-content/uploads/2020/07/Madoka-Kariya-and-Paxton-Ricketts-in-Standby-by-Paul-Lightfoot.jpg?resize=1024%2C731&ssl=1"
              alt=""
            />
            <div class="text-right">
              <small>photo - ndt dance</small>
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
