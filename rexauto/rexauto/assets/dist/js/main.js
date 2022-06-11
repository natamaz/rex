// Plagins
$(document).ready(function(){

    /* ------------------------------------------------
                phone
    ------------------------------------------------ */

    if($('.phone').length){
        $(".phone").mask("+7 (999) 999-99-99");
    }

    /* ------------------------------------------------
            End of phone
    ------------------------------------------------ */

    /* ------------------------------------------------
                validateform
    ------------------------------------------------ */

    
        //if($('.validateform1').length){
        //
        //    $(".validateform1").validate({
        //           rules:{
        //
        //                form_name:{
        //                    required: true,
        //                },
        //                form_phone:{
        //                    required: true,
        //                },
        //                form_prise:{
        //                    required: true,
        //                },
        //                form_1:{
        //                    required: true,
        //                },
        //                form_2:{
        //                    required: true,
        //                },
        //                form_3:{
        //                    required: true,
        //                },
        //                form_4:{
        //                    required: true,
        //                },
        //           },
        //
        //           messages:{
        //
        //                form_name:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_phone:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_prise:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_1:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_2:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_3:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_4:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //           },
        //
        //    });
        //}
        //if($('.validateform2').length){
        //
        //    $(".validateform2").validate({
        //           rules:{
        //
        //                form_name:{
        //                    required: true,
        //                },
        //                form_phone:{
        //                    required: true,
        //                },
        //                form_prise:{
        //                    required: true,
        //                },
        //                form_1:{
        //                    required: true,
        //                },
        //                form_2:{
        //                    required: true,
        //                },
        //                form_3:{
        //                    required: true,
        //                },
        //                form_4:{
        //                    required: true,
        //                },
        //           },
        //
        //           messages:{
        //
        //                form_name:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_phone:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_prise:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_1:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_2:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_3:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //                form_4:{
        //                    required: "Это поле обязательно для заполнения",
        //                },
        //           },
        //
        //    });
        //}
        
    /* ------------------------------------------------
            End of validateform
    ------------------------------------------------ */

    /* ------------------------------------------------
            Arcticmodal
    ------------------------------------------------ */


        $(".modal_btn").on("click",function(event){

            event.preventDefault();

            var id = $(this).attr("data-modal"),
                src = $(this).attr("data-src");

            $('#'+id).arcticmodal({
                
                beforeOpen : function(){

                    $('#'+id).find("iframe").attr("src", src+"?wmode=transparent");

                }

            });

        });

    //valid
    $('#valid .modal_close, .close').on("click", function () {
        $('#valid').css('display', 'none');
    });
    $('body').on("click", function () {
        $('.error').css('display', 'none');
    });
    /* ------------------------------------------------
            End of Arcticmodal
    ------------------------------------------------ */

    /* ------------------------------------------------
            Swiper
    ------------------------------------------------ */

        if($('.slider_1').length){

          var mySwiper  = new Swiper('.slider_1', {
              pagination: {
                el: '.swiper-pagination',
              },
              slidesPerView: 3,
              autoHeight: true,
              loop: true,
              // centeredSlides: true,
              // spaceBetween: 32,
              navigation: {
                nextEl: '.swiper-next',
                prevEl: '.swiper-prev',
              },

              breakpoints: {
                1024: {
                  slidesPerView: 3,
                },
                991: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  // autoHeight: true,
                },
              }
          });
        }

    /* ------------------------------------------------
            End of Swiper
    ------------------------------------------------ */

});

$(window).load(function(){

    

});

