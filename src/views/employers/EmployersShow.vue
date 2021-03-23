<template>
  <div class="employers-show">
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
          <h1 class="page-header-title text-main">
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
          <p>Type: {{ employer.employer_type }}</p>
          <hr class="hr-short" />
          <div v-if="employer.id == $parent.getEmployerId()">
            <router-link v-bind:to="`/employers/${employer.id}/edit`">
              <button>Edit Employer</button></router-link
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

        <div class="col-md-7 text-center">
          <!-- <p>Type: {{ employer.employer_type }}</p> -->
          <hr class="hr-short" />
          <p>
            <u>About {{ employer.company_name }} </u>
            {{ employer.description }}
          </p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->

      <!-- Begin info box wrap -->
      <div class="info-box-wrap text-center">
        <div>
          <h3><u> Employer's Posts:</u></h3>
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
                  {{ post.description }}
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

    <!-- initial employer show display before Bootstrap
    <h1>
      <u>{{ employer.company_name }}</u>
    </h1>
    <p>Type: {{ employer.employer_type }}</p>
    <img v-bind:src="employer.image_url" alt="" />
    <h3>{{ employer.description }}</h3>
    <a v-bind:href="'mailto:' + employer.email">
      <h4><button>Contact Employer</button></h4>
    </a>
    <div v-if="employer.id == $parent.getEmployerId()">
      <router-link v-bind:to="`/employers/${employer.id}/edit`">
        <button>Edit Employer</button></router-link
      >
    </div>
    <br />
    <h2><u>Employers Postings</u></h2>
    <div v-for="post in employer.posts" v-bind:key="post">
      <router-link :to="`/posts/${post.id}`">
        <h3>Title: {{ post.title }}</h3>
      </router-link>
    </div>

    <router-link to="/employers"
      ><b><button>Back to all employers</button></b></router-link
    >
    end initial employer show display before Bootstrap -->
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {},
};
</script>
