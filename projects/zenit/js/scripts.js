//Добавление класса trigger заголовкам и скрытие блоков в мобильной версии
$(document).ready(function(){
    window.currentwidth = $(window).width();
	if ( $(window).width() < 720 ) {
		$("section:not(.calc) h2").addClass("trigger");
		$("section:not(.calc) h2").removeClass("active");
		$("section:not(.calc) h2+div.hidden-outer").height(0);
		$("section:not(.calc) h2+div.hidden-outer").removeClass("active");
		
		$("h3").addClass("trigger");
		$("h3").removeClass("active");
		$("h3+div.hidden-outer").height(0);
		$("h3+div.hidden-outer").removeClass("active");
	} else {
		$("section:not(.calc) h2").removeClass("trigger");
		$("section:not(.calc) h2+div.hidden-outer").height("auto");
		$("section:not(.calc) h2+div.hidden-outer").addClass("active");
		
		$("h3").removeClass("trigger");
		$("h3+div.hidden-outer").height("auto");
		$("h3+div.hidden-outer").addClass("active");
	}
});

$(window).resize(function(){
    window.newwidth = $(window).width();
    
    if (currentwidth != newwidth) {
        if ( $(window).width() < 720 ) {
		$("h2").addClass("trigger");
		$("h2").removeClass("active");
		$("h2+div.hidden-outer").height(0);
		$("h2+div.hidden-outer").removeClass("active");
		
		$("h3").addClass("trigger");
		$("h3").removeClass("active");
		$("h3+div.hidden-outer").height(0);
		$("h3+div.hidden-outer").removeClass("active");
	} else {
		$("h2").removeClass("trigger");
		$("h2+div.hidden-outer").height("auto");
		$("h2+div.hidden-outer").addClass("active");
		
		$("h3").removeClass("trigger");
		$("h3+div.hidden-outer").height("auto");
		$("h3+div.hidden-outer").addClass("active");
	}
    }
    
});



//Фон в блоке Преимущества мобильной версии
$(document).ready(function(){
	$("section.advantages h2.trigger").click(function(){
		if ( !$("section.advantages h2").hasClass("active") ) {
			$("section.advantages .bg").addClass("active");
		} else {
			$("section.advantages .bg").removeClass("active");
		}
	});
})



// Кастомный селектбокс (jQuery UI)
$("#timeselect").selectmenu();



//Placeholder в мобильной версии в калькуляторе
$(document).ready(function(){
	if ( $(window).width() < 720 ){
		$("#payment input").attr("placeholder", "Ввести сумму, руб.");
	}
	
	$(window).resize(function(){
		if ( $(window).width() < 720 ){
			$("#payment input").attr("placeholder", "Ввести сумму, руб.");
		} else {
			$("#payment input").attr("placeholder", "Ввести сумму");
		}
	})
});



// Раскрывающийся/скрывающийся блок
$(document).ready(function(){
	$(".trigger").click(function(){
		$(this).toggleClass("active");
		$(this).next(".hidden-outer").toggleClass("active");
	
		var hiddenheight = $(this).next(".hidden-outer").find(".hidden-inner").outerHeight();
	
		if ($(this).next(".hidden-outer").hasClass("active")) {
			$(this).next(".hidden-outer").height(hiddenheight + "px");
		} else {
			$(this).next(".hidden-outer").height(0);
		}
	});
});

$(document).ready(function(){
	$("section.program .addinfo p.heading").click(function(){
		$(this).toggleClass("active");
		$("section.program .addinfo .hidden").slideToggle();
	})
})

$("section.program .addinfo .button").click(function(e){
	e.preventDefault();
	var hiddenheight = $("section.program .addinfo").offset().top;
	$(this).parents(".hidden").slideToggle();
	$(this).parents(".hidden").siblings("p.heading").removeClass("active");
	$('body, html').scrollTop(hiddenheight-50);
});









// Проверка формы
var a = commafy(100);

// Проверка формы на правильность введенных данных
$(".fake-button").click(function(){
    window.activeform = $(this).parents("form").attr("id");

    checkinputs();
    checkandsubmit();
});

