$(document).ready(function(){
    //-------
    // Slider
    //-------
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    var swiper_2 = new Swiper('.swiper-container_2', {
      slidesPerView: 4,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //-------
    // Filter
    //-------
    $(document).mouseup(function (event){
        if($(event.target).hasClass('js-filter-list')) {
            if($(event.target).children('.js-filter-menu').hasClass('active')) {
                $(event.target).children('.js-filter-menu').toggle().removeClass('active');
            } else {
                $('.js-filter-menu').removeClass('active').hide();
                $(event.target).children('.js-filter-menu').toggle().addClass('active');
            }
        } else {
            $('.js-filter-menu').removeClass('active').hide();
        }
    });
    //--------
    // Gallery
    //--------
    $('.js-gallery').on('click', function(){
        $('.js-gallery').removeClass('active');
        $(this).addClass('active');
        var link = $(this).children('img').attr('src');
        $(this).parents('.gallery').find('.js-gallery-img').attr('src', link);
    });
    //--------------------
    // Выбор кол-во цветов
    //--------------------
    $('.js-chose').on('click', function(){
        $('.js-chose').removeClass('active');
        $(this).addClass('active');
    });
    //------- 
    // Select
    //-------
    $('select').ikSelect();
    $('.js-select').ikSelect('disable');
    $('.checkbox').on('click', function(){
        if($(this).prop('checked')){
            $(this).parents('.js-form-select').find('.js-select').ikSelect('enable');
        }else{
            $(this).parents('.js-form-select').find('.js-select').ikSelect('disable');
        }
    });
    //-------
    // Popups
    //-------
    $('.js-photo').on('click', function(){
        var link = $(this).find('.js-photo-link').attr('src');
        var popup = $('<div style="display: none;">\
        <div class="box-modal" id="popup_img">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="images">\
        <img class="images__prev" src="'+link+'" alt="">\
        </div>\
        </div>\
        </div>');
        $('body').append(popup);
        $('#popup_img').arcticmodal({
            afterClose: function(data, el) {
                $(document).find('#popup_img').remove();
            }
        });
    });
    //---------
    // Ползунок
    //---------
    var minCount = 6;
    var maxCount = 18;
    $('#slider-range').html('<span class="interval"></span>');
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 24,
        values: [ 9, 15 ],
        slide: function( event, ui ) {
            $("#amount").html( "с " + ui.values[0]+ ":00" + " до " + ui.values[1] + ":00");
            console.log(ui.value);
            if(ui.handleIndex){
                ui.value >= maxCount ? $( "#slider-range" ).slider( "values", 1, maxCount):null;
            }else{
                ui.value <= minCount ? $( "#slider-range" ).slider( "values", 0, minCount):null;
            }
        }
      });
      $("#amount").html( "с " + $("#slider-range").slider("values", 0) + ":00" + " до " + $("#slider-range").slider( "values", 1 )+":00");
      
    //--------
    //Calendar
    //--------
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "/images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
});