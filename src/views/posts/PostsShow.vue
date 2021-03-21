<template>
  <div class="posts-show">
    <!-- ==============================
			///// Begin services section /////
			=============================== -->
    <section id="services-section">
      <div class="row margin-bottom-100">
        <div class="col-md-4 text-center">
          <!-- <img
            v-bind:src="employer.image_url"
            alt=""
            class="text-main margin-bottom-15"
          /> -->
          <h2 class="text-main margin-bottom-15">
            <router-link v-bind:to="`/employers/${post.employer_id}`">
              {{ post.employer.company_name }}
            </router-link>
          </h2>
          <img v-bind:src="post.image_url" alt="" />

          <br />
          <div
            v-if="post.employer_id == $parent.getEmployerId()"
            class="margin-top-15"
          >
            <router-link v-bind:to="`/posts/${post.id}/edit`"
              ><button>Edit Post</button></router-link
            >
          </div>
          <a
            v-bind:href="'mailto:' + post.employer.email"
            class="btn btn-dark margin-top-15"
            >Contact Poster</a
          >
        </div>
        <!-- /.col -->

        <div class="col-md-5 text-center">
          <h2 class="text-main margin-bottom-15">
            {{ post.title }}
          </h2>
          <p>- {{ post.genre.style }} -</p>
          <p>Posted {{ formattedDate(post.created) }}</p>
          <hr class="hr-short" />
          <p>
            {{ post.description }}
          </p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- End services section -->
    <!-- <h1>
      <u>Title: {{ post.title }}</u>
    </h1>

    <router-link v-bind:to="`/employers/${post.employer_id}`">
      <h2>Employer: {{ post.employer.company_name }}</h2>
    </router-link>
    <p>Dance Genre: {{ post.genre.style }}</p>
    <img v-bind:src="post.image_url" alt="" />
    <h3>Description: {{ post.description }}</h3>
    <p>Posted: {{ formattedDate(post.created) }}</p>
    <a v-bind:href="'mailto:' + post.employer.email">
      <h4><button>Contact Poster</button></h4>
    </a>
    <div v-if="post.employer_id == $parent.getEmployerId()">
      <router-link v-bind:to="`/posts/${post.id}/edit`"
        ><button>Edit Post</button></router-link
      >
    </div>
    <br />
    <router-link to="/posts"><button>Back to all posts</button></router-link> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  data: function() {
    return {
      post: {},
    };
  },
  created: function() {
    axios.get(`/api/posts/${this.$route.params.id}`).then((response) => {
      console.log("posts show", response);
      this.post = response.data;
    });
  },
  methods: {
    formattedDate: function(date) {
      return moment(date).format("LL");
    },
  },
};
</script>
