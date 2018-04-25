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
    var swiper_4 = new Swiper('.swiper-container_4-1', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.slider5-next',
            prevEl: '.slider5-prev',
        },
        breakpoints: {
            999: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            730: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            480: {
                slidesPerView: 1,
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
    $('.js-eye').on('click', function () {
        $(this).toggleClass('active');
        var type = $('.js-password').attr('type') == "text" ? "password" : 'text';
        $('.js-password').prop('type', type);
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
    //-------------------------
    //Переключатель изображений
    //-------------------------
    $('.js-next-slide').on('click', function () {
        if ($('.gallery__mini__img.active').next('.gallery__mini__img').length > 0) {
            $('.gallery__mini__img.active').removeClass('active').next('.gallery__mini__img').addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        } else {
            $('.gallery__mini__img').removeClass('active').eq(0).addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }
    });
    $('.js-prev-slide').on('click', function () {
        if ($('.gallery__mini__img.active').prev('.gallery__mini__img').length > 0) {
            $('.gallery__mini__img.active').removeClass('active').prev('.gallery__mini__img').addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        } else {
            $('.gallery__mini__img').removeClass('active').eq($('.gallery__mini__img').length - 1).addClass('active');
            var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
            $('body').find('.js-photo-link').attr('src', link);
        }
    });
    //----------------------
    //Развертывание разделов
    //----------------------
    $('.js-section').on('click', function () {
        $(this).toggleClass('active');
        $(this).find('.js-section-hidden').slideToggle();
    });
    $('.js-show-all').on('click', function () {
        $(this).toggleClass('active');
        $(this).parents('.js-map-list').find('.hidden').toggle();
        if ($(this).hasClass('active')) {
            $(this).text('Скрыть');
        } else {
            $(this).text('Показать еще');
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
        if ($(this).hasClass('js-slider')) {
            var popup = $('<div style="display: none;">\
            <div class="box-modal" id="popup_img">\
            <div class="box-modal_close arcticmodal-close"></div>\
            <div class="images">\
            <div class="swiper-button-prev product-slider__prev mobile-swiper-button js-prev-slide"></div>\
            <img class="images__prev" src="' + link + '" alt="">\
            <div class="swiper-button-next product-slider__next mobile-swiper-button js-next-slide"></div>\
            </div>\
            </div>\
            </div>');
            $('body').append(popup);
            $('#popup_img').arcticmodal({
                afterClose: function (data, el) {
                    $(document).find('#popup_img').remove();
                }
            });
        } else {
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
        }
        $('.js-next-slide').on('click', function () {
            if ($('.gallery__mini__img.active').next('.gallery__mini__img').length > 0) {
                $('.gallery__mini__img.active').removeClass('active').next('.gallery__mini__img').addClass('active');
                var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
                $('body').find('.images__prev').attr('src', link);
            } else {
                $('.gallery__mini__img').removeClass('active').eq(0).addClass('active');
                var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
                $('body').find('.images__prev').attr('src', link);
            }
        });
        $('.js-prev-slide').on('click', function () {
            if ($('.gallery__mini__img.active').prev('.gallery__mini__img').length > 0) {
                $('.gallery__mini__img.active').removeClass('active').prev('.gallery__mini__img').addClass('active');
                $('.gallery__mini__img.active').removeClass('active').prev('.gallery__mini__img').addClass('active');
                var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
                $('body').find('.images__prev').attr('src', link);
            } else {
                $('.gallery__mini__img').removeClass('active').eq($('.gallery__mini__img').length - 1).addClass('active');
                var link = $('.gallery__mini__img.active').children('.gallery__mini__img-prev').attr('src');
                $('body').find('.images__prev').attr('src', link);
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
            <div class="select-town__header">Город доставки <span class="select-town__header-name">Владимир</span></div>\
            <div class="select-town__info">Если доставка нужна в другой город, укажите его в поле ниже.</div>\
            <form class="select-town__form" action="">\
                <input class="select-town__form-poly" type="text" plaseholder="Ваш город">\
            </form>\
            <div class="select-town__list">\
                <span class="select-town__list-text">Популярные города:</span>\
                <div class="select-town__list-group">\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Москва</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Санкт-Петербург</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Новосибирск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Екатеринбург</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Нижний Новгород</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Казань</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Челябинск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Омск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Самара</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Ростов-на-Дону</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Уфа</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Красноярск</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Пермь</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Воронеж</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Волгоград</a></li>\
                    </ul>\
                    <ul class="select-town__list__elements">\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Краснодар</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Саратов</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Тюмень</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Тольятти</a></li>\
                        <li class="select-town__list__elements__link"><a class="select-town__list__elements__link-name" href="">Ижевск</a></li>\
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
    $('.js-sale-form').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-callback">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="sale-form-show">\
            <input class="sale-form-show__poly" type="text" placeholder="Введите промокод">\
            <button class="sale-form-show__button">Получить скидку</button>\
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
    $('.js-popup-form-text').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-callback">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="big-form-popup">\
            <span class="big-form-popup__header">Добавить открытку бесплатно!</span>\
            <div class="big-form-popup__group">\
            <textarea class="big-form-popup__textarea" name="message" name="" id="" placeholder="Текст поздравления"></textarea>\
            <label for="message"></label>\
            </div>\
            <button class="big-form-popup__button">Отправить</button>\
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
    $('.js-popup-text').on('click', function () {
        var popup = $('<div style="display: none;">\
        <div class="box-modal popup-call-back" id="popup-callback">\
        <div class="box-modal_close arcticmodal-close"></div>\
        <div class="text-block">\
        <span class="text-block__header">Lorem ipsum dolor sit amet.</span>\
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum dolor pariatur asperiores, totam, ab fugiat alias perspiciatis porro tenetur iste sed hic aliquid, obcaecati quod assumenda? Neque magni quo necessitatibus, aliquam voluptatibus quam, excepturi recusandae in, voluptatem quis nemo quidem ut sint, fugit ducimus. Voluptates tenetur recusandae molestias facilis dolorum ut aperiam suscipit eum nam quaerat id, sint quia obcaecati perferendis dolore omnis aliquid ratione soluta excepturi dolorem illo consequatur, dolores necessitatibus. Incidunt nemo, perspiciatis ipsam dolorum praesentium explicabo voluptates, pariatur, enim fuga, dicta eaque placeat quam optio odio! Magni animi reprehenderit placeat sit voluptates laudantium, quasi neque a debitis?</p>\
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

    //---------
    //Календарь
    //---------
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
        'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
        dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
        dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
        dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $("#datepicker").datepicker({
        //showOn: "button",
        //buttonImage: "./images/calendar.png",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    //--------------------
    //Открыть поиск на 769
    //--------------------
    $('.js-toggle-search').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('body').css('overflow', 'hidden');
            $('body').find('.js-open-search').css('display', 'block');
            $('body').append('<div class="bg-fone"></div>');
            $('.header').addClass('hover');
            $('.bg-fone').addClass('hover');
        } else {
            $('body').css('overflow', 'auto');
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
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('.js-top').fadeIn();
        } else {
            $('.js-top').fadeOut();
        }
    });
    $('.js-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
    slider();
    show_all_on_resize();
    show_comment();
    tool_tip();
    tab();
});
$(window).on('resize', show_all_on_resize);
$(window).on('resize', show_comment);

//---------------------------
// Слайдер в карточке товара
//---------------------------
function slider(){
    var that = $('.gallery-slider.active');
    if(that.hasClass('active')){
        var slideCount = that.find('.gallery__mini__img').length;
        var position = that.find('.gallery__mini-wrapper').position().top;
        var heightImage = 100;
        var heightContainer = "-"+(slideCount * heightImage - 300);
        if(slideCount <= 3){
            $('.js-gallery-button').hide();
        }else{
            $('.js-gallery-button').show();
            $('.gallery__mini_button_top div').addClass('disabled');
            $('.gallery__mini_button_bottom').addClass('active');
        }
        $(document).on('click', '.gallery__mini_button_bottom.active', function(){
            $('.gallery__mini_button_top div').removeClass('disabled');
            $('.gallery__mini_button_top').addClass('active');
            position = position - heightImage;
            $('.gallery__mini-wrapper').animate({
               "top" : position
            });
            slider_proverka(position, heightContainer);
        });
        $(document).on('click', '.gallery__mini_button_top.active', function(){
            position = position + heightImage;
            $('.gallery__mini-wrapper').animate({
               "top" : position
            });
            slider_proverka(position, heightContainer);
        });
    }
}
function slider_proverka(position, heightContainer){
    if(position >= 0){
        $('.gallery__mini_button_top div').addClass('disabled');
        $('.gallery__mini_button_top').removeClass('active');
        $('.gallery__mini_button_bottom div').removeClass('disabled');
        $('.gallery__mini_button_bottom').addClass('active');
    }
    if(position <= heightContainer){
        $('.gallery__mini_button_bottom div').addClass('disabled');
        $('.gallery__mini_button_bottom').removeClass('active');
        $('.gallery__mini_button_top div').removeClass('disabled');
        $('.gallery__mini_button_top').addClass('active');
    }
}
//-------
//Tooltip
//-------
function tool_tip() {
    $('[data-tooltip]').mousemove(function (eventObject) {
        $data_tooltip = $(this).attr('data-tooltip');
        $('.tooltip').html($data_tooltip)
            .css({
                "top": eventObject.pageY + 10,
                "left": eventObject.pageX + 15
            })
            .show();
    }).mouseout(function () {
        $('.tooltip').hide().html('')
            .css({
                'top': 0,
                'left': 0
            });
    });
}
//------------
//Размер блока
//------------
function show_comment(){
    $('.block-comment__text').each(function(){
        var height = '71';
        if ($(this).innerHeight() > height) {
            if (!$(this).parents('.js-hide-text').find('.js-rev').hasClass('active')) {
                $(this).parents('.js-hide-text').innerHeight(height).css({
                    'overflow': 'hidden'
                });
            }
            if ($(this).parents('.js-hide-text').find('.bottom-element-block').length == 0) {
                $(this).parents('.js-hide-text').append('<div class="bottom-element-block"><div class="bottom-element-block__group"><span class="bottom-element-block__group-link js-rev">Показать всё</span></div></div>');
                $(this).parents('.js-hide-text').on('click', '.js-rev', function () {
                    $(this).toggleClass('active');
                    if ($(this).hasClass('active')) {
                        $(this).html('Скрыть всё').parents('.js-hide-text').css({
                            'padding-bottom': '25px',
                            'height': 'auto'
                        });
                        $(this).parents('.bottom-element-block').css({
                            'background': 'none',
                        });
                    } else {
                        $(this).html('Показать всё').parents('.js-hide-text').css({
                            'padding-bottom': '30px'
                        }).innerHeight(height);
                        $(this).parents('.bottom-element-block').css({
                            'background': 'url(./images/bg-rev.png) repeat-x', //при интеграции поменять тут ссылку
                        });
                    }
                });
            }
        }
        if ($(this).innerHeight() <= height) {
            $(this).parents('.js-hide-text').find('.bottom-element-block').remove();
        } else {
            if ($(this).parents('.js-hide-text').find('.bottom-element-block').length == 0) {
                $(this).parents('.js-hide-text').append('<div class="bottom-element-block"><div class="bottom-element-block__group"><span class="bottom-element-block__group-link js-rev">Показать всё</span></div></div>');
            }
        }
    });
}
function show_all_on_resize() {
    $('.element-block_2').each(function(){
        var height = '300';
        if($(this).children('.element-block_2__group_el').innerHeight() >= height){
            $(this).find('.element-block_2__button').addClass('active');
        }else{
            $(this).find('.element-block_2__button').removeClass('active');
        }
    });
    $('.js-open-reviews').on('click', function(){
       $(this).toggleClass('active');
        if($(this).hasClass('active')){
            $(this).text('Скрыть всё');
            $(this).parents('.element-block_2').addClass('active');
            $(this).parents('.element-block_2__button__wrapper').addClass('active');
        }else{
            $(this).text('Показать еще');
            $(this).parents('.element-block_2').removeClass('active');
            $(this).parents('.element-block_2__button__wrapper').removeClass('active');
        }
    });
    /*$('.element-block_2__group_el').each(function () {
        var height = '300';
        if ($(this).parents('.element-block_2').innerHeight() > height) {
            if (!$(this).parents('.element-block_2').find('.js-rev').hasClass('active')) {
                $(this).parents('.element-block_2').innerHeight(height).css({
                    'overflow': 'hidden'
                });
            }
            if ($(this).parents('.element-block_2').find('.bottom-element-block').length == 0) {
                $(this).parents('.element-block_2').append('<div class="bottom-element-block"><div class="bottom-element-block__group"><span class="bottom-element-block__group-link js-rev">Показать всё</span></div></div>');
                $(this).parents('.element-block_2').on('click', '.js-rev', function () {
                    $(this).toggleClass('active');
                    if ($(this).hasClass('active')) {
                        $(this).html('Скрыть всё').parents('.element-block_2').css({
                            'padding-bottom': '50px',
                            'height': 'auto'
                        });
                        $(this).parents('.bottom-element-block').css({
                            'background': 'none',
                        });
                    } else {
                        $(this).html('Показать всё').parents('.element-block_2').css({
                            'padding-bottom': '30px'
                        }).innerHeight(height);
                        $(this).parents('.bottom-element-block').css({
                            'background': 'url(./images/bg-rev.png) repeat-x', //при интеграции поменять тут ссылку
                        });
                    }
                });
            }
        }
        if ($(this).innerHeight() < height) {
            $(this).parents('.element-block_2').find('.bottom-element-block').remove();
        } else {
            if ($(this).parents('.element-block_2').find('.bottom-element-block').length == 0) {
                $(this).parents('.element-block_2').append('<div class="bottom-element-block"><div class="bottom-element-block__group"><span class="bottom-element-block__group-link js-rev">Показать всё</span></div></div>');
            }
        }
    });*/
}
function tab() {
    $('.tab ul li').on('click', function () {
        $(this).siblings().removeClass('active_tab');
        $(this).addClass('active_tab');
        $('.' + $(this).data('target')).addClass('active').siblings().removeClass('active');
    });
}