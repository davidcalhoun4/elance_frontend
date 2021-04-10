<template>
  <div class="posts-show">
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
          <h1 class="page-header-title">Post</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <!-- ==============================
			///// Begin services section /////
			=============================== -->
    <section id="services-section">
      <div class="row margin-bottom-100">
        <div class="col-md-4 text-center">
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

        <div class="col-md-7 text-center">
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
