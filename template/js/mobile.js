if(matchMedia){
    var screen2 = window.matchMedia('(max-width:767px)');
    screen2.addListener(changes2);
    changes2(screen2);
    if(!screen2.matches){
         var screen = window.matchMedia('(max-width:999px)');
        screen.addListener(changes);
        changes(screen);
    }
}
document.addEventListener("DOMContentLoaded", function(){
    var screen2 = window.matchMedia('(max-width:767px)');
    changes2(screen2);
    if(!screen2.matches){
        var screen = window.matchMedia('(max-width:999px)');
        changes(screen);
    }
});
//----------------------------------------------------480px;
function changes2(screen2){
    if(screen2.matches){
        $('.js-toggle-menu').on('click', function(){
            $(this).toggleClass('active');
            $('body').find('.js-open-menu').toggle();
        });
        $('.js-main-menu--').prependTo($('.js-header--'));
        $('.js-top-menu--').appendTo($('.js-header--'));
        $('.js-logo--').appendTo($('.js-main-menu--'));
        $('.js-main-menu-wrap--').insertAfter($('.js-header-- .js-main-menu--'));
        $('.js-top-links--').insertAfter($('.js-main-menu-wrap-- .main-menu__wrap'));
        $('.js-number-basket--').insertAfter($('.js-header-- .js-main-menu-wrap--'));
        $('.js-hr--').insertAfter($('.js-header-- .js-number-basket--'));
        $('.js-header-wrap').insertAfter($('.js-header-- .js-hr--'));
        $('.js-open-search').insertAfter($('.js-header-- .js-header-wrap'));
        $('.js-footer-address--').insertAfter($('.js-footer-el-- .footer-logo'));
        $('.js-footer-el_2--').insertAfter($('.js-footer-el-- .js-footer-address--'));
        $('.js-footer-img--').insertAfter($('.js-footer-el-- .js-footer-el_2--'));
        $('.js-footer-info--').insertAfter($('.js-footer-el-- .js-footer-img--'));
        $('.js-socials--').insertAfter($('.js-footer-el-- .js-footer-img--'));
        $('.js-open-menu').css({'display' : 'none'});
        if($('.js-toggle-menu').hasClass('active')){
            $('.js-open-menu').css({'display' : 'block'});
            $('.js-toggle-menu').on('click', function(){
                $(this).toggleClass('active');
                $('body').find('.js-open-menu').toggle();
            });
        }
        //----------------------Карточка товара
        $('.js-card_name--').insertAfter($('.header .breadcrumbs'));
        $(window).resize(function () {
            var width = $('body').innerWidth();
            if (width > 1000) {
                $('.js-top-menu--').prependTo($('.js-header-wrap--'));
                $('.js-number-basket--').insertAfter($('.js-header-wrap-group-- .group-info_2'));
                $('.js-socials--').appendTo($('.js-footer-info--'));
                $('.js-footer-info--').prependTo($('.js-footer-el_3--'));
                $('.js-footer-img--').prependTo($('.js-footer-el_4--'));
                $('.js-info-block_2--').insertAfter($('.info-block_2__group .group'));
                $('.js-open-search').css({'display' : 'block'});
            }else if(width < 600){
                $('.js-top-menu--').prependTo($('.js-header--'));
                $('.js-number-basket--').appendTo($('.js-header-wrap--'));
                $('.js-socials--').appendTo($('.js-footer-el--'));
                $('.js-footer-info--').prependTo($('.js-footer-el_2--'));
                $('.js-footer-img--').appendTo($('.bottom-menu__group'));
                $('.js-info-block_2--').insertAfter($('.group .info-block_2__name'));
                //----------------------Карточка товара
                $('.js-card_name--').insertAfter($('.header .breadcrumbs'));
                $('.js-info_block_4--').insertAfter($('.gallery'));
                $('.js-time_block--').insertAfter($('.order-info .js-order_info_1--'));
                $('.js-filter_3--').appendTo($('.filter_2'));
                $('.js-order_info--').prependTo($('.js-info_block_4--'));
                $('.js-open-search').css({'display' : 'none'});
                if($('.js-toggle-search').hasClass('active')){
                    $('.js-open-search').css({'display' : 'block'});
                }
                $('.js-toggle-menu').on('click', function(){
                $(this).toggleClass('active');
                $('body').find('.js-open-menu').toggle();
                });
                $('.js-main-menu--').prependTo($('.js-header--'));
                $('.js-top-menu--').appendTo($('.js-header--'));
                $('.js-logo--').appendTo($('.js-main-menu--'));
                $('.js-main-menu-wrap--').insertAfter($('.js-header-- .js-main-menu--'));
                $('.js-top-links--').insertAfter($('.js-main-menu-wrap-- .main-menu__wrap'));
                $('.js-number-basket--').insertAfter($('.js-header-- .js-main-menu-wrap--'));
                $('.js-hr--').insertAfter($('.js-header-- .js-number-basket--'));
                $('.js-header-wrap').insertAfter($('.js-header-- .js-hr--'));
                $('.js-open-search').insertAfter($('.js-header-- .js-header-wrap'));
                $('.js-footer-address--').insertAfter($('.js-footer-el-- .footer-logo'));
                $('.js-footer-el_2--').insertAfter($('.js-footer-el-- .js-footer-address--'));
                $('.js-footer-img--').insertAfter($('.js-footer-el-- .js-footer-el_2--'));
                $('.js-footer-info--').insertAfter($('.js-footer-el-- .js-footer-img--'));
                $('.js-socials--').insertAfter($('.js-footer-el-- .js-footer-img--'));
                $('.js-open-menu').css({'display' : 'none'});
            }
        });
    }else{
        $('.js-top-links--').appendTo($('.js-top-menu--'));
        $('.js-logo--').insertAfter($('.js-header-wrap .header__wrap__img'));
        $('.js-number-basket--').insertAfter($('.js-header-wrap .group-info'));
        $('.js-main-menu--').insertAfter($('.js-header-- .js-header-wrap'));
        $('.js-main-menu-wrap--').prependTo($('.js-main-menu--'));
        $('.js-open-search').appendTo($('.js-main-menu--'));
        $('.js-top-menu--').prependTo($('.js-header--'));
        $('.js-footer-el_2--').insertAfter($('.footer__wrap .js-footer-el--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_2--'));
        $('.js-footer-address--').prependTo($('.js-footer-info--'));
        $('.js-footer-img--').appendTo($('.bottom-menu__group'));
        $('.js-socials--').appendTo($('.js-footer-el--'));
        $('.js-open-menu').css({'display' : 'block'});
    }
}
function changes(screen){
    if(screen.matches){
        //----------------------Главная
        $('.js-top-menu--').prependTo($('.js-header--'));
        $('.js-number-basket--').appendTo($('.js-header-wrap--'));
        $('.js-socials--').appendTo($('.js-footer-el--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_2--'));
        $('.js-footer-img--').appendTo($('.bottom-menu__group'));
        $('.js-info-block_2--').insertAfter($('.group .info-block_2__name'));
        //----------------------Карточка товара
        $('.js-card_name--').insertAfter($('.header .breadcrumbs'));
        $('.js-info_block_4--').insertAfter($('.gallery'));
        $('.js-time_block--').insertAfter($('.order-info .js-order_info_1--'));
        $('.js-filter_3--').appendTo($('.filter_2'));
        $('.js-order_info--').prependTo($('.js-info_block_4--'));
        $('.js-open-search').css({'display' : 'none'});
        if($('.js-toggle-search').hasClass('active')){
            $('.js-open-search').css({'display' : 'block'});
        }
    }else{
        //----------------------Главная
        $('.js-top-menu--').prependTo($('.js-header-wrap--'));
        $('.js-number-basket--').insertAfter($('.js-header-wrap-group-- .group-info_2'));
        $('.js-socials--').appendTo($('.js-footer-info--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_3--'));
        $('.js-footer-img--').prependTo($('.js-footer-el_4--'));
        $('.js-info-block_2--').insertAfter($('.info-block_2__group .group'));
        $('.js-open-search').css({'display' : 'block'});
        //----------------------Карточка товара
    }
}