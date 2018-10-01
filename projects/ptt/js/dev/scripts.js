//Всплывающая форма
$("[href='#popup']").click(function(event){
	event.preventDefault();
	var form = $(this).attr("href");
	showblock(form);
	fixscreen();
});

$("[href='#videopopup']").click(function(event){
	event.preventDefault();
	var form = $(this).attr("href");
	showblock(form);
	fixscreen();
});

//Закрытие всплывающей формы
$("#popup .close").click(function(){
	hideblock("#popup");
	unfixscreen();
});

//Закрытие всплывающей формы
$("#videopopup .close").click(function(){
	hideblock("#videopopup");
	unfixscreen();
});

$(".videoclose").click(function(){
   stopVideo();
});











// 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '360',
          width: '640',
          videoId: 'AVCCroN7vS0'
        });
      }



      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;

      function stopVideo() {
        player.stopVideo();
      }









//Перезагрузка страницы при переходе на мобильную версию и обратно
window.desktop;
window.newdesktop;

function checkpagewidth() {
    if ( $(window).width() > 1000 ) {
        desktop = true;
    } else { desktop = false; }

    $(window).resize(function(){
        if ( $(window).width() > 1000 ) { 
            newdesktop = true;
        } else { newdesktop = false; }
        
        if ( newdesktop != desktop ) {
            location.reload();
        }
    });
}

checkpagewidth();


function footercontrols() {
    $("footer .mid.first .bottom").click(function(){
        $.fn.pagepiling.moveSectionDown();
    });
    
    $("footer .mid.last .top").click(function(){
        $.fn.pagepiling.moveSectionUp();
    });
}





//Pagepiling
$(document).ready(function() {
    
    if($(window).width() > 1000) {

        $("footer, html, body").addClass("mobile");
        $("section").each(function(){
           $(this).outerHeight($(this).outerHeight()).addClass("mobile"); 
        });
            
            
            
            
            $(window).scroll(function(){
                var ssscrolltop = $(this).scrollTop();
                var sections = $("section");
                var winh = $(window).height();
                
                sections.each(function(){
                    var thisoffset = $(this).offset().top;
                    var thish = $(this).outerHeight();
                   if ( (ssscrolltop > thisoffset) && (ssscrolltop < thisoffset+thish) ) {
                       if ( $(this).attr("data-hidelogo") === "true" ) {
                             $("#logo").attr("class", "logo hidden");
                         }
                         else if ($(this).attr("data-darkblock") === "true") {
                             $("#logo").attr("class", "logo white");
                         }
                         else if ($(this).attr("data-whiteblock") === "true") {
                             $("#logo").attr("class", "logo purpletext");
                         }
                         else { $("#logo").attr("class", "logo"); }
                    
                   } 
                });
            })
            
} else {
    
    $("html")[0].click();
	if ($(window).width() > 1000) {
        window.maxindex = $("#pagepiling section").length;
		$('#pagepiling').pagepiling({
            verticalCentered: false,
            keyboardScrolling: true,
            onLeave: function(index, nextIndex, direction){
                if (nextIndex === 1 || nextIndex === maxindex) {
                    $("footer .mid").removeClass("active");
                } else {
                    $("footer .mid").addClass("active");
                }
                
                if (nextIndex === 1) {
                    $("section.firstscreen video")[0].play();
                    $("footer .mid").addClass("first");
                } else {
                    $("section.firstscreen video")[0].pause();
                    $("footer .mid").removeClass("first");
                }
                
                if (nextIndex === maxindex) {
                    $("footer .mid").addClass("last");
                    $("footer").addClass("lastslide");
                } else {
                    $("footer .mid").removeClass("last");
                    $("footer").removeClass("lastslide");
                }
                
                $("#currentpage").text(nextIndex);
                $("#pagename").html( $("#pagepiling section:nth-of-type("+nextIndex+")").attr("data-name") );
                
                if ( $("#pagepiling section:nth-of-type("+nextIndex+")").attr("data-hidelogo") === "true" ) {
                    $("#logo").attr("class", "logo hidden");
                }
                else if ($("#pagepiling section:nth-of-type("+nextIndex+")").attr("data-darkblock") === "true") {
                    $("#logo").attr("class", "logo white");
                }
                else if ($("#pagepiling section:nth-of-type("+nextIndex+")").attr("data-whiteblock") === "true") {
                    $("#logo").attr("class", "logo purpletext");
                }
                else { $("#logo").attr("class", "logo"); }
                    
            }
        });
        setTimeout(function(){$.fn.pagepiling.moveSectionDown(); $.fn.pagepiling.moveSectionUp();
                             $("footer:not(.lastslide)").click(function(){
                    $.fn.pagepiling.moveSectionDown();
                });
                             }, 0);
	}
    
}
});


