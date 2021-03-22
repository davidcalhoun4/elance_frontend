<template>
  <div class="posts-index">
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
          <h1 class="page-header-title">Browse Posts</h1>
        </div>
      </div>
      <!-- /.section-inner -->
    </section>
    <!-- End page header section -->
    <div class=" text-center margin-top-25">
      Search By Genre:
      <input
        ype="text"
        v-model="filter"
        placeholder="Ballet, Modern, Contemporary, Tap, Hip-Hop"
      />
    </div>
    <!-- ==============================
			///// Begin blog list section /////
			=============================== -->
    <section id="blog-list-section">
      <!-- Begin blog list
				=====================
				* Use class "blog-list-classic" to enable classic blog list layout.
				-->
      <div class="blog-list">
        <div class="blog-wrap">
          <!-- Begin blog list item 1 
						============================
						* Use class "no-margin" to disable space between blog items.
						-->
          <div
            v-for="post in filterBy(posts, filter, 'genre')"
            v-bind:key="post.id"
            class="blog-list-item row text-center"
          >
            <!-- Left column -->
            <div class="col col-md-6 col-md-push-6 no-padding">
              <img v-bind:src="post.image_url" alt="" />
            </div>
            <!-- /.col -->

            <!-- Right column -->
            <div class="col col-md-6 col-md-pull-6 no-padding">
              <router-link :to="`/posts/${post.id}`">
                <div class="bco blog-list-info">
                  <h2 class="blog-list-title">
                    <a
                      href="blog-single-no-sidebar.html"
                      title="Aenean Odio Metus"
                      >{{ post.title }}</a
                    >
                  </h2>
                  <div class="blog-list-meta">
                    <h5 class="article-time">
                      <b>- {{ post.genre.style }} -</b>
                    </h5>
                    <div class="blog-list-title">
                      <h4
                        href="blog-single-no-sidebar.html"
                        title="Aenean Odio Metus"
                      >
                        {{ post.employer.company_name }}
                      </h4>
                    </div>
                  </div>
                  <hr class="hr-short" />
                  <p class="blog-list-desc"></p>

                  <a
                    href="blog-single-no-sidebar.html"
                    class="btn btn-primary margin-top-40"
                    >view post
                  </a>
                </div>
              </router-link>
            </div>
            <!-- /.col -->
          </div>
          <!-- End blog list item 1 -->
        </div>
        <!-- /.blog-wrap -->
      </div>
      <!-- End blog-list -->

      <div class="row">
        <div class="col-lg-12 text-center">
          <!-- Begin pagination -->
          <nav>
            <ul class="pagination margin-top-100">
              <li>
                <!-- <a href="#" aria-label="Previous">
                  <span aria-hidden="true">first</span>
                </a> -->
              </li>
              <li><a href="#">prev</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>

              <li><a href="#">next</a></li>
              <li>
                <!-- <a href="#" aria-label="Next">
                  <span aria-hidden="true">last</span>
                </a> -->
              </li>
            </ul>
            <!-- <div class="pagination-info ">showing page 2 of 48</div> -->
          </nav>
          <!-- End pagination -->
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- End blog list section -->
    <!-- <h1>Posts</h1>
    <label for="genre-id">Search By Genre:</label>
    <input
      type="text"
      v-model="filter"
      placeholder="Ballet, Modern, Contemporary, Tap, Hip-Hop"
    />

    <div v-for="post in filterBy(posts, filter, 'genre')" v-bind:key="post.id">
      <router-link :to="`/posts/${post.id}`">
        <h2>Title: {{ post.title }}</h2>
        <h3>Employer: {{ post.employer.company_name }}</h3>
        <p>Dance Genre: {{ post.genre.style }}</p>

        <img v-bind:src="post.image_url" alt="" />
        <h1>______________________________________________</h1>
      </router-link>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      posts: [],
      filter: "",
    };
  },
  created: function() {
    axios.get("/api/posts").then((response) => {
      console.log("post index", response);
      this.posts = response.data;
    });
  },
  methods: {},
};
</script>
