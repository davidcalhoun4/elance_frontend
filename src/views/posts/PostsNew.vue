<template>
  <div class="posts-new">
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
          <h1 class="page-header-title">Create Post</h1>
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
              <h2>Create Post</h2>

              <hr />

              <!-- Begin register form -->
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <form id="register-form" v-on:submit.prevent="createPost()">
                <div class="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter title"
                    v-model="title"
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
                    v-model="description"
                  />
                  <small v-if="description.length < 20">
                    {{ 20 - description.length }} characters minimum</small
                  >
                </div>
                <div class="form-group">
                  <label>Image:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach image url"
                    v-model="image_url"
                  />
                </div>
                <div class="form-group">
                  <label for="genre-id">Choose a Genre:</label>
                  <br />
                  <select name="genres" v-model="genre_id">
                    <option value="1">Ballet</option>
                    <option value="2">Modern</option>
                    <option value="3">Contemporary</option>
                    <option value="4">Tap</option>
                    <option value="5">Hip-Hop</option>
                  </select>
                </div>

                <button type="submit" class="btn btn-primary margin-top-15">
                  Create Post
                </button>
              </form>
              <!-- End register form -->
            </div>
            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->

          <!-- Right column -->
          <div class="col-lg-4 col-md-6">
            <img
              src="http://static1.squarespace.com/static/53f24e0fe4b0a4ac7c8dc6f5/54c85266e4b0b5c877bcb5ff/5bb7aa430d9297cd773f2dc5/1538764962869/c_alonzo_king_150708_629.jpg?format=1500w"
              alt=""
              class="margin-top-100"
            />
            <small>*photo - lines ballet</small>

            <!-- /.register-wrapper -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End register section -->

    <!-- <h1>New Post</h1>
    <form v-on:submit.prevent="createPost()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>

      Title:
      <input type="text" v-model="title" /><br />
      Description:
      <input type="text" v-model="description" /><br />
      <small v-if="description.length < 20">
        {{ 20 - description.length }} characters minimum</small
      >
      <br />
      Image:
      <input type="text" v-model="image_url" /><br />

      <label for="genre-id">Choose a Genre:</label>
      <select name="genres" v-model="genre_id">
        <option value="1">Ballet</option>
        <option value="2">Modern</option>
        <option value="3">Contemporary</option>
        <option value="4">Tap</option>
        <option value="5">Hip-Hop</option>
      </select>
      <br />

      <input type="submit" value="Create Post" />
    </form> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      title: "",
      description: "",
      image_url: "",
      employer_id: "",
      genre_id: "",
      errors: [],
      status: "",
    };
  },
  created: function() {},
  methods: {
    createPost: function() {
      var params = {
        title: this.title,
        description: this.description,
        image: this.image_url,
        genre_id: this.genre_id,
        employer_id: this.employer_id,
      };
      axios
        .post("/api/posts", params)
        .then((response) => {
          console.log("post create", response);
          this.$router.push("/posts");
        })
        .catch((error) => {
          console.log("post create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
