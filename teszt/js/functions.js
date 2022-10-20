
// var navbar = document.getElementById("nav-main");
// var navbarInner = document.getElementById("navbar_inner_wrapper");
// var sticky = navbar.offsetTop - 44;
// jQuery(function($){

// 	$(document).ready(function(){
		
// 		(function (root, factory) {
//             if (typeof define === 'function' && define.amd) {
//                 define(['exports'], factory);
//             } else if (typeof exports !== 'undefined') {
//                 factory(exports);
//             } else {
//                 factory((root.dragscroll = {}));
//             }
//         }(this, function (exports) {                
//             var _window = window;
//             var _document = document;
//             var mousemove = 'mousemove';
//             var mouseup = 'mouseup';
//             var mousedown = 'mousedown';
//             var EventListener = 'EventListener';
//             var addEventListener = 'add'+EventListener;
//             var removeEventListener = 'remove'+EventListener;
//             var newScrollX, newScrollY;
        
//             var dragged = [];
//             var reset = function(i, el) {
//                 for (i = 0; i < dragged.length;) {
//                     el = dragged[i++];
//                     el = el.container || el;
//                     el[removeEventListener](mousedown, el.md, 0);
//                     _window[removeEventListener](mouseup, el.mu, 0);
//                     _window[removeEventListener](mousemove, el.mm, 0);
//                 }
        
//                 dragged = [].slice.call(_document.getElementsByClassName('navbar'));
//                 for (i = 0; i < dragged.length;) {
//                     (function(el, lastClientX, lastClientY, pushed, scroller, cont){
//                         (cont = el.container || el)[addEventListener](
//                             mousedown,
//                             cont.md = function(e) {
//                                 if (!el.hasAttribute('nochilddrag') ||
//                                     _document.elementFromPoint(
//                                         e.pageX, e.pageY
//                                     ) == cont
//                                 ) {
//                                     pushed = 1;
//                                     lastClientX = e.clientX;
//                                     lastClientY = e.clientY;
        
//                                     e.preventDefault();
//                                 }
//                             }, 0
//                         );
        
//                         _window[addEventListener](
//                             mouseup, cont.mu = function() {pushed = 0;}, 0
//                         );
        
//                         _window[addEventListener](
//                             mousemove,
//                             cont.mm = function(e) {
//                                 if (pushed) {
//                                     (scroller = el.scroller||el).scrollLeft -=
//                                         newScrollX = (- lastClientX + (lastClientX=e.clientX));
//                                     scroller.scrollTop -=
//                                         newScrollY = (- lastClientY + (lastClientY=e.clientY));
//                                     if (el == _document.body) {
//                                         (scroller = _document.documentElement).scrollLeft -= newScrollX;
//                                         scroller.scrollTop -= newScrollY;
//                                     }
//                                 }
//                             }, 0
//                         );
//                      })(dragged[i++]);
//                 }
//             }
        
              
//             if (_document.readyState == 'complete') {
//                 reset();
//             } else {
//                 _window[addEventListener]('load', reset, 0);
//             }
        
//             exports.reset = reset;
        
//         }));
		    
//         $(window).scroll(function () {
//             stickyMenuFunction();
			
// 			let scrollTop = $(this).scrollTop();
// 			let navItemLength = $('#nav-main .navbar a.nav-item').length;
			
// 			$('#nav-main .navbar a.nav-item').each(function (index, el) {
// 				let divId = $(el).data('div-to-show');
// 				let divTopErtek = $("body").find("[data-realid='" + divId +"']").offset().top - 60;
// 				let divBottomErtek = divTopErtek + $("body").find("[data-realid='" + divId +"']").height() - 60;
// 				if ( divTopErtek <= scrollTop && scrollTop <= divBottomErtek && !$(this).hasClass('active_nav')){
// 					$(this).siblings('a.nav-item').removeClass('active_nav');
// 					$(this).addClass('active_nav');
// 					$(this).closest('.navbar').animate({
// 						scrollLeft: $('.active_nav').position().left - 4
// 					}, 500);
// 				}
// 			});
			
// 			if ( scrollTop <= $("body").find("[data-realid='aktualis']").offset().top - 60){
// 				$('#nav-main .navbar a.nav-item').removeClass('active_nav');
// 			}
			
// 			if ( scrollTop >= $("body").find("[data-realid='magenta']").offset().top + $("body").find("[data-realid='magenta']").height() ){
// 				$('#nav-main .navbar a.nav-item').removeClass('active_nav');
// 			}
			
//         });

//         $(window).resize(function () {
//             sticky = navbar.offsetTop - 44;
//         });
        
//         if (window.location.hash) {
//             var kategoria = window.location.hash.substr(1);
//             $('html,body').animate({
//                 scrollTop: $("body").find("div.[data-realid='" + kategoria +"']").offset().top - 59
//             }, 'slow');
//         }
// 	});
// });

// function menuToSection(hova){
//     jQuery(function($){
//         var kategoria = hova;
//         $('html,body').animate({
//             scrollTop: $("body").find("div[data-realid='" + kategoria +"']").offset().top
//         }, 'slow');
//     });
// }

// function stickyMenuFunction() {
// 	jQuery(function($){
// 		if (window.pageYOffset >= sticky) {
// 			navbarInner.classList.add("inwb_sticky");
// 		} else {
// 			navbarInner.classList.remove("inwb_sticky");
// 		}
//     });
// }

var navbar = document.getElementById("nav-main");
var navbarInner = document.getElementById("navbar_inner_wrapper");
var sticky = navbar.offsetTop;

$(window).scroll(function () {
	stickyMenuFunction();
	 let scrollTop = $(this).scrollTop();
	let navItemLength = $('#nav-main .navbar a.nav-item').length;


	$('#nav-main .navbar a.nav-item').each(function (index, el) {
		let divId = $(el).data('div-to-show');
		let divTopErtek = $("body").find("[data-realid='" + divId +"']").offset().top - 120;
		let divBottomErtek = divTopErtek + $("body").find("[data-realid='" + divId +"']").height() - 120;
		if ( divTopErtek <= scrollTop && scrollTop <= divBottomErtek && !$(this).hasClass('active_nav')){
			$(this).siblings('a.nav-item').removeClass('active_nav');
			$(this).addClass('active_nav');
			$(this).closest('.navbar').animate({
				scrollLeft: $('.active_nav').position().left - 4
			}, 500);
		}
		
		
	});

	if ( scrollTop <= $("body").find("[data-realid='home']").offset().top - 120){
		$('#nav-main .navbar a.nav-item').removeClass('active_nav');
	}
	
	if ( scrollTop >= $("body").find("[data-realid='elerhetoseg']").offset().top + $("body").find("[data-realid='elerhetoseg']").height() ){
		$('#nav-main .navbar a.nav-item').removeClass('active_nav');
	}
	
});
// sticky menu
function stickyMenuFunction() {
	jQuery(function($){
		if (window.pageYOffset >= sticky) {
			navbarInner.classList.add("inwb_sticky");
		} else {
			navbarInner.classList.remove("inwb_sticky");
		}
	});
}

// menutosection
function menuToSection(hova){
    jQuery(function($){
        var kategoria = hova;
        var hovascroll = $("body").find("[data-realid='" + kategoria +"']").offset().top -100;
		$('html,body').animate({
            scrollTop: hovascroll
        }, 'slow');
    });
}