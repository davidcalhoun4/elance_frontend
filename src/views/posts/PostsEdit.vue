<template>
  <div class="posts-edit">
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
          <h1 class="page-header-title">Edit Post</h1>
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
              <h2>Edit Post</h2>

              <hr />

              <!-- Begin register form -->
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <form id="register-form" v-on:submit.prevent="updatePost(post)">
                <div class="form-group">
                  <label>Title:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="enter your company name"
                    v-model="post.title"
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
                    v-model="post.description"
                  />
                </div>
                <div class="form-group">
                  <label>Image:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="attach image url"
                    v-model="post.image_url"
                  />
                </div>
                <div class="form-group">
                  <label for="genre-id">Choose a Genre:</label>
                  <br />
                  <select name="genres" v-model="post.genre_id">
                    <option value="1">Ballet</option>
                    <option value="2">Modern</option>
                    <option value="3">Contemporary</option>
                    <option value="4">Tap</option>
                    <option value="5">Hip-Hop</option>
                  </select>
                </div>

                <button type="submit" class="btn btn-primary margin-top-15">
                  Update
                </button>
                <br />
                <button
                  v-on:click="destroyPost()"
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
      post: {},
      errors: [],
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log("post show", response);
      this.post = response.data;
    });
  },
  methods: {
    updatePost: function() {
      var params = {
        title: this.post.title,
        description: this.post.description,
        image_url: this.post.image_url,
        genre_id: this.post.genre_id,
      };
      axios
        .patch(`/api/posts/${this.post.id}`, params)
        .then((response) => {
          console.log("post update", response);
          this.$router.push(`/posts/${this.post.id}`);
        })
        .catch((error) => {
          console.log("post update error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    destroyPost: function() {
      if (confirm("Are you 100% certain you want to delete this post?")) {
        axios.delete(`/api/posts/${this.post.id}`).then((response) => {
          console.log(response.data);
          console.log("post deleted");
          this.$router.push("/posts");
        });
      }
    },
  },
};
</script>
