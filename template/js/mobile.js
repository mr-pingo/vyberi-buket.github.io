document.addEventListener("DOMContentLoaded", function(){
    var screen = window.matchMedia('(max-width:999px)');
    var screen2 = window.matchMedia('(max-width:767px)');
    changes(screen);
    changes2(screen2);
    if(navigator.userAgent.search(/Edge/) == -1 ){
        screen.addListener(changes);
        screen2.addListener(changes2);
    }
});
if(navigator.userAgent.search(/Edge/) >-1 ){
    $(document).ready(function(){
        var screen = window.matchMedia('(max-width:999px)');
        screen.addListener(changes);
        var screen2 = window.matchMedia('(max-width:767px)');
        screen2.addListener(changes2);
    });
}
function changes(screen){
    if(screen.matches){
        //----------------------Главная
        $('.header').append('<div class="header-top"></div>');
        $('.header-top').prependTo('.header');
        $('.js-top-menu').prependTo('.header-top');
        $('.js-top-links--').appendTo('.header-top');
        $('.js-call-back').prependTo('.group-info_3');
        $('.js-number-basket--').appendTo($('.js-header-wrap--'));
        $('.js-open-search').css({'display' : 'none'});
        if($('.js-toggle-search').hasClass('active')){
            $('.js-open-search').css({'display' : 'block'});
        }
        $('.js-socials--').appendTo($('.js-footer-el--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_2--'));
        $('.js-footer-img--').appendTo($('.bottom-menu__group'));
        $('.js-info-block_2--').insertAfter($('.group .info-block_2__name'));
        //----------------------Карточка товара
        $('.js-card_name--').appendTo('.header');
        $('.content-footer').appendTo('.content__group-block');
        $(document).ready(function(){
            $('.js-select').each(function(){
                var text = $(this).parents('.js-form-select').find('.checkbox-label').text();
                $(this).ikSelect('enable');
                $(this).prepend('<option value="1" class="select-opt" selected disabled>'+text+'</option>');
                $(this).ikSelect('select', '1');  
                $(this).ikSelect('reset');
            });
        });
        $('.js-menu-button').parent().removeClass('active');
        $('.js-menu-button').parent().find('.main-menu__wrap__list__ul').removeClass('active');
    }else{
        //----------------------Главная
        $('.js-top-links--').prependTo('.js-header-wrap--');
        $('.js-top-menu').prependTo('.js-header-wrap--');
        $('.header-top').remove();
        $('.js-call-back').prependTo('.group-info_4__elements');
        $('.js-number-basket--').appendTo('.js-header-wrap-group--');
        $('.js-open-search').css({'display' : 'block'});
        $('.js-socials--').appendTo($('.js-footer-info--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_3--'));
        $('.js-footer-img--').prependTo($('.js-footer-el_4--'));
        $('.js-info-block_2--').insertAfter($('.info-block_2__group .group'));
        //----------------------Карточка товара
        $('.js-card_name--').prependTo('.js-info_block_4--');
        $('.content-footer').appendTo('.js-description');
        $(document).ready(function(){
            $('.js-select').ikSelect('disable');
            $('.select-opt').remove();
            $('.js-select').ikSelect('reset');
        });
        $('.js-menu-button').parent().removeClass('active');
        $('.js-menu-button').parent().find('.main-menu__wrap__list__ul').removeClass('active');
    }
}
function changes2(screen2){
    var laptop = window.matchMedia('(min-width:1000px)');
    if(screen2.matches){
        $('.js-toggle-menu').on('click', function(){
            $(this).toggleClass('active');
            $('body').find('.js-open-menu').toggle();
        });
        $('.js-main-menu--').prependTo($('.js-header--'));
        $('.js-top-menu--').appendTo($('.js-header--'));
        $('.js-logo--').appendTo($('.js-main-menu--'));
        $('.js-call-back').prependTo($('.group-info_3'));
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
        
        $('.js-menu-button').parent().removeClass('active');
        $('.js-menu-button').parent().find('.main-menu__wrap__list__ul').removeClass('active');
    }else if(laptop.matches){
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
        $('.js-top-menu--').prependTo($('.js-header-wrap--'));
        $('.js-number-basket--').insertAfter($('.js-header-wrap-group-- .group-info_2'));
        $('.js-socials--').appendTo($('.js-footer-info--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_3--'));
        $('.js-footer-img--').prependTo($('.js-footer-el_4--'));
        $('.js-info-block_2--').insertAfter($('.info-block_2__group .group'));
        $('.js-open-search').css({'display' : 'block'});
        $(document).ready(function(){
            $('.js-select').ikSelect('disable');
            $('.select-opt').remove();
            $('.js-select').ikSelect('reset');
        });
        
        $('.js-menu-button').parent().removeClass('active');
        $('.js-menu-button').parent().find('.main-menu__wrap__list__ul').removeClass('active');
    }else{
        $('.js-call-back').prependTo('.group-info_3');
        $('.js-number-basket--').appendTo($('.js-header-wrap--'));
        $('.js-open-search').css({'display' : 'none'});
        if($('.js-toggle-search').hasClass('active')){
            $('.js-open-search').css({'display' : 'block'});
        }
        $('.js-main-menu--').insertAfter($('.js-header-- .js-header-wrap'));
        $('.js-main-menu-wrap--').prependTo($('.js-main-menu--'));
        $('.js-open-search').appendTo($('.js-main-menu--'));
        $('.js-open-menu').css({'display' : 'block'});
        $('.js-top-links--').appendTo('.header-top');
        $('.js-top-menu--').prependTo($('.js-header--'));
        $('.js-footer-el_2--').insertAfter($('.footer__wrap .js-footer-el--'));
        $('.js-footer-info--').prependTo($('.js-footer-el_2--'));
        $('.js-footer-address--').prependTo($('.js-footer-info--'));
        $('.js-footer-img--').appendTo($('.bottom-menu__group'));
        $('.js-socials--').appendTo($('.js-footer-el--'));
        $('.js-open-menu').css({'display' : 'block'});
        
        $('.js-menu-button').parent().removeClass('active');
        $('.js-menu-button').parent().find('.main-menu__wrap__list__ul').removeClass('active');
    }
}