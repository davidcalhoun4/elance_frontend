<template>
  <div class="employers-edit">
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
          <h1 class="page-header-title">Edit Profile</h1>
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
          <div class="col-lg-8 col-md-6 margin-bottom-30">
            <div class="register-wrapper">
              <h2>Edit Profile</h2>

              <hr />

              <!-- Begin register form -->
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <form
                id="register-form"
                v-on:submit.prevent="updateEmployer(employer)"
              >
                <div class="form-group">
                  <label>Company Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter your company name"
                    v-model="employer.company_name"
                  />
                </div>
                <div class="form-group">
                  <label>Description:</label>
                  <textarea
                    type="text"
                    row="5"
                    cols="50"
                    class="form-control"
                    placeholder="enter description"
                    v-model="employer.description"
                  />
                </div>
                <div class="form-group">
                  <label>Image:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach image url"
                    v-model="employer.image_url"
                  />
                </div>
                <div class="form-group">
                  <label for="employer-type">Employer Type:</label>
                  <br />
                  <select name="employer_type" v-model="employer.employer_type">
                    <option value="Company">Company</option>
                    <option value="Freelance Choreographer"
                      >Freelance Choreographer</option
                    >
                    <option value="Evener Hirer">Event Hirer</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter email"
                    v-model="employer.email"
                  />
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="employer.password"
                  />
                </div>
                <div class="form-group">
                  <label>Re-Enter Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="employer.password_confirmation"
                  />
                </div>

                <button type="submit" class="btn btn-primary margin-top-15">
                  Submit
                </button>
                <br />
                <button
                  v-on:click="destroyEmployer()"
                  class="btn btn-dark margin-top-15"
                >
                  Delete
                </button>
              </form>
              <!-- End register form -->
            </div>
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->

          <!-- Right column -->
          <div class="col-lg-4 col-md-6">
            <!-- <div class="register-wrapper">
              <h3>information</h3>
              <hr class="hr-short" />
              <p>
                Fuga laboriosam, quisquam quam saepe, magnam neque vel itaque,
                consequuntur distinctio odit doloremque non dolor totam. Quidem
                laudantium magnam.
              </p>

              <p>
                Wuos nemo alias architecto, accusantium tempora attes nam conse
                quuntur ab sunt.
              </p>
              <button class="btn btn-dark margin-top-15">more info...</button>
            </div> -->
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End register section -->
    <!-- <h1>Edit Employer</h1>
    <form v-on:submit.prevent="updateEmployer(employer)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Company Name:
      <input type="text" v-model="employer.company_name" /><br />
      Description:
      <input type="text" v-model="employer.description" /><br />

      <label for="employer-type">Employer Type:</label>
      <select name="employer_type" v-model="employer.employer_type">
        <option value="Company">Company</option>
        <option value="Freelance Choreographer">Freelance Choreographer</option>
        <option value="Evener Hirer">Event Hirer</option>
      </select>
      <br />

      Email:
      <input type="text" v-model="employer.email" /><br />
      Password:
      <input type="text" v-model="employer.password" /><br />
      Password Confirmation:
      <input type="text" v-model="employer.password_confirmation" /><br />

      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyEmployer()">Destroy</button> -->
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
          localStorage.removeItem("employer_id");
          localStorage.removeItem("jwt");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