// 1. Проверка селектов
// 2. Проверка текстовых input'ов
function checkinputs() {
    // Проверка обычных полей на заполненность
    checkempty();
    
    // Проверка поля email
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    if ( isEmail($('#'+activeform+' input[name="email"]').val()) === false) {
        $('#'+activeform+' input[name="email"]').addClass("error")
    } else {$('#'+activeform+' input[name="email"]').removeClass("error")}

    // Проверка номера телефона
    if ( $('#'+activeform+' input[name="tel"]').val().match(/\d/g).length < 11) {
        $('#'+activeform+' input[name="tel"]').addClass("error")
    } else {$('#'+activeform+' input[name="tel"]').removeClass("error")}
    
    // Проверка чекбокса
    if ( !$('#'+activeform+' input[type="checkbox"]').is(":checked") ) {
        $('#'+activeform+' input[type="checkbox"]+label').addClass("error")
    } else {$('#'+activeform+' input[type="checkbox"]+label').removeClass("error")}
}

// 3. Проверка на ошибочные поля и отправка формы
function checkandsubmit() {
    window.formerrors = 0;
    $('#'+activeform).find(".error").each(function(){
        formerrors += 1; 
    });
    if (formerrors === 0) {
        $('#'+activeform).submit();
    }
}

// Скрипт проверки на пустое значение
function checkempty() {
    $('#'+activeform+' [data-required]').each(function(){
        if (!$(this).val()) {
            $(this).addClass("error")
        } else {$(this).removeClass("error")}
    });
}





// Убрать ошибку при изменении input'а
$("form:not(#payment) input, form:not(#payment) textarea").on("keyup change", function(){
   $(this).removeClass("error").next("label").removeClass("error"); 
    window.activeform = $(this).parents("form").attr("id");
    var inputs = $('#'+activeform+' [data-required]').length;
    window.formerrors = -1;
    
    
    
    
    
    
    
    $('#'+activeform+' [data-required][name="name"]').each(function(){
        if (!$(this).val()) {
            formerrors += 1; 
        }
    });
    
    // Проверка поля email
    function isEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    if ( isEmail($('#'+activeform+' input[name="email"]').val()) === false) {
        formerrors += 1; 
    }

    // Проверка номера телефона
    if ( $('#'+activeform+' input[name="tel"]').val().match(/\d/g).length < 11) {
        formerrors += 1; 
    }
    
    // Проверка чекбокса
    if ( !$('#'+activeform+' input[type="checkbox"]').is(":checked") ) {
        formerrors += 1; 
    }
    
    
    
    console.log(formerrors);

    if (formerrors === 0) {
        $('#'+activeform+" .fake-button").addClass("ready");
    } else {
        $('#'+activeform+" .fake-button").removeClass("ready");
    }
});














// Скрипт, разделяющий числа по 3 цифры пробелами
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    if (str[1] && str[1].length >= 3) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}


// Калькулятор
window.credmin = 100; // Минимальное кол-во
window.credmax = 150000000000000; // Максимальное кол-во
window.creditrate = 0.145/12; // (1/12) процентной ставки
window.payment; // Ежемесячный платеж

$("section.calc input").change(function(){
    window.credamount = $(this).val();
    credamount = credamount.replace(/\s+/g, '');
    console.log(credamount);
	if (credamount < credmin) {credamount = credmin}
    else if (credamount > credmax) {credamount = credmax}
	$(this).val(commafy(credamount));
});

$("section.calc .dot").click(function(){
	$(this).parent().siblings(".active").removeClass("active");
	$(this).parent().addClass("active");
});

$("#calcbutton").click(function(e){
	e.preventDefault();
	window.paymonths;
	
	if ( $(window).width() < 720 ) {
		paymonths = $("section.calc #timeselect option:selected").attr("data-months");
	} else {
		paymonths = $("section.calc li.active").attr("data-months");
	}
	
	if ( $(window).width() < 720 ) {
		if ( $("section.calc input").val() && $("#timeselect option:selected").val() != "" ) {
			calculation();
		}
	} else {
		if ( $("section.calc input").val() ) {
			calculation();
		}
	}
});

