
$("document").ready(function() {

    /**
    * Homepage
    */

    var panels = document.querySelectorAll('.panel');

    function toggleOpen() {
        this.classList.toggle('open');
    }

    function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
          this.classList.toggle('open-active');
        }
    }

    // Loops thru nodelist -- not the empty array brackets, son
    [].forEach.call(panels, function(panel) {
        panel.addEventListener('click', toggleOpen);
        panel.addEventListener('transitionend', toggleActive);
    });

    // Special click event to stop opening animation
    var homepage = document.querySelector('.homepage');
    var background = document.querySelector('.background__overlay');
    var logo = document.querySelector('.logo__container');

    // nilla' js version of jQuery click event handler
    homepage.onclick = function() {
        // nilla' JS added style property
        document.querySelector('.background__overlay').style.display = 'none';
        document.querySelector('.logo__container').style.display = 'none';
    };

    var idleTime = 0;
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 30000); // 1 minute
    //Zero the idle timer on mouse movement.
    homepage.onclick = function (e) {
       idleTime = 0;
    };

    function timerIncrement() {
        idleTime = idleTime + 1;
        if (idleTime > 1) { // 30 sec
            document.querySelector('.kerick').classList.toggle('open-up');
        } else if (idleTime > 2) {
            document.querySelector('.kerick').classList.toggle('open-up');
        }
    }

  $(window).on( "scroll", function(){

      /**
       * This is for our 'iOS Work' project page
       */

      // Images we want to slide into place on scroll
      var $imageOne =   $('.offscreen--right.one');
      var $imageTwo =   $('.offscreen--left.two');
      var $imageThree = $('.offscreen--right.three');
      var $imageFour =  $('.offscreen--left.four');
      var $imageFive =  $('.offscreen--right.five');
      var $imageSix =   $('.offscreen--left.six');

      // Find the middle of the viewport window
      var $changePos = ( $(window).height() * .5 );
      // Add that to the scrollTop function so we start counting from the middle of the window on scroll
      var $middle = ( $(window).scrollTop() + $changePos );

      // Pixel distance of images from top of document
      if ($imageOne) {
          var $imageOffsetOne =   $imageOne.offset().top;
      }
      if ($imageOne) {
          var $imageOffsetTwo =   $imageTwo.offset().top;
      }
      if ($imageTwo) {
          var $imageOffsetThree = $imageThree.offset().top;
      }
      if ($imageThree) {
          var $imageOffsetFour =  $imageFour.offset().top;
      }
      if ($imageFour) {
          var $imageOffsetFive =  $imageFive.offset().top;
      }
      if ($imageFive) {
          var $imageOffsetSix =   $imageSix.offset().top;
      }

      // When the the pixel count above the middle of the viewport is greater than the distance of the
      // images from the top of the document.
      if ( $middle > $imageOffsetOne ) {
          $imageOne.addClass('center-from-right');
      }
      if ( $middle > $imageOffsetTwo ) {
          $imageTwo.addClass('center-from-left');
      }
      if ( $middle > $imageOffsetThree ) {
          $imageThree.addClass('center-from-right');
      }
      if ( $middle > $imageOffsetFour ) {
          $imageFour.addClass('center-from-left');
      }
      if ( $middle > $imageOffsetFive) {
          $imageFive.addClass('center-from-right');
      }
      if ( $middle > $imageOffsetSix ) {
          $imageSix.addClass('center-from-left');
      }

	});

    // Capture the menu items from the homepage
    var $menu = $('.menu');
    var $menuItemOne = $('.menu li:first-of-type a');
    var $menuItemTwo = $('.menu li:nth-of-type(2) a');
    var $menuItemThree = $('.menu li:last-of-type a');

    // Capture the homepage background image
    var $bgImg = $('.homepage');

    // Store navigation elements
    var $nav = $('.site-nav');
    var $trigger = $('.trigger');
    var $menuIcon = $('.site-nav .menu-icon');

    var $window = $(window).width();

    $menuIcon.on('click', function() {
        $menuIcon.toggleClass('clicked', '');
        $trigger.toggleClass('open', 'closed');
    });

    if ($window > 767) {
        $trigger.addClass('open');
    };

});
