function click(){$(".news-slider-next").click()}window.onload=function(){$(".news-slider-next").click()},setInterval(click,1e4);var bg=document.querySelector(".item-bg"),items=document.querySelectorAll(".news__item"),item=document.querySelector(".news__item");function cLog(e){console.log(e)}$(window).width()>800&&$(document).on("mouseover",".news__item",function(e,t){document.querySelectorAll(".news__item").forEach(function(e,t){e.addEventListener("mouseover",function(){var e=this.getBoundingClientRect().left;var t=this.getBoundingClientRect().width,i=this.getBoundingClientRect().height;$(".item-bg").addClass("active"),$(".news__item").removeClass("active"),bg.style.width=t+"px",bg.style.height=i+"px",bg.style.transform="translateX("+e+"px ) translateY(325px)"}),e.addEventListener("mouseleave",function(){$(".item-bg").removeClass("active"),$(".news__item").removeClass("active")})})});var swiper=new Swiper(".news-slider",{effect:"coverflow",grabCursor:!0,loop:!0,centeredSlides:!0,keyboard:!0,spaceBetween:0,slidesPerView:"auto",speed:300,coverflowEffect:{rotate:0,stretch:0,depth:0,modifier:3,slideShadows:!1},breakpoints:{480:{spaceBetween:0,centeredSlides:!0}},simulateTouch:!0,navigation:{nextEl:".news-slider-next",prevEl:".news-slider-prev"},pagination:{el:".news-slider__pagination",clickable:!0},on:{init:function(){var e=document.querySelector(".swiper-slide-active").querySelector(".news__item");$(".swiper-slide-active .news__item").addClass("active");var t=e.getBoundingClientRect().left,i=e.getBoundingClientRect().top,n=e.getBoundingClientRect().width,s=e.getBoundingClientRect().height;$(".item-bg").addClass("active"),bg.style.width=n+"px",bg.style.height=s+"px",bg.style.transform="translateX("+t+"px ) translateY("+i+"px)"}}});swiper.on("touchEnd",function(){$(".news__item").removeClass("active"),$(".swiper-slide-active .news__item").addClass("active")}),swiper.on("slideChange",function(){$(".news__item").removeClass("active")}),swiper.on("slideChangeTransitionEnd",function(){$(".news__item").removeClass("active");var e=document.querySelector(".swiper-slide-active").querySelector(".news__item");$(".swiper-slide-active .news__item").addClass("active");var t=e.getBoundingClientRect().left,i=0;i=$(window).width()>800?325:225;var n=e.getBoundingClientRect().width,s=e.getBoundingClientRect().height;$(".item-bg").addClass("active"),bg.style.width=n+"px",bg.style.height=s+"px",bg.style.transform="translateX("+t+"px ) translateY("+i+"px)"});