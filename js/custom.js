$(function(){
  "use strict";
  var backToTop = $('.backToTop');
  var html_body = $('html,body');
  
  
      $(window).scroll(function () { 
          var scrolling = $(this).scrollTop();
          if(scrolling > 200){
              backToTop.fadeIn();
          }else{
              backToTop.fadeOut();
          }
          if(scrolling >200){
               $('.navbar').addClass('fixd-nav');
           }else{
               $('.navbar').removeClass('fixd-nav');
           }
      });
  
  
      backToTop.on('click',function(){
          html_body.animate({
              scrollTop:0,
          },1500);
      });
  
      $('.navbar .navbar-nav .nav-item a').on('click', function () {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              if (target.length) {
                  html_body.animate({
                      scrollTop: target.offset().top - 0
                  }, 1500,);
                  return false;
              }
          }
      });  

  });

    //    menu icon toggler

    $(".navbar .navbar-toggler").on("click", function () {
        $(".navbar .navbar-toggler span").toggleClass("fa fa-times");
    });




    //Add Active Class//
    $('.navbar .navbar-nav .nav-link').click(function () {
      // $('.navbar a').removeClass('active');
      // $(this).addClass('active');//
      $(this).addClass('active').parent().siblings().find('.nav-link').removeClass('active');
    });


    $(function(){
        $('.service-slider').slick({
            prevArrow: '<i class="slick-prev  prev-arrow "></i>',
             nextArrow: '<i class="slick-next next-arrow "></i>',
             slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        
        });
    });

    var mixer = mixitup('.portfolio-flter');

    $(function(){
        $('.testi-slider').slick({
            prevArrow: '<i class="slick-prev  prev-arrow "></i>',
             nextArrow: '<i class="slick-next next-arrow "></i>',
             slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              
              ]
        });
    });
