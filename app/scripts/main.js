"use strict";

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(".nav").find(".active-ng").removeClass("active-ng");
   $(this).parent().addClass("active");
   $(this).parent().addClass("active-ng");
});

var hash = location.hash;
if(hash!==""){
var a = $("a[href="+hash+"]");
$(".nav").find(".active").removeClass("active");
$(".nav").find(".active-ng").removeClass("active-ng");
a.parent().addClass("active");
a.parent().addClass("active-ng");
}
$('.nav a').on('click', function(){
   if($(".navbar-toggle").is(":visible")){
    $(".navbar-toggle").click();
   }
   });