//  Core 
    ;(function($){

        "use strict";

        var Core = {

            DOMReady: function(){

                var self = this;
                
                self.scrollto();
                self.navResp();
                self.backToTopBtn();
                self.simpleTooltip();
                self.fileInput();
                
            },

            windowLoad: function(){

                var self = this;

                self.preloader();
                // self.animatedContent();
                
            },

            /**
            **  Back to top
            **/

            backToTopBtn: function(config){

                config = $.extend({
                    top: 50,
                    offset: 350,
                    transitionIn: 'bounceInLeft',
                    transitionOut: 'bounceOutLeft'
                }, config);

                var btn = $('.back_to_top'),
                $wd = $(window),
                $html = $('html'),
                $body = $('body');
                

                $wd.on('scroll.back_to_top', function(){

                    if($wd.scrollTop() > config.offset){

                        btn.removeClass('hide '+config.transitionOut).addClass(config.transitionIn);

                    }
                    else{

                        btn.removeClass(config.transitionIn).addClass(config.transitionOut);

                    }

                });

                btn.on('click', function(){

                    $html.add($body).animate({

                        scrollTop: 0

                    });

                });

            },

            /**
            **  File input
            **/

            fileInput: function(){

                $('.files_btn').on('click', function(){

                    var $this = $(this),
                        input = $this.parent().find('input[type="file"]');

                    input.trigger('click');
                
                });

                $('input[type="file"]').on('change',function(){

                    var $this = $(this),
                        nameFileBox = $this.parent().find('.name_file'),
                        nameFile = $this.val();

                    if(nameFile != ''){

                        nameFileBox.text(nameFile).css('display', 'inline-block');
                        $this.parent().addClass('selected');
                    }
                    else{

                        nameFileBox.text(nameFile).css('display', 'none');
                        $this.parent().removeClass('selected');
                            
                    }
        
                });

                $('.clear_file').on('click', function(){

                    var $this = $(this),
                        nameFileBox = $this.parent().find('.name_file');

                    $this.parent().removeClass('selected').find('input').val('');
                    nameFileBox.text('').css('display', 'none');

                });
            
            },

            simpleTooltip :function(){

                function simple_tooltip(target_items, name){
                    $(target_items).each(function(i){
                    $("body").append("<div class='"+name+"' id='"+name+i+"'>"+$(this).attr('title')+"</div>");
                    var my_tooltip = $("#"+name+i);

                    $(this).removeAttr("title").mouseover(function(){
                    my_tooltip.css({opacity:0.9, display:"none"}).fadeIn(0);
                    }).mousemove(function(kmouse){
                    my_tooltip.css({left:kmouse.pageX+0, top:kmouse.pageY+30});
                    }).mouseout(function(){
                    my_tooltip.fadeOut(0);
                    });
                    });
                    }
                    $(document).ready(function(){
                    simple_tooltip(".tooltip_on","tooltip");
                    });

            },

            /**
            **  Animated Content
            **/

            animatedContent : function(){

                $("[data-animation]").each(function() {

                    var $this = $(this);

                    if($(window).width() > 767) {

                        $this.appear(function() {

                            var delay = ($this.attr("data-animation-delay") ? $this.attr("data-animation-delay") : 1);

                            if(delay > 1) $this.css("animation-delay", delay + "ms");
                            $this.removeClass('transparent').addClass("visible " + $this.attr("data-animation"));   

                        }, {accX: 0, accY: -100});

                    }
                    else {

                        $this.removeClass("transparent").addClass("visible");

                    }

                });

            },


            /**
            **  Scroll To
            **/

            scrollto: function(){

              var self = this;

              $("a.scrollto").click(function() {
                  var elementClick = $(this).attr("href")
                  var destination = $(elementClick).offset().top;
                  jQuery("html:not(:animated),body:not(:animated)").animate({
                    scrollTop: destination
                  }, 800);
                  return false;
                });
            },

            /**
            **  Responsive menu
            **/

            navResp : function(){

                var self = this;

                self.w = $(window);


                $(".btn_nav").on('click', function () {

                    $(this).toggleClass("active").next(".header_resp_nav").slideToggle("medium");
              
                });

               if(self.w.width() < 768){

                    $(document).on('click', function(event){

                       if(!$(event.target).closest('.header_middle').length){

                        $('.btn_nav').removeClass('active').next(".header_resp_nav").slideUp("medium");
                       
                       }

                    });

                    $(".navbar_nav a").on('click', function () {

                        $('.btn_nav').removeClass('active').next(".header_resp_nav").slideUp("medium");
                  
                    });

                }

            },



            /**
            **  Preloader
            **/

            preloader: function(){

                var self = this;

                self.preloader = $('#page-preloader');
                self.spinner   = self.preloader.find('.preloader');

                self.spinner.fadeOut();
                self.preloader.delay(350).fadeOut('slow');
            },

        }


        $(document).ready(function(){

            Core.DOMReady();

        });

        $(window).load(function(){

            Core.windowLoad();

        });

    })(jQuery);

$('.box_5_item_list li').on('click', function(){
    $('.box_5_item_list li').removeClass('open_point');
    $(this).addClass('open_point');
});