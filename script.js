"use strict";

//ヘッダー上部固定
var header_window = $(window),
header_height = $('header').height(),
    _header = $('.header'),
    top_height;

header_window.scroll(function(){
  top_height = $('.top-wrapper').height();
  if(header_window.scrollTop() > top_height){
    _header.addClass('fixed');
    header_height = $('#works').css('margin-top', header_height + 90);
  }
  else{
    _header.removeClass('fixed');
    header_height = $('#works').css('margin-top', header_height - 0);
  }
});

//メニューバーの処理
$(function () {
  $('#toggle').on('click', function() {
    $('#toggle').toggleClass('show');
    if($('.responsive-menu-wrapper').hasClass('slideL-fadein')) {
      $('.responsive-menu-wrapper').removeClass('slideL-fadein');
    }else {
      $('.responsive-menu-wrapper').addClass('slideL-fadein');
    }
  });
});


//worksのスクロールフェードイン処理
$(function(){
  $(window).scroll(function (){
    $(".works-contents-block, .section-title").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
});

//works コンテンツswiper
let mySwiper = new Swiper ('.swiper', {
  speed: 800,
  loop: true, 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});


////  スキルの回転アニメーションの実装  /////
$(function(){
  $(window).scroll(function (){
    $(".skill-block-area").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('skill-block-fadeIn');
      }
    });
  });
});


//トップ移動のマーク
$(function() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) { //80px以上スクロールしたら上部に固定
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });
});