//Ширина скрытого текста в секции услуг
function servicestext() {
    if (($(window).width() > 1400) && ($(window).height() > 760)) {
		var wwidth = $(window).width();
		$("section.services .hidden p").width(wwidth*0.6-($(this).parents(".service").innerWidth() - $(this).parents(".service").width())+"px");
	} else {
        var wwidth = $(window).width();
		$("section.services .hidden p").width(wwidth*0.55-($(this).parents(".service").innerWidth() - $(this).parents(".service").width())+"px");
    }
    
    if ($(window).width() <= 1000) {
		$("section.services .hidden p").width("auto");
	}
}

$(document).ready(function(){
	servicestext();
});

$(window).resize(function(){
	servicestext();
});



function servicesblocks() {
    $("section.services >div").each(function(){
       $(this).find(".service").css("min-height", $(this).find(".service").outerHeight()); 
    });
	$("section.services > div").hover(function(){
        var hiddenservice = $(this).find(".hidden p").outerHeight();
		$(this).find(".hidden").height(hiddenservice+"px");
        $(this).find("video").get(0).play();
	}, function(){
		$(this).find(".hidden").height(0);
        $(this).find("video").get(0).pause();
	});
}










$("#showmoreinfoabout").click(function(){
    $(this).parent().find(".hidden").slideToggle();
    $(this).parent().find(".hiddentext").removeClass("hiddentext");
    $(this).slideToggle();
});





//Высота скрытого текста в секции услуг
$(document).ready(function(){
	if ($(window).width() > 1000) {
		servicesblocks();
        
        // SCROLLBAR
    $(".scrollableblock").mCustomScrollbar();
	} else {
        $("section.services >div h3").click(function(){
            $(this).parent().parent().toggleClass("active"); 
            $(this).parent().find(".hidden").slideToggle();
            $(this).parent().parent().find(".bg").slideToggle();
        });
    }
});

$(window).resize(function(){
	if ($(window).width() > 1000) {
		servicesblocks();
	}
});



//Высота скрытого текста в секции производства
$(document).ready(function(){
	var hiddenprod = $("section.production .hidden ul").height();
	$("section.production .right .bottom").hover(function(){
		$(this).find(".hidden").height(hiddenprod+"px");
	}, function(){
		$(this).find(".hidden").height(0);
	});
});

$(window).resize(function(){
	var hiddenprod = $("section.production .hidden ul").height();
	$("section.production .right .bottom").hover(function(){
		$(this).find(".hidden").height(hiddenprod+"px");
	}, function(){
		$(this).find(".hidden").height(0);
	});
});




$(window).resize(function(){
	if ($(window).width() > 1000) {
		$("section.services > div").removeClass("active");
	}
});

//Открытие блоков в секции о компании
$(document).ready(function(){
	if ($(window).width() <= 1000) {
		var infoHeight = 0;
	
		for (var i=0; i<2; i++) {
			infoHeight += $("section.about ul.info li").eq(i).outerHeight(true);
		};
	
		$("section.about ul.info").height(infoHeight);
        
        $(window).scroll(function(){
            var scrolltop = $(window).scrollTop();
            var el = $("section.transhipment");
            var eltop = el.offset().top;
            var elh = el.outerHeight();
            
            if ((scrolltop > eltop-elh/2) && (scrolltop < eltop+elh/2)) {
                $(".adaptiveshowmap").addClass("active");
		    } else {
                $(".adaptiveshowmap").removeClass("active");
            }
        });
        
	}
});




$(".adaptiveshowmap").click(function(){
   $("section.transhipment .map").addClass("active"); 
});

$("section.transhipment .map .close").click(function(){
   $("section.transhipment .map").removeClass("active"); 
});





$(window).resize(function(){
	if ($(window).width() <= 1000) {
		var moreStatus = $("section.about .more").css("display");
		if (moreStatus != "none") {
			var infoHeight = 0;
	
			for (var i=0; i<2; i++) {
				infoHeight += $("section.about ul.info li").eq(i).outerHeight(true);
			};
	
			$("section.about ul.info").height(infoHeight);
		}
	}
});

$("section.about .more").click(function(){
	$("section.about ul.info").css("height", "auto");
	$(this).hide();
});



// Проверка формы на правильность введенных данных
$(".fake-button").click(function(){
    window.activeform = $(this).parents("form").attr("id");

    checkinputs();
    checkandsubmit();
});

//Проверка текстовых input'ов
function checkinputs() {
    // Проверка обычных полей на заполненность
    checkemptyinput();
	checkemptytextarea();
	if ($("p.infotext.error").hasClass("in")) {
		$("p.infotext.error").text("Заполните все поля");
	}
	if ($("p.infotext.error").hasClass("ta")) {
		$("p.infotext.error").text("Заполните все поля");
	}
	if (($("p.infotext.error").hasClass("in")) && ($("p.infotext.error").hasClass("ta"))) {
		$("p.infotext.error").addClass("large");
		$("p.infotext.error").text("Заполните все поля");
	} else {
		$("p.infotext.error").removeClass("large");
	}
}
//Проверка на ошибочные поля и отправка формы
function checkandsubmit() {
    window.formerrors = 0;
    $('#'+activeform).find("div.error").each(function(){
        formerrors += 1; 
    });
    if (formerrors === 0) {
        $('#'+activeform).submit();
    }
}

