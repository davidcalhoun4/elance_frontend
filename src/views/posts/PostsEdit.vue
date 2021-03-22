<template>
  <div class="posts-edit">
    <!-- =============================
			///// Begin register section /////
			============================== -->
    <section id="register-section">
      <div class="section-inner bg-transparent no-padding max-width-1200">
        <div class="row">
          <!-- Left column -->
          <div class="col-lg-8 col-md-6 margin-bottom-30">
            <div class="register-wrapper">
              <h2><i class="fa fa-plug"></i>Edit Post</h2>

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
    <!-- <h1>Edit Post</h1>
    <form v-on:submit.prevent="updatePost(post)">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      Title:
      <input type="text" v-model="post.title" /><br />
      Description:
      <input type="text" v-model="post.description" /><br />
      Image:
      <input type="text" v-model="post.image_url" /><br />

      <label for="genre-id">Choose a Genre:</label>
      <select name="genres" v-model="post.genre_id">
        <option value="1">Ballet</option>
        <option value="2">Modern</option>
        <option value="3">Contemporary</option>
        <option value="4">Tap</option>
        <option value="5">Hip-Hop</option>
      </select>
      <br />

      <input type="submit" value="Update Post" />
    </form>
    <button v-on:click="destroyPost()">Destroy</button> -->
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
