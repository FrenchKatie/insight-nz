$('document').ready(function(){

   $('.bla').click(function (event) {
     event.preventDefault();
   });
   $(".rotate").click(function () {
       $(this).toggleClass("down");
   });


});
