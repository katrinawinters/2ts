  $(document).ready(function() {
    $('div').click(function() {
        $('div').fadeOut('600');
        $('h1').slideRight('600'); 
    });
      //ideally i think it'd be cute if the writing slid off when you clicked to get to the next page?!
      
     //this is the bit i'm not finished 
      //quite fancy making the picture like fade a bit and havethe writing over the picture, or just a simple pop up box slide up like a toggle function or something? but i can't make it work=/
      $('#zoo').click(function() {
       $('#zoo').addClass('.zooMatch');
         });

});
  
