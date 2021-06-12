/***slick***
http://kenwheeler.github.io/slick/
    Copyright (c) 2017 Ken Wheeler
    Licensed under the MIT license.
    https://github.com/kenwheeler/slick/blob/master/LICENSE
*************/

$(function(){
//***slick設定***
    $slider = $('.slider');
    var total_minus = 2;
    
    function sliderSetting(){
        //ブラウザ幅分岐
        var width = $(window).width();
        if(width <= 767){ //指定幅以下のときのslickオプション＆イベント
            $slider.slick({
                accessibility: false,
                dots:true,
                appendDots:$('.dots'),
                prevArrow: '<div class="slide-arrow prev-arrow"><span></span></div>',
                nextArrow: '<div class="slide-arrow next-arrow"><span></span></div>',
                slidesToShow:1,
                slidesToScroll:1,
                touchThreshold: 10,
                lazyLoad: 'progressive',
                infinite:false,
                rtl:true,
            });
            $slider.slick('slickRemove',true); //一枚目削除
            total_minus = 1;
        } else { //指定幅以上のときのslickオプション＆イベント
            $slider.slick({
                dots:true,
                appendDots:$('.dots'),
                prevArrow: '<div class="slide-arrow prev-arrow"><span></span></div>',
                nextArrow: '<div class="slide-arrow next-arrow"><span></span></div>',
                slidesToShow:2,
                slidesToScroll:2,
                touchThreshold: 10,
                lazyLoad: 'progressive',
                infinite:false,
                rtl:true,
            });
        }
        //スライド枚数カウント用
        $slider.on('setPosition', function(event, slick) {
            $('.current').text(slick.currentSlide + 1);
            $('.total').text(slick.slideCount - total_minus + "P");
        })
        $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });
    }
 
    sliderSetting();
    
    $(window).resize( function() {
        sliderSetting();
    });

/***slick-custom***
https://guardian.bona.jp/st/cv/
Licensed under the MIT license.
Copyright (c) 2019 hatsu kyugen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*************/

//***キーボード操作***
    $(document).keydown(function(e) {
        if(e.keyCode === 39){//右　前のページ
            $slider.slick('slickPrev');
        }else if(e.keyCode === 37){//左　次のページ
            $slider.slick('slickNext');
        }else if(e.keyCode === 40){//下　メニュー表示
            $(".menu_show").slideToggle(300);
        }
    });


//***動作設定***
    //最初と最後の矢印のスタイルリセット(cssで非表示)
    $(".slide-arrow.slick-disabled").removeAttr("style");
    
    //最初から読むボタン
    $(".b_button").click(function(){
        $slider.slick('slickGoTo',0);
    });
    
    //操作ヘルプ表示非表示
    $(".p_button,.help").click(function(){
        $(".help").toggle(300);
    });
    
    //最初にガイド表示
    $(".guide:not(:animated)").fadeIn(function(){
        $(this).delay(5000).fadeOut("fast");
    });
    $(".guide").click(function(){
        $(this).stop().fadeOut("fast");
    });
    $(document).keydown(function(){
        $(".guide").stop().fadeOut("fast");
    });
    
//***全画面表示・非表示***
    //全画面表示振り分け
    Element.prototype.requestFullscreen = Element.prototype[(
        Element.prototype.requestFullscreen ||
        Element.prototype.msRequestFullscreen ||
        Element.prototype.webkitRequestFullScreen ||
        Element.prototype.mozRequestFullScreen ||
        {name:null}).name] || function(){};

    document.exitFullscreen = 
        document.exitFullscreen ||
        document.msExitFullscreen ||
        document.webkitExitFullscreen ||
        document.mozCancelFullScreen ||
        function(){};

    if(!document.fullscreenElement)
        Object.defineProperty(document, "fullscreenElement",{
            get : function(){
                return(
                    document.msFullscreenElement ||
                    document.webkitFullscreenElement ||
                    document.mozFullScreenElement || null);
            }
        });
    //表示非表示
    $(".g_button").click(function(){
        if(!document.fullscreenElement){
            $("body")[0].requestFullscreen();
            $(".g_button").val("全画面解除");
        }else{
            if(document.exitFullscreen){
                document.exitFullscreen();
                $(".g_button").val("全画面表示");
            }
        }
    });
    
//***端末別処理***
	var agent = navigator.userAgent;
	if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1){
        //*スマホ・タブレット時*
        //指定クラスの要素非表示
        $(".sp_none").hide();
		//矢印ホバー処理
        $(".slide-arrow").on('touchstart',function(){
            $(this).addClass('hover');
        }).on('touchend',function(){
                $(this).removeClass('hover');
        });
        //menu表示非表示
        $('.menu_box').after('<div class="menu_sizeup"></div>');
        $(".menu_sizeup").on('touchstart',function(){
            $(".menu_show").slideToggle(300);
        }); 
        $(".menu_button.close").on('touchstart',function(){
            $(".menu_show").slideUp(300);
        });     
        $slider.on('touchstart',function(){
            if($(".menu_show").is(":visible")){
                $(".menu_show").slideUp(300);
            }
        });
	}else{
        //*PC時*
        //矢印ホバー処理
        $(".slide-arrow").on('mouseenter',function(){
            $(this).addClass('hover');
        }).on('mouseleave',function(){
                $(this).removeClass('hover');
        });
        //menu表示非表示
        $(".menu_button").on('mouseenter',function(){
            $(".menu_show").slideDown(300);
        });
        $(".menu_button.close").click(function(){
            $(".menu_show").slideUp(300);
        });
        $slider.on('mouseenter',function(){
            $(".menu_show").slideUp(300);
        });
    }
});