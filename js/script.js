$('document').ready(function(){

   $('.nav-item').click(function (event) {
     event.preventDefault();
   });
   $(".rotate").click(function () {
       $(this).toggleClass("down");
   });
});
