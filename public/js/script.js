$(document).ready(function() {
   $('#item1').click(function() {
      $(".examplemodal").show();
      $(".exampleoverlay").show();

   });
   $('#item1').mouseleave(function() {
      $(".examplemodal").hide();
      $(".exampleoverlay").hide();
    });
 });


 $(document).ready(function() {
    $('#item2').click(function() {
       $(".examplemodal1").show();
       $(".exampleoverlay1").show();

    });
    $('#item2').mouseleave(function() {
       $(".examplemodal1").hide();
       $(".exampleoverlay1").hide();
     });
  });


  $(document).ready(function() {
     $('#item3').click(function() {
        $(".examplemodal2").show();
        $(".exampleoverlay2").show();

     });
     $('#item3').mouseleave(function() {
        $(".examplemodal2").hide();
        $(".exampleoverlay2").hide();
      });
   });
