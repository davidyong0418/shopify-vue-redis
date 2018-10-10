console.log('revolution slider js');
document.addEventListener("DOMContentLoaded", function() {
  var initRevSlider = function initRevSlider() {
    if(jQuery('.tp-banner').length) {
      // Revolution Slider
      jQuery('.tp-banner').show().revolution({
        dottedOverlay:"none",
        delay:16000,
        startwidth:2048,
        hideThumbs:200,
        hideTimerBar:"on",

        thumbWidth:100,
        thumbHeight:50,
        thumbAmount:5,

        navigationType:"none",
        navigationArrows:"",
        navigationStyle:"",

        touchenabled:"on",
        onHoverStop:"on",

        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,

        parallax:"mouse",
        parallaxBgFreeze:"on",
        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

        keyboardNavigation:"off",

        navigationHAlign:"center",
        navigationVAlign:"bottom",
        navigationHOffset:0,
        navigationVOffset:20,

        soloArrowLeftHalign:"left",
        soloArrowLeftValign:"center",
        soloArrowLeftHOffset:20,
        soloArrowLeftVOffset:0,

        soloArrowRightHalign:"right",
        soloArrowRightValign:"center",
        soloArrowRightHOffset:20,
        soloArrowRightVOffset:0,

        shadow:0,
        fullWidth:"off",
        fullScreen:"on",

        spinner:"",
        h_align:"left",

        stopLoop:"off",
        stopAfterLoops:-1,
        stopAtSlide:-1,

        shuffle:"off",

        autoHeight:"off",           
        forceFullWidth:"off",           


        hideThumbsOnMobile:"off",
        hideNavDelayOnMobile:1500,            
        hideBulletsOnMobile:"off",
        hideArrowsOnMobile:"off",
        hideThumbsUnderResolution:0,

        hideSliderAtLimit:0,
        hideCaptionAtLimit:0,
        hideAllCaptionAtLilmit:0,
        startWithSlide:0,
        fullScreenOffsetContainer: "#header"  
      });
    }
  };
  ['desktop', 'tablet', 'mobile'].forEach(function(imgSize){
    console.log(imgSize);
    if (document.body.classList.contains('window-size-' + imgSize)) {
      var images = document.querySelectorAll('.revolution-slider-image');
      images.forEach(function (img) {
        img.setAttribute('src', img.getAttribute('data-image-' + imgSize));
        img.removeAttribute('data-image-desktop');
        img.removeAttribute('data-image-tablet');
        img.removeAttribute('data-image-mobile');
      });
      return initRevSlider();
    }
  });
});