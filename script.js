$(function() {

  var fig = "close";
  $('.btn').click(function() {
    $('.profile-wrapper').toggle('slow');

    if(fig == 'close') {
      $(this).text('プロフィールを閉じる');
      fig = 'open';
    } else {
      $(this).text('プロフィールを見る↓');
      fig = 'close';
    }
  });


  $('.menu-icon').click(function() {
    $('.menu-nav-wrapper').slideToggle();
  });


  var shut = "close";
  $('.work-btn').click(function() {
    $('.other-works').slideToggle('slow');

    if(shut == 'close') {
      $(this).text('close');
      shut = 'open';
    }else {
      $(this).text('Read More');
      shut = 'close';
    }
  });
}); 

$(function(){
  $(window).scroll(function (){
    $(".sub-title, .text-ja, .work, .overall-picture").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('fadeIn');
      }
    });
  });
});
