<template>
  <div class="home">
    <!-- ================================
			///// Begin intro video section /////
			================================= -->
    <section id="intro-video-section">
      <!-- Begin YTPlayer (Youtube video background)
				===============================================
				NOTE: Replace videoURL with your own (videoURL:'your-youtube-video-URL'). 
				Do not forget to add your background image for mobile devices (because the video background doesn't work on mobile devices).
				More info about YTPlayer: https://github.com/pupunzi/jquery.mb.YTPlayer -->
      <div
        class="youtube-bg full-height min-height-250"
        style="background-image: url(/assets/img/video/video-bg-2.jpg); background-position: 50% 50%;"
        data-property="{
					videoURL: 'https://www.youtube.com/watch?v=Q2I971iu8Uo',
					containment: 'self',
					startAt: 0,
					stopAt: 0,
					autoPlay: true,
					loop: true,
					mute: true,
					showControls: false,
					showYTLogo: false,
					realfullscreen: true,
					addRaster: false,
					optimizeDisplay: true,
					stopMovieOnBlur: true
				}"
      >
        <!-- Element cover -->
        <div class="cover bg-transparent-8-dark"></div>

        <div class="intro-video-caption align-center text-white text-center">
          <h4 class="intro-video-title">
            élancé
          </h4>
          <hr class="hr-short hr-big" />
          <p class="intro-video-description">
            connecting employers with local talent
          </p>
          <p class="intro-video-description">
            connecting dance artists with their next gig
          </p>
        </div>
      </div>
      <!-- End YTPlayer (Youtube video background) -->
    </section>
    <!-- End intro video section -->
    <!-- ============================
			///// Begin welcome section /////
			============================= -->
    <section id="welcome-section">
      <div class="row margin-bottom-100">
        <div class="col-md-4">
          <h2>welcome to élancé</h2>
          <hr class="hr-short" />
        </div>
        <!-- /.col -->

        <div class="col-md-8">
          <p>
            connecting dance artists with their next gig
          </p>

          <p>
            connecting employers with local talent
          </p>
        </div>
        <!-- /.col -->
      </div>
      <!-- /.row -->
    </section>
    <!-- End welcome section -->
  </div>
</template>

<style></style>

<script>
export default {
  data: function() {
    return {
      message: "WELCOME TO ELANCE",
    };
  },
  created: function() {},
  methods: {},
};
</script>
