$(document).ready(function () {
    //-------
    // Slider
    //-------
    var swiper_1 = new Swiper('.swiper-container_1', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.slider1-next',
            prevEl: '.slider1-prev',
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
    var swiper_3 = new Swiper('.swiper-container_3', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider3-next',
            prevEl: '.slider3-prev',
        },
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        breakpoints: {
            999: {
                slidesPerView: 2,
                noSwiping: false,
            },
            480: {
                slidesPerView: 1,
                noSwiping: false,
            }
        }
    });
    var swiper_4 = new Swiper('.swiper-container_4', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider4-next',
            prevEl: '.slider4-prev',
        },
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        breakpoints: {
            999: {
                slidesPerView: 3,
                spaceBetween: 10,
                noSwiping: false,
            },
            730: {
                slidesPerView: 2,
                spaceBetween: 10,
                noSwiping: false,
            },
            480: {
                slidesPerView: 1,
                noSwiping: false,
            }
        }
    });
    var swiper_5 = new Swiper('.swiper-container_5', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.info-block__slider-next',
            prevEl: '.info-block__slider-prev',
        },
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        breakpoints: {
            480: {
                slidesPerView: 1,
                noSwiping: false,
            }
        }
    });
    //-------
    // Filter
    //-------
    $(document).mouseup(function (event) {
        if ($(event.target).hasClass('js-filter-list')) {
            $('.js-main-list').removeClass('active');
            $(event.target).parent('.js-main-list').addClass('active');
            if ($(event.target).next().next('.js-filter-menu').hasClass('active')) {
                $('.js-main-list').removeClass('active');
                $(event.target).next().next('.js-filter-menu').toggle().removeClass('active');
            } else {
                $('.js-filter-menu').removeClass('active').hide();
                $(event.target).next().next('.js-filter-menu').toggle().addClass('active');
            }
        } else {
            $('.js-filter-menu').removeClass('active').hide();
            $('.js-main-list').removeClass('active');
        }
    });
    $('.js-choice-select').on('click', function() {
        var text = $(this).html();
        $(this).parents('.js-main-list').find('.js-filter-list').addClass('filter-select');
        $(this).parents('.js-main-list').find('.js-choice').html(text);
    });
    //--------
    // Gallery
    //--------
    $('.js-gallery').on('click', function() {
        $('.js-gallery').removeClass('active');
        $(this).addClass('active');
        var link = $(this).children('img').attr('src');
        $(this).parents('.gallery').find('.js-gallery-img').attr('src', link);
    });
    //----------
    //Переключатель изображений
    //----------
    $('.js-next-slide').on('click', function(){
        if($('.gallery__mini__img.active').next('.gallery__mini__img').length > 0){
            $('.gallery__mini__img.active').removeClass('active').next('.gallery__mini__img').addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }else{
            $('.gallery__mini__img').removeClass('active').eq(0).addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }
    });
     $('.js-prev-slide').on('click', function(){
        if($('.gallery__mini__img.active').prev('.gallery__mini__img').length > 0){
            $('.gallery__mini__img.active').removeClass('active').prev('.gallery__mini__img').addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }else{
            $('.gallery__mini__img').removeClass('active').eq($('.gallery__mini__img').length - 1).addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }
    });
    //--------------------
    // Выбор кол-во цветов
    //--------------------
    $('.js-chose').on('click', function () {
        $('.js-chose').removeClass('active');
        $(this).addClass('active');
    });
    //------- 
    // Select
    //-------
    $('select').ikSelect({
        //autoWidth: false,
        //ddFullWidth: false,
    });
    $('.js-select').ikSelect('disable');
    $('.checkbox').on('click', function () {
        if ($(this).prop('checked')) {
            $(this).parents('.js-form-select').find('.js-select').ikSelect('enable');
        } else {
            $(this).parents('.js-form-select').find('.js-select').ikSelect('disable');
        }
    });
    //-------
    // Popups
    //-------
    $('.js-photo').on('click', function () {
        var link = $(this).find('.js-photo-link').attr('src');
        var popup = $('<div style="display: none;">\
        <div class="box-modal" id="popup_img">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="images">\
        <img class="images__prev" src="' + link + '" alt="">\
        </div>\
        </div>\
        </div>');
        $('body').append(popup);
        $('#popup_img').arcticmodal({
            afterClose: function (data, el) {
                $(document).find('#popup_img').remove();
            }
        });
    });
    $('.js-call-back').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-callback">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="call-back">\
            <div class="call-back__wrap">\
                <div class="call-back__wrap__left_block"></div>\
                <div class="call-back__wrap__right_block">\
                    <form class="call-back-form" action="">\
                        <span class="call-back-form__name">Закажите звонок бесплатно</span>\
                        <div class="group">\
                            <input class="input-name" name="name" type="text" placeholder="Имя">\
                            <label for="name"></label>\
                        </div>\
                        <div class="group">\
                            <input class="input-phone" name="phone" type="text" placeholder="Телефон">\
                            <label for="phone"></label>\
                        </div>\
                        <button class="call-back-form__button">Отправить</button>\
                    </form>\
                </div>\
            </div>\
        </div>\
        </div>\
        </div>');
        $('body').append(popup);
        $('#popup-callback').arcticmodal({
            afterClose: function (data, el) {
                $(document).find('#popup-callback').remove();
            }
        });
    });
    $('.js-select-town').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-select-town">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="select-town">\
            <div class="select-town__header">Вы находитесь в городе <span class="select-town__header-name">Владимир</span></div>\
            <div class="select-town__info">Если <span class="select-town__info-name">Владимир</span> не Ваш город, то для отображения верной стоимости и сроков доставки укажите Ваш город в поле ниже.</div>\
            <form class="select-town__form" action="">\
                <input class="select-town__form-poly" type="text" plaseholder="Ваш город">\
                <button class="select-town__form-button" >Сохранить</button>\
            </form>\
            <div class="select-town__list">\
                <span class="select-town__list-text">Популярные города:</span>\
                <div class="select-town__list-group">\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Москва</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Санкт-Петербург</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Новосибирск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Екатеринбург</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Нижний Новгород</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Казань</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Челябинск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Омск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Самара</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Ростов-на-Дону</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Уфа</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Красноярск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Пермь</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Воронеж</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Волгоград</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Краснодар</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Саратов</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Тюмень</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Тольятти</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">г. Ижевск</a></li>\
                    </ul>\
                </div>\
            </div>\
        </div>\
        </div>\
        </div>');
        $('body').append(popup);
        $('#popup-select-town').arcticmodal({
            afterClose: function (data, el) {
                $(document).find('#popup-select-town').remove();
            }
        });
    });
    $('.js-buy-one-click').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-callback">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="call-back">\
            <div class="call-back__wrap">\
                <div class="call-back__wrap__left_block"></div>\
                <div class="call-back__wrap__right_block">\
                    <form class="call-back-form" action="">\
                        <span class="call-back-form__name">Купить в один клик</span>\
                        <div class="group">\
                            <input class="input-name" name="name" type="text" placeholder="Имя">\
                            <label for="name"></label>\
                        </div>\
                        <div class="group">\
                            <input class="input-phone" name="phone" type="text" placeholder="Телефон">\
                            <label for="phone"></label>\
                        </div>\
                        <button class="call-back-form__button">Отправить</button>\
                    </form>\
                </div>\
            </div>\
        </div>\
        </div>\
        </div>');
        $('body').append(popup);
        $('#popup-callback').arcticmodal({
            afterClose: function (data, el) {
                $(document).find('#popup-callback').remove();
            }
        });
    });
    //---------
    // Ползунок
    //---------
    var minCount = 6;
    var maxCount = 18;
    $('#slider-range').html('<span class="interval"></span>');
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 24,
        values: [9, 15],
        slide: function (event, ui) {
            $("#amount").html("с " + ui.values[0] + ":00" + " до " + ui.values[1] + ":00");
            console.log(ui.value);
            if (ui.handleIndex) {
                ui.value >= maxCount ? $("#slider-range").slider("values", 1, maxCount) : null;
            } else {
                ui.value <= minCount ? $("#slider-range").slider("values", 0, minCount) : null;
            }
        }
    });
    $("#amount").html("с " + $("#slider-range").slider("values", 0) + ":00" + " до " + $("#slider-range").slider("values", 1) + ":00");

    //--------
    //Calendar
    //--------
    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "/images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    //--------------------
    //Открыть поиск на 769
    //--------------------
    $('.js-toggle-search').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('body').css('overflow','hidden');
            $('body').find('.js-open-search').css('display', 'block');
            $('body').append('<div class="bg-fone"></div>');
            $('.header').addClass('hover');
            $('.bg-fone').addClass('hover');
        } else {
            $('body').css('overflow','auto');
            $('body').find('.js-open-search').css('display', 'none');
            $('.bg-fone').remove();
            $('.header').removeClass('hover');
            $('.bg-fone').removeClass('hover');
        }
    });
    //---------
    //Выпадашки
    //---------
    $(document).mouseup(function (event) {
        if ($(event.target).hasClass('js-btn-popup-block_1')) {
            if ($(event.target).next('.js-popup-block_1').hasClass('active')) {
                $(event.target).next('.js-popup-block_1').toggle().removeClass('active');
            } else {
                $('.js-popup-block_1').removeClass('active').hide();
                $(event.target).next('.js-popup-block_1').toggle().addClass('active');
            }
        } else {
            $('.js-popup-block_1').removeClass('active').hide();
        }
    });
    $(document).mouseup(function (event) {
        if ($(event.target).hasClass('js-btn-popup-block_2')) {
            if ($(event.target).next('.js-popup-block_2').hasClass('active')) {
                $(event.target).next('.js-popup-block_2').toggle().removeClass('active');
            } else {
                $('.js-popup-block_2').removeClass('active').hide();
                $(event.target).next('.js-popup-block_2').toggle().addClass('active');
            }
        } else {
            $('.js-popup-block_2').removeClass('active').hide();
        }
    });
    $(document).mouseup(function (event) {
        if ($(event.target).hasClass('js-btn-popup-block_3')) {
            if ($(event.target).next('.js-popup-block_3').hasClass('active')) {
                $(event.target).next('.js-popup-block_3').toggle().removeClass('active');
            } else {
                $('.js-popup-block_3').removeClass('active').hide();
                $(event.target).next('.js-popup-block_3').toggle().addClass('active');
            }
        } else {
            $('.js-popup-block_3').removeClass('active').hide();
        }
    });
    //-----------
    //Скролл топ
    //-----------
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('.js-top').fadeIn();
        }else{
            $('.js-top').fadeOut();
        }
    });
    $('.js-top').click(function() {
        $('body,html').animate({scrollTop:0},800);
    });
});
