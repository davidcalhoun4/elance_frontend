<template>
  <div class="dancers-edit">
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
              <h2><i class="fa fa-plug"></i>Edit Profile</h2>

              <hr />

              <!-- Begin register form -->
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <form
                id="register-form"
                v-on:submit.prevent="updateDancer(dancer)"
              >
                <div class="form-group">
                  <label>First Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter your first name"
                    v-model="dancer.first_name"
                  />
                </div>
                <div class="form-group">
                  <label>Last Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter your last name"
                    v-model="dancer.last_name"
                  />
                </div>
                <div class="form-group">
                  <label>About:</label>
                  <textarea
                    row="5"
                    cols="50"
                    type="email"
                    class="form-control"
                    placeholder="enter about information"
                    v-model="dancer.about"
                  />
                </div>
                <div class="form-group">
                  <label>Resume:</label>
                  <input
                    type="file"
                    class="form-control"
                    placeholder="upload resume"
                    v-on:change="setFile($event)"
                    ref="fileInput"
                  />
                </div>
                <div class="form-group">
                  <label for="genre-id">Genre:</label>
                  <br />
                  <select value="1" v-model="dancer.genre_id">
                    <option value="1" selected>Ballet</option>
                    <option value="2">Modern</option>
                    <option value="3">Contemporary</option>
                    <option value="4">Tap</option>
                    <option value="5">Hip-Hop</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Video:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach video url"
                    v-model="dancer.video"
                  />
                </div>
                <div class="form-group">
                  <label>Image:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach image url"
                    v-model="dancer.image_url"
                  />
                </div>
                <div class="form-group">
                  <label>Email:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach video url"
                    v-model="dancer.email"
                  />
                </div>
                <div class="form-group">
                  <label>Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="dancer.password"
                  />
                </div>
                <div class="form-group">
                  <label>Re-Enter Password:</label>
                  <input
                    type="password"
                    class="form-control"
                    v-model="dancer.password_confirmation"
                  />
                </div>

                <button type="submit" class="btn btn-primary margin-top-15">
                  Submit
                </button>
                <br />
                <button
                  v-on:click="destroyDancer()"
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
            <div class="register-wrapper">
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
    <!-- <h1>Edit Dancer</h1>
    <form v-on:submit.prevent="updateDancer(dancer)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      First Name:
      <input type="text" v-model="dancer.first_name" /><br />
      Last Name:
      <input type="text" v-model="dancer.last_name" /><br />
      About:
      <input type="text" v-model="dancer.about" /><br />
      <div>
        Resume:
        <input type="file" v-on:change="setFile($event)" ref="fileInput" />
      </div>
      Video:
      <input type="text" v-model="dancer.video" /><br />

      <label for="genre-id">Choose a Genre:</label>
      <select value="1" name="genre" v-model="dancer.genre_id">
        <option value="1" selected>Ballet</option>
        <option value="2">Modern</option>
        <option value="3">Contemporary</option>
        <option value="4">Tap</option>
        <option value="5">Hip-Hop</option>
      </select>
      <br />
      Image:
      <input type="text" v-model="dancer.image_url" /><br />
      Email:
      <input type="text" v-model="dancer.email" /><br />
      Password:
      <input type="text" v-model="dancer.password" /><br />
      Password Confirmation:
      <input type="text" v-model="dancer.password_confirmation" /><br />

      <input type="submit" value="Submit" />
    </form>
    <button v-on:click="destroyDancer()">Destroy</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      dancer: {
        email: "",
        genre_id: "",
      },
      errors: [],
      resumeFile: "",
      password: "",
      password_confirmation: "",
    };
  },
  created: function() {
    axios.get(`/api/dancers/${this.$route.params.id}`).then((response) => {
      console.log("dancer show", response);
      this.dancer = response.data;
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.resumeFile = event.target.files[0];
      }
    },
    updateDancer: function() {
      var formData = new FormData();
      formData.append("email", this.dancer.email);
      if (this.dancer.password) {
        formData.append("password", this.dancer.password);
        formData.append(
          "password_confirmation",
          this.dancer.password_confirmation
        );
      }
      formData.append("first_name", this.dancer.first_name);
      formData.append("last_name", this.dancer.last_name);
      formData.append("image_url", this.image_url);
      formData.append("about", this.dancer.about);
      formData.append("image_url", this.dancer.image_url);
      if (this.genre_id) {
        formData.append("genre_id", this.dancer.genre_id);
      }
      if (this.resumeFile) {
        formData.append("resume_file", this.resumeFile);
      }
      // var params = {
      //   email: dancer.name,
      //   password: dancer.password,
      //   password_confirmation: dancer.password_confirmation,
      //   first_name: dancer.first_name,
      //   last_name: dancer.last_name,
      //   image_url: dancer.image_url,
      //   resume: dancer.resume,
      //   about: dancer.about,
      //   video: dancer.video,
      //   genre_id: dancer.genre_id,
      // };
      axios
        .patch(`/api/dancers/${this.dancer.id}`, formData)
        .then((response) => {
          console.log("dancer update", response);
          this.$router.push(`/dancers/${this.dancer.id}`);
        })
        .catch((error) => {
          console.log("dancer update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyDancer: function() {
      if (confirm("Are you 100% certain you want to delete this dancer?")) {
        axios.delete(`/api/dancers/${this.dancer.id}`).then((response) => {
          console.log(response.data);
          console.log("dancer deleted");
          localStorage.removeItem("dancer_id");
          localStorage.removeItem("jwt");
          this.$router.push("/");
        });
      }
    },
  },
};
</script>