function calculation() {
	payment = 1 + creditrate;
	payment = Math.pow(payment, paymonths);
	payment = payment - 1;
	payment = creditrate / payment;
	payment = creditrate + payment;
	payment = credamount * payment;
	payment = Math.floor(payment);
	$("#monthpayment").text(commafy(payment));
}



//Изменение стиля меню при прокрутке
$(document).ready(function(){
	
	if ($(window).scrollTop() > 50) {
		$('.menu').addClass("active");
	}
	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) 	{$('.menu').addClass("active");}
      	else {$('.menu').removeClass("active");}
		
		var programtop = $("#program").offset().top;
		var creditstop = $("#credits").offset().top;
		var calctop = $("#calc").offset().top;
		var advantop = $("#advantages").offset().top;
		var honorstop = $("#honors").offset().top;
		var contacttop = $("#contacts").offset().top;
		
		if ($(this).scrollTop() < programtop-50) {
			$('.menu a.active').removeClass("active");
		}
		if ($(this).scrollTop() > programtop-50) {
			$('.menu a.active').removeClass("active");
			$('.menu a[href="#program"]').addClass("active");
		}
		if ($(this).scrollTop() > creditstop-50) {
			$('.menu a.active').removeClass("active");
			$('.menu a[href="#credits"]').addClass("active");
		} 
		if ($(this).scrollTop() > calctop-50) {
			$('.menu a.active').removeClass("active");
			$('.menu a[href="#calc"]').addClass("active");
		} 
		if ($(this).scrollTop() > advantop-50) {
			$('.menu a.active').removeClass("active");
			$('.menu a[href="#advantages"]').addClass("active");
		}
		if ($(this).scrollTop() > honorstop-50) {
			$('.menu a.active').removeClass("active");
		}
		if ($(this).scrollTop() > contacttop-50) {
			$('.menu a.active').removeClass("active");
			$('.menu a[href="#contacts"]').addClass("active");
		}
	});
});



// Кнопка "Наверх"
$(document).ready(function(){
	var screenheight = $("section.offer").height();
	$(window).scroll(function(){
        var scrolltop =  $(this).scrollTop();
        
		if (scrolltop > screenheight) {$('.toup').addClass("active");}
      	else {$('.toup').removeClass("active");}
        
        if (scrolltop >= $(document).height() - $(window).height() - $("footer").outerHeight()) {
            $('.container.fixed').addClass("footered").css("bottom", $("footer").outerHeight() );
        } else {$('.container.fixed').removeClass("footered").css("bottom", 0);}
	});
});

$('.toup').click(function () {
	$('body, html').animate({scrollTop: 0}, 1200);
});



// Скрипт, разделяющий числа по 3 цифры пробелами
function commafy( num ) {
    var str = num.toString().split('.');
    if (str[0].length >= 3) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
    }
    if (str[1] && str[1].length >= 3) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
    }
    return str.join('.');
}



// Включение кнопки в попапе
$("#popup input:required").on("keyup change", function(){
	if ( $("#input1").val() && $("#input2").val().match(/\d/g).length > 10 && $("#check1").prop("checked") ) {
		$("#popup button").removeAttr("disabled");
	} else {
		$("#popup button").attr("disabled", "disabled");
	}
})


// Убираем фикс. первый экран по высоте для планшетов
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("section.offer").addClass("mobile");
}



// Меню мобильной версии
$(".menubutton").click(function(){
	$(this).toggleClass("active");
	$("nav.mobile").toggleClass("active");
    $("body").toggleClass("noscroll");
});



// Переход по ссылкам меню мобильной версии
$("nav.mobile a").click(function(){
	$("nav.mobile").removeClass("active");
	$(".menubutton").removeClass("active");
    $("body").removeClass("noscroll");
});