// Скрипт проверки на пустое значение
function checkemptyinput() {
    $('#'+activeform+' input[data-required]').each(function(){
        if (!$(this).val()) {
            $(this).parent().addClass("error");
			$('#'+activeform+' p.infotext.error').addClass("in");
        } else {
			$(this).parent().removeClass("error");
			$('#'+activeform+' p.infotext.error').removeClass("in");
		}
    });
}

function checkemptytextarea() {
	$('#'+activeform+' textarea[data-required]').each(function(){
        if (!$(this).val()) {
            $(this).parent().addClass("error");
			$('#'+activeform+' p.infotext.error').addClass("ta");
        } else {
			$(this).parent().removeClass("error");
			$('#'+activeform+' p.infotext.error').removeClass("ta");
		}
    });
}

// Убрать ошибку при изменении полей
$("#popup input, #popup textarea").on("keyup change", function(){
   $(this).parent().removeClass("error"); 
});



// Ввод данных в поле формы
$("#popup input, #popup textarea").focus(function(){
	$(this).parent().addClass("active");
});

$("#popup input, #popup textarea").on("blur change", function(){
   if ($(this).val() === "") {
       $(this).parent().removeClass('active');
   }
});



//Проигрывание видео в секции "Производство"
$(document).ready(function(){
  $("section.production .right .top").hover(
    function() {
      $(this).find("video").get(0).play();
    }, function() {
       $(this).find("video").get(0).pause();
        $(this).find("video").get(0);
    });
});





// Фиксировать экран для самописных модальных окон
function fixscreen() {
  window.scroll = $(window).scrollTop();
  $("body").css('top', -scroll + 'px').toggleClass('noscroll');
}

function unfixscreen() {
  $("body").css('top', "0").toggleClass('noscroll');
  $(window).scrollTop(scroll);
}





// Показ прелоадера при отправке формы
$(document).on({
  ajaxStart: function() { $(".preloader").addClass("active");},
  ajaxStop: function() { $(".preloader").removeClass("active");}
});




// Плавно скрыть/показать блок
function showblock(el) {
  setTimeout(function() {$(el).css("display", "block");}, 0);
  setTimeout(function() {$(el).css("opacity", "1").css("top", "0").css("transform", "scale(1)");}, 100);
}

function hideblock(el) {
  setTimeout(function() {$(el).css("opacity", "0").css("top", "50px").css("transform", "scale(0.9)");}, 0);
  setTimeout(function() {$(el).css("display", "none");}, 250);
}






// AJAX форма
$(document).ready(function() {
    $('form').ajaxForm(function() {
        // Успешная отправка формы
        $("form .fake-button").addClass("success");
    }); 
}); 


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".videocontainer").addClass("mobile");
}





// Маска для поля ввода телефона
$(document).ready(function(){
   $("input[name='tel']").inputmask("+7 (999) 999—9999", {showMaskOnHover: false});
});





// Кросс-браузерный Placeholder
function supports_input_placeholder() {var i = document.createElement('input'); return 'placeholder' in i;}

if (!supports_input_placeholder()) {
  var fields = document.getElementsByTagName('INPUT');
  for(var i=0; i < fields.length; i++) {
    if(fields[i].hasAttribute('placeholder')) {
      fields[i].defaultValue = fields[i].getAttribute('placeholder');
      fields[i].onfocus = function() { if(this.value == this.defaultValue) this.value = ''; }
      fields[i].onblur = function() { if(this.value == '') this.value = this.defaultValue; }
    }
  }
}








$(document).ready(function(){
	var location = $("section.transhipment .points p.active").attr("data-point");
	var material = $("section.transhipment .materials li.active").attr("data-material");
});


$("section.transhipment .points p").click(function(){
	$(this).siblings(".active").removeClass("active");
	$(this).addClass("active");
    
    $(this).parent().find("hr").removeClass("active");
    $(this).prev().addClass("active");
    $(this).next().addClass('active');
	
	$("section.transhipment table").removeClass("visible");
	
	var location = $(this).attr("data-point");
	var material = $(this).attr("data-material");
	
	$('section.transhipment .materials li.active').removeClass("active");
	$('section.transhipment .materials li[data-material='+material+']').addClass("active");
	
	$('section.transhipment table[data-point='+location+'][data-material='+material+']').addClass("visible");
});

$("section.transhipment .materials li").click(function(){
	$(this).siblings(".active").removeClass("active");
	$(this).addClass("active");
	
	$("section.transhipment table").removeClass("visible");
	
	var location = $("section.transhipment .points p.active").attr("data-point");
	var material = $(this).attr("data-material");
	
	$("section.transhipment .points p").attr("data-material", material);
	
	$('section.transhipment table[data-point='+location+'][data-material='+material+']').addClass("visible");
});


// loop video
$('video[loop]').on('ended', function () {
  this.load();
  this.play();
});