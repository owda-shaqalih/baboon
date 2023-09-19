$(window).on('load',function(){
        $("#preloader").fadeOut();
        wow = new WOW(
        {
            animateClass: 'animated',
            offset:       50
        }
        );
        wow.init();
});
$(document).ready(function(){
    var rtl = false;
    if($("html").attr("lang") == 'ar'){
         rtl = true;
    }
    $(document).on('hidden.bs.modal', function (event) {
      if ($('.modal:visible').length) {
        $('body').addClass('modal-open');
      }
    });
    
    $(".dropdown_sort a").click(function(){

        $(".btn_filter:first-child").text($(this).text());
        $(".btn_filter:first-child").val($(this).text());
      
        $('.dropdown_sort').removeClass('show');
        $('.filter_sort').removeClass('show');
        return false;
   });

    $('.btn_remove').click(function(){
        $(this).closest('tr').remove();
    })
    
    $('.btn_remove').click(function(){
        $(this).closest('div.item_order_ddr').remove();
    })

    /*open menu*/
    $(".menu-trigger").click(function(){
        $("body,html").addClass('menu-toggle');
        $(".menu-trigger").addClass('active');
    });
    $(".m-overlay").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });
    $(".close_menu_btn").click(function(){
        $("body,html").removeClass('menu-toggle');
        $(".menu-trigger").removeClass('active');
    });

    $('.dropdown-submenu a.dropdown-toggle').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $('.menu_xs .dropdown a.dropdown-toggle').on("click", function(e){
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });

    $(".show_pass").click(function() {
        var eye_icon = $(this).find('i');
        eye_icon.removeClass("fa-eye");
        eye_icon.addClass("fa-eye-slash");

        var input = $(this).closest('div.password_input').find('.pwd');
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
            eye_icon.removeClass("fa-eye-slash");
            eye_icon.addClass("fa-eye");
        }
    });
    
    $('.search_hbtn').click(function(){
        var search = $('.sc_block_search')
        var thisclick = $('.search_hbtn')
        var thisparent = $(this).parent()
        if(thisclick.hasClass('active') != true){
            thisclick.addClass('active');
            search.slideToggle();
            thisparent.addClass('search_open')
            }
            else{
                 thisclick.removeClass('active');
                 search.slideToggle();
                 thisparent.removeClass('search_open')
                }
        
        });


    $(".js-select").each(function(i,v){
        var that = $(this);
        var placeholder = $(that).attr("data-placeholder");
        $(that).select2({
            placeholder:placeholder,
            minimumResultsForSearch: Infinity,
        });
    });
    
    var owl = $('#home_slide');

        owl.on('initialized.owl.carousel change.owl.carousel',function(elem){
            var current = elem.item.index;
            $(elem.target).find(".owl-item").eq(current).find(".to-animate").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate2").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate3").removeClass('fadeInUp animated');
            $(elem.target).find(".owl-item").eq(current).find(".to-animate4").removeClass('fadeInRight animated');
        });
       
        owl.on('initialized.owl.carousel changed.owl.carousel',function(elem){
            window.setTimeout(function(){
                var current = elem.item.index;
                $(elem.target).find(".owl-item").eq(current).find(".to-animate").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate2").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate3").addClass('fadeInUp animated');
                $(elem.target).find(".owl-item").eq(current).find(".to-animate4").addClass('fadeInRight animated');
            }, 400);
        });
        owl.owlCarousel({
                items: 1,
                loop: true,
                margin: 0,
                responsiveClass: true,
                nav: false,
                dots: true,
                rtl:rtl,
                smartSpeed: 500,
                autoplay: true,
                autoplayTimeout: 5000,
                autoplayHoverPause: false,
                autoHeight: true,
                animateOut: 'fadeOut',
                animateIn: 'fadeIn',
        });
        
	$(".products_slide").owlCarousel({
        loop:true,
        margin:30,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            375:{
                items:2,
            },
            575:{
                items:2,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-arrow-right"></i>',
            '<i class="far fa-arrow-left"></i>'],
    })
    

    $(".category_slide").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            575:{
                items:3,
            },
            768:{
                items:5,
            },
            992:{
                items:6,
            },
            1200:{
                items:7,
            }

        },
        dots:true,
        nav:true,
        autoplay:false,
        navText:['<i class="far fa-arrow-right"></i>',
            '<i class="far fa-arrow-left"></i>'],
    })


    $(".category_slide2").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            575:{
                items:3,
            },
            768:{
                items:3,
            },
            992:{
                items:4,
            },
            1200:{
                items:5,
            }

        },
        dots:false,
        nav:false,
        autoplay:false,
        navText:['<i class="far fa-arrow-right"></i>',
            '<i class="far fa-arrow-left"></i>'],
    })

    $("#offer_slide").owlCarousel({
        loop:true,
        margin:0,
        rtl:rtl,
        items:1,
        responsiveClass:true,
        dots:true,
        nav:false,
        autoHeight: true,
        autoplay:false,
    })
    

	$(".add_cart").click(function(){
        let item = $(this).closest('.product_item_box');
        let quantity = item.find(".jsQuantity").val();
        item.addClass("added");
        $(this).fadeOut();
        item.find(".quantity").fadeIn();

        if(quantity <= 1){
            item.find('.dec').removeClass("disabled").addClass('removeQuantity');
        }else{
            item.find('.dec').removeClass('removeQuantity');
        }
        
        return false;
    })

    $("body").on('click','.removeQuantity',function(){
        let item = $(this).closest('.product_item_box');
        item.removeClass("added");

        item.find(".quantity").hide();
        item.find(".add_cart").show();
        
        return false

    })

    if ($('.countdown').length) {
        $('.countdown').countdown({
            render: function(data) {
                if (data.years >= 1) {
                    var $days = (data.years*365)+data.days;
                } else {
                    var $days = data.days;
                }
                $(this.el).html(
                    '<div class="day"><p>' + this.leadingZeros($days) + ' </p></div>'+
                    '<div class="hour"><p>' + this.leadingZeros(data.hours, 2) + ' </p></div>'+
                    '<div class="min"><p>' + this.leadingZeros(data.min, 2) + ' </p></div>'+
                    '<div class="sec"><p>' + this.leadingZeros(data.sec, 2) + ' </p></div>'
                );
            }
        });
    }
    /*Decrease & Increase*/    
    var minimum_quanitiy=$(".jsQuantityDecrease").attr("minimum"),
    productQuantity=minimum_quanitiy;
    $(document).on("click",".jsQuantityDecrease",function(){
        var quantity = $(this).parent().find('input[name="count-quat1"]').val();
        quantity = quantity * 1;
        var newQuantity = quantity - 1;
        $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
        if (newQuantity <2) {
            $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
            $(this).closest('.product_item_box').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

        } else{
             $(this).parent().find(".jsQuantityDecrease").removeClass("disabled").removeClass("removeQuantity");
             $(this).closest('.product_item_box').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

        }
    }),

    $(document).on("click",".jsQuantityIncrease",function(){
        var quantity = $(this).parent().find('input[name="count-quat1"]').val();
        quantity = quantity * 1;
        var newQuantity = quantity + 1;
        $(this).parent().find('input[name="count-quat1"]').val(newQuantity);
        if (newQuantity >=2) {
            $(this).parent().find(".jsQuantityDecrease").removeClass("disabled");
            $(this).closest('.product_item_box').find(".dec").removeClass("disabled").addClass("jsQuantityDecrease").removeClass('removeQuantity');

        } else{
             $(this).parent().find(".jsQuantityDecrease").addClass("disabled");
             $(this).closest('.product_item_box').find(".dec").removeClass("disabled").removeClass("jsQuantityDecrease").addClass('removeQuantity');

        }
        
    })
})

// ============================================================================
// Price range filters init
// ============================================================================

$(function() {
   if(!$.fn.slider) return;

   $( ".price-range-selector" ).each(function(){
      var $price_label = $(this).siblings('.wgpf-label').find('.price-range-label');
      var cur_sign = $price_label.data('currency-sign');
      var cursign_before = $price_label.data('cursign-before');
      $(this).slider({
         range: true,
         min: $(this).data('min'),
         max: $(this).data('max'),
         values: [ 0, $(this).data('max') ],
         slide: function( event, ui ) {
            set_range_label(ui.values[ 0 ], ui.values[ 1 ]);
         }
      });

      function set_range_label(value1, value2){
         if(cursign_before)
            $price_label.html( cur_sign + value1 + " <span>" + cur_sign + value2 + "</span> " );
         else
            $price_label.html( value1 + cur_sign + " <span>" + value2 + cur_sign + "</span> " );
      }

      set_range_label($(this).data('min'), $(this).data('max'));
   });   
});