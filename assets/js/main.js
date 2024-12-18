'use strict';

//ページ読み込みの処理
$(function() {
	$('.body').fadeIn(2000);
});

//ヘッダーの固定
var header_window = $(window),
    header_height = $('header').height(),
    _header = $('.header'),
    page_top,
    top_height;

header_window.scroll(function(){
  top_height = $('.hero-Block').height();
  page_top = $('#page_top');
  if(header_window.scrollTop() > top_height){
    _header.addClass('fixed');
    page_top.addClass('show');
  }
  else{
    _header.removeClass('fixed');
    page_top.removeClass('show');
  }
});

//ハンバーガーボタンの実装
$(function() {
  $('#toggle').on('click', function() {
    $('.bar_1, .bar_2, .bar_3').toggleClass('close');
    if($('.sp-Menu_inner').hasClass('sp-Menu_fadeIn')) {
      $('.sp-Menu_inner').removeClass('sp-Menu_fadeIn');
    }else {
      $('.sp-Menu_inner').addClass('sp-Menu_fadeIn');
    }
  });
  $('.sp-Menu_inner').on('click', function() {
    $('.sp-Menu_inner').removeClass('sp-Menu_fadeIn');
    $('.bar_1, .bar_2, .bar_3').toggleClass('close');
  });
});

//制作実績スクロール時の要素の表示
$(function(){
  $(window).scroll(function (){
    $(".work-Content_area").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $(this).addClass('work-Content_fadeIn');
      }
    });
  });
});

//レダーチャートスクロール時の要素の表示
$(function(){
  $(window).scroll(function (){
    $(".skill-Chart_area").each(function(){
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight){
        $('.frontChart').addClass('frontChart_fadeIn');
        $('.backChart').addClass('backChart_fadeIn');
        $('.devChart').addClass('devChart_fadeIn');
        $('.skill-Chart_text_inner').addClass('skill-Chart_text_inner_fadeIn');
      }
    });
  });
});

//制作実績モーダル表示
$(function() {
  $('.work-Content_area_0').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal0').show();
    $('#modal1, #modal2, #modal3, #modal4, #modal5').hide();
  });
  $('.work-Content_area_1').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal1').show();
    $('#modal0, #modal2, #modal3, #modal4, #modal5').hide();
  });
  $('.work-Content_area_2').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal2').show();
    $('#modal0, #modal1, #modal3, #modal4, #modal5').hide();
  });
  $('.work-Content_area_3').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal3').show();
    $('#modal0, #modal1, #modal2, #modal4, #modal5').hide();
  });
  $('.work-Content_area_4').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal4').show();
    $('#modal0, #modal1, #modal2, #modal3, #modal5').hide();
  });
  $('.work-Content_area_5').click(function() {
    $('.work-Modal_inner').addClass('work-Modal_fadeIn');
    $('#modal5').show();
    $('#modal0, #modal1, #modal2, #modal3, #modal4').hide();
  });
  $('.work-Modal_inner').click(function() {
    $(this).removeClass('work-Modal_fadeIn');
  });
});

//front-endのレダーチャート
var ctx = document.getElementById("frontChart");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["HTML/CSS", "React", "JQuery", "Vue", "WordPress"],
    datasets: [{
      label: "front-end",
      data: [4, 3, 3, 2, 4],
      backgroundColor: "rgba(255, 43, 118, 0.2)",  //グラフ背景色
      borderColor: "rgba(255, 43, 118, 0.6)",        //グラフボーダー色
      pointBackgroundColor: "rgba(255, 43, 118, 0.6)",
      borderWidth: 1.5,
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#fff"
        }
      }
    },
    scales: {
      r: {
        max: 5,        //グラフの最大値
        min: 0,        //グラフの最小値
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontSize: 189,
        grid: {
          color: '#888',
        },
        angleLines: {
          color: '#fff',
        },
        pointLabels: {
          font: {
            size: 13
          },
          color: '#fff'
        },
        ticks: {
          stepSize: 1,  //目盛間隔
          display: false
        }
      }
    },
  }
});

//back-endのレダーチャート
var ctx = document.getElementById("backChart");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["PHP", "Python", "Go", "MySQL", "Ruby"],
    datasets: [{
      label: "back-end",
      data: [3, 1, 1, 3, 1],
      backgroundColor: "rgba(37, 124, 255, 0.2)",   //グラフ背景色
      borderColor: "rgba(37, 124, 255, 0.6)",      //グラフボーダー色
      pointBackgroundColor: "rgba(37, 124, 255, 0.6)", 
      borderWidth: 1.5,
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#fff"
        }
      }
    },
    scales: {
      r: {
        max: 5,        //グラフの最大値
        min: 0,        //グラフの最小値
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontSize: 18,
        grid: {
          color: '#888',
        },
        angleLines: {
          color: '#fff',
        },
        pointLabels: {
          font: {
            size: 13
          },
          color: '#fff'
        },
        ticks: {
          stepSize: 1,  //目盛間隔
          display: false
        }
      }
    },
  }
});

//DevOpsのレダーチャート
var ctx = document.getElementById("devChart");
var myChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ["git/github", "vercel", "docker", "aws", "none"],
    datasets: [{
      label: "DevOps",
      data: [3, 2, 1, 1, 0],
      backgroundColor: "rgba(0, 255, 0, 0.2)",  //グラフ背景色
      borderColor: "rgba(0, 255, 0, 0.6)",        //グラフボーダー色
      pointBackgroundColor: "rgba(0, 255, 0, 0.6)", 
      borderWidth: 1.5,
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#fff"
        }
      }
    },
    scales: {
      r: {
        max: 5,        //グラフの最大値
        min: 0,        //グラフの最小値
        backgroundColor: 'rgba(255, 255, 255, 0)',
        fontSize: 18,
        grid: {
          color: '#888',
        },
        angleLines: {
          color: '#fff',
        },
        pointLabels: {
          font: {
            size: 13
          },
          color: '#fff'
        },
        ticks: {
          stepSize: 1,  //目盛間隔
          display: false
        }
      }
    },
  }
});