// Самописный слайдер
function customslider() {
	window.slideamount = $(".slider .slide").length;
    console.log(slideamount);
    window.currentslide = 1;
    window.newslide = 1;
	$(".slider .wrapper").css("width", slideamount*100+"%");
	$(".slider .slide").css("width", 100/slideamount+"%");
}

customslider();

$("section.honors .slider").on("swipeleft",function(){
   currentslide += 1;
   newslide = currentslide;
    if (currentslide > slideamount) {
        currentslide = 1;
        newslide = 1;
    } 
    $(".slider .dot.active").removeClass("active");
    console.log(currentslide+", "+newslide);
    $(".slider .wrapper").css("left", "-"+(100*(newslide-1))+"%");
    $(".slider .slide.active").removeClass("active");
    $('.slider .slide[data-slide='+newslide+']').addClass("active");
    $('.slider .dot[data-slide='+newslide+']').addClass("active");
});

$("section.honors .slider").on("swiperight",function(){
   currentslide -= 1;
   newslide = currentslide;
    $(".slider .dot.active").removeClass("active");
    if (currentslide < 1) {
        currentslide = slideamount;
        newslide = slideamount;
    } 
    console.log(currentslide+", "+newslide);
    $(".slider .wrapper").css("left", "-"+(100*(newslide-1))+"%");
    $(".slider .slide.active").removeClass("active");
    $('.slider .slide[data-slide='+newslide+']').addClass("active");
    $('.slider .dot[data-slide='+newslide+']').addClass("active");
});

//Переключение слайдов (точки)
$(".slider .dot").click(function(){
   $(".slider .dot.active").removeClass("active");
   newslide = $(this).attr("data-slide");
   currentslide = $(this).attr("data-slide");
    console.log(currentslide+", "+newslide);
   $(".slider .wrapper").css("left", "-"+(100*(newslide-1))+"%");
   $(".slider .slide.active").removeClass("active");
   $('.slider .slide[data-slide='+newslide+']').addClass("active");
   $('.slider .dot[data-slide='+newslide+']').addClass("active");
});



// Плавное появление блоков при скролле
window.sr = ScrollReveal();
var fooReveal = {delay: 100, distance: '40px', easing: 'cubic-bezier(0.3, 0.5, 0.1, 1)', scale: 1, mobile: false, duration: 1000};
sr.reveal('sr', fooReveal);



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
function hideblock(el) {
  setTimeout(function() {$(el).show();}, 700);
  setTimeout(function() {$(el).css("opacity", "1");}, 900);
}

function showblock(el) {
  setTimeout(function() {$(el).css("opacity", "0");}, 700);
  setTimeout(function() {$(el).show();}, 900);
}



// Ссылки навигации по странице (добавить класс nav к ссылке с #)
$("a.nav").click(function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1200);
});



// Всплывающие окна
$(".fancybox").fancybox({
    fitToView   : false,
    autoSize    : true,
    openEffect  : 'fade',
    closeEffect : 'fade',
    helpers : {
        overlay : {
            locked : false
        }
    }
});



// Всплывающая галерея картинок
$(".fancyimage").fancybox({
    fitToView   : true,
    autoSize    : true,
    openEffect  : 'fade',
    closeEffect : 'fade',
});



// AJAX форма
$(document).ready(function() {
    $('form').ajaxForm(function() {
        // Успешная отправка формы
        $.fancybox([{href : '#success', fitToView   : false, autoSize    : true, openEffect  : 'fade', closeEffect : 'fade',}]);
    }); 
}); 



// Переход названия поля в активное состояние
$("input, textarea").focus(function(){
   window.nowform = $(this).closest("form").attr("id");
   $(this).prev().addClass('active');
});

$("input, textarea, select").on("blur change", function(){
    window.nowform = $(this).closest("form").attr("id");
   if ($(this).val() === "") {
       $(this).prev().removeClass('active');
   }
});



// Маска для поля ввода телефона
$(document).ready(function(){
   $("input[name='tel']").inputmask("+7 (999) 999-99-99", {showMaskOnHover: false});
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