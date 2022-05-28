$(document).ready(function(){
 $(".category").on('mouseover', function(){
   $('.clone-here').empty();
   $(this).find('.cat-content').clone().appendTo(".clone-here");
 });

 $(document).find('.clone-here').on('mouseover', 'a', function(){
     var match = this.rel;
     $(this).closest('.cat-links').siblings('.img-wrap').find('img').removeClass('active');
     $(this).closest('.cat-links').siblings('.img-wrap').find('.img-'+match).addClass('active');
 });

 $(document).on("mouseleave", ".drop", function(){
    /* $(".clone-here").empty();*/
 });
});