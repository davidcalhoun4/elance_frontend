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
        id="myVideoPlayer"
        class="youtube-bg full-height min-height-250 player"
        style="background-image: url(/assets/img/video/fuzzy_single.jpeg); background-position: 50% 50%;"
        data-property="{
					videoURL: 'https://www.youtube.com/watch?v=5rXP_yuH0o8',
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
          <h3 class="intro-video-title text-gray"></h3>

          <p class="intro-video-description text-gray">
            connecting
            <span class="text-main"> <strong>dancers</strong></span> with their
            next gig <span class="text-main"> | </span>
            connecting
            <span class="text-main"> <strong>employers</strong></span> with
            local talent
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
        <div class="col-md-3 "></div>
        <!-- /.col -->

        <div class="col-md-6.5 text-center">
          <h3>
            <br />
            <span class="text-main"> <strong>élancé</strong></span> was created
            for <span class="text-main"> <strong>dancers</strong></span> to
            simplify finding
            <span class="text-main"> <strong>work</strong></span>
            in the industry
            <br />
            <br />
            allowing
            <span class="text-main"> <strong> dancers</strong></span> to devote
            more time on their artistry
            <br />
            <hr class="hr-short margin-top-40" />
          </h3>
          <div class="text-gray text-center">
            <h3>
              <br />
              élancé
              <br />
              <br />
              [ ey-lahn-sey ]
              <br />
              <br />
              a quick darting movement
            </h3>
          </div>
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
/* global jQuery */
export default {
  data: function() {
    return {
      message: "WELCOME TO ELANCE",
    };
  },
  mounted: function() {
    jQuery(function() {
      jQuery("#myVideoPlayer").YTPlayer();
    });
  },
  methods: {},
};
</script>
