$(document).ready(function () {
    //-------
    // Slider
    //-------
    var swiper = new Swiper('.swiper-container_1', {
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
    var swiper_3 = new Swiper('.swiper-container_3', {
        slidesPerView: 3,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
            nextEl: '.info-block__slider-next',
            prevEl: '.info-block__slider-prev',
        },
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        breakpoints: {
            1169: {
                slidesPerView: 3,
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
    $('.js-choice-select').on('click', function () {
        var text = $(this).html();
        $(this).parents('.js-main-list').find('.js-filter-list').addClass('filter-select');
        $(this).parents('.js-main-list').find('.js-choice').html(text);
    });
    //--------
    // Gallery
    //--------
    $('.js-gallery').on('click', function () {
        $('.js-gallery').removeClass('active');
        $(this).addClass('active');
        var link = $(this).children('img').attr('src');
        $(this).parents('.gallery').find('.js-gallery-img').attr('src', link);
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
    $('select').ikSelect();
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
});
