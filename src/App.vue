<template>
  <div id="app">
    <div id="nav">
      <!-- ===================
			///// Begin header /////
			========================
			* Use class "show-hide-on-scroll" to hide header on scroll down and show on scroll up.
			* Use class "fixed-top" to set header to fixed position.
			-->
      <header id="header" class="show-hide-on-scroll">
        <div class="header-inner">
          <!-- Begin logo -->
          <div id="logo">
            <a href="index.html">elance</a>
          </div>
          <!-- End logo -->

          <!-- Begin menu (Bootstrap navbar)
					=================================== 
					* Use class "navbar-default" or "navbar-border-bottom" for navbar style.
					* Add id="onepage-navbar" if you create a single page page version.
					-->
          <nav class="navbar navbar-default">
            <div class="navbar-inner">
              <!-- Toggle for better mobile display -->
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <!-- /.navbar-header -->

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="navbar-collapse-1">
                <ul class="nav navbar-nav navbar-right">
                  <!-- Begin dropdown
									==============================
									* Use class "dropdown-hover" to make navigation toggle on desktop hover.
									* Use class "dropdown-menu-right" to right align the dropdown menu.
									* Use class "dropdown-menu-dark" to enable dark dropdown menu.
									-->
                  <li class="dropdown dropdown-menu-dark dropdown-hover active">
                    <router-link to="/">Home | </router-link>
                  </li>
                  <li v-if="getEmployerId()">
                    <router-link :to="`/employers/${getEmployerId()}`"
                      >Profile |</router-link
                    >
                  </li>
                  <li v-if="getDancerId()">
                    <router-link :to="`/dancers/${getDancerId()}`"
                      >Profile |</router-link
                    >
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/dancers">Dancer Index | </router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/posts">Job Postings Index | </router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/employers">Employer Index | </router-link>
                  </li>
                  <li v-if="getEmployerId()">
                    <router-link to="/posts/new">
                      New Job Post |
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/dancer/signup"
                      >Dancer Signup |
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/dancer/login"
                      >Dancer Login |
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/employer/signup"
                      >Employer Signup |
                    </router-link>
                  </li>
                  <li v-if="!isLoggedIn()">
                    <router-link to="/employer/login"
                      >Employer Login |
                    </router-link>
                  </li>
                  <li v-if="isLoggedIn()">
                    <router-link to="/logout">Logout</router-link>
                  </li>

                  <!-- End dropdown -->
                </ul>
                <!-- /.nav -->
              </div>
              <!-- /.navbar-collapse -->
            </div>
            <!-- /.navbar-inner -->
          </nav>
          <!-- End menu -->
        </div>
        <!-- /.header-inner -->
      </header>
      <!-- End header -->
    </div>

    <!-- ================================
			///// Begin page header section /////
			================================= -->
    <section id="page-header-section">
      <div
        class="section-inner no-padding bg-image"
        style="background-image: url(/assets/img/page-header/bg-studio.jpg); background-position: 50% 50%;"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-5-dark"></div>

        <!-- Page header caption -->
        <div
          class="page-header-caption vertical-align-center text-center text-white"
        >
          <h1 class="page-header-title">elance</h1>
          <ol class="breadcrumb">
            <li><a href="index.html">home</a></li>
            <li class="active">about us</li>
          </ol>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <router-view />

    <!-- ===========================
			///// Begin footer section /////
			============================ -->
    <section id="footer">
      <div class="section-inner bg-dark">
        <div class="row">
          <div class="col-lg-12 text-center small text-gray">
            <h1 class="text-gray-2">ELANCE</h1>
            <ul class="footer-menu list-unstyled list-inline">
              <li><a href="index.html">home</a></li>
              <li><a href="pages-about.html">about us</a></li>
              <li><a href="pages-services.html">services</a></li>
              <li><a href="portfolio-masonry-3col.html">portfolio</a></li>
              <li><a href="blog-grid.html">blog</a></li>
              <li><a href="pages-contact.html">contact</a></li>
            </ul>
            <p>Copyright 2015 / All rights reserved</p>
            <p>
              Design by:
              <a href="http://themetorium.net" target="_blank">Themetorium</a>
            </p>
          </div>
          <!-- /.col -->
        </div>
        <!-- /.row -->

        <!-- Scroll to top button -->
        <a href="#body-content" class="scrolltotop sm-scroll"
          ><i class="fa fa-chevron-up"></i
        ></a>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End footer section -->
  </div>
</template>

<style></style>

<script>
export default {
  methods: {
    isLoggedIn: function() {
      return localStorage.jwt;
    },
    getDancerId: function() {
      return localStorage.dancer_id;
    },
    getEmployerId: function() {
      return localStorage.employer_id;
    },
  },
};
</script>
