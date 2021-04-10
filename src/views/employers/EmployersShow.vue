<template>
  <div class="employers-show">
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
          <h1 class="page-header-title ">
            {{ employer.company_name }}
          </h1>
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
          <img
            v-bind:src="employer.image_url"
            alt=""
            class="text-main margin-bottom-15"
          />
          <h2 class="text-main margin-bottom-15">
            {{ employer.company_name }}
          </h2>
          <p>{{ employer.employer_type }}</p>
          <hr class="hr-short" />
          <div v-if="employer.id == $parent.getEmployerId()">
            <router-link v-bind:to="`/employers/${employer.id}/edit`">
              <button>Edit Profile</button></router-link
            >
          </div>
          <br />
          <a
            v-bind:href="'mailto:' + employer.email"
            class="btn btn-dark margin-top-15"
            >Contact {{ employer.company_name }}</a
          >
        </div>
        <!-- /.col -->

        <div class="col-md-7 text-center margin-top-50">
          <hr class="hr-short" />
          <p>
            {{ employer.description }}
          </p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Begin info box wrap -->
      <div class="info-box-wrap text-center">
        <div>
          <h3>
            <u> {{ employer.company_name }} Job Postings:</u>
          </h3>
        </div>
        <div class="row">
          <div
            v-for="post in employer.posts"
            v-bind:key="post"
            class="col-lg-4 text-center "
          >
            <!-- Begin info box 
							* Use class "ib-bordered" for box border.
							* Use class "ib-hover" for box hover effect.
							-->
            <router-link :to="`/posts/${post.id}`">
              <div class="info-box ib-bordered ib-hover">
                <span class="info-box-icon"><i></i></span>
                <h3 class="info-box-title">{{ post.title }}</h3>
                <hr class="hr-short" />
                <p class="info-box-text">
                  Posted {{ formattedDate(post.created) }}
                </p>

                <a href="#" class="btn btn-link btn-sm">see post</a>
              </div>
            </router-link>
            <!-- End infobox -->
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <div class="row margin-top-100 margin-auto max-width-800">
          <div class="col-md-12 center">
            <p></p>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->
      </div>
      <!-- End info box wrap -->
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
      employer: {},
    };
  },
  created: function() {
    axios.get(`/api/employers/${this.$route.params.id}`).then((response) => {
      console.log("employers show", response);
      this.employer = response.data;
    });
  },
  methods: {
    formattedDate: function(date) {
      return moment(date).format("LL");
    },
  },
};
</script>
