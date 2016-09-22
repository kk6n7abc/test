// JavaScript Document

// UA判定
var ua = {};
ua.name = window.navigator.userAgent.toLowerCase();
 
ua.isiPhone = ua.name.indexOf('iphone') >= 0;
ua.isiPod = ua.name.indexOf('ipod') >= 0;
ua.isiPad = ua.name.indexOf('ipad') >= 0;
ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
ua.isAndroid = ua.name.indexOf('android') >= 0;
ua.isSP = (ua.isiOS || ua.isiPad || ua.isAndroid );
 
// PCページトップスクロール
 function pcscroll(){
  $(window).on("scroll", function() {
      var scrollHeight = $(document).height(),
          scrollPosition = $(window).height() + $(window).scrollTop(),
          scrollTop = $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        $('.page-top').css('bottom','75px');
      }else{
        $('.page-top').css('bottom','25px');
      }
      if(scrollTop > 300){
        $('.page-top').fadeIn('slow');
      }else{
        $('.page-top').fadeOut('slow');
      }
    });
}

// SPページトップスクロール
function spscroll(){
  $(window).on("scroll", function() {
    var scrollHeight = $(document).height(),
        scrollPos = $(window).height() + $(window).scrollTop(),
        scrollPosition = (scrollHeight - scrollPos) / scrollHeight *100,
        scrollTop = $(window).scrollTop();
    if($('body').hasClass('top')){
      if (scrollPosition <= 5) {
        $('.page-top').fadeOut('slow');
      }else if(scrollTop > 300){
        $('.page-top').fadeIn('slow');
      }else{
        $('.page-top').fadeOut('slow');
      }
    }else{
      if (scrollPosition <= 2) {
        $('.page-top').css('bottom','120px');
      }else{
        $('.page-top').css('bottom','25px');
      }
      if(scrollTop > 300){
        $('.page-top').fadeIn('slow');
      }else{
        $('.page-top').fadeOut('slow');
      }
    }
  });
}

//リンクホバー
function linkhover(){
  $('.m-over').on({
    'mouseenter':function(){
      $(this).animate({opacity: 0.6}, 0);
    },
    'mouseleave':function(){
      $(this).animate({opacity: 1}, 0);
    }
  });
}

//SP,PC画像切り替え
function imgchange(){
  $('.rep-img').each(function(){
    var $this = $(this)
    $(this).on({
      'mouseenter':function(){
        $this.attr('src',$this.attr('src').replace('_off','_on'));
      },
      'mouseleave':function(){
        $this.attr('src',$this.attr('src').replace('_on','_off'));
      }
    });
  });
}

// hoverテキスト色変更
function txthover(){
  $('.over-text a').on({
    'mouseenter':function() {
      $(this).find('.h-txt-change').css('color','#ee3c6e');
    },
    'mouseleave':function() {
      $(this).find('.h-txt-change').css('color','#000');
    }
  });
}

// サムネイルホバー
function Thumbhover(){
  $('.m-over-img').on({
      'mouseenter':function(){
        $(this).find('img').css('opacity','0.6'); 
      },
      'mouseleave':function(){
        $(this).find('img').css('opacity','1');
      }
    });
}

$(function(){
  if (ua.isSP) {
    /*--SP--*/
  spscroll();
  }else{
    /*--PC--*/
  pcscroll();
  linkhover();
  imgchange();
  txthover();
  Thumbhover();
  }//PCend

  // スムーススクロール
  $('a').click(function() {
      var speed = 600; // ミリ秒
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
  });

  /*高さぞろえ*/
  $(window).on('load',function(){
    $(".tsubo>ul.tsubo-box>li").heightLine();
  });

  /*PC,SP画像出し分け*/
  $('.img-change').each(function(){
      var wid = window.matchMedia('(max-width: 768px)').matches;
      var $this =$(this).find('img');
      if( wid === true ){
        $this.attr('src', $this.attr('src').replace('_pc','_sp'));
      }
      $(window).resize(function() {
        var wid = window.matchMedia('(max-width: 768px)').matches;
        if( wid === true ){
        $this.attr('src', $this.attr('src').replace('_pc','_sp'));
       }else{
        $this.attr('src', $this.attr('src').replace('_sp','_pc'));
       }
      });
      $(window).on('orientationchange',function(){
        var wid = window.matchMedia('(max-width: 768px)').matches;
        if( wid === true ){
        $this.attr('src', $this.attr('src').replace('_pc','_sp'));
       }else{
        $this.attr('src', $this.attr('src').replace('_sp','_pc'));
       }
      });
  });
   //menu
    $(".menu-btn").on('click',function(){
      $(".menu-area-sp").slideToggle("nomal");
      $(this).find("img").toggle();
    });
});











